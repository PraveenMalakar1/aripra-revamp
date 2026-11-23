import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';
import PageHero from './_shared/PageHero';
import { BOOKING_HREF } from './_shared/company';
import './_shared/shared.css';

// Branded 404 (founders, 2026-11-23; replaces Next.js's plain default): the
// site's nav, the light page hero and footer, with ways back to the main
// pages. Shown for any address that doesn't exist (and for unknown case
// study slugs).
export const metadata = {
  title: 'Page not found | Aripra Infotech',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="site-page">
      <Nav />
      <main>
        <PageHero id="nf-title" badge="404 · Page not found" title="This page doesn’t exist.">
          <p className="nf-lead">The link may be broken, or the page may have moved. Here’s where to go next.</p>
          <div className="nf-actions">
            <Link href="/" className="hm-btn hm-btn--primary">Back to the homepage →</Link>
            <Link href="/case-studies" className="hm-btn hm-btn--secondary">See our work →</Link>
          </div>
          <p className="nf-help">
            Looking for something specific? <Link href={BOOKING_HREF}>Get in touch</Link> and we’ll point you to it.
          </p>
        </PageHero>
      </main>
      <Footer />
    </div>
  );
}
