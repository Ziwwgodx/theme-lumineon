import React, { useEffect } from 'react';

const SEOOptimizer = () => {
  useEffect(() => {
    // Schema.org pour les avis clients
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LumiNéon",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sophie Martin"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "LumiNéon a transformé notre façade ! Le néon personnalisé attire l'œil de tous les passants."
        }
      ]
    };

    // Schema.org pour les produits
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Néon LED Personnalisé Haut de Gamme",
      "description": "Néon LED personnalisé haute qualité, fabrication française artisanale, garantie 2 ans, installation professionnelle",
      "brand": {
        "@type": "Brand",
        "name": "LumiNéon"
      },
      "category": "Enseigne lumineuse",
      "material": "LED haute qualité",
      "manufacturer": {
        "@type": "Organization",
        "name": "LumiNéon",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR"
        }
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "150",
        "lowPrice": "150",
        "highPrice": "2000",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "warranty": "2 ans pièces et main d'œuvre",
        "seller": {
          "@type": "Organization",
          "name": "LumiNéon"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Durée de vie",
          "value": "50 000 heures"
        },
        {
          "@type": "PropertyValue", 
          "name": "Garantie",
          "value": "2 ans"
        },
        {
          "@type": "PropertyValue",
          "name": "Fabrication",
          "value": "France"
        }
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le délai de fabrication d'un néon personnalisé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La production prend 7 à 12 jours ouvrés selon la complexité du projet, suivie d'une livraison express de 2 à 3 jours partout en France."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la durée de vie d'un néon LED ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos néons LED ont une durée de vie de 50 000 heures minimum (soit environ 15 ans d'utilisation normale). Ils sont garantis 2 ans pièces et main d'œuvre."
          }
        }
      ]
    };

    // Injecter les schemas
    const schemas = [reviewsSchema, productSchema, faqSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `schema-${index}`;
      document.head.appendChild(script);
    });

    // Meta tags dynamiques
    const updateMetaTags = () => {
      // Open Graph
      const ogTags = [
        { property: 'og:title', content: 'LumiNéon - Néons Personnalisés Haut de Gamme | Fabricant Expert France' },
        { property: 'og:description', content: 'Créateur de néons personnalisés premium depuis 10 ans. Devis gratuit 24h, installation partout en France, garantie 2 ans. +500 créations réalisées.' },
        { property: 'og:image', content: 'https://lumineon.fr/og-image.jpg' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:type', content: 'website' }
      ];

      // Twitter Cards
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'LumiNéon - Néons Personnalisés Haut de Gamme' },
        { name: 'twitter:description', content: 'Créateur de néons personnalisés premium. Devis gratuit 24h, installation partout en France, garantie 2 ans.' },
        { name: 'twitter:image', content: 'https://lumineon.fr/og-image.jpg' }
      ];

      [...ogTags, ...twitterTags].forEach(tag => {
        let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          if (tag.property) {
            meta.setAttribute('property', tag.property);
          } else {
            meta.setAttribute('name', tag.name!);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', tag.content);
      });
    };

    updateMetaTags();

    // Nettoyage
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
};

export default SEOOptimizer;