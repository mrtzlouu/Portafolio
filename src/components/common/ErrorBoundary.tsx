import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackText?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      const title = this.props.fallbackTitle || 'Algo salió mal';
      const text =
        this.props.fallbackText ||
        'Ocurrió un error inesperado al renderizar esta sección. Puedes intentar recargar la página.';

      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
          <div className="editorial-card max-w-md w-full p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E4E9FF] dark:bg-[#1E2552] border border-[#B9C6FA] dark:border-[#37408F] mx-auto flex items-center justify-center text-[#555DD6] dark:text-[#9BAFF5]">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#171B4B] dark:text-[#F8FAFF]">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4F5D91] dark:text-[#C5D0F5] leading-relaxed">
              {text}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="btn-lavender-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Recargar</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
