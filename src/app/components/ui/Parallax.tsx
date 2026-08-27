'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxProps = {
  children: React.ReactNode;
  /**
   * Total vertical drift in px as the element crosses the viewport.
   * Positive drifts up on scroll; negative drifts down.
   */
  speed?: number;
  className?: string;
};

/**
 * Subtle scroll-linked drift for editorial imagery. Style-driven motion
 * values bypass MotionConfig, so reduced motion is gated explicitly.
 */
export default function Parallax({ children, speed = 24, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
