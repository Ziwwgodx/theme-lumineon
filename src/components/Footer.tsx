import React from 'react';
import { useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import LegalPages from './LegalPages';

const Footer = () => {
  const [legalPage, setLegalPage] = useState<{ isOpen: boolean; page: 'mentions' | 'cgv' | 'confidentialite' | null }>({
    isOpen: false,
    page: null
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalPage = (page: 'mentions' | 'cgv' | 'confidentialite') => {
    setLegalPage({ isOpen: true, page });
  };

  const closeLegalPage = () => {
    setLegalPage({ isOpen: false, page: null });
  };
  return (
    <>
      <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold neon-text-cyan mb-4">LumiNéon</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              <strong>Fabricant français de néons LED personnalisés</strong> depuis plus de 10 ans. 
              Spécialiste des enseignes lumineuses sur mesure, nous transformons vos idées en 
              créations lumineuses exceptionnelles avec une <strong>garantie 2 ans</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                Fabrication Française
              </div>
              <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                LED Haute Qualité
              </div>
              <div className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm">
                Garantie 2 ans
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'À Propos', 'Galerie', 'Services', 'Suivi'].map((item, index) => {
                const ids = ['hero', 'about', 'gallery', 'services', 'order-tracking'];
                return (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(ids[index])?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-base"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-base">
              <li>+33 1 23 45 67 89</li>
              <li>contact@lumineon.fr</li>
              <li>123 Rue de la Lumière<br />75001 Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2024 LumiNéon. Créé avec</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>pour illuminer vos rêves.</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => openLegalPage('mentions')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Mentions Légales
            </button>
            <button 
              onClick={() => openLegalPage('cgv')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              CGV
            </button>
            <button 
              onClick={() => openLegalPage('confidentialite')}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Confidentialité
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500/50 rounded-lg text-gray-400 hover:text-cyan-400 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              Haut de page
            </button>
          </div>
        </div>
      </div>
      </footer>

      {/* Legal Pages Modal */}
      {legalPage.isOpen && legalPage.page && (
        <LegalPages
          isOpen={legalPage.isOpen}
          onClose={closeLegalPage}
          page={legalPage.page}
        />
      )}
    </>
  );
};

export default Footer;