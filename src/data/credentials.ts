import type { Credential } from '../types';

/**
 * Verifiable credentials only. Add `date` / `credentialUrl` once confirmed;
 * they are rendered automatically when present.
 */
export const credentials: Credential[] = [
  {
    id: 'startupstem-2026',
    kind: 'achievement',
    title: { es: 'Finalista StartupSTEM 2026', en: 'StartupSTEM 2026 Finalist' },
    institution: { es: 'Proyecto CuencaOS', en: 'CuencaOS Project' },
    tag: { es: 'Innovación & Territorio', en: 'Innovation & Territory' },
    iconName: 'Award',
    date: '2026',
    description: {
      es: 'Selección como equipo finalista en la edición 2026 de StartupSTEM con la plataforma de investigación y análisis de datos territoriales e hídricos CuencaOS.',
      en: 'Selected as a finalist team in the 2026 StartupSTEM competition with the CuencaOS territorial and water data analysis platform.',
    },
    competencies: {
      es: ['Investigación STEM', 'Pitch Técnico', 'Coordinación de Equipo', 'Estructuración de Datos'],
      en: ['STEM Research', 'Technical Pitch', 'Team Coordination', 'Data Structuring'],
    },
  },
  {
    id: 'it-specialist-python',
    kind: 'certification',
    title: { es: 'IT Specialist: Programación en Python', en: 'IT Specialist: Python Programming' },
    institution: { es: 'Certificación Oficial', en: 'Official Certification' },
    tag: { es: 'Desarrollo & Backend', en: 'Development & Backend' },
    iconName: 'CheckCircle2',
    description: {
      es: 'Certificación técnica oficial en programación en Python, validando dominio en lógica algorítmica, estructuras de datos, manipulación de archivos y programación modular.',
      en: 'Official technical certification in Python programming, validating proficiency in algorithmic logic, data structures, file handling, and modular programming.',
    },
    competencies: {
      es: ['Python', 'Estructuras de Datos', 'Lógica Algorítmica', 'Programación Modular'],
      en: ['Python', 'Data Structures', 'Algorithmic Logic', 'Modular Programming'],
    },
  },
  {
    id: 'unicaes-software',
    kind: 'education',
    title: {
      es: 'Ingeniería en Desarrollo de Software',
      en: 'B.S. in Software Development Engineering',
    },
    institution: { es: 'UNICAES (Cursando)', en: 'UNICAES (In progress)' },
    tag: { es: 'Grado Académico', en: 'Academic Degree' },
    iconName: 'GraduationCap',
    description: {
      es: 'Formación universitaria en UNICAES orientada al ciclo de vida del software, desarrollo web y móvil, bases de datos relacionales y análisis de sistemas computacionales.',
      en: 'University training at UNICAES focused on the software lifecycle, web and mobile development, relational databases, and computational systems analysis.',
    },
    competencies: {
      es: ['Ingeniería de Software', 'Bases de Datos Relacionales', 'Arquitectura Web', 'Programación Estructurada'],
      en: ['Software Engineering', 'Relational Databases', 'Web Architecture', 'Structured Programming'],
    },
  },
  {
    id: 'bachillerato-contaduria',
    kind: 'education',
    title: {
      es: 'Bachillerato Técnico en Contaduría',
      en: 'Technical High School Degree in Accounting',
    },
    institution: { es: 'CEC Juan XXIII', en: 'CEC Juan XXIII' },
    tag: { es: 'Finanzas & Costos', en: 'Finance & Costs' },
    iconName: 'Calculator',
    description: {
      es: 'Formación técnica media con sólida base en contabilidad de costos, libros contables, cálculo de nóminas, presupuestos y control de inventarios comerciales.',
      en: 'Technical vocational education with a solid foundation in cost accounting, financial ledgers, payroll calculation, budgeting, and commercial inventory control.',
    },
    competencies: {
      es: ['Contabilidad Financiera', 'Control de Costos', 'Presupuestos', 'Inventarios y Facturación'],
      en: ['Financial Accounting', 'Cost Control', 'Budgeting', 'Inventory & Invoicing'],
    },
  },
  {
    id: 'google-activate',
    kind: 'certification',
    title: { es: 'Marketing Digital', en: 'Digital Marketing Certification' },
    institution: { es: 'Google Activate', en: 'Google Activate' },
    tag: { es: 'Estrategia Digital', en: 'Digital Strategy' },
    iconName: 'BarChart2',
    description: {
      es: 'Acreditación en marketing y estrategia digital: analítica de tráfico, comercio electrónico, posicionamiento orgánico en buscadores y presencia en canales digitales.',
      en: 'Accreditation in digital marketing and strategy: traffic analytics, e-commerce fundamentals, search engine optimization, and digital channel presence.',
    },
    competencies: {
      es: ['Google Analytics', 'Estrategia Digital', 'Optimización Web', 'Métricas de Rendimiento'],
      en: ['Google Analytics', 'Digital Strategy', 'Web Optimization', 'Performance Metrics'],
    },
  },
  {
    id: 'english-b2',
    kind: 'language',
    title: { es: 'English Extension Program (B2+)', en: 'English Extension Program (B2+)' },
    institution: { es: 'Escuela Interamericana', en: 'Escuela Interamericana' },
    tag: { es: 'Bilingüe Profesional', en: 'Professional Bilingual' },
    iconName: 'Languages',
    description: {
      es: 'Programa intensivo de extensión en idioma inglés con nivel intermedio-avanzado (B2+), facultando para redacción técnica, lectura de documentación y comunicación profesional fluida.',
      en: 'Intensive English extension program with upper-intermediate (B2+) proficiency, enabling technical writing, reading documentation, and fluent professional communication.',
    },
    competencies: {
      es: ['Inglés Profesional B2+', 'Documentación Técnica', 'Comunicación Oral y Escrita'],
      en: ['Professional English B2+', 'Technical Documentation', 'Oral & Written Communication'],
    },
  },
];
