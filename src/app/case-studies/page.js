import CaseStudiesPage from './CaseStudiesPage';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'Case Studies | Aripra Infotech',
  description: 'Real results for real businesses. See how founders went from a stuck idea to a shipped product.',
  path: '/case-studies',
});

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
