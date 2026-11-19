import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
// Earlier heroes, parked, not on the site: Hero.jsx (option A, 2026-10-30)
// and HeroFounder.jsx (option D, 2026-11-04). To bring one back, import it and
// put it in place of <HeroBento />.
import HeroBento from './HeroBento';
import StatsBrand from './StatsBrand';
import Situation from './Situation';
import Moments from './Moments';
import WhoWeAre from './WhoWeAre';
import NotForYou from './NotForYou';
import Services from './Services';
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials';
import Objections from './Objections';
import FinalCta from '../_shared/FinalCta';
import '../_shared/shared.css';
import './home.css';
import './hero-bento.css';
import './hero-bg.css';
import './stats-brand.css';

export default function HomePage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          {/* section order: homepage copy v4 (founders, 2026-11-04) */}
          {/* "Odometer" hero (founders' final pick, 2026-11-05) */}
          <HeroBento />
          <Testimonials />
          {/* stats on the dark card (founders' pick, 2026-11-04) */}
          <StatsBrand />
          <CaseStudy />
          <Situation />
          <Moments />
          <Services />
          <WhoWeAre />
          <NotForYou />
          <Objections />
          {/* bridge into the closing call (homepage copy, founders, 2026-11-16) */}
          <div className="hm-bridge">
            <p className="hm-wrap">Still here? Good. That’s what the first call is for.</p>
          </div>
          <FinalCta
            title="Your technology should be your advantage. Let’s make it one."
            cta="Talk to a founder, not a salesperson →"
            note="We’ll tell you honestly whether we can help. No pitch deck. No discovery form with 40 fields. Just a conversation."
            smallNote
            reassurance={null} /* founders, 2026-11-16: headline, button, then the reassurance as small text */
          />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
