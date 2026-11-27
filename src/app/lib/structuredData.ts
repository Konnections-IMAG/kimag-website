import { awards } from '../components/text/awards';
import { servicePages, type ServicePageContent } from '../components/text/servicePages';
import { ADDRESS, EMAIL, GEO, PHONE_HREF, SITE_NAME, SITE_URL, SOCIAL_URLS } from './site';

const ORGANISATION_ID = `${SITE_URL}/#organisation`;
const telephone = PHONE_HREF.replace('tel:', '');

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORGANISATION_ID,
  name: SITE_NAME,
  description:
    'Integrated PR, crisis communications and investor relations consultancy in Hyderabad.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-big.png`,
  image: `${SITE_URL}/og-card.png`,
  email: EMAIL,
  telephone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: { '@type': 'GeoCoordinates', ...GEO },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: Object.values(SOCIAL_URLS),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Practice areas',
    itemListElement: servicePages.map((page) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: page.title,
        description: page.metaDescription,
        url: `${SITE_URL}/services/${page.slug}`,
      },
    })),
  },
  award: awards.map((a) => [a.title, a.agency, a.year].filter(Boolean).join(', ')),
};

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function servicePageSchemas(page: ServicePageContent) {
  const url = `${SITE_URL}/services/${page.slug}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.title,
      serviceType: page.kicker,
      description: page.metaDescription,
      url,
      areaServed: { '@type': 'Country', name: 'India' },
      provider: { '@type': 'ProfessionalService', '@id': ORGANISATION_ID, name: SITE_NAME },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        // There is no /services index page, so the middle crumb is the homepage section.
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
        { '@type': 'ListItem', position: 3, name: page.title, item: url },
      ],
    },
    faqSchema(page.faqs),
  ];
}
