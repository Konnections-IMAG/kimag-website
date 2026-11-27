import ServicePage from '@/app/components/ServicePage';
import JsonLd from '@/app/components/JsonLd';
import { getServicePage } from '@/app/components/text/servicePages';
import { pageMetadata } from '@/app/lib/seo';
import { servicePageSchemas } from '@/app/lib/structuredData';

const content = getServicePage('digital-media');

export const metadata = pageMetadata({
  path: '/services/digital-media',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function DigitalMediaPage() {
  return (
    <>
      {servicePageSchemas(content).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <ServicePage content={content} />
    </>
  );
}
