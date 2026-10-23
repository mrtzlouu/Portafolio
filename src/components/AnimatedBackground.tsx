import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* Orb 1: Soft Periwinkle & Lavender (Top-Right / Center) */}
      <div 
        className="absolute -top-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full 
        bg-gradient-to-br from-[#8198EF]/25 via-[#B9C6FA]/30 to-[#E4E9FF]/20 
        dark:from-[#555DD6]/20 dark:via-[#3E45A8]/15 dark:to-transparent 
        blur-[90px] animate-lavender-orb-1 transform-gpu" 
      />

      {/* Orb 2: Soft Blue-Violet (Mid-Left) */}
      <div 
        className="absolute top-[35%] -left-[12%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full 
        bg-gradient-to-tr from-[#B9C6FA]/35 via-[#8198EF]/20 to-[#F0F1FF]/10 
        dark:from-[#37408F]/25 dark:via-[#555DD6]/15 dark:to-transparent 
        blur-[100px] animate-lavender-orb-2 transform-gpu" 
      />

      {/* Orb 3: Soft Lilac & Pastel Indigo (Bottom-Right) */}
      <div 
        className="absolute -bottom-[8%] right-[5%] w-[48vw] h-[48vw] max-w-[700px] max-h-[700px] rounded-full 
        bg-gradient-to-bl from-[#E4E9FF]/40 via-[#8198EF]/25 to-[#B9C6FA]/20 
        dark:from-[#555DD6]/20 dark:via-[#22295E]/30 dark:to-transparent 
        blur-[95px] animate-lavender-orb-3 transform-gpu" 
      />

      {/* Orb 4: Subtle Core Accent (Center) */}
      <div 
        className="absolute top-[68%] left-[25%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full 
        bg-gradient-to-r from-[#8198EF]/15 via-[#B9C6FA]/25 to-transparent 
        dark:from-[#3E45A8]/15 dark:to-transparent 
        blur-[85px] animate-lavender-orb-4 transform-gpu" 
      />

      {/* Decorative Organic Curved Vector Waves (Very Low Opacity) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.22] dark:opacity-[0.10] text-[#8198EF]"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="none"
      >
        <path 
          d="M-100,200 C300,100 500,350 900,220 C1250,110 1350,280 1550,230" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="4 8"
        />
        <path 
          d="M-50,600 C250,750 650,520 1000,680 C1300,800 1400,650 1550,700" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
        />
      </svg>

      {/* Decorative Botanical / Cloud-like Organic Floating SVG Shapes */}
      <svg 
        className="absolute top-[18%] right-[8%] w-64 h-64 opacity-[0.25] dark:opacity-[0.12] text-[#B9C6FA] animate-float-slow transform-gpu"
        viewBox="0 0 200 200" 
        fill="currentColor"
      >
        <path d="M48.2,-64.7C61.4,-54.6,70.3,-39.8,74.5,-23.7C78.7,-7.6,78.2,9.8,71.7,24.4C65.2,39,52.7,50.7,38.8,59.3C24.8,67.8,9.5,73.1,-5.9,73.1C-21.3,73.1,-36.8,67.7,-49.8,58.3C-62.8,48.9,-73.3,35.5,-77.6,20.2C-81.9,4.9,-80,-12.3,-72.6,-26.8C-65.1,-41.3,-52.1,-53.1,-37.8,-62.7C-23.5,-72.3,-7.9,-79.6,4.6,-79.9C17.1,-80.2,34.9,-74.8,48.2,-64.7Z" transform="translate(100 100)" />
      </svg>

      <svg 
        className="absolute bottom-[22%] left-[6%] w-72 h-72 opacity-[0.22] dark:opacity-[0.10] text-[#8198EF] animate-float-reverse transform-gpu"
        viewBox="0 0 200 200" 
        fill="currentColor"
      >
        <path d="M42.7,-57.4C54.9,-49.6,64.1,-36.5,69.5,-21.8C74.9,-7.1,76.5,9.2,71.7,23.7C66.9,38.2,55.7,50.8,42.1,59.1C28.5,67.4,12.5,71.4,-3.2,71.9C-18.9,72.4,-34.3,69.4,-47.4,61C-60.5,52.6,-71.3,38.8,-75.7,23.3C-80.1,7.8,-78.1,-9.4,-70.8,-23.7C-63.5,-38,-50.9,-49.4,-37.4,-56.7C-23.9,-64,-9.5,-67.2,3.3,-67.7C16.1,-68.2,30.5,-65.2,42.7,-57.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};
