import React, { useState, useEffect } from 'react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Pulsing Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-bounce">⏰</span>
            <span className="font-bold text-lg">OFFRE LIMITÉE</span>
            <div className="flex items-center gap-2 ml-4">
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">H</div>
              </div>
              <div className="text-xl">:</div>
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">M</div>
              </div>
              <div className="text-xl">:</div>
              <div className="text-center">
                <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">S</div>
              </div>
            </div>
          </div>
          
          {/* Offer Text */}
          <div className="flex items-center gap-3">
            <span className="text-lg">Mockup 3D Gratuit + Devis 24h</span>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openDevisPopup'))}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full font-bold transition-all duration-300 hover:scale-105 animate-pulse"
            >
              DEVIS GRATUIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;