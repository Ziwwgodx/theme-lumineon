import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTransition from './SectionTransition';
import ParallaxContainer from './ParallaxContainer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Néon WOW - Impact Visuel",
      category: "Décoration",
      image: "/neon-wow.jpg",
      description: "Néon expressif 'WOW' avec effet de profondeur et éclairage dynamique"
    },
    {
      id: 2,
      title: "Néon Vague Surf - Style Californien",
      category: "Loisirs",
      image: "/neon-vague-surf.jpg",
      description: "Design néon vague surf avec dégradé bleu océan, parfait pour ambiance beach"
    },
    {
      id: 3,
      title: "Netflix and Chill - Pop Culture",
      category: "Divertissement",
      image: "/neon-netflix-and-chill.jpg",
      description: "Néon tendance 'Netflix and Chill' avec typographie moderne et éclairage rouge"
    },
    {
      id: 4,
      title: "Logo Friends - Nostalgie TV",
      category: "Logo",
      image: "/neon-logo-friends.jpg",
      description: "Reproduction fidèle du logo Friends en néon, couleurs authentiques de la série"
    },
    {
      id: 5,
      title: "Lettres Hello - Accueil Chaleureux",
      category: "Texte",
      image: "/neon-lettres-hello.jpg",
      description: "Lettres néon 'Hello' en script élégant, parfait pour entrées et réceptions"
    },
    {
      id: 6,
      title: "Hot Deal LED Flex - Promotion Dynamique",
      category: "Commercial",
      image: "/neon-led-flex-hot-deal.jpg",
      description: "Néon LED flexible 'Hot Deal' avec éclairage rouge vif, idéal pour promotions commerciales"
    },
    {
      id: 7,
      title: "La Vie Est Belle - Philosophie Lumineuse",
      category: "Citation",
      image: "/neón-la-via-est-belle.jpg",
      description: "Citation inspirante 'La Vie Est Belle' en néon élégant, parfait pour espaces de bien-être"
    },
    {
      id: 8,
      title: "Happy Birthday - Célébration Festive",
      category: "Événementiel",
      image: "/neon-happy-birthday.jpg",
      description: "Néon festif 'Happy Birthday' multicolore, création parfaite pour anniversaires mémorables"
    },
    {
      id: 9,
      title: "Game Zone - Univers Gaming",
      category: "Gaming",
      image: "/neon-game-zone.jpg",
      description: "Néon gaming 'Game Zone' avec effets dynamiques, ambiance parfaite pour espaces de jeu"
    }
  ];

  const categories = ["Tous", "Décoration", "Loisirs", "Divertissement", "Logo", "Texte", "Commercial", "Citation", "Événementiel", "Gaming"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(project => 
    activeCategory === "Tous" || project.category === activeCategory
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
    }
  };

  const filterGallery = (searchTerm: string) => {
    // Cette fonction sera implémentée pour filtrer la galerie
    console.log('Recherche:', searchTerm);
  };

  return (
    <SectionTransition delay={200}>
      <section id="gallery" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>

      <ParallaxContainer speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl floating-element"></div>
      </ParallaxContainer>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-purple">Nos</span>
            <span className="text-white"> </span>
            <span className="neon-text-pink">Créations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            📸 Découvrez notre portfolio de +500 créations uniques. Chaque projet raconte une histoire, 
            <span className="text-purple-400"> chaque néon illumine un rêve</span>.
          </p>
          
          {/* Social Proof */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
              ⭐ 4.9/5 sur Google (127 avis)
            </div>
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
              🏆 +500 projets réalisés
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 morph-button interactive ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-neon-cyan'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer interactive-card interactive transform transition-all duration-700 hover:scale-110 hover:rotate-1"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-700 hover:border-cyan-500/70 hover:shadow-2xl hover:shadow-cyan-500/40">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="aspect-video overflow-hidden">
                  {/* Badge catégorie flottant */}
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    {project.category}
                  </div>
                  
                  {/* Icône zoom */}
                  <div className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/80 backdrop-blur-md border border-purple-500/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-125">
                    <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  
                  {/* Indicateur de popularité */}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2 h-2 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-yellow-300 text-xs font-medium ml-1">Populaire</span>
                  </div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:brightness-125 group-hover:saturate-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    
                    {/* CTA dans l'overlay */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-cyan-400 text-sm font-medium animate-pulse">🔍 Cliquez pour agrandir</span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>{Math.floor(Math.random() * 200) + 50} vues</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Neon Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/80 rounded-2xl transition-all duration-700 group-hover:shadow-neon-cyan"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Galerie Sociale Interactive */}
        <div className="mt-20 cosmic-noise bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700 relative overflow-hidden">
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl opacity-50 animate-pulse"></div>
          
          <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 neon-title-premium">
              📸 Partagé par Nos Clients
            </h3>
            <p className="text-gray-300">
              Découvrez comment nos créations illuminent le quotidien de nos clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Mini galerie sociale */}
            {filteredProjects.slice(0, 8).map((project, index) => (
              <div key={`social-${index}`} className="group relative aspect-square overflow-hidden rounded-2xl border border-gray-700 hover:border-purple-500/70 transition-all duration-500 cursor-pointer hover:scale-105 hover:rotate-1">
                {/* Social Badge */}
                <div className="absolute top-2 left-2 z-10 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs">❤️</span>
                </div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:brightness-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-red-400">❤️</span>
                        <span>{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-blue-400">💬</span>
                        <span>{Math.floor(Math.random() * 10) + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              🌟 Rejoignez notre communauté de <strong className="neon-text-purple">500+ clients satisfaits</strong>
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openDevisPopup'))}
              className="neon-button-premium px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-500"
            >
              🎨 Créer Mon Néon Unique
            </button>
          </div>
          </div>
        </div>
        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-300 interactive"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-300 bg-gray-900/50 rounded-full p-2 interactive"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-300 bg-gray-900/50 rounded-full p-2 interactive"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={filteredProjects[selectedImage].image}
                  alt={filteredProjects[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {filteredProjects[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {filteredProjects[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </section>
    </SectionTransition>
  );
};

export default Gallery;