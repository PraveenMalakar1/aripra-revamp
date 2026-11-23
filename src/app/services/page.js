import ServicesPage from './ServicesPage';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'Services | Aripra Infotech',
  description: 'AI-native engineering. Built for founders. Technology Rescue & Rebuild, AI Product Engineering, AI Consultation and Implementation, and Dedicated AI Engineering Teams.',
  path: '/services',
});

export default function Services() {
  return <ServicesPage />;
}
