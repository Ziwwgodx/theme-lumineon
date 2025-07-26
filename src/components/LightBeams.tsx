import React, { useEffect, useRef } from 'react';

const LightBeams: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBeam = () => {
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
    };

    const interval = setInterval(createBeam, 3000);
    
    // Créer quelques rayons initiaux
    for (let i = 0; i < 3; i++) {
      setTimeout(createBeam, i * 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default LightBeams;