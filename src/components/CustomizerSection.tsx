import React from 'react';
import { Palette, Zap, ArrowRight, Sparkles, Monitor } from 'lucide-react';

const CustomizerSection = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Intuitif",
      description: "Interface simple et puissante"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aperçu Temps Réel",
      description: "Visualisez instantanément vos créations"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Effets Avancés",
      description: "Animations et couleurs illimitées"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Mockup 3D",
      description: "Prévisualisez dans votre espace"
    }
  ];

  return (
    <section id="customizer" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-300 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">NOUVEAU : Customizer 3D Interactif</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-cyan">Créez Votre Néon</span>
            <br />
            <span className="neon-text-purple">En Quelques Clics</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🎨 Notre customizer révolutionnaire vous permet de concevoir votre néon personnalisé 
            en temps réel. <span className="text-yellow-400">Visualisez, personnalisez, commandez</span> - 
            tout en une seule interface intuitive !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Customizer Preview */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 overflow-hidden">
              {/* Neon Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-50"></div>
              
              <div className="relative">
                {/* Customizer Image */}
                <div className="mb-6">
                  <img
                    src="/image.png"
                    alt="Interface Customizer LumiNéon"
                    className="w-full h-auto rounded-lg border border-gray-600"
                  />
                </div>
                
                {/* Features Highlight */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-yellow-400">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{feature.title}</div>
                        <div className="text-gray-400 text-xs">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6 neon-text-yellow">
              🚀 L'Innovation Au Service De Votre Créativité
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Saisissez Votre Texte</h4>
                  <p className="text-gray-400">Tapez votre message, slogan ou nom d'entreprise directement dans l'interface.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Personnalisez Le Style</h4>
                  <p className="text-gray-400">Choisissez couleurs, effets, animations et taille selon vos préférences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Visualisez En 3D</h4>
                  <p className="text-gray-400">Admirez votre création dans un environnement 3D réaliste avant commande.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-yellow">
                <Palette className="w-5 h-5" />
                Lancer Le Customizer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-neon-yellow morph-button interactive"
              >
                Voir Des Exemples
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 neon-text-gradient">
              Pourquoi Utiliser Notre Customizer ?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Gain de Temps</h4>
              <p className="text-gray-400">Créez votre néon en 5 minutes au lieu de plusieurs échanges par email.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Visualisation Parfaite</h4>
              <p className="text-gray-400">Voyez exactement le rendu final avant de valider votre commande.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Créativité Illimitée</h4>
              <p className="text-gray-400">Explorez toutes les possibilités avec nos outils avancés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizerSection;