import ServicePage from '@/app/components/ServicePage';
import { getServicePage } from '@/app/components/text/servicePages';

export default function CrisisManagementPage() {
  return <ServicePage content={getServicePage('crisis-management')} />;
}
