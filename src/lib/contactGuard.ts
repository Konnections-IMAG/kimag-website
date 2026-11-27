/**
 * Abuse protection and input hygiene for the public contact endpoint.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const MAX_BODY_BYTES = 20_000;

const LIMITS = { name: 100, email: 254, phone: 30, subject: 150, message: 5000 } as const;
const EMAIL_RE = /^[^\s@<>(),;:"\\[\]]+@[^\s@<>(),;:"\\[\]]+\.[^\s@<>(),;:"\\[\]]+$/;

export type ContactFields = Record<keyof typeof LIMITS, string>;

/** Collapses control characters and newlines, which matter in mail headers. */
const singleLine = (value: string) => value.replace(/[\u0000-\u001f\u007f\u2028\u2029]+/g, ' ').trim();

export function parseContact(
  body: Record<string, unknown>
): { ok: true; fields: ContactFields } | { ok: false; message: string } {
  const fields = {} as ContactFields;

  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const raw = body[key] ?? '';
    if (typeof raw !== 'string') return { ok: false, message: 'Invalid form data.' };
    const value = key === 'message' ? raw.trim() : singleLine(raw);
    if (value.length > LIMITS[key]) {
      return { ok: false, message: `The ${key} field is too long.` };
    }
    fields[key] = value;
  }

  if (!fields.name || !fields.email || !fields.subject || !fields.message) {
    return { ok: false, message: 'Name, email, subject, and message are required.' };
  }
  if (!EMAIL_RE.test(fields.email)) {
    return { ok: false, message: 'Enter a valid email address.' };
  }

  return { ok: true, fields };
}

export const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );

type RateLimiter = { limit: (options: { key: string }) => Promise<{ success: boolean }> };

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/**
 * Uses the Cloudflare rate-limiting binding (see wrangler.jsonc). Falls back to
 * an in-memory window for local development, where the binding doesn't exist.
 */
export async function isRateLimited(key: string): Promise<boolean> {
  try {
    const env = getCloudflareContext().env as unknown as { CONTACT_RATE_LIMITER?: RateLimiter };
    if (env.CONTACT_RATE_LIMITER) {
      return !(await env.CONTACT_RATE_LIMITER.limit({ key })).success;
    }
  } catch {
    // Not running on Cloudflare.
  }

  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  if (hits.size > 5000) hits.clear();
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

/** Passes when Turnstile isn't configured, so the form works before keys exist. */
export async function passesTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== 'string' || !token || token.length > 2048) return false;

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, ...(ip && { remoteip: ip }) }),
    });
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
}
