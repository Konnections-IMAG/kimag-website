'use client';
import { useEffect } from 'react';
import { useLenis } from '../hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import { OurServices } from './components/Services';
import { projects } from './components/text/Services';
import CaseStudies from './components/CaseStudies';
import AwardsCarousel from './components/AwardsCarousel';
import ContactUs from './components/ContactUs';
import { Footer } from './components/Footer';

export default function Home() {
  const { scrollToElement } = useLenis();

  useEffect(() => {
    // Handle URL fragment scrolling when page loads with Lenis
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          const nav = document.querySelector('header');
          const measuredOffset = nav
            ? -(nav.getBoundingClientRect().height + 16)
            : -88;
          const opts = {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            offset: measuredOffset,
          } as const;
          scrollToElement(element, opts);

          // Re-apply once after images/fonts settle to avoid layout shift issues
          setTimeout(() => {
            scrollToElement(element, opts);
          }, 700);
        }, 500);
      }
    }
  }, [scrollToElement]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <OurServices items={projects} />
        <CaseStudies />
        <AwardsCarousel />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
