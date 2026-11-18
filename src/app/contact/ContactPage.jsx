import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import CalendlyEmbed from './CalendlyEmbed';
import '../_shared/shared.css';
import './contact-page.css';

// Contact page (copy: AW-6, no Figma). Intentionally short: headline, two
// lines of copy, the Calendly embed, a reassurance line. Calendly is the only
// action — no form, no email in the page body (footer keeps it; client).
// Layout (founders, 2026-10-19): one first screen on desktop: "Let’s talk"
// copy on the left, the calendar on the right; stacked on tablet/phone.
export default function ContactPage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          <PageHero
            id="ct-hero-title"
            badge="Get in Touch"
            title="Let’s talk."
            className="ct-hero"
            aside={(
              <div className="ct-book hm-rise" style={{ '--rise-delay': '300ms' }} role="region" aria-label="Book a 30-minute call">
                <CalendlyEmbed />
              </div>
            )}
          >
            <p className="ct-hero-lead">
              No pitch deck. No 40-field discovery form. Just a conversation about whether we’re the right fit.
            </p>
            <p className="ct-reassure">
              If we’re not the right fit, we’ll say so. If we are, you’ll meet the engineers before the engagement
              starts.
            </p>
          </PageHero>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
