'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import Reveal from './ui/Reveal';
import { TriangleBlob } from './ui/Decor';
import { awards } from './text/awards';

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// Gentle, editorial drift — px per second the belt moves when left alone.
const SPEED = 42;

export default function AwardsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const reduce = useReducedMotion();

  // Scroll position of the belt, kept in a ref so the animation loop never
  // triggers a React re-render.
  const offset = useRef(0);
  const setWidth = useRef(0); // width of one full pass of the awards
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, offset: 0 });

  // Two identical passes so the belt can wrap without a visible seam.
  const loop = [...awards, ...awards];

  // Position each card along the curve based on its distance from centre.
  const applyCurve = useCallback(() => {
    const view = viewportRef.current;
    if (!view) return;
    const rect = view.getBoundingClientRect();
    const centre = rect.left + rect.width / 2;
    const half = rect.width / 2 || 1;

    const compact = rect.width < 640;
    const depth = reduce ? 0 : compact ? 24 : 56; // downward drift at the edges
    const rot = reduce ? 0 : compact ? 0 : 22; // rotateY at the edges
    const scaleDrop = reduce ? 0 : compact ? 0.08 : 0.16;
    const opDrop = reduce ? 0 : compact ? 0.2 : 0.38;

    cardRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cardCentre = r.left + r.width / 2;
      const t = clamp((cardCentre - centre) / half, -1.5, 1.5);
      const at = Math.min(1, Math.abs(t));

      const scale = 1 - scaleDrop * at;
      const ty = depth * t * t;
      const ry = -rot * t;

      el.style.transform = `translate3d(0, ${ty}px, 0) rotateY(${ry}deg) scale(${scale})`;
      el.style.opacity = String(1 - opDrop * at);
      el.style.zIndex = String(1000 - Math.round(at * 1000));
      el.style.boxShadow =
        at < 0.22
          ? '0 32px 60px -28px rgba(23,42,53,0.30)'
          : '0 14px 34px -22px rgba(23,42,53,0.18)';
    });
  }, [reduce]);

  // Width of a single pass = distance between a card and its duplicate.
  const measure = useCallback(() => {
    const first = cardRefs.current[0];
    const twin = cardRefs.current[awards.length];
    if (first && twin) setWidth.current = twin.offsetLeft - first.offsetLeft;
  }, []);

  // Wrap the offset into [0, setWidth) and paint the belt + curve.
  const render = useCallback(() => {
    const track = trackRef.current;
    const w = setWidth.current;
    if (track) {
      let o = offset.current;
      if (w > 0) o = ((o % w) + w) % w;
      offset.current = o;
      track.style.transform = `translate3d(${-o}px, 0, 0)`;
    }
    applyCurve();
  }, [applyCurve]);

  // Continuous motion. Under reduced-motion the belt holds still and only
  // responds to dragging.
  useEffect(() => {
    if (reduce) {
      const id = requestAnimationFrame(() => {
        measure();
        render();
      });
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    let last = 0;
    const frame = (t: number) => {
      if (!setWidth.current) measure(); // retry until layout has settled
      if (!last) last = t;
      const dt = (t - last) / 1000;
      last = t;
      if (!dragging.current) offset.current += SPEED * dt;
      render();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reduce, measure, render]);

  useEffect(() => {
    const onResize = () => {
      measure();
      render();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure, render]);

  // --- Drag to move (mouse + touch, unified through pointer events) ---
  const onPointerDown = (e: React.PointerEvent) => {
    const view = viewportRef.current;
    if (!view) return;
    dragging.current = true;
    dragStart.current = { x: e.clientX, offset: offset.current };
    view.setPointerCapture(e.pointerId);
    view.style.cursor = 'grabbing';
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    offset.current = dragStart.current.offset - (e.clientX - dragStart.current.x);
    if (reduce) render(); // no animation loop is running to paint the move
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const view = viewportRef.current;
    if (view) {
      view.style.cursor = 'grab';
      if (view.hasPointerCapture?.(e.pointerId)) view.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <TriangleBlob color="rose" className="-left-24 top-24 h-72 w-72" rotate={-8} opacity={0.08} />
      <TriangleBlob color="blue" className="-right-24 top-48 h-80 w-80" rotate={12} opacity={0.07} />

      {/* Heading */}
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-plain justify-center">Recognition that inspires</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            id="awards-heading"
            className="mt-5 font-display text-4xl leading-[1.08] tracking-[-0.01em] text-ink sm:text-5xl"
          >
            Awards &amp; <span className="text-rose-brand">Achievements</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Celebrating the milestones and recognition that reflect our commitment to
            excellence and meaningful impact.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-rose-brand" />
            <span className="h-px w-16 bg-line" />
          </span>
        </Reveal>
      </div>

      {/* Curved, continuously moving belt — drag to move, loops forever */}
      <div className="relative mt-14">
        <div
          ref={viewportRef}
          role="group"
          aria-label="Awards gallery — drag to explore"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative select-none overflow-hidden pb-24 pt-10"
          style={{
            perspective: '1500px',
            perspectiveOrigin: 'center',
            cursor: 'grab',
            touchAction: 'pan-y',
          }}
        >
          <div
            ref={trackRef}
            className="flex items-start"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {loop.map((award, i) => (
              <article
                key={`${award.image}-${i}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="mx-2.5 w-[248px] shrink-0 rounded-2xl border border-line bg-white sm:w-[288px]"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl bg-mist">
                  <Image
                    src={award.image}
                    alt={`${award.title}${award.agency ? ` — ${award.agency}` : ''}${
                      award.year ? ` (${award.year})` : ''
                    }`}
                    fill
                    draggable={false}
                    sizes="(min-width: 640px) 288px, 248px"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-5">
                  {award.year && (
                    <p className="text-xs font-semibold tracking-[0.18em] text-teal-deep">
                      {award.year}
                    </p>
                  )}
                  <h3 className="mt-2 font-display text-lg leading-snug text-ink">{award.title}</h3>
                  {(award.agency || award.category) && (
                    <p className="mt-1.5 text-sm leading-snug text-ink-soft">
                      {[award.category, award.agency].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
