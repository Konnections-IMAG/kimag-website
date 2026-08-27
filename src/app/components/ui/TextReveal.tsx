'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TextRevealProps = {
  /** Plain text; revealed word by word from behind a baseline mask. */
  text: string;
  /** Seconds to wait before the first word rises. */
  delay?: number;
  /** Seconds between each word. */
  stagger?: number;
  className?: string;
  once?: boolean;
};

/**
 * Editorial word-mask reveal for headings: each word rises from behind
 * its own overflow mask, like type settling onto a page. Reduced motion
 * is handled globally via MotionConfig (y is a transform).
 * Spaces live between the masks — a trailing space inside an
 * inline-block gets trimmed by CSS whitespace collapsing.
 */
export default function TextReveal({
  text,
  delay = 0,
  stagger = 0.05,
  className,
  once = true,
}: TextRevealProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            {i > 0 && ' '}
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{ hidden: { y: '115%' }, visible: { y: '0%' } }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          </React.Fragment>
        ))}
      </motion.span>
    </span>
  );
}
