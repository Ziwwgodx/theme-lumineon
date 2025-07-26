import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import SectionTransition from './SectionTransition';
import ParallaxContainer from './ParallaxContainer';

interface HeroProps {
  onOpenDevis: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDevis }) => {

  return (
    <SectionTransition>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
      <ParallaxContainer speed={0.3} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000 floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000 floating-element"></div>
      </ParallaxContainer>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight glitch-effect" itemProp="name">
            <span className="neon-text-gradient block mb-4">Illuminez</span>
            <span className="text-white block mb-4">Vos Rêves</span>
            <span className="neon-text-cyan block animate-pulse-glow">En Néon</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          🏆 <strong>Fabricant français de néons LED personnalisés haut de gamme</strong> depuis 10 ans. 
          <span className="text-cyan-400">Transformez vos idées</span> en enseignes lumineuses qui 
          <span className="text-yellow-400">illuminent votre succès</span>.
        </p>
        
        {/* Storytelling & Social Proof */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4 mb-8 max-w-2xl mx-auto">
          <p className="text-green-300 font-semibold mb-2">✨ <strong>500+ néons personnalisés</strong> ont déjà illuminé les projets de nos clients</p>
          <p className="text-sm text-gray-300">🎯 <strong>Fabrication française premium :</strong> Devis gratuit + Mockup 3D offert sous 24h</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => document.getElementById('customizer')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-yellow flex items-center gap-3 morph-button interactive"
          >
            <Zap className="w-5 h-5" />
            🎨 CRÉER MON NÉON
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={onOpenDevis}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan flex items-center gap-3 morph-button interactive"
          >
            🚀 DEVIS GRATUIT 24H
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-neon-cyan morph-button interactive"
          >
            📸 Voir +500 Créations
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold neon-text-cyan mb-2">500+</div>
            <div className="text-gray-400">Néons Créés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold neon-text-purple mb-2">98%</div>
            <div className="text-gray-400">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold neon-text-pink mb-2">24/7</div>
            <div className="text-gray-400">Support Client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold neon-text-yellow mb-2">2 ANS</div>
            <div className="text-gray-400">Garantie</div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      </section>
    </SectionTransition>
  );
};

export default Hero;