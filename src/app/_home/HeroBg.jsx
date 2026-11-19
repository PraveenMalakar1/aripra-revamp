import CircuitBg from '../_shared/CircuitBg';

// Homepage hero background (founders' pick "Circuit" from a four-option demo,
// 2026-11-19): the site's circuit lines in faint lavender along the left and
// right edges, with soft light-navy pulses travelling along them. Behind the
// glows and the content; decorative; pauses off screen and is still for
// reduced motion (CircuitBg). Styles: hero-bg.css.
export default function HeroBg() {
  return (
    <div className="hbg" aria-hidden="true">
      <CircuitBg variant="hero" />
    </div>
  );
}
