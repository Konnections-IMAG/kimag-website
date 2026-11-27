import ServicePage from '@/app/components/ServicePage';
import JsonLd from '@/app/components/JsonLd';
import { getServicePage } from '@/app/components/text/servicePages';
import { pageMetadata } from '@/app/lib/seo';
import { servicePageSchemas } from '@/app/lib/structuredData';

const content = getServicePage('public-relations');

export const metadata = pageMetadata({
  path: '/services/public-relations',
  title: content.metaTitle,
  description: content.metaDescription,
});

export default function PublicRelationsPage() {
  return (
    <>
      {servicePageSchemas(content).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <ServicePage content={content} />
    </>
  );
}
