'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Siren,
  ArrowRight,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import FaqList from './FaqList';
import EmailDraftPanel from './EmailDraftPanel';
import { buildDraft, MESSAGE_MAX_LENGTH, type EmailDraft } from '@/lib/emailDraft';
import { faqs } from './text/faqs';
import { ADDRESS_LINE, EMAIL, OFFICE_HOURS, PHONE_DISPLAY, PHONE_HREF } from '../lib/site';
import { TriangleBlob } from './ui/Decor';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: Siren,
    label: 'Crisis line (24/7)',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: ADDRESS_LINE,
  },
  {
    icon: Clock,
    label: 'Office hours',
    value: OFFICE_HOURS,
  },
];

const inputClasses =
  'w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-faint transition-colors duration-200 focus:border-teal-brand focus:outline-none focus:ring-2 focus:ring-teal-brand/15';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [wantsCaseStudies, setWantsCaseStudies] = useState(false);
  const [draft, setDraft] = useState<EmailDraft | null>(null);

  useEffect(() => {
    const handleRequest = () => {
      setWantsCaseStudies(true);
      setDraft(null);
    };
    window.addEventListener('request-case-studies', handleRequest);
    return () => window.removeEventListener('request-case-studies', handleRequest);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setDraft(null); // an edited form makes the prepared draft out of date
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDraft(
      buildDraft(
        EMAIL,
        `Website enquiry: ${formData.subject}`,
        [
          ['Name', formData.name],
          ['Email', formData.email],
          ['Case studies requested', wantsCaseStudies ? 'Yes' : 'No'],
        ],
        formData.message
      )
    );
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-mist">
      <TriangleBlob color="rose" className="right-0 top-0 h-64 w-64" rotate={-20} opacity={0.1} />
      <Image
        src="/decor/bg-orbit-field.svg"
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="pointer-events-none absolute -right-24 top-16 hidden w-[460px] opacity-40 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Invitation + channels */}
          <div className="relative lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2
                id="contact-heading"
                className="mt-6 font-display text-4xl leading-[1.12] tracking-[-0.01em] text-ink sm:text-5xl"
              >
                Let&apos;s start a conversation that matters.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Whether you&apos;re building a brand, protecting one, or rethinking
                how your organisation communicates — we&apos;d like to hear the
                story first.
              </p>
            </Reveal>

            <div className="mt-12 space-y-7">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-teal-deep">
                      <c.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 inline-block text-[0.9375rem] font-medium text-ink transition-colors hover:text-teal-deep"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 max-w-xs text-[0.9375rem] leading-relaxed text-ink">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="relative lg:col-span-6 lg:col-start-7">
            <Image
              src="/decor/petal-fan.svg"
              alt=""
              aria-hidden
              width={240}
              height={160}
              className="pointer-events-none absolute -right-8 -top-12 hidden w-32 opacity-70 lg:block"
            />
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-line bg-white p-7 shadow-[0_24px_64px_-32px_rgba(23,42,53,0.16)] sm:p-10"
            >
              <h3 className="font-display text-2xl text-ink">Tell us about your brief</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fill this in and we&apos;ll prepare an email for you to send. We reply to every
                enquiry within one business day.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    maxLength={100}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    maxLength={254}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  maxLength={150}
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  className={inputClasses}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  maxLength={MESSAGE_MAX_LENGTH}
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="A few lines about your organisation and what you need"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <label className="mt-6 flex items-start gap-3 text-[0.9375rem] text-ink-soft">
                <input
                  type="checkbox"
                  name="requestCaseStudies"
                  checked={wantsCaseStudies}
                  onChange={(e) => {
                    setWantsCaseStudies(e.target.checked);
                    setDraft(null);
                  }}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-line text-teal-brand focus:ring-teal-brand/30"
                />
                Request case studies and examples for my sector
              </label>

              <p className="mt-5 text-sm text-ink-soft">
                This website doesn&apos;t send or store what you type. Read our{' '}
                <Link href="/privacy" className="font-medium text-teal-deep underline">
                  privacy notice
                </Link>
                .
              </p>

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                Prepare email
                <ArrowRight className="h-4 w-4" />
              </button>

              {draft && <EmailDraftPanel draft={draft} />}
            </form>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="mt-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-4">
            <p className="eyebrow">Common questions</p>
            <h3 className="mt-6 font-display text-3xl leading-tight text-ink">
              Before you write to us
            </h3>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList faqs={faqs} name="contact-faq" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
