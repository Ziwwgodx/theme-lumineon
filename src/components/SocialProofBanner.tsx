import React, { useState, useEffect } from 'react';

const SocialProofBanner = () => {
  const [clientCount, setClientCount] = useState(127);
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    "2 devis envoyés dans la dernière heure",
    "1 néon commandé aujourd'hui (Logo restaurant)",
    "1 livraison effectuée ce matin (Prénom chambre)",
    "3 consultations mockup 3D en cours"
  ];

  useEffect(() => {
    // Simulate live counter updates
    const counterInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        setClientCount(prev => prev + 1);
      }
    }, 5000);

    // Update activity text
    const activityInterval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % activities.length);
    }, 8000);

    return () => {
      clearInterval(counterInterval);
      clearInterval(activityInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-y border-green-500/30 py-4 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          
          {/* Live Counter */}
          <div className="flex items-center gap-2 text-green-300">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">🔥 <span className="text-yellow-300">{clientCount}</span> devis envoyés ce mois</span>
          </div>
          
          {/* Recent Activity */}
          <div className="flex items-center gap-2 text-blue-300">
            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span className="font-medium">⚡ {activities[currentActivity]}</span>
          </div>
          
          {/* Trust Indicator */}
          <div className="flex items-center gap-2 text-yellow-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">⏱️ Devis sous 24h garanti</span>
          </div>
          
          {/* Guarantee */}
          <div className="flex items-center gap-2 text-purple-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span className="font-medium">🛡️ Garantie 2 ans + SAV réactif</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;