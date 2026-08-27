"use client";
import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/smoothScroll";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/95 text-ink shadow-[0_8px_24px_-8px_rgba(23,42,53,0.25)] backdrop-blur transition-all duration-300 hover:border-teal-brand hover:text-teal-deep"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
