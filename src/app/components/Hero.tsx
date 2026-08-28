'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../../lib/smoothScroll';
import ImageReveal from './ui/ImageReveal';
import Parallax from './ui/Parallax';
import CountUp from './ui/CountUp';
import { TriangleBlob } from './ui/Decor';

const stats = [
  { value: 15, suffix: '+', label: 'Years advising brands' },
  { value: 500, suffix: '+', label: 'Brands represented' },
  { value: 30, suffix: '+', label: 'Industry verticals' },
];

const credentials = [
  { src: '/iimbang.png', alt: 'IIM Bangalore', note: 'Recognised by IIM Bangalore' },
  { src: '/nsrcel.png', alt: 'NSRCEL', note: 'Incubated at NSRCEL' },
  { src: '/prci.png', alt: 'PRCI', note: 'Awarded by PRCI' },
];

const easing = [0.22, 1, 0.36, 1] as const;

/** One word rising from behind its own baseline mask. */
const MaskedWord: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => (
  <span className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
    <motion.span
      className="inline-block"
      initial={{ y: '115%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.9, delay, ease: easing }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero: React.FC = () => {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: easing },
  });

  return (
    <section className="relative overflow-hidden bg-white pt-[72px]">
      {/* Quiet backdrop: a single soft brand tint, nothing more */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-64 -top-64 h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,var(--color-teal-tint),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-80 -left-72 h-[760px] w-[760px] rounded-full bg-[radial-gradient(closest-side,var(--color-rose-tint),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,var(--color-rose-tint),transparent)] opacity-80"
      />
      <TriangleBlob color="blue" className="left-1/3 top-10 h-72 w-72" rotate={-12} opacity={0.12} />
      <TriangleBlob color="rose" className="-right-16 bottom-0 h-80 w-80" rotate={18} opacity={0.2} />
      <TriangleBlob color="rose" className="-left-20 top-24 h-72 w-72" rotate={150} opacity={0.16} />
      <Image
        src="/decor/dot-triangle.svg"
        alt=""
        aria-hidden
        width={200}
        height={200}
        className="pointer-events-none absolute right-8 top-24 hidden w-36 opacity-60 lg:block xl:w-44"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
          {/* Editorial statement */}
          <div className="lg:col-span-6 lg:pr-6">
            <motion.p {...enter(0.05)} className="eyebrow">
              Public relations · Branding · Reputation
            </motion.p>

            <h1 className="mt-7 font-display text-[2.75rem] leading-[1.08] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[4.25rem]">
              <span className="sr-only">
                We shape narratives. We build reputations.
              </span>
              <span aria-hidden className="block">
                {['We', 'shape', 'narratives.'].map((word, i) => (
                  <React.Fragment key={word}>
                    {i > 0 && ' '}
                    <MaskedWord delay={0.12 + i * 0.08}>{word}</MaskedWord>
                  </React.Fragment>
                ))}
              </span>
              <span aria-hidden className="block">
                {['We', 'build'].map((word, i) => (
                  <React.Fragment key={word}>
                    {i > 0 && ' '}
                    <MaskedWord delay={0.42 + i * 0.08}>{word}</MaskedWord>
                  </React.Fragment>
                ))}{' '}
                <MaskedWord delay={0.58}>
                  <em className="relative inline-block not-italic">
                    <span className="relative z-10 italic text-teal-deep">
                      reputations.
                    </span>
                    <motion.span
                      aria-hidden
                      className="absolute -bottom-1 left-0 z-0 h-3 w-full origin-left bg-rose-brand/25 sm:-bottom-1.5 sm:h-4"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 1.15, ease: easing }}
                    />
                  </em>
                </MaskedWord>
              </span>
            </h1>

            <motion.p
              {...enter(0.5)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              Konnections IMAG is an integrated communications consultancy trusted
              by India&apos;s leading organisations for strategic public relations,
              reputation management, crisis counsel, and corporate storytelling.
            </motion.p>

            <motion.div {...enter(0.62)} className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => smoothScrollTo('#contact', { duration: 1.4, offset: -80 })}
                className="btn-primary"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => smoothScrollTo('#services', { duration: 1.2, offset: -80 })}
                className="btn-outline"
              >
                Explore our practice
              </button>
            </motion.div>
          </div>

          {/* Editorial photo collage */}
          <div className="relative mb-12 mt-2 lg:col-span-5 lg:col-start-8 lg:mb-6 lg:mt-0">
            {/* Offset tint frame behind the lead image */}
            <motion.div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-rose-tint sm:-right-6 sm:-top-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: easing }}
            />
            <ImageReveal from="bottom" delay={0.35} radius="1rem" className="relative">
              <Image
                src="/hero-v2/PR.webp"
                alt="Executive reading business press coverage in print"
                width={880}
                height={1100}
                priority
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </ImageReveal>

            {/* Overlapping second frame, drifting on scroll */}
            <Parallax
              speed={30}
              className="absolute -bottom-10 -left-3 w-40 sm:-left-8 sm:w-52"
            >
              <ImageReveal from="left" delay={0.75} radius="0.75rem">
                <div className="border-4 border-white">
                  <Image
                    src="/hero-v2/digital.webp"
                    alt="Creator sharing a brand story with her audience"
                    width={520}
                    height={390}
                    sizes="(min-width: 640px) 208px, 160px"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </ImageReveal>
            </Parallax>

            {/* <motion.p
              {...enter(1.1)}
              className="mt-4 text-right font-display text-sm italic text-ink-faint"
            >
              From the boardroom to the feed — one coherent story.
            </motion.p> */}
          </div>
        </div>

        {/* Promise + proof band */}
        <motion.div
          {...enter(0.75)}
          className="relative grid gap-10 border-t border-line py-10 lg:grid-cols-12 lg:items-center"
        >
          <Image
            src="/decor/arc-stack.svg"
            alt=""
            aria-hidden
            width={240}
            height={130}
            className="pointer-events-none absolute -top-6 right-0 hidden w-40 opacity-60 lg:block"
          />
          <figure className="border-l-2 border-rose-brand pl-6 lg:col-span-5">
            <blockquote className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
              &ldquo;We make the right impact.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-ink-faint">
              The promise behind every mandate we take on
            </figcaption>
          </figure>

          <dl className="flex flex-wrap gap-x-14 gap-y-8 lg:col-span-7 lg:justify-end">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl tracking-tight text-ink lg:text-[2.75rem]">
                  <CountUp value={stat.value} suffix={stat.suffix} suffixClassName="text-rose-brand" />
                </dd>
                <dd className="mt-1 max-w-[9rem] text-sm leading-snug text-ink-soft">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Credentials strip */}
        <motion.div
          {...enter(0.85)}
          className="flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            <Image
              src="/decor/swoosh-rose.svg"
              alt=""
              aria-hidden
              width={200}
              height={110}
              className="h-3 w-auto opacity-70"
            />
            Credentials
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <div key={c.alt} className="flex items-center gap-3">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={44}
                  height={44}
                  className="h-9 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                />
                <span className="text-sm text-ink-soft">{c.note}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
