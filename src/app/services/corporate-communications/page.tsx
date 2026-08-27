import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function CorporateCommunicationsPage() {
  return <ServicePage content={getServicePage('corporate-communications')} />;
}
