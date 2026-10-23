import React, { useState } from 'react';
import { 
  FileText, 
  MapPin, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { CVModal } from './CVModal';
import { HeroCodeCard } from './HeroCodeCard';

export const Hero: React.FC = () => {
  const { t } = useApp();
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section id="inicio" className="pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Large Rounded Hero Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="hero-lavender-bg rounded-[30px] border border-[#DCE4FB] dark:border-[#273063] p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden"
      >
        {/* Subtle decorative background organic shape */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B9C6FA]/30 dark:bg-[#555DD6]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#8198EF]/20 dark:bg-[#3E45A8]/20 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content (44–46% on desktop) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small introductory pill */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#161B3D]/90 border border-[#DCE4FB] dark:border-[#273063] shadow-2xs backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#555DD6] dark:bg-[#8198EF]" />
              <span className="font-mono text-xs font-medium text-[#4F5D91] dark:text-[#C5D0F5]">
                {t.hero.pill}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight font-heading text-[#171B4B] dark:text-[#F8FAFF] leading-[1.08]"
            >
              {t.hero.titleFirst} <span className="text-[#555DD6] dark:text-[#8198EF]">{t.hero.titleLast}</span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF] leading-snug"
            >
              {t.hero.headline}
            </motion.h2>

            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            {/* Buttons with arrow micro-interaction */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <a
                id="hero-view-projects-btn"
                href="#proyectos"
                className="btn-lavender-primary group inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                id="hero-download-cv-btn"
                type="button"
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] text-xs sm:text-sm font-medium hover:bg-[#E4E9FF]/60 dark:hover:bg-[#1E2552] transition-all shadow-2xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
              >
                <FileText className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
                <span>{t.hero.downloadCV}</span>
              </button>
            </motion.div>

            {/* Footer metadata */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 border-t border-[#DCE4FB]/80 dark:border-[#273063] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#4F5D91] dark:text-[#C5D0F5]"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
                <span className="font-medium text-[#171B4B] dark:text-[#F8FAFF]">{t.hero.location}</span>
              </div>
              <span className="text-[#8490B8]">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
                <span>{t.hero.availability}</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Dynamic Typewriter Code Animation Component */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full"
          >
            <HeroCodeCard />
          </motion.div>
        </div>
      </motion.div>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
};
