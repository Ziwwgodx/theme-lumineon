import React, { useState, useEffect } from 'react';

const NotificationBanner = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const notifications = [
    {
      text: "👤 Sophie M. vient de commander un néon \"OPEN\" - Paris (75001)",
      time: "Il y a 2 min"
    },
    {
      text: "🎨 Marc D. a demandé un devis pour son restaurant - Lyon (69000)",
      time: "Il y a 5 min"
    },
    {
      text: "✅ Installation terminée chez Café Central - Marseille (13000)",
      time: "Il y a 8 min"
    },
    {
      text: "🚚 Livraison en cours pour Bar Lounge - Toulouse (31000)",
      time: "Il y a 12 min"
    },
    {
      text: "💡 Emma L. utilise le customizer 3D en ce moment",
      time: "Il y a 1 min"
    },
    {
      text: "📞 Consultation téléphonique programmée - Bordeaux (33000)",
      time: "Il y a 15 min"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-y border-cyan-500/30 py-2 px-4 relative overflow-hidden">
      {/* Animated Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          
          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">🔴 LIVE</span>
          </div>
          
          {/* Notification Text */}
          <div 
            className={`text-white text-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {notifications[currentNotification].text}
          </div>
          
          {/* Time */}
          <div 
            className={`text-gray-400 text-xs transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {notifications[currentNotification].time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;