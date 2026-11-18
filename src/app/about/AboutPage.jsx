import Link from 'next/link';
import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import AboutHero from './AboutHero';
import Founders from './Founders';
import SetUp from './SetUp';
import WhoWeWorkWith from './WhoWeWorkWith';
import Team from './Team';
import FinalCta from '../_shared/FinalCta';
import '../_shared/shared.css';
import './about.css';

// About Us page (2026 Figma: "About Us Page", node 677:24).
export default function AboutPage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          <AboutHero />
          <Founders />
          <SetUp />
          <WhoWeWorkWith />
          <Team />
          <FinalCta
            title="If this is what you’ve been looking for, let’s talk."
            intro="If it’s a fit, you’ll meet the engineers before the engagement starts."
            reassurance={null} /* final CTA copy (founders, 2026-11-17) */
          />
          {/* hiring link below the final CTA (copy AW-10 designer note) */}
          <p className="ab-careers-link">
            <Link href="/careers">We’re hiring engineers who build. <span>See careers →</span></Link>
          </p>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
