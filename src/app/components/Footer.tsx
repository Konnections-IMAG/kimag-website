'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { TriangleBlob } from './ui/Decor';

const services = [
  { name: 'Public Relations & Reputation', href: '/services/public-relations' },
  { name: 'Crisis Management', href: '/services/crisis-management' },
  { name: 'Financial Communications', href: '/services/financial-communications' },
  { name: 'Digital Media & Social', href: '/services/digital-media' },
  { name: 'Corporate Communications', href: '/services/corporate-communications' },
  { name: 'Specialized Services', href: '/services/specialized-services' },
];

const company = [
  { name: 'About', href: '/#about' },
  { name: 'Our practice', href: '/#services' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Contact', href: '/#contact' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/konnectionsimag/posts/?feedView=all', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/konnections.imag/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/Konnections/', icon: Facebook },
  { label: 'Email', href: 'mailto:info@konnectionsimag.com', icon: Mail },
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
              crisis counsel, and strategic storytelling helping organisations
              build reputations that endure.
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Practice
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
              6-3-596/102 F,2nd Floor, Road, 1,<br />Masab Tank - Banjara Hills Rd, Naveen Nagar ,<br /> Hyderabad, Telangana 500034
            </address>
            <div className="mt-4 space-y-1.5">
              <a
                href="tel:+917032939360"
                className="block text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
              >
                +91 70329 39360
              </a>
              <a
                href="mailto:info@konnectionsimag.com"
                className="block text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
              >
                info@konnectionsimag.com
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
            {/* <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </Link> */}
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
