import AboutPage from './AboutPage';
import { FOUNDED_YEAR } from '../_shared/company';

export const metadata = {
  title: 'About Us | Aripra Infotech',
  description: `Three founders who still build. AI-native engineering for founders since ${FOUNDED_YEAR}.`,
};

export default function About() {
  return <AboutPage />;
}
