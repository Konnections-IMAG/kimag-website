'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type From = 'top' | 'bottom' | 'left' | 'right';

type ImageRevealProps = {
  children: React.ReactNode;
  /** Edge the image is unveiled from. */
  from?: From;
  /** Seconds to wait before the unveil starts. */
  delay?: number;
  /** Corner radius kept constant through the clip animation. */
  radius?: string;
  className?: string;
  once?: boolean;
};

const START_INSETS: Record<From, string> = {
  top: '0% 0% 100% 0%',
  bottom: '100% 0% 0% 0%',
  left: '0% 100% 0% 0%',
  right: '0% 0% 0% 100%',
};

/**
 * Curtain-style unveil for editorial photography: the frame clips open
 * from one edge while the image inside settles from a slight zoom.
 * clip-path isn't a transform, so reduced motion is gated explicitly.
 */
export default function ImageReveal({
  children,
  from = 'top',
  delay = 0,
  radius = '1rem',
  className,
  once = true,
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={{ borderRadius: radius, overflow: 'hidden' }}>
        {children}
      </div>
    );
  }

  const viewport = { once, margin: '-70px' } as const;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden' }}
      initial={{ clipPath: `inset(${START_INSETS[from]} round ${radius})` }}
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius})` }}
      viewport={viewport}
      transition={{ duration: 1.1, delay, ease }}
    >
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.5, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
