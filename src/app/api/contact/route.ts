import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail, sendContactConfirmationEmail } from '@/lib/mail';
import { isRateLimited, MAX_BODY_BYTES, parseContact, passesTurnstile } from '@/lib/contactGuard';

const SUCCESS_MESSAGE = 'Your message has been sent successfully! We\'ll get back to you soon.';

const reply = (message: string, status = 200) => NextResponse.json({ message }, { status });

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('cf-connecting-ip') ?? '';
    if (await isRateLimited(`contact:${ip || 'unknown'}`)) {
      return reply('Too many messages. Please wait a minute and try again.', 429);
    }

    if (!req.headers.get('content-type')?.includes('application/json')) {
      return reply('Invalid form data.', 415);
    }

    const text = await req.text();
    if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
      return reply('Your message is too long.', 413);
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(text);
    } catch {
      return reply('Invalid form data.', 400);
    }
    if (!body || typeof body !== 'object') return reply('Invalid form data.', 400);

    // Honeypot: report success so bots don't learn they were filtered.
    if (body.website) return reply(SUCCESS_MESSAGE);

    const parsed = parseContact(body);
    if (!parsed.ok) return reply(parsed.message, 400);

    if (!(await passesTurnstile(body.turnstileToken, ip))) {
      return reply('Verification failed. Please try again.', 403);
    }

    const requestCaseStudies = body.requestCaseStudies === true;

    // Send email to admin/team
    await sendContactFormEmail({ ...parsed.fields, requestCaseStudies });

    // The enquiry has reached the team, so a failed confirmation must not tell
    // the visitor to send it again.
    try {
      await sendContactConfirmationEmail({ email: parsed.fields.email, requestCaseStudies });
    } catch (error) {
      console.error('Error sending contact confirmation:', error);
    }

    return reply(SUCCESS_MESSAGE);
  } catch (error) {
    console.error('Error sending contact form:', error);
    return reply('There was an error sending your message. Please try again later.', 500);
  }
}
