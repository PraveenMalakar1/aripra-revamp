import HomePage from './_home/HomePage';
import { pageMeta } from './_shared/seo';

export const metadata = pageMeta({
  title: 'AI-Native Engineering. Built for Founders.',  // just the tagline in the tab (founders, 2026-11-04)
  description: 'AI-Native Engineering. Built for Founders.',
  path: '/',
});

export default function Home() {
  return <HomePage />;
}
