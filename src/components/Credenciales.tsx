import React, { useRef, useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Calculator, 
  BarChart2, 
  Languages, 
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { useApp } from '../context/AppContext';
import { credentials } from '../data/credentials';
import type { CredentialIcon } from '../types';

export const Credenciales: React.FC = () => {
  const { lang, t } = useApp();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 70%'],
  });

  // Smooth scroll-linked spring animation for drawing the line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const getIcon = (name: CredentialIcon) => {
    switch (name) {
      case 'Award':
        return Award;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'GraduationCap':
        return GraduationCap;
      case 'Calculator':
        return Calculator;
      case 'BarChart2':
        return BarChart2;
      case 'Languages':
        return Languages;
      default:
        return Award;
    }
  };

  return (
    <section id="credenciales" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
              {t.credentials.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
            {t.credentials.heading}
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#8490B8] dark:text-[#C5D0F5] mt-2 md:mt-0">
          {t.credentials.subheading}
        </p>
      </motion.div>

      {/* Vertical Timeline with Scroll-Linked Progressively Drawn Line */}
      <div ref={timelineRef} className="relative pl-6 sm:pl-10">
        {/* Background Static Track Line */}
        <div 
          className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[3px] bg-[#DCE4FB] dark:bg-[#273063] rounded-full pointer-events-none" 
          aria-hidden="true"
        />

        {/* Scroll-Linked Progressively Drawn Line */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-[11px] sm:left-[19px] top-6 w-[3px] bg-gradient-to-b from-[#555DD6] via-[#8198EF] to-[#B9C6FA] rounded-full pointer-events-none origin-top shadow-[0_0_12px_rgba(85,93,214,0.5)]" 
          aria-hidden="true"
        />

        {/* Timeline Items with Staggered Entrance */}
        <div className="space-y-5">
          {credentials.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ 
                  duration: 0.55, 
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative flex items-center group"
              >
                {/* Timeline Node Marker on the Line */}
                <div 
                  className="absolute -left-[30px] sm:-left-[42px] w-6 h-6 rounded-full bg-white dark:bg-[#161B3D] border-2 border-[#555DD6] dark:border-[#8198EF] flex items-center justify-center shadow-xs z-10 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-[#555DD6] dark:bg-[#8198EF]" />
                </div>

                {/* Credential Card (Interactive Accordion) */}
                <div
                  id={`credential-card-${item.id}`}
                  className="editorial-card w-full p-5 sm:p-6 flex flex-col justify-between hover:bg-[#F0F1FF]/60 dark:hover:bg-[#1E2552]/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#555DD6]"
                  onClick={() => toggleExpand(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-controls={`credential-desc-${item.id}`}
                  aria-label={`${t.credentials.viewDetails}: ${item.title[lang]}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#B9C6FA] dark:border-[#37408F] flex items-center justify-center text-[#555DD6] dark:text-[#9BAFF5] shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF] truncate group-hover:text-[#555DD6] dark:group-hover:text-[#8198EF] transition-colors">
                          {item.title[lang]}
                        </h3>
                        <p className="text-xs font-mono text-[#4F5D91] dark:text-[#C5D0F5] mt-0.5">
                          {item.institution[lang]}
                          {item.date && (
                            <span className="text-[#8490B8] dark:text-[#9AA8D8]"> · {item.date}</span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E4E9FF]/70 dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#C5D0F5] border border-[#DCE4FB] dark:border-[#2E3976]">
                        {item.tag[lang]}
                      </span>

                      <div 
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-[#8490B8] dark:text-[#9AA8D8] transition-all duration-300 ${
                          isExpanded 
                            ? 'rotate-90 text-[#555DD6] dark:text-[#8198EF] bg-[#E4E9FF] dark:bg-[#1E2552]' 
                            : 'group-hover:translate-x-1 group-hover:text-[#555DD6] dark:group-hover:text-white'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Verified Credential Details Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`credential-desc-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-[#DCE4FB] dark:border-[#273063] space-y-3">
                          {item.description && (
                            <p className="text-xs sm:text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed">
                              {item.description[lang]}
                            </p>
                          )}

                          {item.competencies && item.competencies[lang].length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8490B8] dark:text-[#9AA8D8] mr-1">
                                {t.credentials.competenciesTitle}:
                              </span>
                              {item.competencies[lang].map((comp) => (
                                <span
                                  key={comp}
                                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#E4E9FF]/70 dark:bg-[#121636] text-[#555DD6] dark:text-[#9BAFF5] border border-[#DCE4FB] dark:border-[#2E3976]"
                                >
                                  {comp}
                                </span>
                              ))}
                            </div>
                          )}

                          {item.credentialUrl && (
                            <div className="pt-2">
                              <a
                                href={item.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#555DD6] dark:text-[#8198EF] hover:underline"
                              >
                                <span>{t.credentials.credentialLink}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
