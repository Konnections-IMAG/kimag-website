import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function DigitalMediaPage() {
  return <ServicePage content={getServicePage('digital-media')} />;
}
