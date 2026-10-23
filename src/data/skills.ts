import type { SkillCategory } from '../types';

/** Skills grouped by capability. No proficiency percentages (Requirements §5.3). */
export const skillCategories: SkillCategory[] = [
  {
    id: 'data-analysis',
    icon: 'BarChart3',
    title: { es: 'Data Analysis', en: 'Data Analysis' },
    description: {
      es: 'Modelado, limpieza y análisis cuantitativo de información.',
      en: 'Quantitative modeling, cleaning, and business analytics.',
    },
    skillIconsUrl: 'https://skillicons.dev/icons?i=py',
    badges: {
      es: ['Python', 'SQL Avanzado', 'Excel Modelado', 'Google Analytics'],
      en: ['Python', 'Advanced SQL', 'Excel Modeling', 'Google Analytics'],
    },
    gridClass: 'col-span-1 md:col-span-1 lg:col-span-2',
  },
  {
    id: 'software-dev',
    icon: 'Code2',
    title: { es: 'Software Development', en: 'Software Development' },
    description: {
      es: 'Arquitectura web modular y lógica de programación estructurada.',
      en: 'Modular web architecture and structured programming logic.',
    },
    skillIconsUrl: 'https://skillicons.dev/icons?i=ts,js,cs,react,astro,nodejs',
    badges: {
      es: ['TypeScript', 'JavaScript', 'C#', 'React', 'Astro', 'Node.js'],
      en: ['TypeScript', 'JavaScript', 'C#', 'React', 'Astro', 'Node.js'],
    },
    gridClass: 'col-span-1 md:col-span-1 lg:col-span-2',
  },
  {
    id: 'databases',
    icon: 'Database',
    title: { es: 'Databases & Cloud', en: 'Databases & Cloud' },
    description: {
      es: 'Modelado relacional, consultas eficientes y servicios cloud.',
      en: 'Relational database schema design and cloud infrastructure.',
    },
    skillIconsUrl: 'https://skillicons.dev/icons?i=postgres,supabase,firebase',
    badges: {
      es: ['PostgreSQL', 'SQL Relacional', 'Supabase', 'Firebase'],
      en: ['PostgreSQL', 'Relational SQL', 'Supabase', 'Firebase'],
    },
    gridClass: 'col-span-1 md:col-span-1 lg:col-span-2',
  },
  {
    id: 'business-tools',
    icon: 'Briefcase',
    title: { es: 'Business & Productivity', en: 'Business & Productivity' },
    description: {
      es: 'Control contable, flujos de costos y herramientas de despliegue.',
      en: 'Cost governance, budgeting workflows, and deployment tools.',
    },
    skillIconsUrl: 'https://skillicons.dev/icons?i=git,github,vercel,vscode',
    badges: {
      es: ['Control de Costos', 'Presupuestos', 'Git & GitHub', 'Vercel', 'VS Code'],
      en: ['Cost Control', 'Budgeting', 'Git & GitHub', 'Vercel', 'VS Code'],
    },
    gridClass: 'col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2',
  },
  {
    id: 'ai-tools',
    icon: 'AI',
    title: { es: 'Herramientas de IA', en: 'AI Tools & Workflows' },
    description: {
      es: 'Aceleración de software, prototipado ágil e ingeniería de prompts.',
      en: 'Software acceleration, rapid prototyping, and prompt engineering.',
    },
    skillIconsUrl: null,
    badges: {
      es: ['Claude', 'Codex', 'Gemini', 'Cursor', 'Antigravity', 'Google AI Studio'],
      en: ['Claude', 'Codex', 'Gemini', 'Cursor', 'Antigravity', 'Google AI Studio'],
    },
    gridClass:
      'col-span-1 md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto lg:w-full lg:max-w-none lg:mx-0 lg:col-span-2',
  },
];
