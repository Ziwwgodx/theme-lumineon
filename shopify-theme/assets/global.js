/* Global JavaScript - Scripts globaux pour le thème */

// Variables globales
window.theme = window.theme || {};
window.theme.settings = {
  enableParticles: true,
  enableLightBeams: true,
  enableInteractiveCursor: true,
  enableParallax: true,
  animationSpeed: 1
};

// Utilitaires
window.theme.utils = {
  // Debounce function
  debounce: function(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  // Throttle function
  throttle: function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Smooth scroll to element
  scrollToElement: function(element, offset = 0) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },

  // Get viewport dimensions
  getViewport: function() {
    return {
      width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
  },

  // Check if element is in viewport
  isInViewport: function(element) {
    const rect = element.getBoundingClientRect();
    const viewport = this.getViewport();
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewport.height &&
      rect.right <= viewport.width
    );
  },

  // Format currency
  formatMoney: function(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    
    const value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || '${{amount}}';
    
    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';
      
      if (isNaN(number) || number === null) {
        return 0;
      }
      
      number = (number / 100.0).toFixed(precision);
      
      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const centsAmount = parts[1] ? (decimal + parts[1]) : '';
      
      return dollarsAmount + centsAmount;
    }
    
    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }
    
    return formatString.replace(placeholderRegex, value);
  }
};

// Performance monitoring
window.theme.performance = {
  init: function() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      this.measureCoreWebVitals();
    }
    
    // Monitor resource loading
    this.monitorResources();
    
    // Optimize for low-end devices
    this.optimizeForDevice();
  },

  measureCoreWebVitals: function() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('LCP:', entry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('FID:', entry.processingStart - entry.startTime);
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          console.log('CLS:', entry.value);
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });
  },

  monitorResources: function() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
      
      const resources = performance.getEntriesByType('resource');
      resources.forEach(resource => {
        if (resource.duration > 1000) {
          console.warn('Slow resource:', resource.name, resource.duration);
        }
      });
    });
  },

  optimizeForDevice: function() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const memory = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency;
    
    // Detect low-end device
    const isLowEnd = (
      (connection && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) ||
      (memory && memory < 4) ||
      (cores && cores < 4)
    );
    
    if (isLowEnd) {
      document.documentElement.classList.add('low-end-device');
      window.theme.settings.enableParticles = false;
      window.theme.settings.enableLightBeams = false;
      window.theme.settings.animationSpeed = 0.5;
    }
  }
};

// Accessibility helpers
window.theme.a11y = {
  init: function() {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
  },

  setupKeyboardNavigation: function() {
    // Escape key handling
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close any open modals/popups
        const openModals = document.querySelectorAll('.modal:not(.hidden), .popup:not(.hidden)');
        openModals.forEach(modal => {
          const closeBtn = modal.querySelector('[data-close]');
          if (closeBtn) closeBtn.click();
        });
      }
    });

    // Tab trapping for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('.modal:not(.hidden)');
        if (modal) {
          this.trapFocus(modal, e);
        }
      }
    });
  },

  trapFocus: function(element, event) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  },

  setupFocusManagement: function() {
    // Skip to content link
    const skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.focus();
          target.scrollIntoView();
        }
      });
    }

    // Focus visible indicators
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  },

  setupScreenReaderSupport: function() {
    // Announce dynamic content changes
    this.announcer = document.createElement('div');
    this.announcer.setAttribute('aria-live', 'polite');
    this.announcer.setAttribute('aria-atomic', 'true');
    this.announcer.className = 'sr-only';
    document.body.appendChild(this.announcer);
  },

  announce: function(message) {
    if (this.announcer) {
      this.announcer.textContent = message;
      setTimeout(() => {
        this.announcer.textContent = '';
      }, 1000);
    }
  }
};

// Cart functionality
window.theme.cart = {
  init: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-add-to-cart]')) {
        e.preventDefault();
        this.addToCart(e.target);
      }
    });

    // Quantity changes
    document.addEventListener('change', (e) => {
      if (e.target.matches('[data-quantity-input]')) {
        this.updateQuantity(e.target);
      }
    });
  },

  addToCart: function(button) {
    const form = button.closest('form');
    const formData = new FormData(form);
    
    button.disabled = true;
    button.textContent = 'Ajout en cours...';

    fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      this.updateCartCount();
      window.theme.a11y.announce('Produit ajouté au panier');
      button.textContent = 'Ajouté !';
      setTimeout(() => {
        button.textContent = 'Ajouter au panier';
        button.disabled = false;
      }, 2000);
    })
    .catch(error => {
      console.error('Error:', error);
      button.textContent = 'Erreur';
      button.disabled = false;
    });
  },

  updateQuantity: function(input) {
    const line = input.dataset.line;
    const quantity = parseInt(input.value);

    fetch('/cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line: line,
        quantity: quantity
      })
    })
    .then(response => response.json())
    .then(data => {
      this.updateCartCount();
      window.theme.a11y.announce('Quantité mise à jour');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },

  updateCartCount: function() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const countElements = document.querySelectorAll('[data-cart-count]');
        countElements.forEach(element => {
          element.textContent = cart.item_count;
        });
      });
  }
};

// Search functionality
window.theme.search = {
  init: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    const searchInputs = document.querySelectorAll('[data-search-input]');
    searchInputs.forEach(input => {
      input.addEventListener('input', window.theme.utils.debounce((e) => {
        this.performSearch(e.target.value);
      }, 300));
    });
  },

  performSearch: function(query) {
    if (query.length < 2) return;

    fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`)
      .then(response => response.json())
      .then(data => {
        this.displayResults(data.resources.results.products);
      })
      .catch(error => {
        console.error('Search error:', error);
      });
  },

  displayResults: function(products) {
    const resultsContainer = document.querySelector('[data-search-results]');
    if (!resultsContainer) return;

    if (products.length === 0) {
      resultsContainer.innerHTML = '<p>Aucun résultat trouvé</p>';
      return;
    }

    const resultsHTML = products.map(product => `
      <div class="search-result">
        <a href="${product.url}">
          <img src="${product.featured_image}" alt="${product.title}" loading="lazy">
          <div>
            <h3>${product.title}</h3>
            <p>${window.theme.utils.formatMoney(product.price)}</p>
          </div>
        </a>
      </div>
    `).join('');

    resultsContainer.innerHTML = resultsHTML;
  }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  window.theme.performance.init();
  window.theme.a11y.init();
  window.theme.cart.init();
  window.theme.search.init();
  
  // Initialize neon interactions if available
  if (typeof initializeNeonEffects === 'function') {
    initializeNeonEffects();
  }
  
  console.log('🌟 LumiNéon Theme Loaded Successfully');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.documentElement.classList.add('page-hidden');
  } else {
    // Resume animations when page becomes visible
    document.documentElement.classList.remove('page-hidden');
  }
});

// Handle online/offline status
window.addEventListener('online', function() {
  document.documentElement.classList.remove('offline');
  window.theme.a11y.announce('Connexion rétablie');
});

window.addEventListener('offline', function() {
  document.documentElement.classList.add('offline');
  window.theme.a11y.announce('Connexion perdue');
});

// Export for use in other scripts
window.theme.init = function() {
  console.log('Theme initialized');
};