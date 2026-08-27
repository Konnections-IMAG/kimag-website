'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import { Footer } from './Footer';
import Reveal from './ui/Reveal';
import { TriangleBlob } from './ui/Decor';
import type { ServicePageContent } from './text/servicePages';

const easing = [0.22, 1, 0.36, 1] as const;

const ServicePage: React.FC<{ content: ServicePageContent }> = ({ content }) => {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: easing },
  });

  return (
    <>
      <Navbar />
      <main className="bg-white pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-64 -top-64 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,var(--color-teal-tint),transparent)]"
          />
          <TriangleBlob color="rose" className="-left-20 bottom-0 h-72 w-72" rotate={-14} opacity={0.1} />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <motion.div {...enter(0)}>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint transition-colors hover:text-teal-deep"
              >
                <ArrowLeft className="h-4 w-4" />
                All practice areas
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <motion.p {...enter(0.08)} className="eyebrow">
                  Practice — {content.kicker}
                </motion.p>
                <motion.h1
                  {...enter(0.16)}
                  className="relative mt-6 inline-block font-display text-4xl leading-[1.1] tracking-[-0.015em] text-ink sm:text-5xl lg:text-6xl"
                >
                  {content.title}
                  <Image
                    src="/decor/underline-rose.svg"
                    alt=""
                    aria-hidden
                    width={300}
                    height={24}
                    className="absolute -bottom-2 left-0 h-2.5 w-full opacity-80"
                  />
                </motion.h1>
                <motion.p
                  {...enter(0.28)}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
                >
                  {content.intro}
                </motion.p>
                <motion.div {...enter(0.4)} className="mt-10 flex flex-wrap gap-4">
                  <Link href="/#contact" className="btn-primary">
                    Discuss your brief
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/#services" className="btn-outline">
                    Explore other practices
                  </Link>
                </motion.div>
              </div>

              <motion.div {...enter(0.35)} className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden
                    className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-rose-tint"
                  />
                  <Image
                    src={content.image}
                    alt={content.imageAlt}
                    width={720}
                    height={840}
                    priority
                    className="relative aspect-[5/6] w-full rounded-3xl border border-line object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section aria-labelledby="capabilities-heading" className="bg-mist">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <Reveal className="relative max-w-2xl">
              <Image
                src="/decor/swoosh-rose.svg"
                alt=""
                aria-hidden
                width={200}
                height={110}
                className="pointer-events-none absolute -top-8 right-0 hidden w-16 opacity-60 sm:block"
              />
              <p className="eyebrow">What this practice covers</p>
              <h2
                id="capabilities-heading"
                className="mt-6 font-display text-3xl leading-tight tracking-[-0.01em] text-ink sm:text-4xl"
              >
                Capabilities in depth
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {content.capabilities.map((cap, i) => (
                <Reveal key={cap.title} delay={(i % 3) * 0.1}>
                  <div className="border-t border-line pt-6">
                    <div className="overflow-hidden rounded-2xl border border-line bg-mist">
                      <Image
                        src={cap.image}
                        alt=""
                        aria-hidden
                        width={480}
                        height={360}
                        className="aspect-[4/3] w-full object-cover grayscale-[0.25]"
                      />
                    </div>
                    <p className="mt-5 font-display text-lg italic text-rose-brand">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{cap.title}</h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {cap.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">How we work</p>
              <h2
                id="process-heading"
                className="mt-6 font-display text-3xl leading-tight tracking-[-0.01em] text-ink sm:text-4xl"
              >
                A disciplined path from brief to impact
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {content.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <li className="relative border-l border-line pl-6">
                    <span className="font-display text-4xl text-teal-brand/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
            <Reveal>
              <div className="rounded-3xl bg-blue-night px-8 py-14 text-center sm:px-16 sm:py-18">
                <p className="font-display text-3xl italic leading-snug text-white sm:text-4xl">
                  Ready to talk about {content.kicker.toLowerCase()}?
                </p>
                <p className="mx-auto mt-5 max-w-xl text-white/70">
                  Tell us where your organisation stands, and we&apos;ll bring a
                  candid view of where communication can take it.
                </p>
                <Link
                  href="/#contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:bg-rose-tint"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
