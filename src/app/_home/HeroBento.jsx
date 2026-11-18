import Link from 'next/link';
import { BOOKING_HREF } from '../_shared/company';
import ScrollCue from '../_shared/ScrollCue';
import HeroVideo from './HeroVideo';

// Homepage hero, "Odometer" (founders' final pick, 2026-11-05; copy v4).
// Split layout: text on the left (60%): the two-line headline with "£200M"
// rolling in like a car odometer, the subheading with a slow sheen, the line
// into the video and the CTAs; Faheem's video on the right (40%), with a light
// running round it. Tablet/phone: stacked and centred, the video between the
// text and the CTAs. No label above the headline (founders, 2026-11-05).
// Continuous motion: two soft glows breathing at the sides, the subheading's
// sheen, the light round the video and a ring pulsing round the play button.
// All still for reduced motion. Styles: hero-bento.css.
const rise = (ms) => ({ '--rise-delay': `${ms}ms` });

// "£200M" rolling in like a car odometer: each digit is a reel of 0–9 (three
// rounds) that spins to its digit once, staggered left to right. CSS-only
// (.hfb-odo-*); the reels are decorative, the real text is for screen readers.
function Odometer({ digits }) {
  return (
    <span className="hfb-odo">
      <span className="hfb-sr">{digits}</span>
      {[...digits].map((d, i) => (
        <span key={i} className="hfb-odo-win" aria-hidden="true">
          <span className="hfb-odo-reel" style={{ '--stop': 20 + Number(d), '--i': i }}>
            {Array.from({ length: 30 }, (_, k) => <span key={k}>{k % 10}</span>)}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function HeroBento() {
  return (
    <section className="hm-hero hfb" aria-labelledby="hfb-title">
      <div className="hfb-glow is-left" aria-hidden="true" />
      <div className="hfb-glow is-right" aria-hidden="true" />

      <div className="hfb-split">
        <div className="hfb-split-text">
          <h1 id="hfb-title" className="hfb-title hm-rise" style={rise(150)}>
            <span className="hfb-title-line">
              £19M to <span className="hfb-odo-amount">£<Odometer digits="200" />M.</span>
            </span>{' '}
            <span className="hfb-title-line">In three years.</span>
          </h1>
          {/* sheen on an inner span: .hm-rise owns the <p>'s animation */}
          <p className="hfb-sub hm-rise" style={rise(250)}>
            <span className="hfb-sheen">CarPlanet’s founders had the vision. We built the AI that scaled it.</span>
          </p>
          <p className="hfb-into hm-rise" style={rise(350)}>Hear it from Faheem, CarPlanet’s co-founder. →</p>
          <div className="hfb-ctas hm-rise" style={rise(650)}>
            <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary">Find out if we’re the right fit →</Link>
            <Link href="/#work" className="hm-btn hm-btn--secondary">See more results like this →</Link>
          </div>
        </div>
        {/* no label on the video: the line into it is in the text */}
        <div className="hfb-card hfb-media is-glow hm-rise" style={rise(550)}>
          <HeroVideo intro={null} />
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
