import React from 'react';
import { Sparkles, Code2, Database, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

export const AboutMe: React.FC = () => {
  const { t } = useApp();

  const pillarCards = [
    {
      icon: Code2,
      title: t.about.cards.devTitle,
      desc: t.about.cards.devDesc,
    },
    {
      icon: Database,
      title: t.about.cards.dataTitle,
      desc: t.about.cards.dataDesc,
    },
    {
      icon: TrendingUp,
      title: t.about.cards.leadTitle,
      desc: t.about.cards.leadDesc,
    },
  ];

  return (
    <section id="sobre-mi" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Two-Column Profile & Philosophy Card Container with Scroll-Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#E4E9FF]/70 dark:bg-[#161B3D]/80 border border-[#DCE4FB] dark:border-[#273063] rounded-[30px] p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-sm"
      >
        {/* Subtle decorative background blur orbs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#B9C6FA]/30 dark:bg-[#555DD6]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#8198EF]/20 dark:bg-[#3E45A8]/20 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Profile Image WebP with explicit width & height */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative aura border glow */}
              <div className="absolute -inset-1.5 rounded-[30px] bg-gradient-to-tr from-[#555DD6]/30 via-[#8198EF]/20 to-[#B9C6FA]/30 blur-md pointer-events-none" />

              <div className="relative rounded-[26px] overflow-hidden border border-[#DCE4FB] dark:border-[#2E3976] bg-white dark:bg-[#121636] shadow-md group">
                <img
                  src="/img/Yo.webp"
                  alt={t.about.photoAlt}
                  width={900}
                  height={1575}
                  className="w-full h-auto object-cover object-top max-h-[460px] lg:max-h-[500px] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D20]/80 via-[#0A0D20]/30 to-transparent pointer-events-none" />

                {/* Floating identity pill over image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 dark:bg-[#161B3D]/95 backdrop-blur-md border border-[#DCE4FB] dark:border-[#273063] shadow-md flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-sm text-[#171B4B] dark:text-[#F8FAFF]">
                      Lourdes Escobar
                    </div>
                    <div className="font-mono text-[11px] text-[#555DD6] dark:text-[#9BAFF5] font-medium">
                      UNICAES · Software & Data
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>{t.about.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Expanded Description Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-[#1F2656] border border-[#DCE4FB] dark:border-[#2E3976] text-xs font-mono text-[#555DD6] dark:text-[#9BAFF5]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF] leading-tight"
            >
              {t.about.heading}
            </motion.h2>

            {/* Expanded Description Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5 text-sm sm:text-base text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed"
            >
              <p className="font-semibold text-base sm:text-lg text-[#171B4B] dark:text-[#F8FAFF]">
                {t.about.lead}
              </p>
              <p>
                {t.about.bioParagraph1}
              </p>
              <p>
                {t.about.bioParagraph2}
              </p>
            </motion.div>

            {/* Competency Highlights Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              {pillarCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-4 rounded-2xl bg-white/90 dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063] shadow-2xs hover:border-[#8198EF]/50 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#555DD6] dark:text-[#8198EF]">
                      <CardIcon className="w-4 h-4" />
                      <span className="font-heading font-bold text-xs sm:text-sm text-[#171B4B] dark:text-[#F8FAFF]">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
