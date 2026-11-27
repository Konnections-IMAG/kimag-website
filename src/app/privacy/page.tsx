import React from 'react';
import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { pageMetadata } from '@/app/lib/seo';
import { ADDRESS_LINE, EMAIL, PHONE_DISPLAY } from '@/app/lib/site';

export const metadata = pageMetadata({
  path: '/privacy',
  title: 'Privacy Notice | Konnections IMAG',
  description:
    'What Konnections IMAG collects through this website, why we collect it, who processes it and how to access, correct or erase your personal data.',
});

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: 'The contact form',
    body: (
      <p>
        The contact form doesn&apos;t send or store what you type. It prepares an email in your
        browser. If you choose Open in Gmail, the draft text is passed to Google to open it; if you
        choose your email app, it is passed to that app. We receive your details only when you send
        the email from your own account.
      </p>
    ),
  },
  {
    heading: 'What we collect',
    body: (
      <p>
        When you email us we receive your email address, your name and whatever else you include,
        such as the subject, your message and whether you asked for case studies. Please don&apos;t
        include sensitive personal information. Like most websites, our hosting provider also
        processes technical data such as your IP address to deliver the site and protect it from
        abuse.
      </p>
    ),
  },
  {
    heading: 'Why we use it',
    body: (
      <p>
        We use your details only to respond to your enquiry and send the material you asked for. By
        emailing us you consent to this use. We do not sell your personal data or add you to a
        marketing list.
      </p>
    ),
  },
  {
    heading: 'Who processes it',
    body: (
      <p>
        This website runs on Cloudflare, which processes traffic data. Our email is provided by
        Google, and your own email provider handles the message you send. These providers may
        process data outside India. We may also disclose information where the law requires it.
      </p>
    ),
  },
  {
    heading: 'How long we keep it',
    body: (
      <p>
        We keep enquiry emails only as long as needed to deal with your enquiry and any engagement
        that follows from it, or to meet legal obligations. You can ask us to erase them sooner.
      </p>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023, you may ask for access to a
        summary of your personal data, ask us to correct, complete, update or erase it, withdraw
        your consent, nominate someone to exercise your rights and raise a grievance. Please write
        to us first so that we can try to resolve it. You may also complain to the Data Protection
        Board of India, as the Act provides.
      </p>
    ),
  },
  {
    heading: 'Contact us',
    body: (
      <p>
        For any question or request about your personal data, email{' '}
        <a href={`mailto:${EMAIL}`} className="font-medium text-teal-deep underline">
          {EMAIL}
        </a>
        , call {PHONE_DISPLAY} or write to Konnections IMAG, {ADDRESS_LINE}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[72px]">
        <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
          <h1 className="font-display text-4xl leading-tight tracking-[-0.01em] text-ink sm:text-5xl">
            Privacy notice
          </h1>
          <p className="mt-4 text-sm text-ink-faint">Last updated: 28 November 2026</p>
          <p className="mt-8 leading-relaxed text-ink-soft">
            This notice explains how Konnections IMAG handles personal data collected through this
            website.
          </p>
          {sections.map((section) => (
            <section key={section.heading} className="mt-10 leading-relaxed text-ink-soft">
              <h2 className="mb-3 font-display text-2xl text-ink">{section.heading}</h2>
              {section.body}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
