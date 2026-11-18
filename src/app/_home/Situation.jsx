// "THESE DIDN’T START AS SUCCESS STORIES." (label: founders, 2026-11-12; was
// "SOUND FAMILIAR?") (homepage copy v4, 2026-11-04; was v3: three steps and a
// longer reason). Founders, 2026-10-13: heading centred like every
// other section, no symptom cards, lead paragraph across the full width.
// Layout (founders, 2026-11-04): centred head, then two columns. Left: the
// lead, then the two beats as one line in a light box. Right: the reason as a
// dark card, heading above its explanation. Copy is verbatim.
// Styles: .hm-sit-* in home.css.

// third person, pivoting to the reader with "Sound familiar?" (founders, 2026-11-13)
const LEAD = 'They built a real business. But somewhere along the way, the technology became the bottleneck. The platform their team runs on. The product their customers depend on. The system everything else flows through.';
const HIRED = 'They hired someone to build it. It worked. For a while.';
const GREW = 'Then the business grew and the technology couldn’t keep up.';
const PIVOT = 'Sound familiar?';
const REASON_LEAD = 'The reason this happens is almost always the same.';
const REASON = 'The team that built it built it to ship. Not to last. Code was written fast, corners were cut, and the systems thinking that holds software together under real load was never there. It looks complete. It’s hollow.';

function Head({ id }) {
  return (
    <header className="hm-sit-head hm-reveal">
      <p className="hm-overline">THESE DIDN’T START AS SUCCESS STORIES.</p>
      <h2 id={id} className="hm-h2">They were in deep pain.</h2>{/* founders, 2026-11-13 (was "You didn’t sign up for this.") */}
    </header>
  );
}

export default function Situation() {
  return (
    <section className="hm-situation" aria-labelledby="hm-situation-title">
      <div className="hm-wrap hm-sit">
        <Head id="hm-situation-title" />
        {/* two columns (founders, 2026-11-04): what happened | why it happened */}
        <div className="hm-sit-cols">
          <div className="hm-sit-story hm-reveal">
            <p className="hm-sit-lead">{LEAD}</p>
            <p className="hm-sit-box">{HIRED} {GREW}</p>
            <p className="hm-sit-pivot">{PIVOT}</p>
          </div>
          <div className="hm-sit-band hm-reveal">
            <p className="hm-sit-reason">{REASON_LEAD}</p>
            <p className="hm-sit-band-text">{REASON}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
