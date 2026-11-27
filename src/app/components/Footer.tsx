'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { TriangleBlob } from './ui/Decor';
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SECTION_LINKS,
  SERVICE_LINKS as services,
  SOCIAL_URLS,
} from '../lib/site';

const company = [
  ...SECTION_LINKS.map((l) => ({ name: l.name, href: `/${l.hash}` })),
  { name: 'Contact', href: '/#contact' },
];

const socials = [
  { label: 'LinkedIn', href: SOCIAL_URLS.linkedin, icon: Linkedin },
  { label: 'Instagram', href: SOCIAL_URLS.instagram, icon: Instagram },
  { label: 'Facebook', href: SOCIAL_URLS.facebook, icon: Facebook },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-blue-night text-white">
      <TriangleBlob color="teal" className="-right-24 -top-24 h-96 w-96" rotate={12} opacity={0.14} />
      <Image
        src="/decor/swoosh-blue.svg"
        alt=""
        aria-hidden
        width={200}
        height={110}
        className="pointer-events-none absolute bottom-6 left-0 hidden w-40 opacity-25 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Closing statement */}
        {/* <div className="flex flex-col items-start gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between">
          <Image
            src="/logo-big.webp"
            alt="Konnections IMAG — we make the right impact"
            width={630}
            height={174}
            className="h-16 w-auto max-w-full sm:h-20 lg:h-24"
          />
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div> */}

        {/* Link columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-white/60">
              An integrated communications consultancy for public relations,
              crisis counsel, and strategic storytelling — helping organisations
              build reputations that endure.
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Visit
            </h3>
            <address className="mt-5 text-[0.9375rem] not-italic leading-relaxed text-white/70">
              {ADDRESS.street},
              <br />
              {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}
            </address>
            <div className="mt-4 space-y-1.5">
              <a
                href={PHONE_HREF}
                className="block text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Konnections IMAG. All rights reserved.
          </p>
          <div className="flex items-center gap-7">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy notice
            </Link>
            <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
