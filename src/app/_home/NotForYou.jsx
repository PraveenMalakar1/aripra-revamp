import Link from 'next/link';
import { BOOKING_HREF } from '../_shared/company';
import CircuitBg from '../_shared/CircuitBg';

// "IS THIS A FIT?" (Figma 422:1183). Founders, 2026-11-13: back to continuous
// prose (no cards), the headline a full sentence again, then the CTA with the
// reassurance line beneath it. Copy is verbatim (homepage copy v4).
// Styles: .hm-nfy-* in home.css.
export default function NotForYou() {
  return (
    <section className="hm-nfy hm-dark-panel has-circuit" aria-labelledby="hm-nfy-title">
      <CircuitBg variant="accent" />
      <div className="hm-dark-panel-inner hm-nfy-inner">
        <div className="hm-nfy-head hm-reveal">
          <p className="hm-overline hm-dark-panel-overline">IS THIS A FIT?</p>
          <h2 id="hm-nfy-title" className="hm-h2 hm-dark-panel-title">This probably isn’t for you.</h2>
        </div>

        <div className="hm-nfy-prose hm-reveal">
          <p>
            If the decision goes through a procurement committee, we’re not the right fit. We work directly with the
            person who owns the problem. That’s not a preference. It’s how we do our best work.
          </p>
          <p>
            If you’re looking for the cheapest option, there are agencies that will undercut us. Some of them will
            even do decent work.
          </p>
          <p>
            And if you want an agency that takes a brief and surfaces three months later with a finished product,
            that’s not us either. You’ll hear from us constantly. Some clients find that uncomfortable. The ones who
            stay say it’s why things actually get done.
          </p>
        </div>

        <div className="hm-nfy-close hm-reveal">
          <div className="hm-nfy-cta">
            {/* "let's talk" is the button, right after the line (founders, 2026-11-12) */}
            <p className="hm-nfy-cta-text">If you’re still reading,</p>
            <Link href={BOOKING_HREF} className="hm-btn hm-btn--primary">let’s talk →</Link>
          </div>
          <p className="hm-nfy-note">
            If you’ve been through this before and it didn’t go the way you hoped, that’s what the first call is for.
          </p>
        </div>
      </div>
    </section>
  );
}
