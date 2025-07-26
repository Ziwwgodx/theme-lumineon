import React from 'react';
import { Award, Users, Lightbulb, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Artisanale",
      description: "Chaque néon est façonné avec une précision d'orfèvre par nos maîtres artisans."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement Personnalisé",
      description: "De l'idée à l'installation, nous vous guidons à chaque étape de votre projet."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Constante",
      description: "Technologies LED dernière génération pour un rendu optimal et une durabilité maximale."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Qualité Premium",
      description: "Matériaux nobles et finitions irréprochables pour des créations qui traversent le temps."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Storytelling Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 mb-8">
            <span className="text-lg">✨</span>
            <span className="font-semibold">NOTRE HISTOIRE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            <span className="neon-title-premium">Chaque Néon Raconte</span>
            <br />
            <span className="text-white">Une Histoire Unique</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              🎨 <strong className="text-cyan-400">Depuis 10 ans</strong>, nous sommes le <strong>fabricant français de référence</strong> pour les 
              <span className="text-yellow-400">néons LED personnalisés haut de gamme</span>. 
              Aujourd'hui, plus de <strong className="text-green-400">500 enseignes lumineuses</strong> illuminent la France.
            </p>
            <p>
              💡 De la <strong>boutique parisienne</strong> au <strong>restaurant gastronomique</strong>, 
              du <strong>bar tendance</strong> à l'<strong>enseigne commerciale</strong>, 
              chaque néon porte notre signature : <span className="text-purple-400">l'excellence de la fabrication française</span>.
            </p>
            <p>
              🏆 <strong className="text-pink-400">98% de nos clients</strong> nous recommandent parce que nous créons bien plus que des 
              néons LED : nous <span className="neon-text-cyan">donnons vie à votre identité visuelle</span>.
            </p>
          </div>
        </div>

        {/* Avantages Section */}
        <div className="cosmic-noise bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700 mb-20 relative overflow-hidden">
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
          
          <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 neon-title-premium">
              🎯 Pourquoi Choisir LumiNéon ?
            </h3>
            <p className="text-gray-300 text-lg">
              Les avantages qui font la différence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-green-500/30">
                <span className="text-2xl">🇫🇷</span>
                <div className="absolute inset-0 bg-green-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Made in France</h4>
              <p className="text-gray-400 leading-relaxed">Fabrication 100% française avec savoir-faire artisanal transmis de génération en génération.</p>
            </div>
            
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-blue-500/30">
                <span className="text-2xl">⚡</span>
                <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Livraison Express</h4>
              <p className="text-gray-400 leading-relaxed">Production 7-12 jours + livraison 2-3 jours partout en France avec suivi temps réel.</p>
            </div>
            
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-purple-500/30">
                <span className="text-2xl">🛡️</span>
                <div className="absolute inset-0 bg-purple-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Garantie Premium</h4>
              <p className="text-gray-400 leading-relaxed">2 ans de garantie pièces et main d'œuvre + support technique 24/7 inclus.</p>
            </div>
            
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-yellow-500/30">
                <span className="text-2xl">🎨</span>
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">Design Sur Mesure</h4>
              <p className="text-gray-400 leading-relaxed">Chaque création est unique, pensée spécialement pour votre projet et votre identité.</p>
            </div>
            
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-red-500/30">
                <span className="text-2xl">💎</span>
                <div className="absolute inset-0 bg-red-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">Qualité Premium</h4>
              <p className="text-gray-400 leading-relaxed">LED Samsung dernière génération, matériaux nobles et finitions irréprochables.</p>
            </div>
            
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-indigo-500/30">
                <span className="text-2xl">🤝</span>
                <div className="absolute inset-0 bg-indigo-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">Accompagnement Total</h4>
              <p className="text-gray-400 leading-relaxed">De l'idée à l'installation, nos experts vous guident à chaque étape de votre projet.</p>
            </div>
          </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-cyan">L'Art Du</span>
            <br />
            <span className="neon-text-purple">Néon</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🎨 Depuis plus de 10 ans, nous sublimmons vos espaces avec des créations lumineuses uniques. 
            Chaque projet est une œuvre d'art pensée pour <span className="text-cyan-400">révéler votre identité</span>.
          </p>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
            <span className="text-lg">🏆</span>
            <span className="font-medium">4.8★ Google</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
            <span className="text-lg">🇫🇷</span>
            <span className="font-medium">Made in France</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
            <span className="text-lg">⚡</span>
            <span className="font-medium">Livraison 2-3j</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300">
            <span className="text-lg">🛡️</span>
            <span className="font-medium">Garantie 2 ans</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 neon-text-cyan">🎯 Notre Passion, Votre Vision</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              💡 Chez LumiNéon, nous croyons que chaque espace mérite une âme lumineuse unique. 
              Nos artisans maîtrisent l'art ancestral du néon tout en intégrant les innovations 
              les plus avancées.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              ✨ Du concept initial à l'installation finale, nous orchestrons chaque détail 
              pour que votre vision prenne vie dans un éclat de couleurs et d'émotions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
                Design Sur Mesure
              </div>
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                Installation Professionnelle
              </div>
              <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium">
                Garantie Premium
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold neon-text-gradient mb-2">10+</div>
                  <div className="text-gray-400">Années d'Excellence</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
                    <div className="text-gray-400 text-sm">Projets Réalisés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Entreprises Partenaires</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400 mb-1">98%</div>
                    <div className="text-gray-400 text-sm">Satisfaction Client</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">24h</div>
                    <div className="text-gray-400 text-sm">Support Technique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;