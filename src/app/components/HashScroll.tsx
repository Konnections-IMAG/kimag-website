'use client';

import { useEffect } from 'react';
import { smoothScrollTo } from '../../lib/smoothScroll';

/** Scrolls to the URL fragment when the homepage is opened as /#section. */
export default function HashScroll() {
  useEffect(() => {
    const element = document.getElementById(window.location.hash.substring(1));
    if (!element) return;

    const scroll = () => {
      const nav = document.querySelector('header');
      const offset = nav ? -(nav.getBoundingClientRect().height + 16) : -88;
      smoothScrollTo(element, { duration: 1.5, offset });
    };

    // Re-apply once after images and fonts settle, to absorb layout shift.
    const first = setTimeout(scroll, 500);
    const second = setTimeout(scroll, 1200);
    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, []);

  return null;
}
