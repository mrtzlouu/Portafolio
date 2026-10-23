import React from 'react';
import { 
  Database, 
  Code2, 
  BarChart3, 
  Briefcase, 
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { skillCategories } from '../data/skills';

// Minimal outlined SVG matching the Lucide stroke weight (2px), linecap round, linejoin round
const AiOutlineIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2 Z" />
    <path d="M19 2v4M21 4h-4" />
  </svg>
);

export const TechStack: React.FC = () => {
  const { lang, t } = useApp();

  const aiToolsList = [
    {
      name: 'Claude',
      bgClass: 'bg-[#D97757] text-white shadow-sm',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
        </svg>
      ),
    },
    {
      name: 'Codex',
      bgClass: 'bg-[#10A37F] text-white shadow-sm',
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
      ),
    },
    {
      name: 'Gemini',
      bgClass: 'bg-[#1B1F3B] border border-[#2E3566] shadow-sm',
      icon: (
        <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="geminiBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4E8BF5" />
              <stop offset="50%" stopColor="#9B72CF" />
              <stop offset="100%" stopColor="#E2657A" />
            </linearGradient>
          </defs>
          <path
            fill="url(#geminiBrandGrad)"
            d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
          />
        </svg>
      ),
    },
    {
      name: 'Cursor',
      bgClass: 'bg-[#111111] border border-[#2A2A2A] text-white shadow-sm',
      icon: (
        <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
        </svg>
      ),
    },
    {
      name: 'Antigravity',
      bgClass: 'bg-[#1A56DB] text-white shadow-sm',
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="m5.99,1.62a8.54,8.54 0 0 0 -2.54,6.83c0.35,4.4 4.51,7.99 8.28,7.99c3.5,0 4.88,-3.06 4.54,-5.14a4.32,4.32 0 0 0 -0.95,-2.07c0.63,0.34 1.24,0.77 1.81,1.3c1.52,1.41 2.44,3.23 2.58,5.1c0.33,4.13 -2.73,8.37 -7.85,8.37c-1.69,0 -3.48,-0.43 -4.98,-1.14c-4.06,-1.92 -6.88,-6.06 -6.88,-10.86c0,-4.43 2.41,-8.3 5.99,-10.38zm6.15,-1.62c1.69,0 3.48,0.43 4.98,1.14a12,12 0 0 1 6.88,10.86c0,4.43 -2.41,8.3 -5.99,10.38a8.54,8.54 0 0 0 2.54,-6.83c-0.35,-4.4 -4.51,-7.99 -8.28,-7.99c-3.5,0 -4.88,3.06 -4.54,5.14a4.3,4.3 0 0 0 0.96,2.07a8.72,8.72 0 0 1 -1.81,-1.3c-1.52,-1.41 -2.44,-3.23 -2.59,-5.1c-0.33,-4.13 2.73,-8.37 7.85,-8.37z" />
        </svg>
      ),
    },
    {
      name: 'Google AI Studio',
      bgClass: 'bg-[#1E2238] border border-[#303860] text-white shadow-sm',
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.921 4.196H6.328A2.705 2.705 0 0 0 3.623 6.9v11.362a2.705 2.705 0 0 0 2.705 2.705h11.363a2.705 2.705 0 0 0 2.705-2.705v-4.756l1.623-1.113v5.87a4.33 4.33 0 0 1-4.328 4.328H6.328A4.33 4.33 0 0 1 2 18.263V6.901a4.33 4.33 0 0 1 4.328-4.329h4.545z" />
          <path d="M17.82 0c.145 0 .268.104.299.246a7 7 0 0 0 1.9 3.484a7 7 0 0 0 3.485 1.901a.31.31 0 0 1 .246.3a.31.31 0 0 1-.246.298A7 7 0 0 0 20.02 8.13a7 7 0 0 0-1.912 3.535a.3.3 0 0 1-.288.238a.3.3 0 0 1-.288-.238A7 7 0 0 0 15.62 8.13a7 7 0 0 0-3.535-1.912a.3.3 0 0 1-.238-.288c0-.14.1-.26.238-.288A7 7 0 0 0 15.62 3.73A7 7 0 0 0 17.521.246A.31.31 0 0 1 17.82 0" fill="#4285F4" />
        </svg>
      ),
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'BarChart3':
        return BarChart3;
      case 'Code2':
        return Code2;
      case 'Database':
        return Database;
      case 'Briefcase':
        return Briefcase;
      case 'AI':
      default:
        return AiOutlineIcon;
    }
  };

  return (
    <section id="tech-stack" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header with Scroll-Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
              {t.stack.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
            {t.stack.heading}
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#8490B8] dark:text-[#C5D0F5] mt-2 md:mt-0">
          {t.stack.subheading}
        </p>
      </motion.div>

      {/* Grid with Uniform Widths & Heights and Staggered Scroll-Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
        {skillCategories.map((cat, idx) => {
          const Icon = getIcon(cat.icon);
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.55, 
                delay: idx * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`editorial-card p-6 sm:p-8 flex flex-col justify-between group h-full ${cat.gridClass}`}
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] text-[#555DD6] dark:text-[#9BAFF5] border border-[#DCE4FB] dark:border-[#2E3976] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
                      {cat.title[lang]}
                    </h3>
                  </div>
                </div>

                {/* Minimal description with uniform min-height */}
                <p className="text-xs sm:text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed mb-6 min-h-[42px] line-clamp-2">
                  {cat.description[lang]}
                </p>

                {/* Visual Icons Row with uniform height (66px) */}
                {cat.skillIconsUrl ? (
                  <div className="mb-6 p-3 rounded-xl bg-[#F0F1FF] dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063] flex items-center justify-start overflow-x-auto h-[66px]">
                    <img
                      src={cat.skillIconsUrl}
                      alt={`${cat.title[lang]} ${t.stack.logosAlt}`}
                      loading="lazy"
                      className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  /* AI Tools Badges Visual Strip with uniform height matching skillicons container */
                  <div className="mb-6 p-3 rounded-xl bg-[#F0F1FF] dark:bg-[#121636] border border-[#DCE4FB] dark:border-[#273063] flex items-center justify-start gap-2 sm:gap-2.5 overflow-x-auto h-[66px]">
                    {aiToolsList.map((tool) => (
                      <div
                        key={tool.name}
                        title={tool.name}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 flex-shrink-0 cursor-default ${tool.bgClass}`}
                      >
                        {tool.icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags / Pills with uniform min-height */}
              <div className="pt-4 border-t border-[#DCE4FB] dark:border-[#273063] flex flex-wrap gap-1.5 font-mono text-xs min-h-[68px] items-start content-start">
                {cat.badges[lang].map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-[#E4E9FF]/70 dark:bg-[#1E2552] text-[#4F5D91] dark:text-[#C5D0F5] border border-[#DCE4FB] dark:border-[#2E3976]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
