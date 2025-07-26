import React, { useEffect, useState } from 'react';

const PerformanceOptimizer = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Détecter les appareils faibles performances
    const checkPerformance = () => {
      const connection = (navigator as any).connection;
      const memory = (performance as any).memory;
      
      const isSlowConnection = connection && connection.effectiveType && 
        ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
      
      const isLowMemory = memory && memory.usedJSHeapSize > memory.totalJSHeapSize * 0.8;
      
      const isOldDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      if (isSlowConnection || isLowMemory || isOldDevice) {
        setIsLowPerformance(true);
        optimizeForLowPerformance();
      }
    };

    const optimizeForLowPerformance = () => {
      // Réduire les animations
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      
      // Désactiver les particules
      const particles = document.querySelector('.particle-system');
      if (particles) {
        (particles as HTMLElement).style.display = 'none';
      }
      
      // Réduire les effets de blur
      const blurElements = document.querySelectorAll('[class*="blur"]');
      blurElements.forEach(el => {
        (el as HTMLElement).style.filter = 'none';
      });
      
      // Simplifier les dégradés
      const gradients = document.querySelectorAll('[class*="gradient"]');
      gradients.forEach(el => {
        (el as HTMLElement).style.background = '#1f2937';
      });
    };

    // Lazy loading des images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Préchargement intelligent
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/neon-wow.jpg',
        '/image.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    checkPerformance();
    lazyLoadImages();
    preloadCriticalResources();

    // Nettoyage mémoire périodique
    const cleanupInterval = setInterval(() => {
      if ((performance as any).memory) {
        const memoryInfo = (performance as any).memory;
        if (memoryInfo.usedJSHeapSize > memoryInfo.totalJSHeapSize * 0.9) {
          // Forcer le garbage collection si possible
          if ((window as any).gc) {
            (window as any).gc();
          }
        }
      }
    }, 30000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return null;
};

export default PerformanceOptimizer;