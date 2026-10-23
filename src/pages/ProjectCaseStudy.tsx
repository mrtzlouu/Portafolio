import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { 
  ArrowLeft, 
  ExternalLink, 
  Award, 
  Sparkles, 
  TrendingUp, 
  FolderGit2, 
  Layers, 
  UserCheck, 
  Compass, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { getProjectBySlug, projects } from '../data/projects';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { ShareButton } from '../components/common/ShareButton';
import { Github } from '../components/icons/SocialIcons';
import { absoluteUrl } from '../data/site';

export const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useApp();

  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  const BadgeIcon =
    project.badgeIcon === 'Award'
      ? Award
      : project.badgeIcon === 'Sparkles'
      ? Sparkles
      : TrendingUp;

  const currentUrl = absoluteUrl(`/projects/${project.slug}`);

  // schema.org structured data (Requirements §12)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title[lang],
    headline: project.title[lang],
    description: project.summary[lang],
    image: absoluteUrl(project.image),
    url: currentUrl,
    author: {
      '@type': 'Person',
      name: 'Lourdes Escobar',
    },
    keywords: project.technologies[lang].join(', '),
  };

  return (
    <>
      <SEO
        title={`${project.title[lang]} | Lourdes Escobar`}
        description={project.summary[lang]}
        path={`/projects/${project.slug}`}
        image={project.image}
        type="article"
        jsonLd={jsonLd}
      />

      <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        {/* Top Navigation Row: Back button + Share button */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/#proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-[#F8FAFF] hover:border-[#555DD6] dark:hover:border-[#8198EF] transition-all text-xs sm:text-sm font-semibold shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>{t.caseStudy.back}</span>
          </Link>

          <ShareButton
            title={project.title[lang]}
            text={project.summary[lang]}
            url={currentUrl}
          />
        </div>

        {/* Hero Section of the Case Study */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Header Card */}
          <header className="hero-lavender-bg rounded-[30px] border border-[#DCE4FB] dark:border-[#273063] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
            <div className="space-y-4">
              {/* Category pill & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold bg-white/80 dark:bg-[#161B3D]/80 px-3 py-1 rounded-full border border-[#DCE4FB] dark:border-[#273063]">
                  {project.category[lang]}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/95 dark:bg-[#161B3D]/95 text-[#555DD6] dark:text-[#9BAFF5] border border-[#DCE4FB] dark:border-[#273063] shadow-2xs">
                  <BadgeIcon className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
                  <span>{project.badge[lang]}</span>
                </span>

                {project.status && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] border border-[#DCE4FB] dark:border-[#2E3976]">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF] leading-tight">
                {project.title[lang]}
              </h1>

              {/* Motto if available */}
              {project.motto && (
                <p className="text-sm font-mono text-[#555DD6] dark:text-[#8198EF] font-semibold">
                  {project.motto[lang]}
                </p>
              )}

              {/* Summary lead */}
              <p className="text-base sm:text-lg text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed max-w-3xl pt-1">
                {project.summary[lang]}
              </p>

              {/* Action Buttons Row */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lavender-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-xs"
                  >
                    <span>{t.caseStudy.liveSite}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] text-xs sm:text-sm font-semibold hover:border-[#555DD6] transition-all shadow-2xs"
                  >
                    <FolderGit2 className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
                    <span>{t.caseStudy.repository}</span>
                  </a>
                )}

                {project.githubProfileUrl && !project.repositoryUrl && (
                  <a
                    href={project.githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] text-xs sm:text-sm font-semibold hover:border-[#555DD6] transition-all shadow-2xs"
                  >
                    <Github className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
                    <span>{t.projects.githubProfile}</span>
                  </a>
                )}

                {!project.liveUrl && !project.repositoryUrl && !project.githubProfileUrl && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber-300">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{t.caseStudy.privateNote}</span>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Featured Visual Image with explicit dimensions */}
          <div className="rounded-[26px] overflow-hidden border border-[#DCE4FB] dark:border-[#273063] bg-white dark:bg-[#161B3D] shadow-md">
            <img
              src={project.image}
              alt={project.imageAlt[lang]}
              width={project.imageWidth}
              height={project.imageHeight}
              className="w-full h-auto object-cover max-h-[520px] object-top"
              loading="eager"
            />
          </div>

          {/* Detailed Content Grid (Editorial Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Context Card */}
            <div className="editorial-card p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2.5 text-[#555DD6] dark:text-[#8198EF]">
                <div className="p-2 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976]">
                  <Compass className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-lg text-[#171B4B] dark:text-[#F8FAFF]">
                  {t.caseStudy.context}
                </h2>
              </div>
              <p className="text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed">
                {project.context[lang]}
              </p>
            </div>

            {/* Role Card */}
            <div className="editorial-card p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2.5 text-[#555DD6] dark:text-[#8198EF]">
                <div className="p-2 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976]">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-lg text-[#171B4B] dark:text-[#F8FAFF]">
                  {t.caseStudy.role}
                </h2>
              </div>
              <p className="text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed">
                {project.role[lang]}
              </p>
            </div>
          </div>

          {/* Technologies Used Strip */}
          <div className="editorial-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-[#555DD6] dark:text-[#8198EF]">
              <div className="p-2 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976]">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="font-heading font-bold text-lg text-[#171B4B] dark:text-[#F8FAFF]">
                {t.caseStudy.technologies}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.technologies[lang].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-[#F0F1FF] dark:bg-[#1E2552] text-[#171B4B] dark:text-[#F8FAFF] font-medium border border-[#DCE4FB] dark:border-[#2E3976]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other Projects Quick Nav */}
          <div className="pt-8 border-t border-[#DCE4FB] dark:border-[#273063] space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
              {t.caseStudy.otherProjects}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  to={`/projects/${other.slug}`}
                  className="editorial-card p-5 flex items-center justify-between gap-4 group hover:border-[#555DD6] dark:hover:border-[#8198EF] transition-all"
                >
                  <div className="space-y-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
                      {other.category[lang]}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#171B4B] dark:text-[#F8FAFF] truncate group-hover:text-[#555DD6] dark:group-hover:text-[#8198EF] transition-colors">
                      {other.title[lang]}
                    </h3>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F0F1FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </>
  );
};
