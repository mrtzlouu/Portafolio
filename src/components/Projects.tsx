import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ExternalLink, Award, Sparkles, TrendingUp, ChevronLeft, ChevronRight, FileCode } from 'lucide-react';
import { motion } from 'motion/react';
import { Github } from './icons/SocialIcons';
import { useApp } from '../context/AppContext';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const { lang, t } = useApp();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Update active dot index based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth === 0) return;
    const slideIndex = Math.round(scrollLeft / clientWidth);
    setActiveSlide(Math.min(Math.max(slideIndex, 0), projects.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setActiveSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (activeSlide + 1) % projects.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeSlide - 1 + projects.length) % projects.length;
    scrollToSlide(prevIndex);
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <section 
      id="proyectos" 
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={t.projects.carouselLabel}
    >
      {/* Section Header with Scroll-Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#555DD6] dark:bg-[#8198EF]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
              {t.projects.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
            {t.projects.heading}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#4F5D91] dark:text-[#C5D0F5] mt-1.5">
            {t.projects.subheading}
          </p>
        </div>

        {/* Carousel Buttons & Progress Counter with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          {/* Slide Counter Badge */}
          <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-xs font-mono font-semibold text-[#171B4B] dark:text-[#F8FAFF] shadow-2xs">
            <span className="text-[#555DD6] dark:text-[#9BAFF5]">0{activeSlide + 1}</span>
            <span className="text-[#8490B8] dark:text-[#9AA8D8]"> / 0{projects.length}</span>
          </div>

          {/* Left Arrow Button */}
          <button
            id="project-prev-btn"
            type="button"
            onClick={prevSlide}
            className="p-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] hover:text-[#555DD6] dark:hover:text-[#9BAFF5] hover:border-[#555DD6] dark:hover:border-[#8198EF] transition-all shadow-2xs active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
            aria-label={t.projects.prev}
            title={t.projects.prev}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            id="project-next-btn"
            type="button"
            onClick={nextSlide}
            className="p-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] hover:text-[#555DD6] dark:hover:text-[#9BAFF5] hover:border-[#555DD6] dark:hover:border-[#8198EF] transition-all shadow-2xs active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
            aria-label={t.projects.next}
            title={t.projects.next}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* Horizontal Carousel Track Container with Staggered Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        ref={scrollContainerRef}
        className="carousel-scroll-container flex overflow-x-auto w-full gap-6 scroll-smooth snap-x snap-mandatory pb-4 focus:outline-none"
      >
        {projects.map((proj, idx) => {
          const BadgeIcon =
            proj.badgeIcon === 'Award'
              ? Award
              : proj.badgeIcon === 'Sparkles'
              ? Sparkles
              : TrendingUp;

          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.14, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="carousel-slide-item w-full shrink-0 snap-center"
            >
              <article className="horizontal-project-card group">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[400px] lg:min-h-[440px]">
                  {/* Left Column: Project Cover Screenshot (54% on desktop) */}
                  <div className="lg:col-span-6 relative overflow-hidden bg-[#E4E9FF]/40 dark:bg-[#121636] min-h-[260px] lg:min-h-full">
                    <img
                      src={proj.image}
                      alt={proj.imageAlt[lang]}
                      width={proj.imageWidth}
                      height={proj.imageHeight}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />

                    {/* Gradient vignette edge overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                    {/* Integrated Award / Badge on image top corner */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/95 dark:bg-[#161B3D]/95 text-[#555DD6] dark:text-[#9BAFF5] border border-[#DCE4FB] dark:border-[#273063] shadow-sm backdrop-blur-md">
                        <BadgeIcon className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
                        <span>{proj.badge[lang]}</span>
                      </span>
                    </div>

                    {/* Watermark Slide Index */}
                    <div className="absolute bottom-3 right-4 font-mono font-bold text-4xl text-white/30 dark:text-white/20 select-none pointer-events-none">
                      {proj.index}
                    </div>
                  </div>

                  {/* Right Column: Project Content (46% on desktop) */}
                  <div className="lg:col-span-6 p-6 sm:p-9 lg:p-10 flex flex-col justify-between bg-white dark:bg-[#161B3D]">
                    <div className="space-y-3">
                      {/* Category Label */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
                          {proj.category[lang]}
                        </span>
                      </div>

                      {/* Title: High Contrast Light in Dark Mode */}
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF] leading-snug group-hover:text-[#555DD6] dark:group-hover:text-[#8198EF] transition-colors">
                        {proj.title[lang]}
                      </h3>

                      {/* Motto if available */}
                      {proj.motto && (
                        <p className="text-xs font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold">
                          {proj.motto[lang]}
                        </p>
                      )}

                      {/* Description: Readable in both themes */}
                      <p className="text-sm sm:text-[15px] text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed pt-1">
                        {proj.summary[lang]}
                      </p>
                    </div>

                    {/* Bottom: Stack Badges & Actions */}
                    <div className="mt-8 pt-5 border-t border-[#DCE4FB] dark:border-[#273063] flex flex-wrap items-center justify-between gap-4">
                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {proj.technologies[lang].map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-[#F0F1FF] dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#C5D0F5] border border-[#DCE4FB] dark:border-[#2E3976]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-2.5">
                        {/* Case Study route link */}
                        {proj.caseStudy && (
                          <Link
                            to={`/projects/${proj.slug}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-white hover:border-[#555DD6] dark:hover:border-[#8198EF] text-xs font-semibold transition-all shadow-2xs"
                            title={t.projects.viewCaseStudy}
                          >
                            <FileCode className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
                            <span>{t.projects.viewCaseStudy}</span>
                          </Link>
                        )}

                        {/* GitHub Profile or Repo link */}
                        {(proj.repositoryUrl || proj.githubProfileUrl) && (
                          <a
                            href={proj.repositoryUrl || proj.githubProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-white transition-all shadow-2xs cursor-pointer"
                            aria-label={t.projects.githubProfile}
                            title={t.projects.githubProfile}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {/* External Demo link */}
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-lavender-primary group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
                          >
                            <span>{t.projects.viewProject}</span>
                            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Carousel Indicator Dots with entrance animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-2 pt-4"
      >
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            type="button"
            onClick={() => scrollToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#555DD6] ${
              activeSlide === idx
                ? 'w-8 bg-[#555DD6] dark:bg-[#8198EF]'
                : 'w-2.5 bg-[#DCE4FB] dark:bg-[#273063] hover:bg-[#B9C6FA] dark:hover:bg-[#3E4A8C]'
            }`}
            aria-current={activeSlide === idx ? 'true' : undefined}
            aria-label={`${t.projects.goTo} ${idx + 1}: ${proj.title[lang]}`}
          />
        ))}
      </motion.div>
    </section>
  );
};
