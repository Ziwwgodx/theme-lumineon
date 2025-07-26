import React from 'react';
import { Star, Users, BarChart3 } from 'lucide-react';

const ExpertiseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-y border-indigo-500/30 py-4 px-4 relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-indigo-400/30 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 text-purple-400/30 animate-bounce animation-delay-2000">
          <Star className="w-6 h-6" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          
          {/* Experience */}
          <div className="flex items-center gap-2 text-indigo-300">
            <span className="text-xl">🎯</span>
            <span className="font-bold text-lg">10+ ANS</span>
            <span className="font-medium">d'expertise néon</span>
          </div>
          
          {/* Certifications */}
          <div className="flex items-center gap-2 text-purple-300">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">🏅 Artisans Certifiés</span>
          </div>
          
          {/* Made in France */}
          <div className="flex items-center gap-2 text-blue-300">
            <span className="text-xl">🇫🇷</span>
            <span className="font-semibold">Made in France</span>
          </div>
          
          {/* Projects Count */}
          <div className="flex items-center gap-2 text-green-300">
            <BarChart3 className="w-5 h-5 animate-pulse" />
            <span className="font-medium">📊 +500 projets réalisés</span>
          </div>
          
          {/* Team */}
          <div className="flex items-center gap-2 text-pink-300">
            <Users className="w-5 h-5" />
            <span className="font-medium">👥 Équipe de 12 experts</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ExpertiseBanner;