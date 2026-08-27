import React from 'react';

const triangleColor = {
  teal: 'var(--color-teal-brand)',
  rose: 'var(--color-rose-brand)',
  blue: 'var(--color-blue-brand)',
} as const;

/** Soft blurred triangular field colour, used as a quiet background accent. */
export const TriangleBlob: React.FC<{
  color: keyof typeof triangleColor;
  className?: string;
  rotate?: number;
  opacity?: number;
}> = ({ color, className = '', rotate = 0, opacity = 0.18 }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute -z-0 blur-3xl ${className}`}
    style={{
      background: triangleColor[color],
      opacity,
      clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
      transform: `rotate(${rotate}deg)`,
    }}
  />
);
