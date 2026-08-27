'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Hotel,
  HeartPulse,
  Cpu,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Building2,
  Factory,
  Zap,
  Clapperboard,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import TextReveal from './ui/TextReveal';
import { TriangleBlob } from './ui/Decor';
import { smoothScrollTo } from '../../lib/smoothScroll';

const industries = [
  { name: 'Hospitality', icon: Hotel },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Technology', icon: Cpu },
  { name: 'Financial Services', icon: Landmark },
  { name: 'Retail & Consumer', icon: ShoppingBag },
  { name: 'Education', icon: GraduationCap },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Energy & Infrastructure', icon: Zap },
  { name: 'Media & Entertainment', icon: Clapperboard },
];

export default function CaseStudies() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="relative overflow-hidden bg-white">
      <TriangleBlob color="blue" className="-left-16 bottom-0 h-80 w-80" rotate={6} opacity={0.09} />
      <Image
        src="/decor/bg-drift.svg"
        alt=""
        aria-hidden
        width={800}
        height={300}
        className="pointer-events-none absolute inset-x-0 top-10 h-64 w-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <Image
              src="/decor/quote-swoosh.svg"
              alt=""
              aria-hidden
              width={140}
              height={80}
              className="pointer-events-none absolute -left-2 -top-10 w-16 opacity-60"
            />
            <Reveal>
              <p className="eyebrow">Impact &amp; recognition</p>
            </Reveal>
            <h2
              id="impact-heading"
              className="mt-6 font-display text-4xl leading-[1.12] tracking-[-0.01em] text-ink sm:text-5xl"
            >
              <TextReveal text="The work speaks quietly, and carries." />
            </h2>
          </div>
          <Reveal delay={0.15} className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-ink-soft">
              Much of our best work is confidential by design . Reputations are
              protected, crises averted, narratives repositioned without
              fanfare. What we can share: the industries we serve, the
              recognition our work has earned, and detailed case studies for
              your sector — available on request through our contact form.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Industries strip */}
      <Reveal delay={0.1}>
        <div className="mt-16 border-y border-line py-7">
          <div className="marquee-track items-center" aria-hidden>
            {[...industries, ...industries].map((industry, i) => (
              <span key={`${industry.name}-${i}`} className="flex items-center whitespace-nowrap">
                <span className="flex items-center gap-3 px-6 font-display text-2xl text-ink-soft sm:px-8 sm:text-[1.7rem]">
                  <industry.icon className="h-5 w-5 shrink-0 text-teal-brand sm:h-6 sm:w-6" />
                  {industry.name}
                </span>
                <span className="text-rose-brand">•</span>
              </span>
            ))}
          </div>
          <p className="sr-only">
            Industries we serve: {industries.map((i) => i.name).join(', ')}
          </p>
        </div>
      </Reveal>

      {/* Quiet CTA */}
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-blue-night px-8 py-14 text-center sm:px-16 sm:py-20">
            <TriangleBlob color="rose" className="-right-16 -top-16 h-64 w-64" rotate={-10} opacity={0.35} />
            <p className="relative font-display text-3xl italic leading-snug text-white sm:text-4xl">
              Curious what we could do for your story?
            </p>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              We&apos;ll walk you through relevant work, references, and a candid
              view of where your reputation stands today.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => smoothScrollTo('#contact', { duration: 1.4, offset: -80 })}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:bg-rose-tint"
              >
                Request a conversation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('request-case-studies'));
                  smoothScrollTo('#contact', { duration: 1.4, offset: -80 });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Request case studies
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
