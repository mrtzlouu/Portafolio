/**
 * Single source of truth for public profile and contact data.
 * Only information intended to be public should live here.
 */
export const site = {
  name: 'Lourdes Escobar',
  fullName: 'Lourdes Alejandra Escobar Martínez',
  jobTitle: {
    es: 'Análisis de datos & Desarrollo de Software',
    en: 'Data Analysis & Software Development',
  },
  location: 'Santa Ana, El Salvador',
  email: 'lourdesalejandraescobar.06@gmail.com',
  phoneDisplay: '+503 6026-6534',
  phoneHref: 'tel:+50360266534',
  social: {
    github: 'https://github.com/mrtzlouu',
    linkedin: 'https://www.linkedin.com/in/lourdes-alejandra-escobar-mart%C3%ADnez',
  },
  /**
   * Production origin without trailing slash. Configure VITE_SITE_URL in `.env`
   * (see `.env.example`); the fallback is only a placeholder.
   */
  url: (import.meta.env.VITE_SITE_URL || 'https://lourdes-escobar.vercel.app').replace(/\/$/, ''),
  ogImage: '/og-image.jpg',
  year: '2026',
} as const;

export const absoluteUrl = (path = '/'): string =>
  `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
