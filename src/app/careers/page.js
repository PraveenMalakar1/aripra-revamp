import CareersPage from './CareersPage';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'Careers | Aripra Infotech',
  description: 'We’re always looking for engineers who build. No job listings, no forms. Send us what you’ve built.',
  path: '/careers',
});

export default function Careers() {
  return <CareersPage />;
}
