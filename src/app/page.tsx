import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import { OurServices } from './components/Services';
import CaseStudies from './components/CaseStudies';
import AwardsCarousel from './components/AwardsCarousel';
import ContactUs from './components/ContactUs';
import { Footer } from './components/Footer';
import HashScroll from './components/HashScroll';
import JsonLd from './components/JsonLd';
import { servicePages } from './components/text/servicePages';
import { faqs } from './components/text/faqs';
import { pageMetadata } from './lib/seo';
import { faqSchema } from './lib/structuredData';

export const metadata = pageMetadata({
  path: '/',
  title: 'Konnections IMAG — PR & Reputation Consultancy, Hyderabad',
  description:
    'Integrated PR, crisis communications and investor relations consultancy in Hyderabad. 15+ years, 500+ brands, award-winning crisis counsel.',
});

// The homepage cards are always a subset of each practice page's capabilities.
const practices = servicePages.map((page) => ({
  title: page.title,
  summary: page.summary,
  capabilities: page.capabilities.slice(0, 4).map((c) => c.title),
  link: `/services/${page.slug}`,
}));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema(faqs)} />
      <HashScroll />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <OurServices items={practices} />
        <CaseStudies />
        <AwardsCarousel />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
