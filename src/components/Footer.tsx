import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUp, 
  FileText,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { Github, Linkedin } from './icons/SocialIcons';
import { CVModal } from './CVModal';
import { useApp } from '../context/AppContext';
import { site } from '../data/site';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

export const Footer: React.FC = () => {
  const { t } = useApp();
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const [mailCopyState, copyEmail] = useCopyToClipboard(2200);
  const [phoneCopyState, copyPhone] = useCopyToClipboard(2200);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyrightText = t.footer.copyright.replace('{year}', site.year);

  return (
    <footer id="contacto" className="pt-16 pb-12 border-t border-[#DCE4FB] dark:border-[#273063] bg-[#E4E9FF]/40 dark:bg-[#0B0E21]/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Approachable Closing Section with Scroll-Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-card p-8 sm:p-12 mb-12 text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4E9FF] dark:bg-[#1E2552] text-xs font-mono text-[#555DD6] dark:text-[#9BAFF5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.footer.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF] tracking-tight">
            {t.footer.heading}
          </h2>

          <p className="text-sm sm:text-base text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed max-w-xl mx-auto">
            {t.footer.lead}
          </p>

          {/* Prominent Action Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-email-btn"
              href={`mailto:${site.email}`}
              className="btn-lavender-primary inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{t.footer.sendEmail}</span>
            </a>

            <button
              id="footer-download-cv-btn"
              type="button"
              onClick={() => setCvModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976] text-[#171B4B] dark:text-[#F8FAFF] text-xs sm:text-sm font-semibold hover:bg-white dark:hover:bg-[#252E63] transition-all shadow-2xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
            >
              <FileText className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
              <span>{t.footer.downloadCV}</span>
            </button>

            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-white hover:border-[#8198EF] text-xs sm:text-sm font-medium transition-all shadow-2xs"
            >
              <Linkedin className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-white hover:border-[#8198EF] text-xs sm:text-sm font-medium transition-all shadow-2xs"
            >
              <Github className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Info & Details Strip with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 border-b border-[#DCE4FB] dark:border-[#273063] font-mono text-xs">
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#8490B8] dark:text-[#9AA8D8] uppercase">{t.footer.locationLabel}</div>
              <div className="text-[#171B4B] dark:text-[#F8FAFF] font-semibold">{site.location}</div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 truncate">
              <div className="p-2.5 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[10px] text-[#8490B8] dark:text-[#9AA8D8] uppercase">{t.footer.emailLabel}</div>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[#171B4B] dark:text-[#F8FAFF] hover:text-[#555DD6] dark:hover:text-[#8198EF] font-semibold truncate block transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyEmail(site.email)}
              className="p-1.5 rounded-lg bg-[#F0F1FF] dark:bg-[#1E2552] hover:bg-[#E4E9FF] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] border border-[#DCE4FB] dark:border-[#2E3976] shrink-0 transition-colors cursor-pointer"
              title={t.footer.copyEmail}
              aria-label={t.footer.copyEmail}
            >
              {mailCopyState === 'copied' ? (
                <Check className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-2xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[#8490B8] dark:text-[#9AA8D8] uppercase">{t.footer.phoneLabel}</div>
                <a
                  href={site.phoneHref}
                  className="text-[#171B4B] dark:text-[#F8FAFF] hover:text-[#555DD6] dark:hover:text-[#8198EF] font-semibold transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyPhone(site.phoneDisplay)}
              className="p-1.5 rounded-lg bg-[#F0F1FF] dark:bg-[#1E2552] hover:bg-[#E4E9FF] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] border border-[#DCE4FB] dark:border-[#2E3976] shrink-0 transition-colors cursor-pointer"
              title={t.footer.copyPhone}
              aria-label={t.footer.copyPhone}
            >
              {phoneCopyState === 'copied' ? (
                <Check className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Bottom Strip: Monogram & Back to Top */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8490B8] dark:text-[#9AA8D8]"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#171B4B] dark:text-[#F8FAFF]">LE.</span>
            <span>{copyrightText}</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#171B4B] dark:hover:text-white transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
          </button>
        </motion.div>
      </div>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </footer>
  );
};
