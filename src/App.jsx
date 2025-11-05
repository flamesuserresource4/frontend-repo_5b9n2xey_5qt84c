import { useEffect } from 'react';
import Hero from './components/Hero';
import PillarsAndScience from './components/PillarsAndScience';
import ProductsShowcase from './components/ProductsShowcase';
import SocialProof from './components/SocialProof';

const COLORS = {
  cream: '#F5EDE3',
  ivory: '#FAF7F3',
  gold: '#C89B54',
  brown: '#3E2E1F',
};

export default function App() {
  useEffect(() => {
    document.title = '8th Wonder Pro Cosmetics — Luxury Bulgarian Skincare | Reveal Your Eighth Wonder';

    const metaDesc = document.querySelector('meta[name="description"]');
    const desc =
      'Professional, science-backed luxury skincare from Bulgaria. Anti-aging and lifting products with Matrixyl 3000, CoQ10, and multi-weight Hyaluronic Acid.';
    if (metaDesc) metaDesc.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }

    // JSON-LD Schema: Organization, Products, FAQ
    const scripts = [];

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '8th Wonder Pro Cosmetics',
      url: window.location.origin,
      logo: window.location.origin + '/logo.png',
      slogan: 'Reveal Your Eighth Wonder',
      brand: '8th Wonder Pro Cosmetics',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BG',
      },
    };

    const productNight = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Night Hydra Lift – Lifting Night Cream',
      description:
        'Luxurious regenerating night cream with lifting effect and triple hydration. Multi-weight HA, D-Panthenol, Niacinamide, Matrixyl 3000, CoQ10.',
      brand: '8th Wonder Pro Cosmetics',
      image: window.location.origin + '/logo.png',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BGN',
        price: '89',
        availability: 'https://schema.org/InStock',
      },
      countryOfOrigin: 'Bulgaria',
    };

    const productEye = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Eye Sculpt Illumine – Eye Contour Cream',
      description:
        'Luxury eye cream with firming, smoothing, and brightening effect. Multi-weight HA, Caffeine, Niacinamide, Matrixyl 3000.',
      brand: '8th Wonder Pro Cosmetics',
      image: window.location.origin + '/logo.png',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BGN',
        price: '69',
        availability: 'https://schema.org/InStock',
      },
      countryOfOrigin: 'Bulgaria',
    };

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How should I apply the products?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apply Eye Sculpt Illumine to the eye contour, then Night Hydra Lift to face, neck, and décolletage on cleansed skin.',
          },
        },
        {
          '@type': 'Question',
          name: 'When will I see results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clinical testing indicates visible improvements in firmness and radiance in as little as 7 days with daily use.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are these suitable for my skin type?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Formulated for women 30+ and suitable for most skin types. If sensitive, patch test on a small area first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do the products contain common allergens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Formulated thoughtfully; see individual ingredient lists. Avoid use if you have known sensitivities to listed components.',
          },
        },
        {
          '@type': 'Question',
          name: 'Delivery and returns?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We ship across the EU. Hassle-free returns within 30 days when products are unopened and in original condition.',
          },
        },
      ],
    };

    for (const data of [organization, productNight, productEye, faq]) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => {
      scripts.forEach((s) => document.head.removeChild(s));
    };
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.cream }}>
      <Hero />
      <PillarsAndScience />
      <ProductsShowcase />
      <SocialProof />
    </div>
  );
}
