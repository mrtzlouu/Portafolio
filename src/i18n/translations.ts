import type { Language } from '../types';

export interface Translations {
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    goHome: string;
    logoAlt: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    stack: string;
    credentials: string;
    contact: string;
    getInTouch: string;
    langLabel: string;
    themeToggle: string;
  };
  hero: {
    pill: string;
    titleFirst: string;
    titleLast: string;
    headline: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
    location: string;
    availability: string;
  };
  about: {
    badge: string;
    heading: string;
    lead: string;
    bioParagraph1: string;
    bioParagraph2: string;
    photoAlt: string;
    available: string;
    cards: {
      devTitle: string;
      devDesc: string;
      dataTitle: string;
      dataDesc: string;
      leadTitle: string;
      leadDesc: string;
    };
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    viewProject: string;
    viewCaseStudy: string;
    carouselLabel: string;
    prev: string;
    next: string;
    goTo: string;
    githubProfile: string;
  };
  stack: {
    badge: string;
    heading: string;
    subheading: string;
    logosAlt: string;
  };
  credentials: {
    badge: string;
    heading: string;
    subheading: string;
    credentialLink: string;
    viewDetails: string;
    competenciesTitle: string;
  };
  footer: {
    badge: string;
    heading: string;
    lead: string;
    sendEmail: string;
    downloadCV: string;
    locationLabel: string;
    locationVal: string;
    emailLabel: string;
    phoneLabel: string;
    copied: string;
    copy: string;
    copyEmail: string;
    copyPhone: string;
    copyFailed: string;
    copyright: string;
    backToTop: string;
    newTab: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    profileTitle: string;
    profileText: string;
    educationTitle: string;
    certTitle: string;
    skillsTitle: string;
    downloadBtn: string;
    status: string;
    close: string;
  };
  caseStudy: {
    back: string;
    overview: string;
    context: string;
    role: string;
    technologies: string;
    links: string;
    liveSite: string;
    repository: string;
    privateNote: string;
    share: string;
    shareCopied: string;
    shareFailed: string;
    otherProjects: string;
    caseStudyLabel: string;
  };
  notFound: {
    code: string;
    title: string;
    text: string;
    projectTitle: string;
    projectText: string;
    home: string;
    projects: string;
  };
  errors: {
    title: string;
    text: string;
    reload: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    a11y: {
      skipToContent: 'Saltar al contenido principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      mainNav: 'Navegación principal',
      goHome: 'Ir al inicio',
      logoAlt: 'Logo Lourdes Escobar',
    },
    seo: {
      homeTitle: 'Lourdes Escobar | Portafolio - Datos, Software & Negocios',
      homeDescription:
        'Portafolio de Lourdes Escobar: análisis de datos, desarrollo de software con Python, SQL y TypeScript, y visión financiera y de negocios. Santa Ana, El Salvador.',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      stack: 'Tech Stack',
      credentials: 'Credenciales',
      contact: 'Contacto',
      getInTouch: 'Contactar',
      langLabel: 'Idioma',
      themeToggle: 'Cambiar tema',
    },
    hero: {
      pill: 'Estudiante · Desarrolladora · Analista de datos',
      titleFirst: 'Lourdes',
      titleLast: 'Escobar',
      headline: 'Convierto datos y lógica en decisiones que tienen sentido.',
      description:
        'Desarrollo software y analizo información con una mirada técnica, financiera y de negocio.',
      viewProjects: 'Ver proyectos',
      downloadCV: 'Descargar CV',
      location: 'El Salvador',
      availability: 'Disponible para pasantías, medio tiempo y proyectos',
    },
    about: {
      badge: 'Perfil & Filosofía',
      heading: 'Tecnología, datos y una perspectiva de negocio.',
      lead: 'Me interesa transformar ideas y problemas reales en soluciones digitales funcionales.',
      bioParagraph1:
        'Combino la formación en Ingeniería en Desarrollo de Software en UNICAES con una sólida base técnica en contaduría y finanzas. Esta visión dual me permite diseñar software robusto entendiendo con precisión la rentabilidad, los costos operativos y el impacto en el negocio.',
      bioParagraph2:
        'Como cofundadora de WUJU y finalista en StartupSTEM 2026 con el proyecto CuencaOS, cuento con experiencia coordinando equipos técnicos, diseñando soluciones basadas en datos y comunicando proyectos ante paneles evaluadores.',
      photoAlt: 'Retrato profesional de Lourdes Escobar',
      available: 'Disponible',
      cards: {
        devTitle: 'Desarrollo de Software',
        devDesc:
          'Estudiante activa en UNICAES con dominio en Python, TypeScript, Astro y arquitecturas web conectadas a bases de datos relacionales.',
        dataTitle: 'Análisis & Finanzas',
        dataDesc:
          'Bachillerato técnico en Contaduría. Experiencia práctica en control de costos, inventarios, flujos presupuestarios y Excel avanzado.',
        leadTitle: 'Liderazgo & Pitch',
        leadDesc:
          'Cofundadora de WUJU y finalista en StartupSTEM 2026. Capacidad para articular soluciones complejas ante paneles técnicos y directivos.',
      },
    },
    projects: {
      badge: 'Casos Reales & Colaboraciones',
      heading: 'Proyectos destacados',
      subheading: 'Desarrollo web, datos geoespaciales y control de costos',
      viewProject: 'Ver proyecto',
      viewCaseStudy: 'Caso de estudio',
      carouselLabel: 'Carrusel de proyectos destacados',
      prev: 'Proyecto anterior',
      next: 'Siguiente proyecto',
      goTo: 'Ir al proyecto',
      githubProfile: 'Perfil de GitHub',
    },
    stack: {
      badge: 'Herramientas & Capacidades',
      heading: 'Tech Stack',
      subheading: 'Organizado por capacidades técnicas y de negocio',
      logosAlt: 'Logos de tecnologías',
    },
    credentials: {
      badge: 'Formación & Logros',
      heading: 'Credenciales',
      subheading: 'Base académica formal respaldada por certificaciones técnicas',
      credentialLink: 'Ver credencial',
      viewDetails: 'Ver detalles de la credencial',
      competenciesTitle: 'Competencias clave',
    },
    footer: {
      badge: 'Contacto Directo',
      heading: '¿Construimos algo juntos?',
      lead: 'Disponible para pasantías, medio tiempo o proyectos de desarrollo y análisis de datos.',
      sendEmail: 'Enviar correo',
      downloadCV: 'Descargar CV',
      locationLabel: 'Ubicación',
      locationVal: 'Santa Ana, El Salvador',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono / WhatsApp',
      copied: 'Copiado',
      copy: 'Copiar',
      copyEmail: 'Copiar correo electrónico',
      copyPhone: 'Copiar número de teléfono',
      copyFailed: 'No se pudo copiar',
      copyright: 'Lourdes Escobar — {year} · Datos, Software & Negocios',
      backToTop: 'Volver arriba',
      newTab: '(se abre en una pestaña nueva)',
    },
    cvModal: {
      title: 'Currículum Vitae',
      subtitle: 'Lourdes Alejandra Escobar Martínez',
      profileTitle: 'Perfil Estratégico',
      profileText:
        'Desarrollo de software y análisis de información combinando programación (Python, SQL, Web moderna) con contabilidad financiera (Costos, Inventarios, Presupuestos, Excel Avanzado) y liderazgo técnico.',
      educationTitle: 'Educación',
      certTitle: 'Certificaciones Clave',
      skillsTitle: 'Competencias Principales',
      downloadBtn: 'Descargar CV (.txt)',
      status: 'Disponible para pasantías y proyectos',
      close: 'Cerrar',
    },
    caseStudy: {
      back: 'Volver a proyectos',
      overview: 'Resumen',
      context: 'Contexto',
      role: 'Rol y responsabilidades',
      technologies: 'Tecnologías y enfoques',
      links: 'Enlaces',
      liveSite: 'Sitio en vivo',
      repository: 'Repositorio',
      privateNote: 'Proyecto privado: no hay enlaces públicos disponibles.',
      share: 'Compartir',
      shareCopied: 'Enlace copiado',
      shareFailed: 'No se pudo compartir',
      otherProjects: 'Otros proyectos',
      caseStudyLabel: 'Caso de estudio',
    },
    notFound: {
      code: '404',
      title: 'Página no encontrada',
      text: 'La página que buscas no existe o fue movida.',
      projectTitle: 'Proyecto no encontrado',
      projectText: 'No existe un caso de estudio con esa dirección.',
      home: 'Ir al inicio',
      projects: 'Ver proyectos',
    },
    errors: {
      title: 'Algo salió mal',
      text: 'Ocurrió un error inesperado al mostrar esta sección.',
      reload: 'Recargar página',
    },
  },
  en: {
    a11y: {
      skipToContent: 'Skip to main content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNav: 'Main navigation',
      goHome: 'Go to home',
      logoAlt: 'Lourdes Escobar logo',
    },
    seo: {
      homeTitle: 'Lourdes Escobar | Portfolio - Data, Software & Business',
      homeDescription:
        'Portfolio of Lourdes Escobar: data analysis, software development with Python, SQL and TypeScript, and a financial and business mindset. Santa Ana, El Salvador.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      stack: 'Tech Stack',
      credentials: 'Credentials',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      langLabel: 'Language',
      themeToggle: 'Toggle theme',
    },
    hero: {
      pill: 'Student · Developer · Data Analyst',
      titleFirst: 'Lourdes',
      titleLast: 'Escobar',
      headline: 'Turning data and programming logic into decisions that make sense.',
      description:
        'Building software and analyzing data with a technical, financial, and business mindset.',
      viewProjects: 'View projects',
      downloadCV: 'Download CV',
      location: 'El Salvador',
      availability: 'Available for internships, part-time & projects',
    },
    about: {
      badge: 'Profile & Philosophy',
      heading: 'Technology, data, and a business perspective.',
      lead: 'Passionate about translating real-world problems and ideas into functional digital solutions.',
      bioParagraph1:
        'I combine Software Engineering training at UNICAES with a strong technical background in accounting and finance. This dual perspective enables me to build robust software while deeply understanding profitability, operating costs, and business impact.',
      bioParagraph2:
        'As co-founder of WUJU and finalist at StartupSTEM 2026 with the CuencaOS project, I have experience coordinating technical teams, designing data-driven solutions, and presenting projects to evaluation panels.',
      photoAlt: 'Professional portrait of Lourdes Escobar',
      available: 'Available',
      cards: {
        devTitle: 'Software Development',
        devDesc:
          'Active Software Engineering student at UNICAES with proficiency in Python, TypeScript, Astro, and cloud-connected relational databases.',
        dataTitle: 'Analytics & Finance',
        dataDesc:
          'Technical High School degree in Accounting. Practical experience in cost control, inventory rotation, budgeting, and Advanced Excel.',
        leadTitle: 'Leadership & Pitch',
        leadDesc:
          'Co-founder of WUJU and finalist at StartupSTEM 2026. Proven ability to articulate complex technical solutions to executive and engineering panels.',
      },
    },
    projects: {
      badge: 'Featured Work & Impact',
      heading: 'Featured projects',
      subheading: 'Web engineering, geospatial data, and cost control',
      viewProject: 'View project',
      viewCaseStudy: 'Case study',
      carouselLabel: 'Featured projects carousel',
      prev: 'Previous project',
      next: 'Next project',
      goTo: 'Go to project',
      githubProfile: 'GitHub profile',
    },
    stack: {
      badge: 'Capabilities & Tools',
      heading: 'Tech Stack',
      subheading: 'Structured by technical capabilities and business domains',
      logosAlt: 'technology logos',
    },
    credentials: {
      badge: 'Education & Honors',
      heading: 'Credentials',
      subheading: 'Formal academic background reinforced by industry technical certifications',
      credentialLink: 'View credential',
      viewDetails: 'View credential details',
      competenciesTitle: 'Key competencies',
    },
    footer: {
      badge: 'Direct Contact',
      heading: "Let's build something meaningful.",
      lead: 'Available for internships, part-time roles, or data analysis and software development projects.',
      sendEmail: 'Send email',
      downloadCV: 'Download CV',
      locationLabel: 'Location',
      locationVal: 'Santa Ana, El Salvador',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      copied: 'Copied',
      copy: 'Copy',
      copyEmail: 'Copy email address',
      copyPhone: 'Copy phone number',
      copyFailed: 'Could not copy',
      copyright: 'Lourdes Escobar — {year} · Data, Software & Business',
      backToTop: 'Back to top',
      newTab: '(opens in a new tab)',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      subtitle: 'Lourdes Alejandra Escobar Martínez',
      profileTitle: 'Strategic Profile',
      profileText:
        'Software development and data analysis integrating engineering (Python, SQL, Modern Web) with financial accounting (Costs, Inventories, Budgets, Advanced Excel) and demonstrated technical leadership.',
      educationTitle: 'Education',
      certTitle: 'Key Certifications',
      skillsTitle: 'Core Competencies',
      downloadBtn: 'Download CV (.txt)',
      status: 'Available for internships and projects',
      close: 'Close',
    },
    caseStudy: {
      back: 'Back to projects',
      overview: 'Overview',
      context: 'Context',
      role: 'Role & responsibilities',
      technologies: 'Technologies & methods',
      links: 'Links',
      liveSite: 'Live site',
      repository: 'Repository',
      privateNote: 'Private project: no public links are available.',
      share: 'Share',
      shareCopied: 'Link copied',
      shareFailed: 'Could not share',
      otherProjects: 'Other projects',
      caseStudyLabel: 'Case study',
    },
    notFound: {
      code: '404',
      title: 'Page not found',
      text: "The page you're looking for doesn't exist or has been moved.",
      projectTitle: 'Project not found',
      projectText: 'There is no case study at this address.',
      home: 'Go home',
      projects: 'View projects',
    },
    errors: {
      title: 'Something went wrong',
      text: 'An unexpected error occurred while displaying this section.',
      reload: 'Reload page',
    },
  },
};
