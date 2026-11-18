import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import ServiceSidebar from './nav/ServiceSidebar';
import ServiceStrip from './nav/ServiceStrip';
import ServiceSection from './ServiceSection';
import { SERVICES } from './data';
import '../_shared/shared.css';
import './services-page.css';

// Services page (2026 Figma: "Services Page", node 457:2272).
export default function ServicesPage() {
  return (
    <MotionProvider>
      <div className="site-page sv-page">
        <Nav />
        <main>
          <PageHero
            id="sv-hero-title"
            badge="AI-Native Engineering. Built for Founders." /* copy v3 (founders, 2026-11-02) */
            title="The technology is in the way. Here’s how we fix it."
            contentWidth={1000}
            titleWidth={784}
          >
            <p className="sv-hero-lead">Most founders we speak to know what they want their business to do.</p>
            <p className="sv-hero-lead">
              Few know exactly what to build to get there. That gap is where most software projects go wrong. Most
              agencies make it worse by taking whatever brief you give them and building exactly that.
            </p>
            <p className="sv-hero-lead">
              We ask the questions that bring out what you already know. Then we build to that, course correct
              alongside you, and keep going until what’s built is what you actually needed.
            </p>
            <p className="sv-hero-lead">That’s what stops you rebuilding it six months later.</p>
          </PageHero>

          {/* "How we build" removed: not in the services doc (founders, 2026-11-04);
              HowWeBuild.jsx is parked */}

          {/* the "Four services…" bridge was removed (founders, 2026-11-02) */}

          {/* Services run: sticky sidebar nav (client choice, replaces the Figma
              tab bar) with the four services beside it. Sidebar hides <1100px. */}
          <div className="sv-services sv-services--side">
            <div className="sv-side-wrap"><ServiceSidebar /></div>
            <div className="sv-side-main">
              {SERVICES.map((service, i) => (
                <ServiceSection key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
        {/* ≤1100px: thin services strip under the navbar (sidebar is hidden there) */}
        <ServiceStrip />
      </div>
    </MotionProvider>
  );
}
