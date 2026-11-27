import tls from 'node:tls';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const HOST = 'smtp.gmail.com';
const PORT = 465;
const CONNECT_TIMEOUT_MS = 15_000;

/**
 * Gmail transport that opens its own TLS socket by hostname.
 *
 * Left to itself, Nodemailer 10 resolves the hostname, tries IPv6 first and
 * relies on automatic fallback between addresses. On the Cloudflare Workers
 * runtime that connection times out (reproduced with `wrangler dev`), so the
 * runtime is given the hostname and left to choose the address.
 */
export function createGmailTransport(auth: { user?: string; pass?: string }) {
  const getSocket: SMTPTransport.Options['getSocket'] = (_options, callback) => {
    const socket = tls.connect({ host: HOST, port: PORT, servername: HOST });
    const timer = setTimeout(
      () => socket.destroy(new Error('SMTP connection timed out')),
      CONNECT_TIMEOUT_MS
    );
    const onError = (error: Error) => {
      clearTimeout(timer);
      callback(error, false);
    };
    socket.once('error', onError);
    socket.once('secureConnect', () => {
      clearTimeout(timer);
      socket.removeListener('error', onError);
      callback(null, { connection: socket, secured: true });
    });
  };

  return nodemailer.createTransport({ host: HOST, port: PORT, secure: true, auth, getSocket });
}
