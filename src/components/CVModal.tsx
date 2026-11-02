import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
  Briefcase,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useDialog } from '../hooks/useDialog';
import { site } from '../data/site';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useApp();
  const modalRef = useRef<HTMLDivElement>(null);

  useDialog(isOpen, onClose, modalRef, { lockScroll: true, trapFocus: true });

  if (!isOpen) return null;

  const handleDownload = () => {
    const isEn = lang === 'en';
    const cvText = isEn
      ? `LOURDES ALEJANDRA ESCOBAR MARTÍNEZ
Santa Ana, El Salvador | ${site.phoneDisplay} | ${site.email}
LinkedIn: ${site.social.linkedin}
GitHub: ${site.social.github}
CuencaOS: https://cuencaos.vercel.app

PROFESSIONAL SUMMARY
Bilingual (Spanish and English) Software Development Engineering student with a technical background in accounting and experience in research and web development. Former researcher at WUJU and developer of CuencaOS — finalist at StartupSTEM 2026. Known for combining programming logic and databases (Python, SQL) with accounting numerical acumen (costs, inventory, advanced Excel).

PROJECTS & EXPERIENCE
• WUJU (wuju.dev) — Researcher (Mar 2026 – Sep 2026). Research, technology, and innovation from El Salvador.
• CuencaOS — Researcher & Web Developer (Jun 2026 – Present). Researched and developed the territorial and water monitoring web platform (cuencaos.vercel.app) in El Salvador and Central America ("Monitor · Analyze · Protect"). Finalist at StartupSTEM 2026.
  - Research to define site contents; Spanish-first development with Astro, deployed on Vercel, with sections for People, Data, Territory, and Solutions.
• Food Sales Team Leader — Directed the team and managed operational accounting, cost management, inventory, and budgeting.

COMPETITIONS & ACTIVITIES
• StartupSTEM 2026 — Finalist with the CuencaOS project.
• Cursor Buildathon (July 2026) — Participant in the 24-hour coding marathon.

SKILLS
• Languages: C#, Python, JavaScript, TypeScript, SQL, HTML, CSS
• Web Development: React, Astro, Node.js, APIs, databases (Supabase, Firebase)
• Tools: Git, GitHub, VS Code, Cursor, Vercel, Notion, Trello, Canva, Google Analytics
• Accounting: Accounting software, costs, inventory control, invoicing, budgeting, Advanced Excel
• Soft Skills: Leadership, public speaking & pitching, presentations, research, technical writing, typing
• Languages: Bilingual — Spanish (Native), English (B2+)

EDUCATION
• Universidad Católica de El Salvador (UNICAES) — B.S. in Software Development Engineering (2025-2029, in progress)
• Escuela Interamericana — English Extension Program (2022-2026, pending graduation)
• Complejo Educativo Católico Juan XXIII — Technical High School Degree in Accounting (2022-2024)

COURSES & CERTIFICATIONS
• Information Technology Specialist — Python Programming (June – September 2023)
• Google Activate — Digital Marketing (September – October 2024)
`
      : `LOURDES ALEJANDRA ESCOBAR MARTÍNEZ
Santa Ana, El Salvador | ${site.phoneDisplay} | ${site.email}
LinkedIn: ${site.social.linkedin}
GitHub: ${site.social.github}
CuencaOS: https://cuencaos.vercel.app

PERFIL PROFESIONAL
Estudiante bilingüe (español e inglés) de Ingeniería en Desarrollo de Software, con formación técnica en contaduría y experiencia en investigación y desarrollo web. Investigadora en WUJU y desarrolladora de CuencaOS —finalista en StartupSTEM 2026—. Me caracteriza combinar la lógica de programación y bases de datos (Python, SQL) con la visión numérica de la contaduría (costos, inventarios, Excel avanzado).

PROYECTOS Y EXPERIENCIA
• WUJU (wuju.dev) — Investigadora (mar 2026 – sep 2026). Investigación, tecnología e innovación desde El Salvador.
• CuencaOS — Investigadora y Desarrolladora Web (jun 2026 – presente). Investigué y desarrollé la plataforma web (cuencaos.vercel.app) sobre agua y territorio en El Salvador y Centroamérica ("Monitorea · Analiza · Protege"). Finalista de StartupSTEM 2026.
  - Investigación para definir el contenido del sitio; desarrollo en español con Astro, publicado en Vercel, con secciones de Personas, Datos, Territorio y Soluciones.
• Líder de equipo de venta de productos alimenticios — Dirigí al equipo y me encargué de la parte contable y productiva del negocio.

COMPETENCIAS Y ACTIVIDADES
• StartupSTEM 2026 — Finalista con el proyecto CuencaOS.
• Buildathon de Cursor (julio 2026) — Participante en maratón de desarrollo de 24 horas.

HABILIDADES
• Lenguajes: C#, Python, JavaScript, TypeScript, SQL, HTML, CSS
• Desarrollo web: React, Astro, Node.js, APIs, bases de datos (Supabase, Firebase)
• Herramientas: Git, GitHub, VS Code, Cursor, Vercel, Notion, Trello, Canva, Google Analytics
• Contabilidad: Programas contables, costos, inventarios, facturación, presupuestos, Excel avanzado
• Habilidades blandas: Liderazgo, hablar en público y pitch, presentaciones, investigación, redacción, mecanografía
• Idiomas: Bilingüe — Español (nativo), Inglés (B2+)

EDUCACIÓN
• Universidad Católica de El Salvador (UNICAES) — Ingeniería en Desarrollo de Software (2025-2029, cursando)
• Escuela Interamericana — English Extension Program (2022-2026, pendiente de graduación)
• Complejo Educativo Católico Juan XXIII — Bachillerato Técnico Vocacional, opción Contaduría (2022-2024)

CURSOS Y CERTIFICACIONES
• Information Technology Specialist — Programación en Python (junio – septiembre 2023)
• Google Activate — Marketing Digital (septiembre – octubre 2024)
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isEn ? 'Lourdes_Escobar_CV_EN.txt' : 'Lourdes_Escobar_CV_ES.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0E21]/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="presentation"
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#161B3D] rounded-3xl p-6 sm:p-8 border border-[#DCE4FB] dark:border-[#273063] shadow-2xl text-[#171B4B] dark:text-[#F0F3FF] outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-[#DCE4FB] dark:border-[#273063]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] border border-[#B9C6FA] dark:border-[#37408F]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-xl font-bold font-heading">{t.cvModal.title}</h3>
              <p className="text-xs font-mono text-[#8490B8] dark:text-[#8390BE]">{t.cvModal.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl bg-[#F0F1FF] dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#AAB5DE] hover:text-[#171B4B] dark:hover:text-white hover:bg-[#E4E9FF] dark:hover:bg-[#273063] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
            aria-label={t.cvModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-5 space-y-6 text-sm">
          {/* Quick Contact & Links Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-2xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063] text-xs font-mono text-[#4F5D91] dark:text-[#AAB5DE]">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span className="truncate">{site.location}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Mail className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span className="truncate">{site.email}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Phone className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span>{site.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Globe className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <a 
                href="https://cuencaos.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-[#555DD6] dark:text-[#9BAFF5] truncate"
              >
                CuencaOS.vercel.app
              </a>
            </div>
          </div>

          {/* Core Profile */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold">
              {t.cvModal.profileTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#4F5D91] dark:text-[#AAB5DE] leading-relaxed bg-[#E4E9FF]/50 dark:bg-[#1E2552]/60 p-4 rounded-2xl border border-[#DCE4FB] dark:border-[#273063]">
              {t.cvModal.profileText}
            </p>
          </div>

          {/* Proyectos y Experiencia */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              {t.cvModal.experienceTitle}
            </h4>
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-semibold text-xs sm:text-sm">
                    CuencaOS — {lang === 'en' ? 'Researcher & Web Developer' : 'Investigadora y Desarrolladora Web'}
                  </span>
                  <span className="font-mono text-[11px] text-[#555DD6] dark:text-[#9BAFF5] px-2 py-0.5 rounded-md bg-[#E4E9FF] dark:bg-[#1E2552]">
                    {lang === 'en' ? 'Jun 2026 – Present' : 'jun 2026 – presente'}
                  </span>
                </div>
                <p className="text-xs text-[#4F5D91] dark:text-[#AAB5DE] mt-1 leading-relaxed">
                  {lang === 'en'
                    ? 'Researched and built the water and territorial monitoring web platform (cuencaos.vercel.app). Finalist at StartupSTEM 2026. Built with Astro, TypeScript, and deployed on Vercel.'
                    : 'Investigué y desarrollé la plataforma web (cuencaos.vercel.app) sobre agua y territorio en El Salvador y Centroamérica ("Monitorea · Analiza · Protege"). Finalista de StartupSTEM 2026. Desarrollo con Astro, TypeScript y Vercel.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-semibold text-xs sm:text-sm">
                    WUJU (wuju.dev) — {lang === 'en' ? 'Researcher' : 'Investigadora'}
                  </span>
                  <span className="font-mono text-[11px] text-[#555DD6] dark:text-[#9BAFF5] px-2 py-0.5 rounded-md bg-[#E4E9FF] dark:bg-[#1E2552]">
                    {lang === 'en' ? 'Mar 2026 – Sep 2026' : 'mar 2026 – sep 2026'}
                  </span>
                </div>
                <p className="text-xs text-[#4F5D91] dark:text-[#AAB5DE] mt-1 leading-relaxed">
                  {lang === 'en'
                    ? 'Technology, innovation, and digital impact research from El Salvador. Participant in the 24-hour Cursor Buildathon coding sprint.'
                    : 'Investigación, tecnología e innovación desde El Salvador. Participante en la maratón de desarrollo de 24 horas del Buildathon de Cursor.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-semibold text-xs sm:text-sm">
                    {lang === 'en' ? 'Food Products Sales Team Leader' : 'Líder de equipo de venta de productos alimenticios'}
                  </span>
                  <span className="font-mono text-[11px] text-[#8490B8] dark:text-[#8390BE] px-2 py-0.5 rounded-md bg-[#E4E9FF]/60 dark:bg-[#1E2552]">
                    {lang === 'en' ? 'Commercial Operations' : 'Operación Comercial'}
                  </span>
                </div>
                <p className="text-xs text-[#4F5D91] dark:text-[#AAB5DE] mt-1 leading-relaxed">
                  {lang === 'en'
                    ? 'Directed the team and led operational accounting, cost management, inventory rotation, and budgeting.'
                    : 'Dirigí al equipo y me encargué de la parte contable, costos, inventarios, facturación y presupuestos del negocio.'}
                </p>
              </div>
            </div>
          </div>

          {/* Education & Courses/Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                {t.cvModal.educationTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">{lang === 'en' ? 'B.S. in Software Development Engineering' : 'Ingeniería en Desarrollo de Software'}</div>
                  <div className="text-[#555DD6] dark:text-[#8198EF] font-mono text-[11px]">UNICAES (2025-2029, {lang === 'en' ? 'in progress' : 'cursando'})</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">English Extension Program (B2+)</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">Escuela Interamericana (2022-2026)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">{lang === 'en' ? 'Technical High School Degree in Accounting' : 'Bachillerato Técnico Vocacional en Contaduría'}</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">Complejo Educativo Católico Juan XXIII (2022-2024)</div>
                </div>
              </div>
            </div>

            {/* Courses & Competitions */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {t.cvModal.certTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">StartupSTEM 2026 — {lang === 'en' ? 'Finalist' : 'Finalista'}</div>
                  <div className="text-[#555DD6] dark:text-[#8198EF] font-mono text-[11px]">{lang === 'en' ? 'CuencaOS Project' : 'Proyecto CuencaOS'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">IT Specialist: Python Programming</div>
                  <div className="text-[#555DD6] dark:text-[#8198EF] font-mono text-[11px]">{lang === 'en' ? 'Official Certification (Jun – Sep 2023)' : 'Certificación Oficial (jun – sep 2023)'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">Google Activate: Marketing Digital</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">{lang === 'en' ? 'Certification (Sep – Oct 2024)' : 'Certificación (sep – oct 2024)'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">Buildathon de Cursor (24h)</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">{lang === 'en' ? 'Participant (July 2026)' : 'Participante en maratón de 24h (julio 2026)'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit & Competencies */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t.cvModal.skillsTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-[#F0F1FF]/50 dark:bg-[#121636]/60 border border-[#DCE4FB] dark:border-[#273063]">
                <div className="font-mono text-[11px] font-semibold text-[#555DD6] dark:text-[#9BAFF5] mb-1.5">
                  {lang === 'en' ? 'Languages & Web Development' : 'Lenguajes & Desarrollo Web'}
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['Python', 'SQL', 'C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React', 'Astro', 'Node.js', 'Supabase', 'Firebase'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-[#E4E9FF]/70 dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#C5D0F5] border border-[#DCE4FB] dark:border-[#2E3976]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F0F1FF]/50 dark:bg-[#121636]/60 border border-[#DCE4FB] dark:border-[#273063]">
                <div className="font-mono text-[11px] font-semibold text-[#555DD6] dark:text-[#9BAFF5] mb-1.5">
                  {lang === 'en' ? 'Accounting, Tools & Soft Skills' : 'Contabilidad, Herramientas & Habilidades'}
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                  {['Excel Avanzado', 'Costos & Inventarios', 'Facturación & Presupuestos', 'Git/GitHub', 'Cursor', 'Vercel', 'Google Analytics', 'Notion/Canva', 'Bilingüe (ES / EN B2+)', 'Liderazgo & Pitch'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-[#E4E9FF]/70 dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#C5D0F5] border border-[#DCE4FB] dark:border-[#2E3976]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-[#DCE4FB] dark:border-[#273063] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#4F5D91] dark:text-[#AAB5DE] font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#555DD6] dark:bg-[#8198EF]"></span>
            {t.cvModal.status}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleDownload}
              className="btn-lavender-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadBtn}</span>
            </button>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F0F1FF] dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#AAB5DE] hover:text-[#555DD6] border border-[#DCE4FB] dark:border-[#273063] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
