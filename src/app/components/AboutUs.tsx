'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from './ui/Reveal';
import TextReveal from './ui/TextReveal';
import ImageReveal from './ui/ImageReveal';
import Parallax from './ui/Parallax';
import { TriangleBlob } from './ui/Decor';
import { smoothScrollTo } from '../../lib/smoothScroll';

const principles = [
  {
    numeral: 'I',
    title: 'Our Mission',
    body: 'To help brands find their authentic voice, tell compelling stories, and build meaningful connections with their stakeholders through strategic communication.',
  },
  {
    numeral: 'II',
    title: 'Our Vision',
    body: "To be India's most trusted communication partner, recognised for delivering impactful narratives that drive business success and build lasting reputations.",
  },
  {
    numeral: 'III',
    title: 'Our Philosophy',
    body: 'We believe communication can change the world and the way it responds to brands, reputations, and ideas. Every engagement begins from that conviction.',
  },
];

const differentiators = [
  {
    title: 'Client-centric counsel',
    body: 'Strategies tailored to your business goals, brand values, and the audiences that matter to you never off-the-shelf programmes.',
  },
  {
    title: '360-degree capability',
    body: 'Integrated communication services under one roof, so your story stays coherent across every channel and stakeholder.',
  },
  {
    title: 'Deep sector fluency',
    body: 'Working knowledge across 30+ industry verticals, from capital markets to consumer brands, healthcare to heavy industry.',
  },
  {
    title: 'Relationships that endure',
    body: 'Fifteen years of trust built with editors, analysts, influencers, and institutions across India.',
  },
  {
    title: 'Evidence over instinct',
    body: 'Research-led planning and measurement frameworks that connect communication to business outcomes.',
  },
  {
    title: 'Ready when it matters',
    body: 'Round-the-clock crisis capability with a proven record of protecting and restoring reputations.',
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-white">
      <TriangleBlob color="teal" className="-left-24 top-40 h-80 w-80" rotate={18} opacity={0.1} />
      <Image
        src="/decor/bg-contours.svg"
        alt=""
        aria-hidden
        width={640}
        height={480}
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[560px] w-full object-cover opacity-[0.35]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Story */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Who we are</p>
            </Reveal>
            <h2
              id="about-heading"
              className="mt-6 font-display text-4xl leading-[1.12] tracking-[-0.01em] text-ink sm:text-5xl"
            >
              <TextReveal text="A consultancy built on the craft of communication." />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.8] text-teal-brand">
                  A
                </span>
                t Konnections IMAG, we don&apos;t just run campaigns we craft the
                narratives that turn brands into movements. As a public relations
                and image management consultancy, we build, protect, and enhance
                reputations for organisations across India&apos;s most demanding
                industries.
              </p>
              <p>
                Our counsel sits at the intersection of strategy and story: what a
                brand should say, to whom, when, and why. From boardroom
                positioning to public sentiment, we help leadership teams shape
                how the world sees them deliberately, and for the long term.
              </p>
            </div>
            <button
              onClick={() => smoothScrollTo('#services', { duration: 1.2, offset: -80 })}
              className="link-quiet mt-8 text-[0.9375rem]"
            >
              See how we work →
            </button>
          </Reveal>
        </div>

        {/* Editorial photography: the practice at work */}
        <div className="mt-20 grid items-end gap-x-6 gap-y-12 sm:grid-cols-12 lg:mt-24">
          <div className="sm:col-span-7">
            <Parallax speed={22}>
              <ImageReveal from="left" radius="1rem">
                <Image
                  src="/hero-v2/investor.webp"
                  alt="Consultants working through a client mandate together"
                  width={1200}
                  height={750}
                  sizes="(min-width: 640px) 56vw, 92vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </ImageReveal>
            </Parallax>
            <p className="mt-3 font-display text-sm italic text-ink-faint">
              Counsel in progress: Strategy before story.
            </p>
          </div>
          <div className="sm:col-span-5">
            <Parallax speed={-14}>
              <ImageReveal from="bottom" delay={0.15} radius="1rem">
                <Image
                  src="/hero-v2/corporate.webp"
                  alt="Spokesperson addressing the press from the podium"
                  width={800}
                  height={1000}
                  sizes="(min-width: 640px) 36vw, 92vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </ImageReveal>
            </Parallax>
            <p className="mt-3 text-right font-display text-sm italic text-ink-faint">
              On the record: When the message must hold.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="relative mt-24">
          <Image
            src="/decor/divider-spark.svg"
            alt=""
            aria-hidden
            width={800}
            height={48}
            className="absolute -top-px left-0 h-8 w-full opacity-80"
          />
        </div>
        <div className="grid gap-12 pt-16 md:grid-cols-3 md:gap-10">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <p className="font-display text-xl italic text-rose-brand">{p.numeral}.</p>
              <h3 className="mt-4 font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Differentiators */}
        <div className="relative mt-28">
          <Image
            src="/decor/ring-trio.svg"
            alt=""
            aria-hidden
            width={200}
            height={200}
            className="pointer-events-none absolute -top-8 right-0 hidden w-24 opacity-70 lg:block"
          />
          <Image
            src="/decor/bg-orbit-field.svg"
            alt=""
            aria-hidden
            width={520}
            height={520}
            className="pointer-events-none absolute -left-24 -top-16 hidden w-[420px] opacity-30 lg:block"
          />
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Konnections IMAG</p>
            <h3 className="mt-6 font-display text-3xl leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
              What sets our counsel apart
            </h3>
          </Reveal>
          <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.1}>
                <div className="border-t border-line pt-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-ink">{d.title}</h4>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
