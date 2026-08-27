import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function FinancialCommunicationsPage() {
  return <ServicePage content={getServicePage('financial-communications')} />;
}
