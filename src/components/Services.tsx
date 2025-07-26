import React from 'react';
import { Palette, Settings, Truck, Wrench, Clock, Shield } from 'lucide-react';

interface ServicesProps {
  onOpenDevis: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenDevis }) => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Création Sur Mesure",
      description: "Design unique adapté à votre identité visuelle et vos contraintes techniques.",
      features: ["Étude personnalisée", "Mockup 3D gratuit", "Conseils d'expert", "Révisions illimitées"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Fabrication Premium",
      description: "Techniques artisanales et technologies LED de pointe pour un rendu exceptionnel.",
      features: ["LED haute qualité", "Matériaux nobles", "Finitions parfaites", "Tests qualité rigoureux"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Livraison Express",
      description: "Livraison rapide et sécurisée partout en France avec suivi en temps réel.",
      features: ["Livraison sécurisée", "Suivi en temps réel", "Emballage premium", "Support technique"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & SAV",
      description: "Support technique 24/7 et maintenance préventive pour une longévité optimale.",
      features: ["Support 24/7", "Maintenance préventive", "Réparations rapides", "Pièces de rechange"]
    }
  ];

  const process = [
    { step: "01", title: "Consultation", description: "Échange sur votre projet et vos besoins" },
    { step: "02", title: "Conception", description: "Création du design et mockup 3D" },
    { step: "03", title: "Fabrication", description: "Production artisanale en 7-12 jours" },
    { step: "04", title: "Livraison", description: "Expédition sécurisée sous 2-3 jours" }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-pink">Nos</span>
            <span className="text-white"> </span>
            <span className="neon-text-yellow">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🎯 <strong>Fabrication française de néons LED personnalisés</strong> avec un accompagnement complet de A à Z. 
            <span className="text-pink-400">Excellence artisanale et innovation technologique</span> à chaque étape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 h-full">
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 neon-text-pink">
              Notre Processus
            </h3>
            <p className="text-gray-300 text-lg">
              Un workflow éprouvé pour des résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent opacity-30"></div>
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <Clock className="w-6 h-6 text-cyan-400" />
            <span className="text-lg text-gray-300">Production 7-12j + Livraison 2-3j</span>
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-lg text-gray-300">Garantie 2 ans</span>
          </div>
          <div className="flex justify-center">
            <div className="ml-8">
              <button
                onClick={onOpenDevis}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-pink"
              >
                Demander Un Devis Gratuit
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;