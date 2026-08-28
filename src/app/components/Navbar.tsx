'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { smoothScrollTo } from '../../lib/smoothScroll';

const services = [
  { name: 'Public Relations & Reputation', href: '/services/public-relations' },
  { name: 'Crisis Management', href: '/services/crisis-management' },
  { name: 'Financial Communications', href: '/services/financial-communications' },
  { name: 'Digital Media & Social', href: '/services/digital-media' },
  { name: 'Corporate Communications', href: '/services/corporate-communications' },
  { name: 'Specialized Services', href: '/services/specialized-services' },
];

const sectionLinks = [
  { name: 'About', hash: '#about' },
  { name: 'Services', hash: '#services', dropdown: true },
  { name: 'Impact', hash: '#impact' },
  { name: 'Awards', hash: '#awards' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close overlays on route change and lock body scroll while menu is open
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const goToSection = (hash: string) => {
    setMenuOpen(false);
    setServicesOpen(false);
    if (pathname === '/') {
      smoothScrollTo(hash, { duration: 1.2, offset: -88 });
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? 'border-b border-line shadow-[0_1px_0_0_rgba(23,42,53,0.02)]' : ''
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Brand */}
        <Link href="/" aria-label="Konnections IMAG — home" className="flex shrink-0 items-center">
          <Image
            src="/logo-big.webp"
            alt="Konnections IMAG"
            width={210}
            height={58}
            priority
            className="h-10 w-auto sm:h-11 lg:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {sectionLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                >
                  {link.name}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 rounded-2xl border border-line bg-white p-2 shadow-[0_16px_48px_-12px_rgba(23,42,53,0.14)]"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-[0.9rem] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-teal-deep"
                        >
                          {s.name}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      ))}
                      <div className="mt-1 border-t border-line px-4 py-3">
                        <button
                          onClick={() => goToSection('#services')}
                          className="link-quiet text-sm"
                        >
                          View all services
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => goToSection(link.hash)}
                className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
              >
                {link.name}
              </button>
            )
          )}
          <button onClick={() => goToSection('#contact')} className="btn-primary ml-4 !py-2.5">
            Start a conversation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-mist lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 block h-[1.5px] w-6 bg-ink"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] block h-[1.5px] w-6 bg-ink"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 top-[14px] block h-[1.5px] w-6 bg-ink"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="max-h-[calc(100dvh-72px)] overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
              <button
                onClick={() => goToSection('#about')}
                className="block w-full border-b border-line py-4 text-left font-display text-xl text-ink"
              >
                About
              </button>
              <div className="border-b border-line">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className="flex w-full items-center justify-between py-4 text-left font-display text-xl text-ink"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 text-ink-faint transition-transform duration-300 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-4 pl-4">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-[0.9375rem] text-ink-soft transition-colors hover:text-teal-deep"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => goToSection('#impact')}
                className="block w-full border-b border-line py-4 text-left font-display text-xl text-ink"
              >
                Impact
              </button>
              <button
                onClick={() => goToSection('#awards')}
                className="block w-full border-b border-line py-4 text-left font-display text-xl text-ink"
              >
                Awards
              </button>
              <button
                onClick={() => goToSection('#contact')}
                className="btn-primary mt-6 w-full"
              >
                Start a conversation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
