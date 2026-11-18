'use client';

import { useEffect, useRef, useState } from 'react';

// "Scroll for more" cue at the bottom of a hero (client, 2026-10-19). Fades out
// once the visitor starts scrolling; clicking it scrolls to the next section
// (just below the sticky header). Reduced motion: no bounce, instant jump.
// Style: three stacked chevrons lighting up top to bottom (client pick "E",
// 2026-10-19). Styles: .scue-* in globals.css.
export default function ScrollCue() {
  const ref = useRef(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const onScroll = () => setGone(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = () => {
    const hero = ref.current?.closest('section');
    // first visible section after the hero (skips a hidden one, e.g. the
    // other hero while the A/B demo is on)
    let next = hero?.nextElementSibling;
    while (next && !next.getClientRects().length) next = next.nextElementSibling;
    if (!next) return;
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h')) || 82;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - header, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button ref={ref} type="button" className={gone ? 'scue is-gone' : 'scue'} onClick={go} aria-label="Scroll to the next section" tabIndex={gone ? -1 : 0}>
      <span className="scue-e" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ '--i': i }}><path d="m2 2 9 8 9-8" /></svg>
        ))}
      </span>
    </button>
  );
}
