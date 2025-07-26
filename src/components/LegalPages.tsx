import React, { useState } from 'react';
import { X, FileText, Shield, Scale, Eye } from 'lucide-react';

interface LegalPagesProps {
  isOpen: boolean;
  onClose: () => void;
  page: 'mentions' | 'cgv' | 'confidentialite';
}

const LegalPages: React.FC<LegalPagesProps> = ({ isOpen, onClose, page }) => {
  if (!isOpen) return null;

  const getPageContent = () => {
    switch (page) {
      case 'mentions':
        return {
          title: 'Mentions Légales',
          icon: <FileText className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-cyan">1. Informations Légales</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Raison sociale :</strong> LumiNéon SARL</p>
                  <p><strong>Siège social :</strong> 123 Rue de la Lumière, 75001 Paris, France</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>TVA Intracommunautaire :</strong> FR12 123456789</p>
                  <p><strong>Capital social :</strong> 50 000 €</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p><strong>Email :</strong> contact@lumineon.fr</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">2. Directeur de Publication</h3>
                <div className="text-gray-300">
                  <p><strong>Directeur :</strong> Jean-Pierre Lumière</p>
                  <p><strong>Qualité :</strong> Gérant de la société LumiNéon SARL</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-pink">3. Hébergement</h3>
                <div className="text-gray-300">
                  <p><strong>Hébergeur :</strong> OVH SAS</p>
                  <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                  <p><strong>Téléphone :</strong> 1007</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-yellow">4. Propriété Intellectuelle</h3>
                <div className="text-gray-300 space-y-3">
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.</p>
                  <p>Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de publication.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-green">5. Responsabilité</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@lumineon.fr.</p>
                  <p>LumiNéon ne pourra en aucune circonstance être tenu responsable de tout dommage de quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation des informations et/ou documents disponibles sur ce site.</p>
                </div>
              </section>
            </div>
          )
        };

      case 'cgv':
        return {
          title: 'Conditions Générales de Vente',
          icon: <Scale className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-cyan">1. Objet et Champ d'Application</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les commandes passées auprès de LumiNéon SARL pour la création, fabrication et installation de néons personnalisés.</p>
                  <p>Toute commande implique l'acceptation sans réserve des présentes CGV.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">2. Commandes et Devis</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Devis :</strong> Tout devis est gratuit et valable 30 jours. Il devient contractuel dès acceptation écrite du client.</p>
                  <p><strong>Commande :</strong> La commande n'est définitive qu'après validation du devis et versement de l'acompte de 50%.</p>
                  <p><strong>Modifications :</strong> Toute modification après validation du devis peut entraîner un supplément tarifaire.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-pink">3. Prix et Paiement</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Prix :</strong> Les prix sont indiqués en euros TTC. Ils incluent la TVA au taux en vigueur.</p>
                  <p><strong>Modalités :</strong> 50% à la commande, 50% à la livraison/installation.</p>
                  <p><strong>Moyens de paiement :</strong> Virement bancaire, chèque, espèces (moins de 1000€).</p>
                  <p><strong>Retard de paiement :</strong> Pénalités de 3 fois le taux légal + indemnité forfaitaire de 40€.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-yellow">4. Délais et Livraison</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Production :</strong> 7 à 12 jours ouvrés selon la complexité du projet.</p>
                  <p><strong>Livraison :</strong> 2 à 3 jours ouvrés en France métropolitaine. Livraison sécurisée avec suivi.</p>
                  <p><strong>Retard :</strong> En cas de retard, le client sera informé. Aucune pénalité ne sera due sauf faute grave.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-green">5. Garantie et SAV</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Garantie :</strong> 2 ans pièces et main d'œuvre sur tous nos produits.</p>
                  <p><strong>Exclusions :</strong> Dommages dus à une mauvaise utilisation, chocs, intempéries extrêmes.</p>
                  <p><strong>SAV :</strong> Support technique 24/7 pendant la période de garantie.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-cyan">6. Droit de Rétractation</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Conformément à l'article L121-21 du Code de la consommation, le droit de rétractation ne peut être exercé pour les biens confectionnés selon les spécifications du consommateur.</p>
                  <p>Nos néons étant personnalisés, aucun droit de rétractation ne s'applique.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">7. Litiges</h3>
                <div className="text-gray-300 space-y-3">
                  <p>En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.</p>
                  <p>À défaut, les tribunaux de Paris seront seuls compétents.</p>
                  <p>Le droit français est seul applicable.</p>
                </div>
              </section>
            </div>
          )
        };

      case 'confidentialite':
        return {
          title: 'Politique de Confidentialité',
          icon: <Shield className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-cyan">1. Collecte des Données</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Données collectées :</strong> Nom, prénom, email, téléphone, adresse, informations sur votre projet.</p>
                  <p><strong>Finalité :</strong> Traitement de votre demande, suivi commercial, facturation, livraison.</p>
                  <p><strong>Base légale :</strong> Consentement et exécution contractuelle.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">2. Utilisation des Données</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Vos données sont utilisées exclusivement pour :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Répondre à vos demandes de devis</li>
                    <li>Assurer le suivi de votre commande</li>
                    <li>Vous contacter pour le SAV</li>
                    <li>Vous envoyer notre newsletter (avec votre accord)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-pink">3. Conservation des Données</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Durée :</strong> 3 ans après la fin de la relation commerciale.</p>
                  <p><strong>Données comptables :</strong> 10 ans conformément aux obligations légales.</p>
                  <p><strong>Newsletter :</strong> Jusqu'à désinscription.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-yellow">4. Partage des Données</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Vos données ne sont jamais vendues ni louées à des tiers.</p>
                  <p>Elles peuvent être partagées avec :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nos sous-traitants (livraison, installation)</li>
                    <li>Nos partenaires techniques (uniquement les données nécessaires)</li>
                    <li>Les autorités légales si requis par la loi</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-green">5. Vos Droits RGPD</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Accès :</strong> Connaître les données que nous détenons</li>
                    <li><strong>Rectification :</strong> Corriger vos données inexactes</li>
                    <li><strong>Effacement :</strong> Supprimer vos données</li>
                    <li><strong>Portabilité :</strong> Récupérer vos données</li>
                    <li><strong>Opposition :</strong> Vous opposer au traitement</li>
                  </ul>
                  <p>Pour exercer ces droits : <strong>contact@lumineon.fr</strong></p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-cyan">6. Cookies</h3>
                <div className="text-gray-300 space-y-3">
                  <p><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site.</p>
                  <p><strong>Cookies analytiques :</strong> Google Analytics pour améliorer notre site.</p>
                  <p><strong>Gestion :</strong> Vous pouvez désactiver les cookies dans votre navigateur.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-purple">7. Sécurité</h3>
                <div className="text-gray-300 space-y-3">
                  <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles pour protéger vos données :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Chiffrement SSL/TLS</li>
                    <li>Accès restreint aux données</li>
                    <li>Sauvegardes régulières</li>
                    <li>Formation de nos équipes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4 neon-text-pink">8. Contact DPO</h3>
                <div className="text-gray-300">
                  <p><strong>Délégué à la Protection des Données :</strong></p>
                  <p>Email : dpo@lumineon.fr</p>
                  <p>Adresse : LumiNéon SARL - DPO, 123 Rue de la Lumière, 75001 Paris</p>
                </div>
              </section>
            </div>
          )
        };

      default:
        return { title: '', icon: null, content: null };
    }
  };

  const { title, icon, content } = getPageContent();

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="text-cyan-400">
                {icon}
              </div>
              <h2 className="text-2xl font-bold neon-text-gradient">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {content}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 p-6 bg-gray-800/50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Dernière mise à jour : Décembre 2024
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;