/* Neon Interactions JavaScript - Interactions pour Shopify */

// Variables globales
let isDevisPopupOpen = false;
let currentLightboxIndex = 0;
let lightboxImages = [];

// Interface scaling variables
const DESKTOP_SCALE = 0.9; // 10% reduction
const MOBILE_SCALE = 0.8;   // 20% reduction

// Apply scaling on load
document.addEventListener('DOMContentLoaded', function() {
  applyInterfaceScaling();
  initializeNeonEffects();
  initializeParticleSystem();
  initializeLightBeams();
  initializeInteractiveElements();
  initializeScrollAnimations();
  initializeParallax();
  initializeLiveChat();
});

// Apply interface scaling
function applyInterfaceScaling() {
  const isMobile = window.innerWidth <= 767;
  const scale = isMobile ? MOBILE_SCALE : DESKTOP_SCALE;
  
  // Set CSS custom properties
  document.documentElement.style.setProperty('--scale-desktop', DESKTOP_SCALE);
  document.documentElement.style.setProperty('--scale-mobile', MOBILE_SCALE);
  
  // Apply to main containers
  const containers = document.querySelectorAll('.max-w-7xl, .max-w-5xl, .max-w-4xl');
  containers.forEach(container => {
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top center';
  });
}

// Reapply scaling on resize
window.addEventListener('resize', function() {
  applyInterfaceScaling();
});


// Système de particules
function initializeParticleSystem() {
  const canvas = document.createElement('canvas');
  canvas.className = 'fixed inset-0 pointer-events-none z-0';
  canvas.style.mixBlendMode = 'screen';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];
  const colors = ['#00f5ff', '#a855f7', '#ec4899', '#fbbf24', '#10b981'];
  let mouse = { x: 0, y: 0 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle(x, y) {
    return {
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 300 + 200
    };
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }
  }

  function updateParticles() {
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Attraction vers la souris
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100 * 0.01;
        particle.vx += dx * force * 0.01;
        particle.vy += dy * force * 0.01;
      }

      // Limites de l'écran
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Fade out en fin de vie
      if (particle.life > particle.maxLife * 0.8) {
        particle.opacity *= 0.98;
      }

      // Recréer les particules mortes
      if (particle.life > particle.maxLife || particle.opacity < 0.01) {
        particles[index] = createParticle();
      }
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = particle.color;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Connexions entre particules proches
    ctx.save();
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          ctx.globalAlpha = (80 - distance) / 80 * 0.1;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });
    ctx.restore();
  }

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Event listeners
  document.addEventListener('mousemove', (e) => {
    mouse = { x: e.clientX, y: e.clientY };
    
    // Créer des particules au passage de la souris
    if (Math.random() < 0.1) {
      particles.push(createParticle(e.clientX, e.clientY));
    }
  });

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  resizeCanvas();
  initParticles();
  animate();
}

// Rayons de lumière
function initializeLightBeams() {
  const container = document.createElement('div');
  container.className = 'fixed inset-0 pointer-events-none z-10 overflow-hidden';
  container.style.mixBlendMode = 'screen';
  document.body.appendChild(container);

  function createBeam() {
    const beam = document.createElement('div');
    beam.className = 'light-beam';
    
    const colors = ['cyan', 'purple', 'pink', 'yellow', 'green'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    beam.style.cssText = `
      position: absolute;
      width: 2px;
      height: 100vh;
      background: linear-gradient(to bottom, transparent, var(--${color}-400), transparent);
      opacity: 0;
      animation: lightBeamMove 8s linear infinite;
      top: 0;
      left: ${Math.random() * 100}%;
      filter: blur(1px);
      box-shadow: 0 0 20px var(--${color}-400);
    `;
    
    container.appendChild(beam);
    
    setTimeout(() => {
      if (container.contains(beam)) {
        container.removeChild(beam);
      }
    }, 8000);
  }

  setInterval(createBeam, 3000);
  
  // Créer quelques rayons initiaux
  for (let i = 0; i < 3; i++) {
    setTimeout(createBeam, i * 1000);
  }
}

// Éléments interactifs
function initializeInteractiveElements() {
  // Effet de suivi de curseur
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<div class="cursor-glow"></div>';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseenter', (e) => {
    if (e.target.matches('button, a, .interactive')) {
      cursor.classList.add('cursor-hover');
    }
  }, true);

  document.addEventListener('mouseleave', (e) => {
    if (e.target.matches('button, a, .interactive')) {
      cursor.classList.remove('cursor-hover');
    }
  }, true);

  // Effet de ripple sur les clics
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => {
      if (document.body.contains(ripple)) {
        document.body.removeChild(ripple);
      }
    }, 1000);
  });
}

// Animations de scroll
function initializeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('.section-transition').forEach((el) => {
    observer.observe(el);
  });
}

// Effet parallax
function initializeParallax() {
  document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    document.querySelectorAll('.parallax-container').forEach((element) => {
      const speed = parseFloat(element.dataset.speed) || 0.5;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (elementTop < scrolled + windowHeight && elementTop + elementHeight > scrolled) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  }, { passive: true });
}

// Chat en direct
function initializeLiveChat() {
  const chatHTML = `
    <div id="live-chat" class="fixed bottom-6 right-6 z-50">
      <button id="chat-toggle" class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-neon-cyan hover:scale-110 transition-all duration-300 animate-pulse-glow">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </button>
      
      <div id="chat-notification" class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
        1
      </div>

      <div id="chat-window" class="absolute bottom-20 right-0 w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl flex flex-col overflow-hidden hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 text-white">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <div class="font-semibold">Sophie - Expert Néon</div>
              <div class="text-xs opacity-80">🟢 En ligne - Répond en 2min</div>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3">
          <div class="flex justify-start">
            <div class="max-w-xs px-3 py-2 rounded-lg text-sm bg-gray-700 text-gray-100">
          <!-- Dimensions Field -->
          <div>
            <input type="text" name="dimensions" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Dimensions souhaitées en cm (ex: 50x20 cm)" />
          </div>

              <div>👋 Bonjour ! Je suis Sophie, votre experte néon. Comment puis-je vous aider ?</div>
              <div class="text-xs opacity-70 mt-1">${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
        </div>

        <!-- Quick Replies -->
        <div class="p-2 border-t border-gray-700">
          <div class="flex flex-wrap gap-1 mb-2">
            <button class="quick-reply text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white transition-colors duration-200" data-message="💰 Quel est le prix ?">
              💰 Quel est le prix ?
            </button>
            <button class="quick-reply text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white transition-colors duration-200" data-message="⏱️ Délai de fabrication ?">
              ⏱️ Délai de fabrication ?
            </button>
            <button class="quick-reply text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white transition-colors duration-200" data-message="🎨 Voir des exemples">
              🎨 Voir des exemples
            </button>
            <button class="quick-reply text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-white transition-colors duration-200" data-message="📞 Être rappelé">
              📞 Être rappelé
            </button>
          </div>
        </div>

        <!-- Input -->
        <div class="p-3 border-t border-gray-700">
          <div class="flex gap-2">
            <input id="chat-input" type="text" placeholder="Tapez votre message..." class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-cyan-400 focus:outline-none" />
            <button id="chat-send" class="px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white hover:scale-105 transition-transform duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // Chat functionality
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatNotification = document.getElementById('chat-notification');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const quickReplies = document.querySelectorAll('.quick-reply');

  let isChatOpen = false;

  chatToggle.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      chatWindow.classList.remove('hidden');
      chatNotification.style.display = 'none';
      chatToggle.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    } else {
      chatWindow.classList.add('hidden');
      chatToggle.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      `;
    }
  });

  function sendMessage(text) {
    if (!text.trim()) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'flex justify-end';
    userMessage.innerHTML = `
      <div class="max-w-xs px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
        <div>${text}</div>
        <div class="text-xs opacity-70 mt-1">${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    chatMessages.appendChild(userMessage);

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'flex justify-start';
    typingIndicator.innerHTML = `
      <div class="bg-gray-700 px-3 py-2 rounded-lg">
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Bot responses
    const botResponses = {
      "💰 Quel est le prix ?": "Les prix démarrent à 150€ pour un petit néon décoratif. Pour un devis précis, puis-je connaître vos dimensions souhaitées ?",
      "⏱️ Délai de fabrication ?": "7-12 jours de production + 2-3 jours de livraison. Pour un projet urgent, nous avons des options express !",
      "🎨 Voir des exemples": "Consultez notre galerie avec +500 créations ! Quel style vous intéresse : commercial, décoratif, événementiel ?",
      "📞 Être rappelé": "Parfait ! Laissez-moi votre numéro et nos experts vous rappellent sous 2h en journée."
    };

    setTimeout(() => {
      chatMessages.removeChild(typingIndicator);
      
      const botMessage = document.createElement('div');
      botMessage.className = 'flex justify-start';
      botMessage.innerHTML = `
        <div class="max-w-xs px-3 py-2 rounded-lg text-sm bg-gray-700 text-gray-100">
          <div>${botResponses[text] || "Merci pour votre message ! Un expert va vous répondre dans quelques instants. En attendant, souhaitez-vous un devis gratuit ?"}</div>
          <div class="text-xs opacity-70 mt-1">${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      `;
      chatMessages.appendChild(botMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', () => sendMessage(chatInput.value));
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage(chatInput.value);
  });

  quickReplies.forEach(btn => {
    btn.addEventListener('click', () => sendMessage(btn.dataset.message));
  });
}

// Popup de devis
function openDevisPopup() {
  if (isDevisPopupOpen) return;
  
  const popupHTML = `
    <div id="devis-popup" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div class="relative w-full max-w-lg mx-auto max-h-[95vh] overflow-y-auto">
        <!-- Neon Glow Effect Premium -->
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl animate-pulse"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl animate-pulse animation-delay-1000"></div>
        <div class="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl opacity-60 animate-pulse"></div>
        
        <div class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-cyan-400/50 overflow-hidden m-2 sm:m-0 shadow-2xl shadow-cyan-500/30">
          <!-- Animated Border -->
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
          <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse"></div>
          <div class="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
          <div class="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-cyan-400 animate-pulse"></div>

          <!-- Close Button -->
          <button onclick="closeDevisPopup()" class="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg z-10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Content -->
          <div class="relative">
            <!-- Header -->
            <div class="text-center mb-4 sm:mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mb-2">
                <span class="neon-text-gradient">Devis Gratuit</span>
              </h3>
              <div class="text-gray-300 text-sm sm:text-base px-2">
                Obtenez votre devis personnalisé + mockup 3D gratuit
              </div>
            </div>

            <!-- Benefits -->
            <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-3 mb-4 sm:mb-6">
              <div class="text-green-300 text-sm space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs">✅</span>
                  <span>Réponse garantie sous 24h</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs">✅</span>
                  <span>Mockup 3D gratuit inclus</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs">✅</span>
                  <span>Sans engagement</span>
                </div>
              </div>
            </div>

            <!-- Dimensions Field -->
            <div>
              <input type="text" name="dimensions" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Dimensions souhaitées en cm (ex: 50x20 cm)" />
            </div>
            <!-- Form -->
            <form id="devis-form" action="/contact" method="post" enctype="multipart/form-data" class="space-y-3 sm:space-y-4">
              <input type="hidden" name="form_type" value="contact">
              <input type="hidden" name="utf8" value="✓">
              <input type="hidden" name="contact[subject]" value="[LUMINEON] Nouvelle demande de devis néon personnalisé">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" name="name" required class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Votre nom *" />
                </div>
                <div>
                    name="contact[name]"
                  <input type="email" name="email" required class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Email *" />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-3 sm:gap-4">
                <div>
                  <input type="tel" name="phone" class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Téléphone" />
                </div>
                <div>
                  <select name="project" required class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm">
                    <option value="">Type de projet *</option>
                    <option value="enseigne">Enseigne commerciale</option>
                    name="contact[email]"
                  name="contact[dimensions]"
                    <option value="decoration">Décoration intérieure</option>
                    <option value="evenement">Événementiel</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>
              </div>

              <!-- Dimensions Field -->
                  name="contact[body]"
              <div>
                <input type="text" name="dimensions" class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm" placeholder="Dimensions souhaitées en cm (ex: 50x20 cm)" />
              </div>

              <div>
                <textarea name="message" required rows="3" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-sm" placeholder="Décrivez votre projet (dimensions, couleurs, budget...) *"></textarea>
              </div>

              <!-- Logo Upload Section -->
              <div>
                <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Logo de votre entreprise (optionnel)
                </label>
                <div class="relative">
                  <input 
                    type="file" 
                    name="contact[logo]"
                    name="logo" 
                    id="logo-upload"
                    name="contact[phone]"
                    accept="image/*,.pdf,.ai,.eps,.svg"
                    class="hidden"
                  />
                  <label 
                    for="logo-upload" 
                    class="neon-drag-zone flex items-center justify-center gap-2 sm:gap-3 w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 text-xs sm:text-sm border-gray-600 text-gray-400 bg-gray-700/50 hover:border-cyan-400 hover:text-cyan-400"
                    id="upload-label"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <span id="upload-text">Cliquez pour ajouter votre logo</span>
                  </label>
                  
                  <!-- File Preview -->
                  <div id="file-preview" class="hidden mt-2 p-2 sm:p-3 bg-gray-800/50 border border-gray-600 rounded-lg">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <div>
                          <div id="file-name" class="text-white text-xs sm:text-sm font-medium truncate max-w-[150px] sm:max-w-none"></div>
                          <div id="file-size" class="text-gray-400 text-xs"></div>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onclick="removeLogoFile()"
                        class="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <!-- Upload Help -->
                  <p class="text-xs text-gray-500 mt-1 sm:mt-2">
                    Formats acceptés : JPG, PNG, PDF, AI, EPS, SVG (max 10MB)
                  </p>
                </div>
              </div>
              
              <button type="submit" class="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan text-sm sm:text-base">
                    name="contact[project_type]"
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Obtenir Mon Devis Gratuit
              </button>

              <p class="text-xs text-gray-400 text-center px-2">
                * Champs obligatoires - Réponse sous 24h garantie
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', popupHTML);
  document.body.style.overflow = 'hidden';
  isDevisPopupOpen = true;

  // Initialize logo upload after popup is created
  initializeLogoUpload();

  // Form submission
  document.getElementById('devis-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get uploaded file
    const logoFile = document.getElementById('logo-upload').files[0];
    
    // Show success message
    const popup = document.getElementById('devis-popup');
    popup.querySelector('.relative > div').innerHTML = `
      <div class="text-center py-8">
        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold neon-text-green mb-2">
          Demande Envoyée !
        </h3>
        <p class="text-gray-300">
          Nous vous recontacterons sous 24h avec votre devis personnalisé.${logoFile ? '<br><small class="text-green-300">✅ Logo reçu et analysé : ' + logoFile.name + '</small>' : ''}
        </p>
      </div>
    `;

    setTimeout(() => {
      closeDevisPopup();
    }, 2000);
}

// Initialize logo upload functionality
function initializeLogoUpload() {
  const uploadLabel = document.getElementById('upload-label');
  const logoInput = document.getElementById('logo-upload');
  
  if (!uploadLabel || !logoInput) return;
  
  // File input change handler
  logoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      processLogoFile(file);
    }
  });
  
  // Drag and drop handlers
  uploadLabel.addEventListener('dragover', handleDragOver);
  uploadLabel.addEventListener('dragenter', handleDragEnter);
  uploadLabel.addEventListener('dragleave', handleDragLeave);
  uploadLabel.addEventListener('drop', handleDrop);
}

// Process uploaded logo file
function processLogoFile(file) {
  // Validate file size (10MB max)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('Fichier trop volumineux. Taille maximum : 10MB');
    return;
  }
  
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'application/pdf'];
  if (!allowedTypes.includes(file.type)) {
    alert('Format non supporté. Utilisez JPG, PNG, GIF, SVG ou PDF.');
    return;
  }
  
  // Update UI
  document.getElementById('file-name').textContent = file.name;
  document.getElementById('file-size').textContent = formatFileSize(file.size);
  document.getElementById('file-preview').classList.remove('hidden');
  document.getElementById('upload-text').textContent = 'Changer le fichier';
  document.getElementById('logo-status').classList.remove('hidden');
  
  // Apply neon effect
  const uploadLabel = document.getElementById('upload-label');
  uploadLabel.classList.add('neon-drag-zone', 'active');
  uploadLabel.style.borderColor = '#10b981';
  uploadLabel.style.color = '#10b981';
  uploadLabel.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
  uploadLabel.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.1), inset 0 0 20px rgba(16, 185, 129, 0.05)';
}

// Remove uploaded file
function removeLogoFile() {
  const input = document.getElementById('logo-upload');
  if (input) {
    input.value = '';
  }
  
  // Reset UI
  document.getElementById('file-preview').classList.add('hidden');
  document.getElementById('logo-status').classList.add('hidden');
  document.getElementById('upload-text').textContent = 'Glissez votre logo ici ou cliquez';
  
  // Reset upload label style
  const uploadLabel = document.getElementById('upload-label');
  if (uploadLabel) {
    uploadLabel.classList.remove('neon-drag-zone', 'active');
    uploadLabel.style.borderColor = '';
    uploadLabel.style.color = '';
    uploadLabel.style.backgroundColor = '';
    uploadLabel.style.boxShadow = '';
  }
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Drag and Drop Functions
function handleDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleDragEnter(e) {
  e.preventDefault();
  e.stopPropagation();
  const label = document.getElementById('upload-label');
  if (label) {
    label.style.borderColor = '#00f5ff';
    label.style.color = '#00f5ff';
    label.style.backgroundColor = 'rgba(0, 245, 255, 0.1)';
  }
}

function handleDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  if (!e.currentTarget.contains(e.relatedTarget)) {
    const label = document.getElementById('upload-label');
    if (label && !document.getElementById('logo-upload').files[0]) {
      label.style.borderColor = '';
      label.style.color = '';
      label.style.backgroundColor = '';
    }
  }
}

function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    // Set the file to the input
    const logoInput = document.getElementById('logo-upload');
    const dt = new DataTransfer();
    dt.items.add(file);
    logoInput.files = dt.files;
    
    processLogoFile(file);
  }
  
  // Reset drag styles
  const label = document.getElementById('upload-label');
  if (label && !document.getElementById('logo-upload').files[0]) {
    label.style.borderColor = '';
    label.style.color = '';
    label.style.backgroundColor = '';
  }
}
function closeDevisPopup() {
  const popup = document.getElementById('devis-popup');
  if (popup) {
    popup.remove();
    document.body.style.overflow = 'auto';
    isDevisPopupOpen = false;
  }
}

// Fonctions utilitaires
function scrollToSection(sectionId) {
  // If we're on the home page, scroll to section
  if (window.location.pathname === '/' || window.location.pathname === '') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If we're on another page, go to home page with hash
    window.location.href = '/#' + sectionId;
  }
}

function initializeNeonEffects() {
  // Ajouter les classes d'animation aux éléments
  document.querySelectorAll('.section-transition').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
}

// Optimisation des performances
function optimizePerformance() {
  // Détecter les appareils faibles performances
  const connection = navigator.connection;
  const memory = performance.memory;
  
  const isSlowConnection = connection && connection.effectiveType && 
    ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
  
  const isLowMemory = memory && memory.usedJSHeapSize > memory.totalJSHeapSize * 0.8;
  
  const isOldDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  if (isSlowConnection || isLowMemory || isOldDevice) {
    // Réduire les animations
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
    
    // Désactiver les particules
    const particles = document.querySelector('canvas');
    if (particles) {
      particles.style.display = 'none';
    }
    
    // Réduire les effets de blur
    document.querySelectorAll('[class*="blur"]').forEach(el => {
      el.style.filter = 'none';
    });
  }
}

// Initialiser l'optimisation des performances
optimizePerformance();

// Exposer les fonctions globalement pour Shopify
window.openDevisPopup = openDevisPopup;
window.closeDevisPopup = closeDevisPopup;
window.scrollToSection = scrollToSection;