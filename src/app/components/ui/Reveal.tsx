'use client';

import React from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  /** Seconds to wait before animating in. */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Fade-and-rise reveal used across all sections so motion stays
 * consistent site-wide. Reduced motion is handled globally via
 * MotionConfig in SmoothScrollProvider.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
