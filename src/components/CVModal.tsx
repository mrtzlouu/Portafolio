import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
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
      ? `LOURDES ESCOBAR
Data Analysis & Software Development
${site.location} | ${site.email} | ${site.phoneDisplay}
GitHub: ${site.social.github}
LinkedIn: ${site.social.linkedin}

PROFESSIONAL SUMMARY:
Hybrid profile integrating Software Engineering (Python, SQL, Modern Web), Accounting & Financial Analysis (Cost Analysis, Inventory Control, Budgeting, Advanced Excel), and Technical Leadership (Co-founder of WUJU, StartupSTEM 2026 Finalist).

EDUCATION:
- B.S. in Software Development Engineering — Universidad Católica de El Salvador (UNICAES, in progress)
- Technical High School Degree in Accounting — Complejo Educativo Católico Juan XXIII

CERTIFICATIONS & ACHIEVEMENTS:
- StartupSTEM 2026 Finalist — CuencaOS Project
- IT Specialist: Python Programming — Official Certification
- Digital Marketing Certification — Google Activate
- English Extension Program (B2+) — Escuela Interamericana

TECHNICAL SKILLS:
- Languages: Python, SQL, C#, JavaScript, TypeScript
- Frameworks & Tools: React, Astro, Node.js, Supabase, Firebase, Git, GitHub, Vercel, VS Code
- Analytics & Business: Relational SQL Modeling, Advanced Excel, Cost Analysis, Inventory Control, Google Analytics

FEATURED PROJECTS:
1. CuencaOS: River basin monitoring and territorial data analysis platform in Central America. StartupSTEM 2026 Finalist. (Astro, TypeScript, Vercel).
2. WUJU & 24h Cursor Buildathon: Technical coordination and 24-hour innovation coding marathon.
3. Cost & Inventory Analytical Management: Operational cost control, inventory rotation, and budgeting model in real commercial operations.
`
      : `LOURDES ESCOBAR
Análisis de Datos & Desarrollo de Software
${site.location} | ${site.email} | ${site.phoneDisplay}
GitHub: ${site.social.github}
LinkedIn: ${site.social.linkedin}

RESUMEN PROFESIONAL:
Perfil enfocado en combinar Ingeniería de Software (Python, SQL, Desarrollo Web), Contabilidad y Finanzas (Costos, Inventarios, Presupuestos, Excel Avanzado) y Liderazgo Tecnológico (Cofundadora de WUJU, Finalista StartupSTEM 2026).

FORMACIÓN ACADÉMICA:
- Ingeniería en Desarrollo de Software — Universidad Católica de El Salvador (UNICAES, cursando)
- Bachillerato Técnico Vocacional en Contaduría — Complejo Educativo Católico Juan XXIII

CERTIFICACIONES Y LOGROS:
- Finalista StartupSTEM 2026 — Proyecto CuencaOS
- Certificación IT Specialist: Programación en Python
- Marketing Digital — Google Activate
- Programa de Extensión en Idioma Inglés (B2+) — Escuela Interamericana

HABILIDADES TÉCNICAS:
- Lenguajes: Python, SQL, C#, JavaScript, TypeScript
- Frameworks & Herramientas: React, Astro, Node.js, Supabase, Firebase, Git, GitHub, Vercel, VS Code
- Analítica & Negocios: Modelado Relacional SQL, Excel Avanzado, Análisis de Costos, Control de Inventarios, Google Analytics

PROYECTOS DESTACADOS:
1. CuencaOS: Plataforma de monitoreo y análisis de datos hídricos y territoriales en CA. Finalista StartupSTEM 2026. (Astro, TypeScript, Vercel).
2. WUJU & 24h Cursor Buildathon: Coordinación técnica y maratón de código de innovación tecnológica.
3. Gestión Analítica y Control de Costos: Modelo de control de inventarios, presupuestos y costos en operaciones comerciales reales.
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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#161B3D] rounded-3xl p-6 sm:p-8 border border-[#DCE4FB] dark:border-[#273063] shadow-2xl text-[#171B4B] dark:text-[#F0F3FF] outline-none"
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
          {/* Quick Contact Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-2xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063] text-xs font-mono text-[#4F5D91] dark:text-[#AAB5DE]">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span>{site.location}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Mail className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span className="truncate">{site.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF] shrink-0" />
              <span>{site.phoneDisplay}</span>
            </div>
          </div>

          {/* Core Profile */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold">
              {t.cvModal.profileTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#4F5D91] dark:text-[#AAB5DE] leading-relaxed bg-[#E4E9FF]/50 dark:bg-[#1E2552]/60 p-3.5 rounded-2xl border border-[#DCE4FB] dark:border-[#273063]">
              {t.cvModal.profileText}
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                {t.cvModal.educationTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">{lang === 'en' ? 'B.S. in Software Development Engineering' : 'Ingeniería en Desarrollo de Software'}</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">{lang === 'en' ? 'UNICAES (In progress)' : 'UNICAES (Cursando)'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">{lang === 'en' ? 'Technical High School Degree in Accounting' : 'Bachillerato Técnico en Contaduría'}</div>
                  <div className="text-[#8490B8] dark:text-[#8390BE] font-mono text-[11px]">CEC Juan XXIII</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {t.cvModal.certTitle}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">IT Specialist: Python Programming</div>
                  <div className="text-[#555DD6] dark:text-[#8198EF] font-mono text-[11px]">{lang === 'en' ? 'Official Certification' : 'Certificación Oficial'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F1FF]/60 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063]">
                  <div className="font-semibold">{lang === 'en' ? 'StartupSTEM 2026 Finalist' : 'StartupSTEM 2026 Finalista'}</div>
                  <div className="text-[#555DD6] dark:text-[#8198EF] font-mono text-[11px]">{lang === 'en' ? 'CuencaOS Project' : 'Proyecto CuencaOS'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t.cvModal.skillsTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['Python', 'SQL', 'TypeScript', 'React', 'Astro', 'Advanced Excel', 'Cost Accounting', 'Inventory Rotation', 'Budgeting', 'PostgreSQL', 'Supabase', 'Git/GitHub'].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-lg bg-[#E4E9FF]/70 dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#AAB5DE] border border-[#DCE4FB] dark:border-[#2E3976]">
                  {skill}
                </span>
              ))}
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
