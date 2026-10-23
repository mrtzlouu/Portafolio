import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AppProvider } from './context/AppContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Home } from './pages/Home';

// Route-level code-splitting (Requirements §18)
const ProjectCaseStudy = lazy(() =>
  import('./pages/ProjectCaseStudy').then((m) => ({ default: m.ProjectCaseStudy })),
);
const NotFound = lazy(() =>
  import('./pages/NotFound').then((m) => ({ default: m.NotFound })),
);

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center p-6" aria-live="polite">
    <div className="w-8 h-8 rounded-full border-2 border-[#555DD6]/20 border-t-[#555DD6] dark:border-[#8198EF]/20 dark:border-t-[#8198EF] animate-spin" />
  </div>
);

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F1FF] dark:bg-[#0B0E21] text-[#171B4B] dark:text-[#F0F3FF] relative selection:bg-[#8198EF]/30 selection:text-[#171B4B] dark:selection:text-white transition-colors duration-300">
      <Preloader />
      <ScrollProgressBar />
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
