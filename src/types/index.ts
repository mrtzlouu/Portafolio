export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

/** A value that has one variant per supported UI language. */
export type Localized<T> = Record<Language, T>;

export interface PilarItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  kpis: { label: string; value: string }[];
}

export type CredentialIcon =
  | 'Award'
  | 'CheckCircle2'
  | 'GraduationCap'
  | 'Calculator'
  | 'BarChart2'
  | 'Languages';

export type CredentialKind = 'achievement' | 'certification' | 'education' | 'language';

export interface Credential {
  id: string;
  kind: CredentialKind;
  title: Localized<string>;
  institution: Localized<string>;
  tag: Localized<string>;
  iconName: CredentialIcon;
  /** Only set when verifiable (ISO date or year). */
  date?: string;
  credentialUrl?: string;
  description?: Localized<string>;
  competencies?: Localized<string[]>;
}

export type ProjectStatus = 'concept' | 'in-development' | 'completed' | 'maintained';
export type ProjectBadgeIcon = 'Award' | 'Sparkles' | 'TrendingUp';

export interface Project {
  id: string;
  slug: string;
  /** Display index shown as a watermark on the card (e.g. "01"). */
  index: string;
  title: Localized<string>;
  category: Localized<string>;
  summary: Localized<string>;
  motto?: Localized<string>;
  badge: Localized<string>;
  badgeIcon: ProjectBadgeIcon;
  role: Localized<string>;
  context: Localized<string>;
  technologies: Localized<string[]>;
  image: string;
  imageAlt: Localized<string>;
  imageWidth: number;
  imageHeight: number;
  /** Leave undefined when the status has not been confirmed. Never guess. */
  status?: ProjectStatus;
  featured: boolean;
  caseStudy: boolean;
  repositoryUrl?: string;
  /** Public GitHub profile/organization when there is no public repository. */
  githubProfileUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  icon: 'BarChart3' | 'Code2' | 'Database' | 'Briefcase' | 'AI';
  title: Localized<string>;
  description: Localized<string>;
  skillIconsUrl: string | null;
  badges: Localized<string[]>;
  gridClass: string;
}

export type CuencaTab = 'Personas' | 'Datos' | 'Territorio' | 'Soluciones';

export type FinMode = 'real' | 'optimizado' | 'proyeccion';
