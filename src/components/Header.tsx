import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenDevis: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDevis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`} role="banner" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Premium */}
          <div className="flex items-center">
            <h1 
              className="text-3xl font-bold neon-title-premium cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('hero')}
              role="button"
              tabIndex={0}
              aria-label="Retour à l'accueil LumiNéon"
            >
              LumiNéon
            </h1>
          </div>

          {/* Desktop Navigation - Simplifié */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            <button
              onClick={() => scrollToSection('customizer')}
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group font-medium text-lg"
              aria-label="Aller au customizer néon 3D"
            >
              🎨 Customizer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              aria-label="Voir notre galerie de créations néon"
            >
              📸 Galerie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              aria-label="Découvrir nos services néon"
            >
              ⚙️ Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              aria-label="Lire les avis clients"
            >
              ⭐ Avis
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Premium - Toujours Visible */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDevis}
              className="group relative px-6 py-3 neon-button-premium rounded-full text-white font-bold text-sm lg:text-base transition-all duration-500 flex items-center gap-2 overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="hidden sm:inline">🎨 Créer Mon Néon</span>
                <span className="sm:hidden">🎨 Créer</span>
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors duration-300 p-2 relative"
              >
                <div className="relative">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Premium */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/50 mt-2 pb-4 bg-gray-900/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="py-6 space-y-4">
              {/* CTA Mobile en Premier */}
              <button
                onClick={() => {
                  onOpenDevis();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-yellow"
              >
                🎨 Créer Mon Néon
              </button>
              
              {/* Navigation Links */}
              {[
                { label: '🎨 Customizer', id: 'customizer' },
                { label: '📸 Galerie', id: 'gallery' },
                { label: '⚙️ Services', id: 'services' },
                { label: '⭐ Avis', id: 'testimonials' },
                { label: '📦 Suivi', id: 'order-tracking' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 font-medium text-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;