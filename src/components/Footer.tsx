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
              <strong>Créateur de néons LED personnalisés</strong> avec service client réactif. 
              Spécialiste des enseignes lumineuses sur mesure, nous vous accompagnons de A à Z 
              avec <strong>devis gratuit sous 24h</strong> et <strong>garantie 2 ans</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                Devis 24h
              </div>
              <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                Mockup 3D Gratuit
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
              <li>
                <a href="tel:+33123456789" className="hover:text-cyan-400 transition-colors">
                  📞 +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@lumineon.fr" className="hover:text-cyan-400 transition-colors">
                  📧 contact@lumineon.fr
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=17+Rue+des+Blés+d'Or,+78180+Montigny-le-Bretonneux" 
                  target="_blank"
                  className="hover:text-cyan-400 transition-colors"
                >
                  📍 17 Rue des Blés d'Or<br />78180 Montigny-le-Bretonneux, France
                </a>
              </li>
            </ul>
            
            {/* Google Business Link */}
            <div className="mt-4">
              <a 
                href="https://g.page/lumineon-neon" 
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:text-blue-200 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Voir notre fiche Google
              </a>
            </div>
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