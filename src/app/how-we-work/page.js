import HowWeWorkPage from './HowWeWorkPage';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'How We Work | Aripra Infotech',
  description: 'Not a branded methodology. Not a productivity claim. This is how we actually work, from intent to requirements through AI-native delivery.',
  path: '/how-we-work',
});

export default function HowWeWork() {
  return <HowWeWorkPage />;
}
