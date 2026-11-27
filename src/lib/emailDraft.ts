/**
 * The contact form doesn't send anything itself. It turns what the visitor typed
 * into a pre-filled email that they send from their own account.
 */
export type EmailDraft = { to: string; subject: string; body: string };

export const MESSAGE_MAX_LENGTH = 1500;

/** Some email apps and operating systems truncate or ignore longer mailto links. */
export const MAILTO_MAX_LENGTH = 2000;

export function buildDraft(
  to: string,
  subject: string,
  details: [label: string, value: string][],
  message: string
): EmailDraft {
  const lines = details
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`);

  return {
    to,
    subject: subject.trim(),
    body: [...lines, '', 'Message:', message.trim()].join('\n'),
  };
}

export const gmailUrl = ({ to, subject, body }: EmailDraft) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const mailtoUrl = ({ to, subject, body }: EmailDraft) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.replace(/\n/g, '\r\n'))}`;

export const draftAsText = ({ to, subject, body }: EmailDraft) =>
  `To: ${to}\nSubject: ${subject}\n\n${body}`;
