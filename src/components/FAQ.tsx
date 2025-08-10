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
      question: "Quels sont vos tarifs pour un néon personnalisé ?",
      answer: "Nos prix démarrent à 90€ pour un petit néon décoratif (30cm). Comptez 129€ pour un prénom 60cm, 219€ pour un logo restaurant 90cm, jusqu'à 500€+ pour les grandes enseignes. Devis gratuit sous 24h."
    },
    {
      question: "Quel est le délai de fabrication et livraison ?",
      answer: "Production 5 à 10 jours selon la complexité + livraison 2-3 jours en France. Exemple : prénom simple = 5 jours, logo complexe = 8-10 jours. Suivi en temps réel inclus."
    },
    {
      question: "Quelle est la durée de vie d'un néon LED ?",
      answer: "Nos néons LED durent 50 000 heures minimum (15 ans d'usage normal). Garantie 2 ans pièces et main d'œuvre. En cas de problème, SAV réactif sous 48h."
    },
    {
      question: "Le devis et le mockup 3D sont-ils vraiment gratuits ?",
      answer: "Oui, 100% gratuit ! Vous recevez un devis détaillé + mockup 3D photorealistic sous 24h. Aucun engagement, vous validez seulement si le rendu vous plaît."
    },
    {
      question: "Puis-je voir des exemples avec les vrais prix ?",
      answer: "Bien sûr ! Consultez notre galerie avec prix réels : prénom 60cm = 129€, logo restaurant 90cm = 219€, enseigne bar 120cm = 389€. Chaque projet inclut le prix et délai de réalisation."
    },
    {
      question: "Comment passer commande ?",
      answer: "3 étapes simples : 1) Demandez votre devis gratuit, 2) Validez le mockup 3D, 3) Payez 50% à la commande, 50% à la livraison. Paiement sécurisé par CB, PayPal ou virement."
    },
    {
      question: "Que faire si mon néon ne fonctionne plus ?",
      answer: "Contactez-nous immédiatement ! Garantie 2 ans = remplacement gratuit sous 48h. SAV réactif par email, téléphone ou chat. Aucun frais de port pour les retours sous garantie."
    },
    {
      question: "Livrez-vous partout en France ?",
      answer: "Oui, livraison France métropolitaine en 2-3 jours avec Colissimo suivi. Emballage anti-choc professionnel. Installation possible sur Paris/IDF (supplément selon distance)."
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