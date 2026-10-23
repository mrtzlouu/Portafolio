import React from 'react';
import { Link } from 'react-router';
import { Compass, Home, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  const { t } = useApp();

  return (
    <>
      <SEO
        title={`404 - ${t.notFound.title} | Lourdes Escobar`}
        description={t.notFound.text}
        path="/404"
        noindex={true}
      />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto relative z-10 min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-card w-full p-8 sm:p-12 text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-3xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#B9C6FA] dark:border-[#37408F] mx-auto flex items-center justify-center text-[#555DD6] dark:text-[#9BAFF5] shadow-xs">
            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '18s' }} />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5]">
              Error {t.notFound.code}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
              {t.notFound.title}
            </h1>
            <p className="text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed max-w-sm mx-auto">
              {t.notFound.text}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="btn-lavender-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>{t.notFound.home}</span>
            </Link>

            <Link
              to="/#proyectos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-white transition-all text-xs sm:text-sm font-semibold shadow-2xs"
            >
              <FolderKanban className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
              <span>{t.notFound.projects}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};
