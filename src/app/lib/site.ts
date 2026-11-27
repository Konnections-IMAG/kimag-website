/**
 * Single source of truth for company details. The contact section, footer,
 * structured data, privacy notice and emails all read from here, so the
 * name, address and phone number cannot drift apart.
 */
export const SITE_URL = 'https://www.konnectionsimag.com';
export const SITE_NAME = 'Konnections IMAG';

export const EMAIL = 'info@konnectionsimag.com';
export const PHONE_DISPLAY = '+91 70329 39360';
export const PHONE_HREF = 'tel:+917032939360';

export const ADDRESS = {
  street: '6-3-596/102F, 2nd Floor, Road No. 1, Naveen Nagar, Banjara Hills',
  city: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500034',
  country: 'IN',
} as const;

export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`;

/** Taken from the office's Google Maps pin. */
export const GEO = { latitude: 17.41592, longitude: 78.45159 } as const;

export const OFFICE_HOURS = 'Mon–Fri, 9am–6pm · Sat, 9am–4pm';

export const SOCIAL_URLS = {
  linkedin: 'https://www.linkedin.com/company/konnectionsimag/',
  instagram: 'https://www.instagram.com/konnections.imag/',
  facebook: 'https://www.facebook.com/Konnections/',
} as const;

/** One set of labels, shared by the header and the footer. */
export const SECTION_LINKS = [
  { name: 'About', hash: '#about' },
  { name: 'Services', hash: '#services' },
  { name: 'Recognition', hash: '#impact' },
  { name: 'Awards', hash: '#awards' },
] as const;

export const SERVICE_LINKS = [
  { name: 'Public Relations & Reputation', href: '/services/public-relations' },
  { name: 'Crisis Management', href: '/services/crisis-management' },
  { name: 'Financial Communications', href: '/services/financial-communications' },
  { name: 'Digital Media & Social', href: '/services/digital-media' },
  { name: 'Corporate Communications', href: '/services/corporate-communications' },
  { name: 'Specialised Services', href: '/services/specialized-services' },
] as const;

/** Used by both the industries marquee and the FAQ answer. */
export const INDUSTRIES = [
  'Hospitality',
  'Healthcare',
  'Technology',
  'Financial Services',
  'Retail & Consumer',
  'Education',
  'Real Estate',
  'Manufacturing',
  'Energy & Infrastructure',
  'Media & Entertainment',
] as const;
