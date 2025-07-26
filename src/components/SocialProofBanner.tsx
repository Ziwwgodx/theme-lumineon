import React, { useState, useEffect } from 'react';

const SocialProofBanner = () => {
  const [clientCount, setClientCount] = useState(127);
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    "3 devis envoyés dans les 2 dernières heures",
    "2 néons commandés aujourd'hui",
    "1 installation terminée ce matin",
    "5 consultations en cours"
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
            <span className="font-semibold">🔥 <span className="text-yellow-300">{clientCount}</span> clients satisfaits ce mois</span>
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
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-medium">⭐ 4.8/5 - 127 avis Google</span>
          </div>
          
          {/* Guarantee */}
          <div className="flex items-center gap-2 text-purple-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span className="font-medium">🛡️ Garantie 2 ans + SAV 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;