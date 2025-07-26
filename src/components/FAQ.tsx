import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quel est le délai de fabrication d'un néon personnalisé ?",
      answer: "La production prend 7 à 12 jours ouvrés selon la complexité du projet, suivie d'une livraison express de 2 à 3 jours partout en France."
    },
    {
      question: "Livrez-vous partout en France ?",
      answer: "Oui, nous livrons dans toute la France métropolitaine en 2-3 jours ouvrés avec un emballage sécurisé et un suivi en temps réel. Nous fournissons également un guide d'installation détaillé."
    },
    {
      question: "Quelle est la durée de vie d'un néon LED ?",
      answer: "Nos néons LED ont une durée de vie de 50 000 heures minimum (soit environ 15 ans d'utilisation normale). Ils sont garantis 2 ans pièces et main d'œuvre."
    },
    {
      question: "Le devis et le mockup 3D sont-ils vraiment gratuits ?",
      answer: "Absolument ! Nous offrons un devis détaillé et un mockup 3D réaliste sans engagement. Cela vous permet de visualiser parfaitement votre projet avant validation."
    },
    {
      question: "Quels types de néons proposez-vous ?",
      answer: "Nous créons tous types de néons : enseignes commerciales, décoration intérieure, néons événementiels, logos d'entreprise, textes personnalisés, formes sur mesure..."
    },
    {
      question: "Vos néons sont-ils étanches pour l'extérieur ?",
      answer: "Oui, nous proposons des néons avec protection IP65 ou IP67 pour usage extérieur, résistants aux intempéries et aux UV avec garantie spécifique."
    },
    {
      question: "Que faire en cas de problème avec mon néon ?",
      answer: "Nous offrons un support technique 24/7 pendant la garantie. En cas de défaut, nous expédions une pièce de rechange ou un néon de remplacement sous 48h."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon la taille, complexité et options choisies. Comptez à partir de 150€ pour un petit néon décoratif jusqu'à plusieurs milliers d'euros pour les grandes enseignes."
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-green">Questions</span>
            <br />
            <span className="neon-text-cyan">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🤔 Toutes les réponses à vos questions sur nos néons personnalisés. 
            <span className="text-orange-400"> Besoin d'autres infos ?</span> Contactez-nous !
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-orange-500/50"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="text-orange-400 flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Une question spécifique ? Nos experts vous répondent en moins de 2h !
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openDevisPopup'))}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
          >
            💬 Poser Ma Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;