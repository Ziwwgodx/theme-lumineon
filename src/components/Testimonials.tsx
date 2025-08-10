import React, { useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenDevis: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenDevis }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Marie L.",
      role: "Propriétaire Café Paris 11e",
      content: "Commande passée lundi, néon reçu vendredi ! Le rendu est exactement comme sur le mockup 3D. Mes clients adorent prendre des photos devant.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 1 semaine",
      verified: true,
      project: "Enseigne 'Café de Marie' - 80cm"
    },
    {
      id: 2,
      name: "Thomas R.",
      role: "Gérant Bar Lyon 2e",
      content: "SAV au top ! Mon néon a eu un souci après 6 mois, ils l'ont remplacé sous 48h sans frais. Service client vraiment réactif.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 3 jours",
      verified: true,
      project: "Logo 'Bar Central' - 120cm"
    },
    {
      id: 3,
      name: "Julie M.",
      role: "Particulier Marseille",
      content: "Pour ma chambre, j'ai commandé mon prénom en rose. Le devis était clair, le prix respecté (129€), livraison en 5 jours comme promis !",
      rating: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 5 jours",
      verified: true,
      project: "Prénom 'Julie' - 60cm"
    },
    {
      id: 4,
      name: "Thomas Legrand",
      role: "Fondateur Startup TechVibe",
      content: "LumiNéon a donné une âme à nos bureaux. Le néon corporate qu'ils ont créé reflète parfaitement notre esprit innovant. Qualité et créativité au rendez-vous !",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 1 semaine"
    },
    {
      id: 5,
      name: "Camille Rousseau",
      role: "Organisatrice Événements Luxe",
      content: "Pour notre mariage, nous voulions quelque chose d'unique. Le néon 'Mr & Mrs' créé par LumiNéon était absolument magique ! Tous nos invités ont été éblouis.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 5 jours"
    },
    {
      id: 6,
      name: "Antoine Moreau",
      role: "Propriétaire Boutique Vintage",
      content: "Le néon rétro qu'ils ont conçu pour ma boutique attire une clientèle incroyable. L'authenticité du style années 80 est parfaitement respectée. Bravo !",
      rating: 4,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 2 mois"
    },
    {
      id: 7,
      name: "Isabelle Petit",
      role: "Directrice Marketing AgencePro",
      content: "Notre logo en néon dans l'open space crée une ambiance de travail stimulante. L'équipe LumiNéon a su traduire notre identité visuelle en lumière avec brio.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 3 jours"
    },
    {
      id: 8,
      name: "Julien Fabre",
      role: "Gérant Pizzeria Bella Vista",
      content: "Le néon 'Pizza' qu'ils ont installé a doublé notre visibilité ! Les couleurs sont éclatantes même en plein jour. Un investissement qui se rentabilise rapidement.",
      rating: 4,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 6 semaines"
    },
    {
      id: 9,
      name: "Marie Lefevre",
      role: "Propriétaire Studio Yoga Zen",
      content: "Le néon 'Breathe' dans notre studio apporte une sérénité lumineuse parfaite. Les couleurs douces créent l'ambiance zen que nous recherchions. Merci !",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 1 semaine"
    },
    {
      id: 10,
      name: "David Chen",
      role: "Directeur Salle de Sport FitZone",
      content: "Notre néon motivationnel 'No Pain No Gain' booste l'énergie de nos membres ! La qualité LED est exceptionnelle, aucune panne depuis 8 mois.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 4 jours"
    },
    {
      id: 11,
      name: "Nathalie Blanc",
      role: "Responsable Boutique Mode Chic",
      content: "Le néon script de notre nom de marque en vitrine est un véritable aimant à clients. L'élégance du tracé reflète parfaitement notre positionnement haut de gamme.",
      rating: 4,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 2 semaines"
    },
    {
      id: 12,
      name: "Olivier Durand",
      role: "Gérant Bar à Vins Le Millésime",
      content: "Le néon 'Wine Time' avec effet de verre qui se remplit est génial ! Nos clients adorent ce détail créatif. LumiNéon a vraiment pensé à tout.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 10 jours"
    },
    {
      id: 13,
      name: "Céline Roux",
      role: "Propriétaire Salon de Thé Cosy",
      content: "Notre néon 'Tea Time' crée une atmosphère chaleureuse parfaite. Les clients prennent souvent des photos devant ! Un excellent investissement marketing.",
      rating: 4,
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 3 semaines"
    },
    {
      id: 14,
      name: "Fabien Moreau",
      role: "Directeur Escape Game Mystery",
      content: "Les néons thématiques dans nos salles d'escape game créent une immersion totale ! Chaque couleur raconte une histoire. Travail remarquable !",
      rating: 5,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 1 mois"
    },
    {
      id: 15,
      name: "Laure Girard",
      role: "Gérante Boulangerie Artisanale",
      content: "Le néon 'Fresh Bread' attire les clients dès 6h du matin ! La couleur dorée évoque parfaitement la chaleur du pain frais. Très satisfaite du résultat.",
      rating: 4,
      image: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Il y a 2 jours"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 1, behavior: 'auto' });
      }
    };

    const interval = setInterval(autoScroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge social proof */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 mb-6">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-semibold">4.8/5 ⭐ • 127+ AVIS VÉRIFIÉS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-yellow">Ils Nous Font</span>
            <br />
            <span className="neon-text-green">Confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            💬 <strong>Découvrez pourquoi 98% de nos clients nous recommandent.</strong> 
            Leurs témoignages authentiques sont <span className="text-yellow-400">votre meilleure garantie de qualité</span>.
          </p>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium text-sm">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
              <span className="font-medium text-sm">Trustpilot Excellent</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
              <span className="font-medium text-sm">Facebook 5★</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300">
              <span className="font-medium text-sm">98% Recommandent</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/90 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/30 h-full relative transform hover:scale-105">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-yellow-400/30">
                    <Quote size={24} />
                  </div>

                  {/* Verified Badge Premium */}
                  <div className="absolute top-4 left-4 px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    VÉRIFIÉ
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Stars and Verified Badge */}
                    <div className="flex items-center justify-between mb-4 mt-8">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${
                              i < testimonial.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.date}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400/50 flex-shrink-0 shadow-lg">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors duration-300 truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs truncate mb-1">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-400 text-xs font-medium">Client vérifié</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>❤️</span>
                          <span>{Math.floor(Math.random() * 20) + 5} personnes ont trouvé cet avis utile</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                          </svg>
                          <span>Partager</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700 mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold neon-text-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-400">Satisfaction Client</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold neon-text-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-400">Projets Réalisés</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold neon-text-purple mb-2 group-hover:scale-110 transition-transform duration-300">
                127+
              </div>
              <div className="text-gray-400">Avis Google</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold neon-text-pink mb-2 group-hover:scale-110 transition-transform duration-300">
                4.8★
              </div>
              <div className="text-gray-400">Note Moyenne</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">
            Rejoignez nos clients satisfaits et illuminez votre success story
          </p>
          <button
            onClick={onOpenDevis}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-yellow"
          >
            Commencer Mon Projet
          </button>
        </div>
      </div>


      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;