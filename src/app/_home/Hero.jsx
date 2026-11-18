import Image from 'next/image';
import Link from 'next/link';
import { BOOKING_HREF } from '../_shared/company';
import CircuitBg from '../_shared/CircuitBg';
import ScrollCue from '../_shared/ScrollCue';

// PARKED (founders, 2026-10-30): the previous homepage hero, kept for a
// possible return; not rendered (see HomePage.jsx). Live hero: HeroFounder.jsx.
// Entrance animation is pure CSS (.hm-rise in home.css), not Motion: the hero
// is the first paint / LCP, so it must never wait for JS to hydrate.
const rise = (delayMs) => ({ className: 'hm-rise', style: { '--rise-delay': `${delayMs}ms` } });

export default function Hero() {
  const badge = rise(50);
  const title = rise(150);
  const lead = rise(250);
  const bottom = rise(400);

  return (
    <section className="hm-hero hm-hero-a" aria-labelledby="hm-hero-title">
      <CircuitBg variant="hero" />
      <div className="hm-hero-top">
        <p className={`hm-hero-badge ${badge.className}`} style={badge.style}>
          <Image src="/home/icon-ai-sparkle.svg" alt="" width={20} height={20} />
          AI-Native Engineering. Built for Founders.
        </p>
        <h1 id="hm-hero-title" className={`hm-hero-title ${title.className}`} style={title.style}>
          Your business is ready.
          <br />
          Your software isn’t.
        </h1>
        <p className={`hm-hero-lead ${lead.className}`} style={lead.style}>
          Maybe your existing software is breaking under the weight of your own growth. Maybe you’ve got a vision and
          haven’t found a team that can actually build it. Maybe you tried AI tools and got a prototype. Not a product.
        </p>
      </div>

      {/* The light-beam background is anchored to this band so the bright
          edge always falls between the two text groups, at any width. */}
      <div className="hm-hero-horizon" aria-hidden="true">
        <div className="hm-hero-beams" />
      </div>

      <div className={`hm-hero-bottom ${bottom.className}`} style={bottom.style}>
        <p className="hm-hero-note">Whatever the gap is, we close it. And we build it right this time.</p>
        <div className="hm-hero-ctas">
          <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary">Book a 30-Minute Call →</Link>
          <Link href="/#work" className="hm-btn hm-btn--secondary">See Our Work</Link>
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
