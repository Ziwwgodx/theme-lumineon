import React, { useState, useEffect } from 'react';
import { X, Gift, Clock, Zap, Star, ArrowRight } from 'lucide-react';

const PremiumPopups = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showExitIntentPopup, setShowExitIntentPopup] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  // Welcome popup - shows after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenWelcome = localStorage.getItem('lumineon_welcome_seen');
      if (!hasSeenWelcome) {
        setShowWelcomePopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Exit intent popup
  useEffect(() => {
    let isExiting = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isExiting && !showWelcomePopup && !showPromoPopup) {
        isExiting = true;
        const hasSeenExit = localStorage.getItem('lumineon_exit_seen');
        if (!hasSeenExit) {
          setShowExitIntentPopup(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showWelcomePopup, showPromoPopup]);

  // Promo popup - shows after 30 seconds if no other popup shown
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPromo = localStorage.getItem('lumineon_promo_seen');
      if (!hasSeenPromo && !showWelcomePopup && !showExitIntentPopup) {
        setShowPromoPopup(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [showWelcomePopup, showExitIntentPopup]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
    localStorage.setItem('lumineon_welcome_seen', 'true');
  };

  const closeExitPopup = () => {
    setShowExitIntentPopup(false);
    localStorage.setItem('lumineon_exit_seen', 'true');
  };

  const closePromoPopup = () => {
    setShowPromoPopup(false);
    localStorage.setItem('lumineon_promo_seen', 'true');
  };

  // Welcome Popup
  if (showWelcomePopup) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative max-w-md w-full">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeWelcomePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Animated Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                <span className="neon-text-gradient">Bienvenue Chez LumiNéon !</span>
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                🎉 <strong>OFFRE SPÉCIALE DE BIENVENUE</strong><br/>
                Obtenez votre <span className="text-cyan-400 font-semibold">devis + mockup 3D gratuits</span> 
                pour votre premier néon personnalisé !
              </p>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-green-300 font-semibold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Économisez 150€ sur votre première commande</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    closeWelcomePopup();
                    // Trigger devis popup - we'll need to pass this as a prop
                    window.dispatchEvent(new CustomEvent('openDevisPopup'));
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan"
                >
                  <Zap className="w-5 h-5" />
                  Réclamer Mon Offre
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={closeWelcomePopup}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Plus tard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Exit Intent Popup
  if (showExitIntentPopup) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative max-w-lg w-full">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeExitPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Animated Border */}
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl opacity-50 animate-pulse"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl"></div>

            {/* Content */}
            <div className="relative text-center">
              <div className="text-4xl mb-4">🚨</div>
              
              <h3 className="text-3xl font-bold mb-4">
                <span className="neon-text-yellow">Attendez !</span>
              </h3>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Ne partez pas sans votre <strong className="text-orange-400">RÉDUCTION EXCLUSIVE</strong> !
              </p>

              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 mb-6">
                <div className="text-3xl font-bold neon-text-yellow mb-2">-20%</div>
                <div className="text-white font-semibold mb-2">Sur votre première commande</div>
                <div className="text-sm text-gray-400">+ Livraison gratuite partout en France</div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">HEURES</div>
                </div>
                <div className="text-red-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">MINUTES</div>
                </div>
                <div className="text-orange-400">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">SECONDES</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    closeExitPopup();
                    window.dispatchEvent(new CustomEvent('openDevisPopup'));
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse"
                >
                  🔥 J'en Profite Maintenant !
                </button>

                <button
                  onClick={closeExitPopup}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Non merci, je préfère payer le prix fort
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Promo Popup
  if (showPromoPopup) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative max-w-md w-full">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closePromoPopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Animated Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse"></div>

            {/* Content */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Clock className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                <span className="neon-text-green">Offre Flash ⚡</span>
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-green-400">DERNIÈRES HEURES</strong> pour profiter de notre 
                <span className="text-blue-400 font-semibold"> pack découverte gratuit</span> !
              </p>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-4 mb-6">
                <div className="text-lg font-bold text-white mb-2">🎁 PACK GRATUIT INCLUS :</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✅ Consultation design personnalisée</li>
                  <li>✅ Mockup 3D haute définition</li>
                  <li>✅ Devis détaillé sous 24h</li>
                  <li>✅ Guide d'installation offert</li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold">Plus que {timeLeft.hours}h {timeLeft.minutes}min</span>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    closePromoPopup();
                    window.dispatchEvent(new CustomEvent('openDevisPopup'));
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-green"
                >
                  <Gift className="w-5 h-5" />
                  Réclamer Mon Pack Gratuit
                </button>

                <button
                  onClick={closePromoPopup}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Peut-être plus tard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PremiumPopups;