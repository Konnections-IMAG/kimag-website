'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  draftAsText,
  gmailUrl,
  mailtoUrl,
  MAILTO_MAX_LENGTH,
  type EmailDraft,
} from '@/lib/emailDraft';

/** The ways a visitor can send the prepared email. */
export default function EmailDraftPanel({ draft }: { draft: EmailDraft }) {
  const panel = useRef<HTMLDivElement>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const mailto = mailtoUrl(draft);
  const tooLongForApp = mailto.length > MAILTO_MAX_LENGTH;

  // Move focus to the new content so keyboard and screen reader users find it.
  useEffect(() => {
    setCopyState('idle');
    panel.current?.focus({ preventScroll: true });
    panel.current?.scrollIntoView({ block: 'nearest' });
  }, [draft]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draftAsText(draft));
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="region"
      aria-label="Your email draft"
      data-email-draft
      className="mt-6 rounded-2xl border border-teal-brand/40 bg-teal-tint/50 p-5 outline-none sm:p-6"
    >
      <p className="font-display text-xl text-ink">Your email draft is ready</p>
      <p className="mt-2 text-sm text-ink-soft">
        <strong className="text-ink">We receive it only after you press Send</strong> in your own
        email. Choose how to open it:
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a href={gmailUrl(draft)} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Open in Gmail
        </a>
        {!tooLongForApp && (
          <a href={mailto} className="btn-outline bg-white">
            Open email app
          </a>
        )}
        <button type="button" onClick={copy} className="btn-outline bg-white">
          Copy message
        </button>
      </div>

      {tooLongForApp && (
        <p className="mt-3 text-sm text-ink-soft">
          This message is too long to open reliably in an email app. Use Gmail, or copy it into a new
          email.
        </p>
      )}

      <p role="status" className="mt-3 text-sm font-medium text-teal-deep">
        {copyState === 'copied' && 'Copied. Paste it into a new email and send it.'}
        {copyState === 'failed' && 'Copying didn’t work. Select the text below and copy it.'}
      </p>

      <p className="mt-1 text-sm text-ink-soft">
        If nothing opens, email{' '}
        <a href={`mailto:${draft.to}`} className="font-medium text-teal-deep underline">
          {draft.to}
        </a>
        .
      </p>
      <textarea
        readOnly
        rows={7}
        aria-label="Email draft text"
        value={draftAsText(draft)}
        className="mt-3 w-full resize-y rounded-xl border border-line bg-white p-3 text-sm text-ink"
      />
    </div>
  );
}
