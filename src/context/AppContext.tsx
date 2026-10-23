import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { Language, Theme } from '../types';
import { translations, type Translations } from '../i18n/translations';

export type { Language, Theme } from '../types';
export type { Translations } from '../i18n/translations';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const readStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode / disabled): preference simply not persisted */
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() =>
    readStorage('portafolio_lang') === 'en' ? 'en' : 'es',
  );

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = readStorage('portafolio_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    writeStorage('portafolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    writeStorage('portafolio_lang', newLang);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, lang, setLang, t: translations[lang] }),
    [theme, toggleTheme, lang, setLang],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react/only-export-components
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
