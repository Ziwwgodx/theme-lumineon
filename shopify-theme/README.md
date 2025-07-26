# 🌟 LumiNéon - Thème Shopify Premium

Un thème Shopify ultra-moderne avec des effets néon immersifs, conçu spécialement pour les créateurs de néons personnalisés.

## ✨ Fonctionnalités Principales

### 🎨 Design Néon Immersif
- **Effets néon authentiques** avec CSS avancé
- **Animations fluides** et transitions élégantes
- **Système de particules** interactif
- **Rayons de lumière** animés
- **Curseur personnalisé** avec effets de glow
- **Parallax** et animations de scroll

### 🚀 Fonctionnalités Business
- **Chat en direct** intégré avec bot intelligent
- **Popup de devis** personnalisable
- **Galerie interactive** avec lightbox
- **Système de filtres** pour les projets
- **Témoignages clients** avec carousel
- **Suivi de commandes** en temps réel
- **FAQ dynamique** avec accordéon

### 📱 Responsive & Performance
- **Design 100% responsive** (mobile-first)
- **Optimisation automatique** pour appareils faibles
- **Lazy loading** des images
- **Préchargement intelligent** des ressources
- **Animations réduites** sur mobiles lents

### 🔧 Personnalisation Complète
- **Éditeur Shopify** intégré
- **+50 paramètres** configurables
- **Couleurs néon** personnalisables
- **Typographie** flexible
- **Sections modulaires** drag & drop

## 📁 Structure du Thème

```
shopify-theme/
├── assets/
│   ├── neon-effects.css      # Effets CSS néon
│   ├── neon-interactions.js  # Interactions JavaScript
│   └── global.js            # Scripts globaux
├── config/
│   └── settings_schema.json # Configuration du thème
├── layout/
│   └── theme.liquid         # Layout principal
├── sections/
│   ├── hero.liquid          # Section héro
│   ├── customizer.liquid    # Outil de personnalisation
│   ├── gallery.liquid       # Galerie de projets
│   ├── services.liquid      # Services
│   ├── testimonials.liquid  # Témoignages
│   ├── about.liquid         # À propos
│   ├── faq.liquid          # FAQ
│   └── order-tracking.liquid # Suivi commandes
├── snippets/
│   ├── devis-popup.liquid   # Popup de devis
│   ├── live-chat.liquid     # Chat en direct
│   └── meta-tags.liquid     # Balises SEO
└── templates/
    ├── index.liquid         # Page d'accueil
    ├── product.liquid       # Page produit
    └── collection.liquid    # Page collection
```

## 🛠️ Installation

### 1. Téléchargement
```bash
# Télécharger le thème
git clone https://github.com/lumineon/shopify-theme.git
cd shopify-theme
```

### 2. Installation sur Shopify
1. **Admin Shopify** → **Boutique en ligne** → **Thèmes**
2. **Actions** → **Importer un thème**
3. Sélectionner le fichier ZIP du thème
4. **Publier** le thème

### 3. Configuration Initiale
1. **Personnaliser** → **Paramètres du thème**
2. Configurer les **informations de contact**
3. Personnaliser les **couleurs néon**
4. Activer les **fonctionnalités** souhaitées

## ⚙️ Configuration

### Informations de Contact
```json
{
  "contact_phone": "+33 1 23 45 67 89",
  "contact_email": "contact@lumineon.fr",
  "contact_address": "123 Rue de la Lumière",
  "contact_city": "Paris",
  "contact_postal_code": "75001"
}
```

### Effets Néon
- ✅ **Particules** : Système de particules interactif
- ✅ **Rayons de lumière** : Animations de rayons
- ✅ **Curseur interactif** : Effets de suivi
- ✅ **Parallax** : Défilement parallax
- 🎚️ **Vitesse animations** : 0.5x à 2x

### Chat en Direct
- 👤 **Agent** : Sophie - Expert Néon
- 💬 **Message d'accueil** : Personnalisable
- 🤖 **Réponses automatiques** : 4 quick replies
- ⚡ **Temps de réponse** : 2 minutes

### Popups Marketing
- 🎉 **Popup bienvenue** : Délai configurable (1-10s)
- 🚪 **Exit intent** : Détection de sortie
- 💰 **Réduction** : Pourcentage personnalisable
- 📊 **Tracking** : Analytics intégrés

## 🎨 Personnalisation

### Couleurs Néon
```css
:root {
  --neon-cyan: #00f5ff;
  --neon-purple: #a855f7;
  --neon-pink: #ec4899;
  --neon-yellow: #fbbf24;
  --neon-green: #10b981;
}
```

### Classes CSS Disponibles
```css
/* Textes néon */
.neon-text-cyan
.neon-text-purple
.neon-text-pink
.neon-text-yellow
.neon-text-green
.neon-text-gradient

/* Ombres néon */
.shadow-neon-cyan
.shadow-neon-purple
.shadow-neon-pink
.shadow-neon-yellow
.shadow-neon-green

/* Animations */
.animate-pulse-glow
.animate-flicker
.animate-neon-tube
.floating-element
.glitch-effect
```

### Sections Personnalisables

#### Hero Section
- 📝 **Titre** : 3 lignes personnalisables
- 📄 **Sous-titre** : Description principale
- 🔥 **Urgence** : Message promotionnel
- 🚚 **Livraison** : Informations de délai
- 🎯 **CTA** : 3 boutons d'action
- 📊 **Stats** : 4 statistiques avec couleurs

#### Gallery Section
- 🖼️ **Projets** : Images + descriptions
- 🏷️ **Catégories** : Filtres automatiques
- 👥 **Social proof** : Badges de confiance
- 🔍 **Lightbox** : Visualisation plein écran

#### Customizer Section
- 🎨 **Badge** : Texte promotionnel
- 📱 **Image** : Capture d'écran de l'outil
- ⚡ **Fonctionnalités** : 4 points forts
- 📋 **Étapes** : Processus en 3 étapes
- 🎁 **Bénéfices** : 3 avantages clés

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### Optimisations Mobile
- 🔋 **Économie batterie** : Animations réduites
- 📶 **Connexion lente** : Chargement adaptatif
- 💾 **Mémoire faible** : Optimisation automatique
- 👆 **Touch friendly** : Boutons adaptés

## 🚀 Performance

### Optimisations Automatiques
- 📱 **Détection d'appareil** : Adaptation automatique
- 🌐 **Connexion lente** : Réduction des effets
- 💾 **Mémoire limitée** : Nettoyage périodique
- 🔋 **Batterie faible** : Mode économie

### Métriques Cibles
- ⚡ **LCP** : < 2.5s
- 🎯 **FID** : < 100ms
- 📏 **CLS** : < 0.1
- 📊 **Performance Score** : > 90

## 🔍 SEO

### Données Structurées
- 🏢 **LocalBusiness** : Informations entreprise
- ⭐ **AggregateRating** : Notes et avis
- 🛍️ **Product** : Fiches produits
- ❓ **FAQPage** : Questions fréquentes

### Balises Meta
- 📱 **Open Graph** : Partage social
- 🐦 **Twitter Cards** : Aperçus Twitter
- 🔗 **Canonical** : URLs canoniques
- 🌍 **Hreflang** : Multi-langues

## 🛡️ Sécurité

### Bonnes Pratiques
- 🔒 **CSP** : Content Security Policy
- 🛡️ **XSS Protection** : Filtrage des scripts
- 🔐 **HTTPS** : Chiffrement obligatoire
- 🍪 **Cookies** : Gestion RGPD

## 📊 Analytics

### Événements Trackés
- 👆 **Clics CTA** : Boutons d'action
- 📝 **Soumissions** : Formulaires de devis
- 💬 **Chat** : Interactions chat
- 🖼️ **Galerie** : Vues d'images
- 📱 **Mobile** : Utilisation mobile

### Intégrations
- 📈 **Google Analytics 4** : Suivi avancé
- 🎯 **Google Tag Manager** : Gestion des tags
- 📊 **Facebook Pixel** : Publicités Facebook
- 🔍 **Search Console** : SEO monitoring

## 🆘 Support

### Documentation
- 📚 **Guide utilisateur** : [lumineon.fr/docs](https://lumineon.fr/docs)
- 🎥 **Vidéos tutoriels** : [lumineon.fr/videos](https://lumineon.fr/videos)
- ❓ **FAQ technique** : [lumineon.fr/faq](https://lumineon.fr/faq)

### Contact Support
- 📧 **Email** : support@lumineon.fr
- 💬 **Chat** : Disponible 24/7
- 📞 **Téléphone** : +33 1 23 45 67 89
- 🎫 **Tickets** : Système de support

## 🔄 Mises à Jour

### Changelog
- **v1.0.0** : Version initiale
- **v1.1.0** : Chat en direct amélioré
- **v1.2.0** : Optimisations performance
- **v1.3.0** : Nouvelles animations

### Roadmap
- 🎨 **Customizer 3D** : Outil de personnalisation avancé
- 🤖 **IA Assistant** : Chat intelligent
- 📱 **App mobile** : Application dédiée
- 🌍 **Multi-langues** : Support international

## 📄 Licence

Ce thème est sous licence propriétaire LumiNéon. Utilisation autorisée uniquement pour les clients ayant acheté une licence valide.

## 🤝 Contribution

Pour contribuer au développement du thème :

1. **Fork** le repository
2. **Créer** une branche feature
3. **Commiter** les changements
4. **Pousser** vers la branche
5. **Ouvrir** une Pull Request

---

**Créé avec ❤️ par l'équipe LumiNéon**

*Illuminez votre business avec style !* ✨