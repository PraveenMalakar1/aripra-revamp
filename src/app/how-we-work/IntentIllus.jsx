// Small illustrations beside the three "From intent to requirements" steps
// (Timeline layout; founders, 2026-11-13: "don't add too much"). Same look as
// the Services pictures: a soft lavender dotted panel with a few simple cards.
// Decorative only (aria-hidden). Gentle motion in CSS (.hw-il-*), still for
// reduced motion. Styles: how-we-work-page.css.
const Arrow = () => (
  <svg className="hw-il-arrow" width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
    <path d="M1 6h19m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 1 · the gap: what the brief said vs what the business needed
function Gap() {
  return (
    <div className="hw-il-gap">
      <span className="hw-il-card">Brief</span>
      <span className="hw-il-gap-mark"><span>the gap</span></span>
      <span className="hw-il-card is-accent">What you needed</span>
    </div>
  );
}

// 2 · questions turning into one clear intent
function Questions() {
  return (
    <div className="hw-il-qs">
      <div className="hw-il-bubbles">
        <span className="hw-il-bubble">Where are you trying to go?</span>
        <span className="hw-il-bubble is-alt">What can’t the business do today?</span>
      </div>
      <Arrow />
      <span className="hw-il-card is-accent">Intent</span>
    </div>
  );
}

// 3 · requirements emerging from a loop of building and learning
function Loop() {
  return (
    <div className="hw-il-loop">
      <span className="hw-il-chip">Build</span>
      <Arrow />
      <span className="hw-il-chip">Learn</span>
      <Arrow />
      <span className="hw-il-chip is-accent">Adjust</span>
      <svg className="hw-il-return" viewBox="0 0 200 26" preserveAspectRatio="none" aria-hidden="true">
        <path d="M190 2 C190 22, 10 22, 10 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

const ILLUS = [Gap, Questions, Loop];

export default function IntentIllus({ step }) {
  const Illus = ILLUS[step];
  return (
    <div className="hw-il" aria-hidden="true">
      <Illus />
    </div>
  );
}
