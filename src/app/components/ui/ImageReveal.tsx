'use client';

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

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
 *
 * The in-view test runs on an outer wrapper rather than on the clipped frame
 * itself, and that separation is load-bearing. Putting `whileInView` on the
 * clipped element deadlocks it: the closed clip leaves zero visible area, which
 * Chrome reports to IntersectionObserver as ratio 0 — and, once a negative root
 * margin is applied, as not intersecting at all — so the animation that would
 * open the clip never fires and the photograph stays invisible for good. It
 * only escaped notice on wide screens, where these images happen to start
 * inside the first viewport. The wrapper is never clipped, so it always
 * reports its true geometry.
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-70px' });

  if (reduce) {
    return (
      <div className={className} style={{ borderRadius: radius, overflow: 'hidden' }}>
        {children}
      </div>
    );
  }

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ overflow: 'hidden' }}
        initial={{ clipPath: `inset(${START_INSETS[from]} round ${radius})` }}
        animate={inView ? { clipPath: `inset(0% 0% 0% 0% round ${radius})` } : undefined}
        transition={{ duration: 1.1, delay, ease }}
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.5, delay, ease }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
