'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

/** Inlined at build time. The widget is off while this is unset. */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

type Turnstile = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

const getTurnstile = () => (window as Window & { turnstile?: Turnstile }).turnstile;

/** Cloudflare Turnstile bot check for the contact form. */
export default function TurnstileWidget({
  onToken,
  resetSignal,
}: {
  onToken: (token: string) => void;
  /** Change this to request a fresh single-use token. */
  resetSignal: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const turnstile = getTurnstile();
    if (!ready || !turnstile || !container.current) return;
    widgetId.current = turnstile.render(container.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: onToken,
      'expired-callback': () => onToken(''),
      'error-callback': () => onToken(''),
    });
    return () => {
      if (widgetId.current) turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [ready, onToken]);

  useEffect(() => {
    if (resetSignal && widgetId.current) {
      onToken('');
      getTurnstile()?.reset(widgetId.current);
    }
  }, [resetSignal, onToken]);

  if (!TURNSTILE_SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onReady={() => setReady(true)}
      />
      <div ref={container} className="mt-5 min-h-[65px]" />
    </>
  );
}
