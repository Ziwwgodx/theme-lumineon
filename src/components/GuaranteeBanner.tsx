import React from 'react';
import { Shield, DollarSign, Award, Headphones } from 'lucide-react';

const GuaranteeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-y border-purple-500/30 py-4 px-4 relative overflow-hidden">
      {/* Animated Shield */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Shield className="w-8 h-8 text-purple-400 animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          
          {/* Main Guarantee */}
          <div className="flex items-center gap-3 text-purple-300">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="font-bold text-lg">GARANTIE 2 ANS</div>
              <div className="text-sm opacity-80">Pièces et main d'œuvre incluses</div>
            </div>
          </div>
          
          {/* Money Back */}
          <div className="flex items-center gap-2 text-green-300">
            <span className="text-xl">💰</span>
            <span className="font-semibold">Satisfait ou Remboursé 30 jours</span>
          </div>
          
          {/* Quality */}
          <div className="flex items-center gap-2 text-yellow-300">
            <span className="text-xl">🏆</span>
            <span className="font-medium">Qualité Premium Certifiée</span>
          </div>
          
          {/* Support */}
          <div className="flex items-center gap-2 text-cyan-300">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Support Expert 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBanner;