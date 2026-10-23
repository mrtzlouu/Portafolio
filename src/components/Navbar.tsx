import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useDialog } from '../hooks/useDialog';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useDialog(mobileMenuOpen, () => setMobileMenuOpen(false), mobileMenuRef, {
    lockScroll: false,
    trapFocus: true,
  });

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contacto');
        return;
      }

      const sections = ['inicio', 'sobre-mi', 'proyectos', 'tech-stack', 'credenciales', 'contacto'];
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close mobile menu on resize to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'inicio' },
    { name: t.nav.about, id: 'sobre-mi' },
    { name: t.nav.projects, id: 'proyectos' },
    { name: t.nav.stack, id: 'tech-stack' },
    { name: t.nav.credentials, id: 'credenciales' },
    { name: t.nav.contact, id: 'contacto' },
  ];

  const getHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      {/* Skip to Content accessible link (Requirements §11) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#555DD6] focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-xs font-mono font-semibold"
      >
        {t.a11y.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F0F1FF]/90 dark:bg-[#0B0E21]/90 backdrop-blur-md border-b border-[#DCE4FB] dark:border-[#273063] py-3 shadow-sm'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: Minimal LE. monogram in lavender-blue square + Lourdes Escobar */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label={t.a11y.goHome}
            >
              <div className="w-10 h-10 rounded-xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#B9C6FA] dark:border-[#37408F] flex items-center justify-center transition-all duration-200 group-hover:bg-[#555DD6] dark:group-hover:bg-[#8198EF] shadow-xs p-2 overflow-hidden">
                <span
                  className="w-full h-full header-recolored-logo transition-transform duration-200 group-hover:scale-105"
                  role="img"
                  aria-label={t.a11y.logoAlt}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[15px] font-bold tracking-tight text-[#171B4B] dark:text-[#F8FAFF] group-hover:text-[#555DD6] dark:group-hover:text-[#8198EF] transition-colors">
                  Lourdes Escobar
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8490B8] dark:text-[#8390BE]">
                  DATA & SOFTWARE
                </span>
              </div>
            </Link>

            {/* Center: Desktop Nav Links with Clean Active Indicator */}
            <nav 
              aria-label={t.a11y.mainNav}
              className="hidden lg:flex items-center gap-1 bg-white/85 dark:bg-[#161B3D]/85 border border-[#DCE4FB] dark:border-[#273063] p-1.5 rounded-full shadow-xs backdrop-blur-md"
            >
              {navLinks.map((link) => {
                const isActive = isHome && activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={getHref(link.id)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium transition-all rounded-full group ${
                      isActive
                        ? 'text-[#555DD6] dark:text-[#9BAFF5] font-semibold bg-[#E4E9FF]/70 dark:bg-[#1E2552]/80 shadow-2xs'
                        : 'text-[#4F5D91] dark:text-[#AAB5DE] hover:text-[#171B4B] dark:hover:text-[#F8FAFF] hover:bg-[#E4E9FF]/50 dark:hover:bg-[#1E2552]/50'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#555DD6] dark:bg-[#8198EF] rounded-full transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                      }`} 
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right: Controls (Theme Toggle, ES/EN selector, Primary Contact Button) for lg+ screens */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-btn"
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#AAB5DE] hover:text-[#555DD6] dark:hover:text-[#9BAFF5] transition-colors shadow-2xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#555DD6]"
                title={t.nav.themeToggle}
                aria-label={t.nav.themeToggle}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#555DD6]" />}
              </button>

              {/* ES / EN Language Selector */}
              <div className="flex items-center bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] rounded-xl p-1 shadow-2xs text-xs font-mono">
                <button
                  id="lang-toggle-es"
                  type="button"
                  onClick={() => setLang('es')}
                  className={`px-2.5 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                    lang === 'es'
                      ? 'bg-[#555DD6] text-white'
                      : 'text-[#8490B8] hover:text-[#171B4B] dark:hover:text-white'
                  }`}
                  aria-label="Cambiar idioma a Español"
                >
                  ES
                </button>
                <button
                  id="lang-toggle-en"
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${
                    lang === 'en'
                      ? 'bg-[#555DD6] text-white'
                      : 'text-[#8490B8] hover:text-[#171B4B] dark:hover:text-white'
                  }`}
                  aria-label="Switch language to English"
                >
                  EN
                </button>
              </div>

              {/* Contact Button */}
              <a
                id="contact-nav-btn"
                href={getHref('contacto')}
                className="btn-lavender-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide shadow-sm"
              >
                <span>{t.nav.getInTouch}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile/Tablet Controls (< lg) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-theme-toggle"
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#AAB5DE] cursor-pointer"
                aria-label={t.nav.themeToggle}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#555DD6]" />}
              </button>

              <button
                id="mobile-lang-toggle"
                type="button"
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-white text-xs font-mono font-semibold cursor-pointer"
                aria-label={t.nav.langLabel}
              >
                {lang.toUpperCase()}
              </button>

              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#171B4B] dark:text-[#F8FAFF] focus:outline-none shadow-xs cursor-pointer"
                aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu with Backdrop & Accessible Controls */}
          {mobileMenuOpen && (
            <>
              {/* Dimmed backdrop to close on outside click */}
              <div
                className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              <div
                id="mobile-nav-menu"
                ref={mobileMenuRef}
                className="relative z-50 lg:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-[#161B3D]/95 border border-[#DCE4FB] dark:border-[#273063] shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2"
              >
                <nav aria-label={t.a11y.mainNav} className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={getHref(link.id)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2.5 text-sm font-medium text-[#4F5D91] dark:text-[#AAB5DE] hover:text-[#555DD6] dark:hover:text-[#9BAFF5] hover:bg-[#E4E9FF]/60 dark:hover:bg-[#1E2552]/60 rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-2 border-t border-[#DCE4FB] dark:border-[#273063] mt-1">
                    <a
                      href={getHref('contacto')}
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-lavender-primary flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold"
                    >
                      <span>{t.nav.getInTouch}</span>
                    </a>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};
