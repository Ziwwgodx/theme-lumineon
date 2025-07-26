import React from 'react';
import { TrendingUp } from 'lucide-react';

const ScarcityBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-y border-orange-500/30 py-3 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent animate-pulse"></div>
      
      {/* Pulsing Dots */}
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping animation-delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          
          {/* Stock Alert */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-300 font-bold text-lg">🔥 ATTENTION</span>
            </div>
            
            <div className="text-white">
              <span className="font-semibold">Plus que 3 créneaux disponibles cette semaine</span>
            </div>
          </div>
          
          {/* Demand Indicator */}
          <div className="flex items-center gap-2 text-yellow-300">
            <TrendingUp className="w-5 h-5 animate-bounce" />
            <span className="font-medium">📈 +40% de demandes ce mois</span>
          </div>
          
          {/* Action Button */}
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openDevisPopup'))}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 animate-pulse"
          >
            RÉSERVER MA PLACE
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ScarcityBanner;