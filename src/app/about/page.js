import AboutPage from './AboutPage';
import { FOUNDED_YEAR } from '../_shared/company';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'About Us | Aripra Infotech',
  description: `Three founders who still build. AI-native engineering for founders since ${FOUNDED_YEAR}.`,
  path: '/about',
});

export default function About() {
  return <AboutPage />;
}
