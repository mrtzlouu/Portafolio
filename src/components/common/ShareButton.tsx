import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  text,
  url,
  className = '',
}) => {
  const { t } = useApp();
  const [feedback, setFeedback] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        // AbortError is raised when user cancels the native share sheet
        if ((err as Error).name === 'AbortError') return;
      }
    }

    // Fallback: clipboard copy
    try {
      await navigator.clipboard.writeText(url);
      setFeedback('copied');
      setTimeout(() => setFeedback('idle'), 2200);
    } catch {
      setFeedback('error');
      setTimeout(() => setFeedback('idle'), 2200);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B3D] border border-[#DCE4FB] dark:border-[#273063] text-[#4F5D91] dark:text-[#C5D0F5] hover:text-[#555DD6] dark:hover:text-[#F8FAFF] hover:border-[#555DD6] dark:hover:border-[#8198EF] transition-all text-xs sm:text-sm font-semibold shadow-2xs cursor-pointer ${className}`}
      aria-label={t.caseStudy.share}
      title={t.caseStudy.share}
    >
      {feedback === 'copied' ? (
        <>
          <Check className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
          <span>{t.caseStudy.shareCopied}</span>
        </>
      ) : feedback === 'error' ? (
        <>
          <Copy className="w-4 h-4 text-rose-500" />
          <span>{t.caseStudy.shareFailed}</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 text-[#555DD6] dark:text-[#8198EF]" />
          <span>{t.caseStudy.share}</span>
        </>
      )}
    </button>
  );
};
