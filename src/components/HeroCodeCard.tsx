import React, { useState, useEffect, useRef } from 'react';
import { Code2, Copy, Check, RotateCcw, Terminal, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Token {
  text: string;
  className: string;
}

const CODE_LINES: Token[][] = [
  [
    { text: 'const ', className: 'text-[#555DD6] dark:text-[#8198EF] font-bold' },
    { text: 'dev', className: 'text-[#171B4B] dark:text-[#F8FAFF] font-semibold' },
    { text: ' = {', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
  ],
  [
    { text: '  ', className: '' },
    { text: 'name', className: 'text-[#2563EB] dark:text-[#60A5FA] font-medium' },
    { text: ': ', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
    { text: "'Lourdes'", className: 'text-[#0D9488] dark:text-[#34D399] font-medium' },
    { text: ',', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
  ],
  [
    { text: '  ', className: '' },
    { text: 'stack', className: 'text-[#2563EB] dark:text-[#60A5FA] font-medium' },
    { text: ': [', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
    { text: "'Astro'", className: 'text-[#0D9488] dark:text-[#34D399] font-medium' },
    { text: ', ', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
    { text: "'React'", className: 'text-[#0D9488] dark:text-[#34D399] font-medium' },
    { text: '],', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
  ],
  [
    { text: '  ', className: '' },
    { text: 'learning', className: 'text-[#2563EB] dark:text-[#60A5FA] font-medium' },
    { text: ': ', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
    { text: 'true', className: 'text-[#D97706] dark:text-[#F59E0B] font-bold' },
  ],
  [
    { text: '};', className: 'text-[#8490B8] dark:text-[#9AA8D8]' },
  ],
];

// Calculate total character count across all tokens
const TOTAL_CHARS = CODE_LINES.reduce(
  (acc, line) => acc + line.reduce((lineAcc, t) => lineAcc + t.text.length, 0),
  0
);

export const HeroCodeCard: React.FC = () => {
  const { lang } = useApp();
  const [charCount, setCharCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rawCode = `const dev = { name: 'Lourdes', stack: ['Astro', 'React'], learning: true };`;

  useEffect(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (charCount < TOTAL_CHARS) {
        // Typing forward
        timerRef.current = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 38);
      } else {
        // Finished typing - pause to let the user admire the code
        timerRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 4000);
      }
    } else {
      if (charCount > 0) {
        // Deleting smoothly
        timerRef.current = setTimeout(() => {
          setCharCount((prev) => Math.max(0, prev - 2));
        }, 18);
      } else {
        // Finished deleting - brief pause before typing again
        timerRef.current = setTimeout(() => {
          setIsDeleting(false);
          setCharCount(0);
        }, 600);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charCount, isDeleting, isPaused]);

  const copyCode = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const restartAnimation = () => {
    setIsDeleting(false);
    setCharCount(0);
  };

  // Render tokens up to current charCount budget
  let budget = charCount;
  const renderedContent: React.ReactNode[] = [];
  let cursorRendered = false;

  CODE_LINES.forEach((lineTokens, lineIdx) => {
    const lineSpans: React.ReactNode[] = [];

    lineTokens.forEach((token, tokenIdx) => {
      if (budget <= 0) return;

      const take = Math.min(budget, token.text.length);
      const textSlice = token.text.slice(0, take);
      budget -= take;

      if (textSlice.length > 0) {
        lineSpans.push(
          <span key={`${lineIdx}-${tokenIdx}`} className={token.className}>
            {textSlice}
          </span>
        );
      }
    });

    const isCurrentTypingLine = budget === 0 && !cursorRendered && charCount > 0;
    if (isCurrentTypingLine || (charCount === 0 && lineIdx === 0 && !cursorRendered)) {
      cursorRendered = true;
      lineSpans.push(
        <span
          key="cursor"
          className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-[#555DD6] dark:bg-[#8198EF] ml-0.5 align-middle animate-pulse rounded-[1px] shadow-[0_0_8px_rgba(85,93,214,0.6)]"
          aria-hidden="true"
        />
      );
    }

    renderedContent.push(
      <div key={lineIdx} className="flex items-start min-h-[1.5rem]">
        {/* Line number gutter */}
        <span className="w-6 shrink-0 select-none font-mono text-xs text-[#8490B8]/40 dark:text-[#9AA8D8]/30 text-right pr-3 pt-0.5">
          {lineIdx + 1}
        </span>
        {/* Line code */}
        <span className="whitespace-pre font-mono text-[13px] sm:text-sm font-medium leading-relaxed">
          {lineSpans.length > 0 ? lineSpans : lineIdx === 0 && charCount === 0 ? (
            <span
              className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-[#555DD6] dark:bg-[#8198EF] ml-0.5 align-middle animate-pulse rounded-[1px]"
              aria-hidden="true"
            />
          ) : '\u00A0'}
        </span>
      </div>
    );
  });

  return (
    <div 
      className="relative w-full max-w-lg lg:max-w-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative ambient background blur orbs matching site theme */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#B9C6FA]/30 dark:bg-[#555DD6]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#8198EF]/25 dark:bg-[#3E45A8]/20 blur-3xl pointer-events-none" />

      {/* Main Code Window Container matching site theme */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-[#DCE4FB] dark:border-[#273063] bg-white/90 dark:bg-[#121636]/90 shadow-xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#8198EF]/60 dark:hover:border-[#555DD6]/60 group">
        
        {/* Window Header Bar */}
        <div className="px-4 sm:px-5 py-3.5 border-b border-[#DCE4FB] dark:border-[#273063] bg-[#F0F1FF]/60 dark:bg-[#161B3D]/80 flex items-center justify-between gap-3">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 shadow-xs inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 shadow-xs inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 shadow-xs inline-block" />
          </div>

          {/* Active file tab */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976] shadow-2xs">
            <Code2 className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
            <span className="font-mono text-xs font-semibold text-[#171B4B] dark:text-[#F8FAFF]">
              dev.ts
            </span>
          </div>

          {/* Action buttons: Restart & Copy */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={restartAnimation}
              className="p-1.5 rounded-lg text-[#8490B8] hover:text-[#555DD6] dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#1E2552] transition-colors cursor-pointer"
              title={lang === 'en' ? 'Restart animation' : 'Reiniciar animación'}
              aria-label={lang === 'en' ? 'Restart animation' : 'Reiniciar animación'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={copyCode}
              className="p-1.5 rounded-lg text-[#8490B8] hover:text-[#555DD6] dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#1E2552] transition-colors cursor-pointer"
              title={lang === 'en' ? 'Copy code' : 'Copiar código'}
              aria-label={lang === 'en' ? 'Copy code' : 'Copiar código'}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="p-4 sm:p-6 select-text overflow-x-auto">
          <div className="space-y-1">
            {renderedContent}
          </div>
        </div>

        {/* Bottom Interactive Evaluation Strip */}
        <div className="px-4 sm:px-6 py-3 border-t border-[#DCE4FB] dark:border-[#273063] bg-[#F7F8FF]/80 dark:bg-[#0E122C]/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#4F5D91] dark:text-[#C5D0F5]">
            <Terminal className="w-3.5 h-3.5 text-[#555DD6] dark:text-[#8198EF]" />
            <span className="text-[11px] text-[#8490B8] dark:text-[#9AA8D8]">
              {lang === 'en' ? 'Output' : 'Salida'}:
            </span>
            <span className="font-semibold text-[#171B4B] dark:text-[#F8FAFF]">
              dev.stack → ['Astro', 'React']
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#DCE4FB] dark:border-[#2E3976] text-[10px] text-[#555DD6] dark:text-[#9BAFF5] font-semibold">
            <Sparkles className="w-3 h-3 text-[#555DD6] dark:text-[#8198EF]" />
            <span>TypeScript 5.4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
