import ContactPage from './ContactPage';
import { pageMeta } from '../_shared/seo';

export const metadata = pageMeta({
  title: 'Contact Us | Aripra Infotech',
  description: 'No pitch deck. No 40-field discovery form. Book a 30-minute call and find out whether we’re the right fit.',
  path: '/contact',
});

export default function Contact() {
  return <ContactPage />;
}
