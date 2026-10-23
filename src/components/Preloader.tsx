import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export const Preloader: React.FC = () => {
  const { lang } = useApp();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Block scrolling on body and html while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Animate progress smoothly from 0 to 100 over ~1.4 seconds
    const startTime = performance.now();
    const duration = 1400; // ms

    let animId: number;
    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed < duration) {
        animId = requestAnimationFrame(updateProgress);
      } else {
        // Short pause at 100% (approx 200ms) for visual satisfaction, then trigger smooth slide-up exit
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = originalBodyOverflow;
          document.documentElement.style.overflow = originalHtmlOverflow;
        }, 220);
      }
    };

    animId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="full-screen-preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            opacity: 0,
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1], // Cinematic curtain slide-up reveal
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F0F1FF] dark:bg-[#0B0E21] select-none pointer-events-auto"
          aria-live="polite"
          aria-busy={loading}
        >
          {/* Subtle ambient lighting orb in theme colors */}
          <div className="absolute w-72 h-72 rounded-full bg-[#B9C6FA]/25 dark:bg-[#555DD6]/20 blur-3xl pointer-events-none" />

          {/* Central Monogram Logo Card */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-5"
          >
            {/* Subtle glow border */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#555DD6]/30 via-[#8198EF]/20 to-[#B9C6FA]/30 blur-sm pointer-events-none" />

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-[#161B3D] border-2 border-[#DCE4FB] dark:border-[#273063] shadow-lg flex items-center justify-center p-4 overflow-hidden">
              <span
                className="w-full h-full header-recolored-logo"
                role="img"
                aria-label="Logo Lourdes Escobar"
              />
            </div>
          </motion.div>

          {/* Central Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6"
          >
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#171B4B] dark:text-[#F8FAFF]">
              Lourdes Escobar
            </div>
            <p className="font-mono text-[11px] text-[#4F5D91] dark:text-[#C5D0F5] tracking-widest mt-1">
              PORTFOLIO
            </p>
          </motion.div>

          {/* Minimal Progress Bar & Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 sm:w-56 space-y-2"
          >
            {/* Progress Track */}
            <div className="w-full h-1 sm:h-1.5 rounded-full bg-[#DCE4FB] dark:bg-[#1E2552] overflow-hidden relative shadow-inner">
              <div
                style={{ width: `${progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-[#555DD6] via-[#8198EF] to-[#B9C6FA] transition-all duration-75 ease-out"
              />
            </div>

            {/* Indicator details */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8490B8] dark:text-[#9AA8D8] px-0.5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#555DD6] dark:bg-[#8198EF] animate-pulse" />
                <span>{lang === 'en' ? 'Loading...' : 'Cargando...'}</span>
              </span>
              <span className="font-semibold text-[#555DD6] dark:text-[#9BAFF5]">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
