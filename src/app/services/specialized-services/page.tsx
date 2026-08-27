import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function SpecializedServicesPage() {
  return <ServicePage content={getServicePage('specialized-services')} />;
}
