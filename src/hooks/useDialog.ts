import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface Options {
  /** Lock page scroll while active (modals). */
  lockScroll?: boolean;
  /** Trap Tab focus inside the container. */
  trapFocus?: boolean;
}

/**
 * Accessible overlay behavior (Requirements §6, §11):
 * Escape closes, focus moves inside on open, Tab is trapped, and focus
 * returns to the previously focused element on close.
 */
export function useDialog(
  isOpen: boolean,
  onClose: () => void,
  containerRef: RefObject<HTMLElement | null>,
  { lockScroll = false, trapFocus = true }: Options = {},
): void {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const container = containerRef.current;
    const getFocusable = (): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)) : [];

    // Move focus inside on the next frame (after mount/animation start).
    const raf = requestAnimationFrame(() => {
      const first = getFocusable()[0];
      (first ?? container)?.focus();
    });

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (!trapFocus || e.key !== 'Tab') return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown);
      if (lockScroll) document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, containerRef, lockScroll, trapFocus]);
}
