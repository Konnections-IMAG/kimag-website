export const scrollToTop = () => {
  smoothScrollTo(0, { duration: 1.5 });
};

export const scrollToSection = (sectionId: string, offset: number = 0) => {
  smoothScrollTo(`#${sectionId}`, { offset });
};
import Lenis from 'lenis';

export const smoothScrollTo = (target: string | HTMLElement | number, options?: {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}) => {
  const lenis = (window as typeof window & { lenis?: Lenis }).lenis;
  
  if (lenis) {
    const defaultOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: 0,
      ...options,
    };
    
    lenis.scrollTo(target, defaultOptions);
  } else {
    // Fallback for when Lenis is not available
    if (typeof target === 'string') {
      const element = document.querySelector(target) || document.getElementById(target.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  }
};

/**
 * Click handler for real `#section` links: smooth-scrolls on a plain click and
 * leaves modified clicks (new tab, new window) to the browser.
 */
export const scrollOnClick = (
  event: {
    button: number;
    metaKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    preventDefault: () => void;
  },
  hash: string,
  offset = -80
) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }
  event.preventDefault();
  smoothScrollTo(hash, { duration: 1.2, offset });
  window.history.replaceState(null, '', hash);
};
