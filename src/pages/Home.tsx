import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { TechStack } from '../components/TechStack';
import { Credenciales } from '../components/Credenciales';
import { SEO } from '../components/common/SEO';
import { useApp } from '../context/AppContext';
import { absoluteUrl, site } from '../data/site';

export const Home: React.FC = () => {
  const { lang, t } = useApp();
  const location = useLocation();

  // Smooth scroll to hash anchor on mount or when hash changes
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Small delay to allow layout to settle
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  // Structured data (schema.org Person & WebSite) per Requirements §12
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      alternateName: site.fullName,
      jobTitle: site.jobTitle[lang],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santa Ana',
        addressCountry: 'SV',
      },
      email: site.email,
      url: site.url,
      sameAs: [site.social.github, site.social.linkedin],
      knowsAbout: [
        'Python',
        'SQL',
        'TypeScript',
        'React',
        'Astro',
        'Data Analysis',
        'Financial Cost Management',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${site.name} Portfolio`,
      url: site.url,
      inLanguage: ['es', 'en'],
      author: {
        '@type': 'Person',
        name: site.name,
      },
    },
  ];

  return (
    <>
      <SEO
        title={t.seo.homeTitle}
        description={t.seo.homeDescription}
        path="/"
        image={absoluteUrl('/img/cuencaos.webp')}
        type="website"
        jsonLd={jsonLd}
      />
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Credenciales />
    </>
  );
};
