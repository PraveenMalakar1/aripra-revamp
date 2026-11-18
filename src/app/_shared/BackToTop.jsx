'use client';

import { useEffect, useRef, useState } from 'react';

// Floating "back to top" button (client, 2026-10-19). Appears once the visitor
// has scrolled about one screen down; smooth-scrolls to the top (instant with
// reduced motion). The ring around it fills with how far down the page you
// are (client pick "Ring", 2026-10-19). Styles: .totop-* in globals.css.
const R = 22;
const LEN = 2 * Math.PI * R;

export default function BackToTop() {
  const [shown, setShown] = useState(false);
  const ring = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setShown(y > window.innerHeight * 0.9);
      if (ring.current) ring.current.style.strokeDashoffset = String(LEN * (1 - (max > 0 ? Math.min(y / max, 1) : 0)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button type="button" className={shown ? 'totop is-shown' : 'totop'} onClick={toTop} aria-label="Back to top" tabIndex={shown ? 0 : -1}>
      <svg className="totop-ring" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={R} className="totop-ring-track" />
        <circle ref={ring} cx="26" cy="26" r={R} className="totop-ring-fill" style={{ strokeDasharray: LEN, strokeDashoffset: LEN }} />
      </svg>
      <svg className="totop-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
