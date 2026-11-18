import Image from 'next/image';
import Link from 'next/link';
import { BOOKING_HREF } from '../_shared/company';
import CircuitBg from '../_shared/CircuitBg';
import ScrollCue from '../_shared/ScrollCue';
import HeroVideo from './HeroVideo';

// PARKED, not on the site (replaced by HeroBento, founders, 2026-11-04).
// Homepage hero (founders' pick "D", 2026-10-30): the CarPlanet founder
// story. Fills the first screen. Desktop: 60% text (badge, heading,
// subheading, before / today (highlighted) / punchline, the line into the
// video, CTAs) / 40%
// the founder video, inside the navbar's width. Tablet/phone: stacked, with
// the video between the text and the CTAs. Background as the previous hero
// (navy, circuit lines, light-beam glow from the bottom edge). Entrance is
// CSS-only (.hm-rise): the hero is the first paint, so no waiting for JS.
// The previous hero is parked in Hero.jsx (see HomePage.jsx).
const rise = (ms) => ({ '--rise-delay': `${ms}ms` });

export default function HeroFounder() {
  return (
    <section className="hm-hero hf" aria-labelledby="hf-title">
      <CircuitBg variant="hero" />
      <div className="hf-row">
        <div className="hf-text">
          <p className="hm-hero-badge hm-rise" style={rise(50)}>
            <Image src="/home/icon-ai-sparkle.svg" alt="" width={20} height={20} />
            AI-Native Engineering. Built for Founders.
          </p>
          <h1 id="hf-title" className="hf-title hm-rise" style={rise(150)}>Every business hits a ceiling.</h1>
          <div className="hf-lead hm-rise" style={rise(250)}>
            <p className="hf-lead-strong">For most founders we work with, the ceiling is technology.</p>
            {/* copy (founders, 2026-11-02): before → today (highlighted) → the
                punchline → the line into the video */}
            <p>Three years ago, CarPlanet, a UK automotive business, had £19M in revenue, 200 cars in stock, 42 employees.</p>
            {/* the result, highlighted hardest (founders, 2026-11-02); words unchanged */}
            <p className="hf-numbers">
              <span className="hf-today">Today:</span> <strong>£200M.</strong> <strong>2,000 cars.</strong>{' '}
              <strong>186 people.</strong>
            </p>
            <p className="hf-built">Founders had the vision. We built the AI that scaled it.</p>
            <p className="hf-into">
              Hear it from Faheem, CarPlanet’s co-founder. <span aria-hidden="true">→</span>
            </p>
          </div>
          <div className="hf-ctas hm-rise" style={rise(350)}>
            <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary">Find out if we’re the right fit →</Link>
            <Link href="/#work" className="hm-btn hm-btn--secondary">See more results like this →</Link>
          </div>
        </div>

        <div className="hf-media hm-rise" style={rise(300)}>
          <HeroVideo intro="Hear it from Faheem, CarPlanet’s co-founder." />
        </div>
      </div>

      {/* light-beam glow rising from just below the bottom edge */}
      <div className="hm-hero-horizon hf-horizon" aria-hidden="true">
        <div className="hm-hero-beams" />
      </div>
      <ScrollCue />
    </section>
  );
}
