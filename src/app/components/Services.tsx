'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import Reveal from './ui/Reveal';
import TextReveal from './ui/TextReveal';
import { TriangleBlob } from './ui/Decor';

type ServiceItem = {
  title: string;
  description: string[];
  link: string;
};

/** One-line positioning statement per practice, keyed by route. */
const positioning: Record<string, string> = {
  '/services/public-relations':
    'Earned credibility, built through the media and stakeholders your audiences already trust.',
  '/services/crisis-management':
    'Calm, decisive counsel when reputation is on the line before, during, and after the storm.',
  '/services/financial-communications':
    'Clear, compliant communication for listed companies, IPOs, and the investors who back them.',
  '/services/digital-media':
    'Strategy-led digital presence. Content, community, and influence that compound over time.',
  '/services/corporate-communications':
    'Executive voice, employee alignment, and thought leadership that carries the corporate story.',
  '/services/specialized-services':
    'Research, training, measurement, and creative counsel for communication challenges that fit no template.',
};

/** Editorial photograph shown in the cursor-following preview, keyed by route. */
const previews: Record<string, string> = {
  '/services/public-relations': '/hero/PR.png',
  '/services/crisis-management': '/hero/crisis.png',
  '/services/financial-communications': '/hero/finance.png',
  '/services/digital-media': '/hero/digital.png',
  '/services/corporate-communications': '/hero/corporate.png',
  '/services/specialized-services': '/hero/spl.png',
};

const easing = [0.22, 1, 0.36, 1] as const;

export const OurServices: React.FC<{ items: ServiceItem[] }> = ({ items }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // Cursor-following photo preview (desktop pointer devices only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 200, damping: 26, mass: 0.6 });
  const py = useSpring(my, { stiffness: 200, damping: 26, mass: 0.6 });

  const handlePointerMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden bg-mist">
      <TriangleBlob color="rose" className="-right-20 top-24 h-72 w-72" rotate={-8} opacity={0.1} />
      <Image
        src="/decor/bg-lattice.svg"
        alt=""
        aria-hidden
        width={480}
        height={480}
        className="pointer-events-none absolute -left-16 bottom-16 hidden w-[420px] opacity-[0.3] lg:block"
      />
      <Image
        src="/decor/tri-orbits.svg"
        alt=""
        aria-hidden
        width={200}
        height={210}
        className="pointer-events-none absolute right-0 top-8 hidden w-32 opacity-50 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our practice</p>
        </Reveal>
        <h2
          id="services-heading"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.12] tracking-[-0.01em] text-ink sm:text-5xl"
        >
          <TextReveal text="Six disciplines. One integrated practice." />
        </h2>
        <Reveal delay={0.2} className="max-w-3xl">
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Reputation isn&apos;t built in a single channel. Our practice areas work
            as one — so your story holds together in the boardroom, the newsroom,
            and the feed.
          </p>
        </Reveal>

        <Image
          src="/decor/wave-lines.svg"
          alt=""
          aria-hidden
          width={800}
          height={80}
          className="mt-14 h-8 w-full opacity-40"
        />

        <div
          ref={listRef}
          onMouseMove={reduce ? undefined : handlePointerMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-4"
        >
          {items.map((service, index) => (
            <Reveal key={service.link} delay={0.05}>
              <Link
                href={service.link}
                onMouseEnter={() => setActive(service.link)}
                className="group grid gap-4 border-t border-line py-10 transition-colors duration-300 last:border-b hover:bg-white/70 lg:grid-cols-12 lg:gap-8 lg:px-4"
              >
                <div className="lg:col-span-1">
                  <span className="font-display text-lg italic text-rose-brand">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl leading-snug text-ink transition-colors duration-300 group-hover:text-teal-deep sm:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                    {positioning[service.link]}
                  </p>
                </div>

                <ul className="space-y-2 self-center lg:col-span-5">
                  {service.description.slice(0, 4).map((capability) => (
                    <li
                      key={capability}
                      className="flex items-baseline gap-3 text-[0.9375rem] text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="h-px w-4 shrink-0 translate-y-[-3px] bg-teal-brand"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>

                <div className="hidden items-center justify-end lg:col-span-1 lg:flex">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:border-teal-brand group-hover:bg-teal-brand group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Photograph trailing the cursor over the practice list */}
          {!reduce && (
            <motion.div
              aria-hidden
              style={{ x: px, y: py }}
              className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            >
              <div className="relative -top-32 left-10 h-64 w-52">
                <AnimatePresence>
                  {active && previews[active] && (
                    <motion.figure
                      key={active}
                      initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                      animate={{ opacity: 1, scale: 1, rotate: 2 }}
                      exit={{ opacity: 0, scale: 0.95, rotate: 4 }}
                      transition={{ duration: 0.3, ease: easing }}
                      className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-white"
                    >
                      <Image
                        src={previews[active]}
                        alt=""
                        fill
                        sizes="208px"
                        className="object-cover"
                      />
                    </motion.figure>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
