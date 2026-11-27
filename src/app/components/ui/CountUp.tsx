'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = {
  value: number;
  suffix?: string;
  /** Seconds the count takes once in view. */
  duration?: number;
  /** Optional class for the suffix, e.g. to tint it. */
  suffixClassName?: string;
};

/**
 * Counts up to `value` the first time it scrolls into view. The server HTML
 * (and the no-JS, link-preview and reduced-motion cases) shows the final value.
 */
export default function CountUp({
  value,
  suffix = '',
  duration = 1.8,
  suffixClassName,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
