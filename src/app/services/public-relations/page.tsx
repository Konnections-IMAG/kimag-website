import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function PublicRelationsPage() {
  return <ServicePage content={getServicePage('public-relations')} />;
}
