import type { Project } from '../types';
import { site } from './site';

/**
 * Source of truth for project cards and case-study pages.
 * Content rule (Requirements §24): only verified facts. Do not add metrics,
 * users, results or a `status` unless they are confirmed.
 */
export const projects: Project[] = [
  {
    id: 'cuencaos',
    slug: 'cuencaos',
    index: '01',
    title: {
      es: 'CuencaOS — Plataforma de Datos Hídricos y Territoriales',
      en: 'CuencaOS — River Basin & Territorial Data Platform',
    },
    category: { es: 'Datos Geoespaciales & Web', en: 'Geospatial Data & Web' },
    summary: {
      es: 'Investigación, estructuración de datos hídricos en El Salvador/CA y desarrollo web.',
      en: 'Research, water data structuring across El Salvador/Central America, and modern web application development.',
    },
    motto: { es: 'Monitorea · Analiza · Protege', en: 'Monitor · Analyze · Protect' },
    badge: { es: 'Finalista StartupSTEM 2026', en: 'StartupSTEM 2026 Finalist' },
    badgeIcon: 'Award',
    role: {
      es: 'Investigación, estructuración de datos hídricos y desarrollo web de la plataforma.',
      en: 'Research, water data structuring, and web development of the platform.',
    },
    context: {
      es: 'Plataforma enfocada en datos hídricos y territoriales de El Salvador y Centroamérica. El proyecto fue seleccionado como finalista en StartupSTEM 2026.',
      en: 'Platform focused on water and territorial data for El Salvador and Central America. The project was selected as a finalist at StartupSTEM 2026.',
    },
    technologies: {
      es: ['Astro', 'Investigación de Datos', 'TypeScript', 'Vercel'],
      en: ['Astro', 'Data Research', 'TypeScript', 'Vercel'],
    },
    image: '/img/cuencaos.webp',
    imageAlt: {
      es: 'Captura de la plataforma web CuencaOS',
      en: 'Screenshot of the CuencaOS web platform',
    },
    imageWidth: 1400,
    imageHeight: 617,
    featured: true,
    caseStudy: true,
    githubProfileUrl: site.social.github,
    liveUrl: 'https://cuencaos.vercel.app',
  },
  {
    id: 'wuju',
    slug: 'wuju-cursor-buildathon',
    index: '02',
    title: { es: 'WUJU & 24h Cursor Buildathon', en: 'WUJU & 24h Cursor Buildathon' },
    category: { es: 'Innovación & Coordinación Técnica', en: 'Innovation & Tech Coordination' },
    summary: {
      es: 'Investigación, tecnología e innovación desde El Salvador; coordinación técnica y maratón de código de 24h.',
      en: 'Technology research and innovation from El Salvador; technical coordination and 24-hour coding sprint.',
    },
    badge: { es: 'Cofundadora & Investigadora', en: 'Co-Founder & Researcher' },
    badgeIcon: 'Sparkles',
    role: {
      es: 'Cofundadora e investigadora; coordinación técnica del maratón de código de 24 horas.',
      en: 'Co-founder and researcher; technical coordination of the 24-hour coding marathon.',
    },
    context: {
      es: 'WUJU es una iniciativa de investigación, tecnología e innovación desde El Salvador. Incluye el 24h Cursor Buildathon, un maratón de código de 24 horas.',
      en: 'WUJU is a research, technology, and innovation initiative from El Salvador. It includes the 24h Cursor Buildathon, a 24-hour coding marathon.',
    },
    technologies: {
      es: ['Coordinación Técnica', 'Investigación', 'Cursor', 'Desarrollo Web'],
      en: ['Tech Coordination', 'Research', 'Cursor', 'Web Development'],
    },
    image: '/img/wuju.webp',
    imageAlt: {
      es: 'Captura del sitio web de WUJU',
      en: 'Screenshot of the WUJU website',
    },
    imageWidth: 1400,
    imageHeight: 624,
    featured: true,
    caseStudy: true,
    liveUrl: 'https://wuju.dev',
  },
  {
    id: 'costos',
    slug: 'gestion-costos-inventarios',
    index: '03',
    title: {
      es: 'Gestión Analítica, Costos e Inventarios',
      en: 'Analytical Cost & Inventory Management',
    },
    category: { es: 'Finanzas & Operaciones Reales', en: 'Finance & Real Business Case' },
    summary: {
      es: 'Dirección contable y productiva de equipo comercial de alimentos: costos, inventarios, facturación y presupuestos.',
      en: 'Accounting and operational leadership for a food commercial team: costs, inventories, invoicing, and budgets.',
    },
    badge: { es: 'Caso de Negocio Real', en: 'Real Business Case' },
    badgeIcon: 'TrendingUp',
    role: {
      es: 'Dirección contable y productiva del equipo: costos, inventarios, facturación y presupuestos.',
      en: 'Accounting and operational leadership of the team: costs, inventories, invoicing, and budgets.',
    },
    context: {
      es: 'Caso de negocio real en un equipo comercial de alimentos. Por tratarse de información operativa privada, no hay enlaces públicos.',
      en: 'Real business case within a food commercial team. As it involves private operational data, there are no public links.',
    },
    technologies: {
      es: ['Excel Avanzado', 'Análisis de Costos', 'Control de Inventarios', 'Presupuestos'],
      en: ['Advanced Excel', 'Cost Analysis', 'Inventory Control', 'Budgeting'],
    },
    image: '/img/costos.webp',
    imageAlt: {
      es: 'Ilustración de un panel de costos e inventarios',
      en: 'Illustration of a cost and inventory dashboard',
    },
    imageWidth: 1376,
    imageHeight: 768,
    featured: true,
    caseStudy: true,
  },
];

export const getProjectBySlug = (slug: string | undefined): Project | undefined =>
  slug ? projects.find((p) => p.slug === slug) : undefined;
