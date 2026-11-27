import React from 'react';
import { Plus } from 'lucide-react';
import Reveal from './ui/Reveal';

/**
 * Native <details> accordion: every answer is in the server-rendered HTML, so
 * search engines and no-JS readers see it, and it works without hydration.
 */
export default function FaqList({
  faqs,
  name,
}: {
  faqs: readonly { question: string; answer: string }[];
  /** Items sharing a name behave as an exclusive accordion. */
  name: string;
}) {
  return (
    <>
      {faqs.map((faq, index) => (
        <Reveal key={faq.question} delay={index * 0.06}>
          <details
            name={name}
            className={`group border-b border-line ${index === 0 ? 'border-t' : ''}`}
          >
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
              <span className="font-display text-lg text-ink sm:text-xl">{faq.question}</span>
              <Plus
                aria-hidden
                className="h-5 w-5 shrink-0 text-teal-deep transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="max-w-xl pb-6 leading-relaxed text-ink-soft">{faq.answer}</p>
          </details>
        </Reveal>
      ))}
    </>
  );
}
