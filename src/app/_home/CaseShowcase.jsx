'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { PUBLISHED_CASE_STUDIES } from '../case-studies/data';
import KeyStat from '../case-studies/KeyStat';
import MomentsCarousel from './MomentsCarousel';

// Homepage case-study spotlight (founders' pick "B", 2026-10-19): every study
// from the Our Work page; the centre card is large, its neighbours fan out
// smaller. Card = logo, client · project, the study's headline and its key
// numbers (`highlights`, homepage copy v4; data in case-studies/data.js),
// linking to the detail page. Under the cards, one line: the carousel
// controls and "See all our work →".
// Auto-advances every STEP_MS; paused while hovered, keyboard-focused or off
// screen, and never with reduced motion. Swipe left / right on the cards to
// move one either way (founders, 2026-11-19). Phones get the same cards in
// the shared "Sound familiar?" row instead (MomentsCarousel.jsx): endless
// swiping with momentum and the slow drift (founders, 2026-11-19).
// Styles: .csx-* in home.css.

const STUDIES = PUBLISHED_CASE_STUDIES.filter((s) => s.href);
const STEP_MS = 3000;
const SWIPE_PX = 40; // horizontal distance that counts as a swipe
const name = (s) => (s.client ? `${s.client} · ${s.project}` : s.project);

// a card's content, shared by the spotlight and the phone row
function CardBody({ s }) {
  return (
    <>
      <span className="csx-logo">
        {s.image && <Image src={s.image} alt={`${s.project} logo`} fill sizes="420px" />}
      </span>
      <span className="csx-card-body">
        <span className="csx-card-name">{name(s)}</span>
        <span className="csx-card-title">{s.title}</span>
        <span className="csx-card-stat">
          <span className="csx-card-stat-label">Key stat</span>
          <KeyStat highlights={s.highlights} />
        </span>
        <span className="csx-card-cta" aria-hidden="true">Read the case study →</span>
      </span>
    </>
  );
}

// phones: the row (the copy is aria-hidden and out of the tab order)
const rowCards = (hidden) => STUDIES.map((s) => (
  <li key={s.slug} className="csx-row-card" aria-hidden={hidden || undefined}>
    <Link href={s.href} className="csx-card-link" tabIndex={hidden ? -1 : undefined}><CardBody s={s} /></Link>
  </li>
));

const Arrow = ({ flip }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function CaseShowcase() {
  const n = STUDIES.length;
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const ref = useRef(null);
  const stage = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  // every card as tall as the tallest one (text lengths differ), and the
  // stage exactly that tall; re-measured on resize and font load
  useEffect(() => {
    const el = stage.current;
    if (!el) return undefined;
    const measure = () => {
      el.style.removeProperty('--csx-h');
      const h = Math.max(...[...el.querySelectorAll('.csx-card-link')].map((c) => c.offsetHeight));
      el.style.setProperty('--csx-h', `${h}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (hold || !inView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), STEP_MS);
    return () => clearTimeout(t);
  }, [active, hold, inView, n]);

  // swipe: a horizontal finger move over SWIPE_PX moves one card; vertical
  // moves stay with the page (touch-action: pan-y in CSS). Read from the
  // phone's own touch events (most reliable across mobile browsers). A swipe
  // doesn't also open the card under the finger.
  const swipe = useRef(null);
  useEffect(() => {
    const el = stage.current;
    if (!el) return undefined;
    const start = (e) => {
      const t = e.touches[0];
      swipe.current = { x0: t.clientX, y0: t.clientY, done: false };
      setHold(true);
    };
    const move = (e) => {
      const sw = swipe.current;
      if (!sw || sw.done) return;
      const t = e.touches[0];
      const dx = t.clientX - sw.x0;
      if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(t.clientY - sw.y0)) {
        sw.done = true;
        setActive((a) => (a + (dx < 0 ? 1 : -1) + n) % n);
      }
    };
    const end = () => {
      const sw = swipe.current;
      // clear it after the click that may follow, unless a new touch began
      setTimeout(() => { if (swipe.current === sw) swipe.current = null; }, 400);
      setHold(false);
    };
    el.addEventListener('touchstart', start, { passive: true });
    el.addEventListener('touchmove', move, { passive: true });
    el.addEventListener('touchend', end);
    el.addEventListener('touchcancel', end);
    return () => {
      el.removeEventListener('touchstart', start);
      el.removeEventListener('touchmove', move);
      el.removeEventListener('touchend', end);
      el.removeEventListener('touchcancel', end);
    };
  }, [n]);
  const onClickCapture = (e) => { if (swipe.current?.done) { e.preventDefault(); e.stopPropagation(); } };

  return (
    <div
      ref={ref}
      className="csx"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setHold(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}
    >
      <ul
        ref={stage}
        className="csx-stage"
        onClickCapture={onClickCapture}
      >
        {STUDIES.map((s, i) => {
          let off = i - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const isActive = off === 0;
          return (
            <li
              key={s.slug}
              className={isActive ? 'csx-card is-active' : 'csx-card'}
              style={{ '--off': off, '--abs': Math.abs(off) }}
              aria-hidden={!isActive || undefined}
              data-far={Math.abs(off) > 2 || undefined}
              onClick={isActive ? undefined : () => setActive(i)}
            >
              <Link href={s.href} className="csx-card-link" tabIndex={isActive ? undefined : -1}>
                <CardBody s={s} />
              </Link>
            </li>
          );
        })}
      </ul>
      {/* phones only (CSS swaps it with the spotlight above) */}
      <MomentsCarousel className="csx-row" item=".csx-row-card" label="case study" copy={rowCards(true)}>
        {rowCards(false)}
      </MomentsCarousel>
      <div className="csx-foot">
        <div className="csx-nav">
          <button type="button" className="hm-marquee-btn" aria-label="Previous case study" onClick={() => setActive((a) => (a - 1 + n) % n)}><Arrow flip /></button>
          <div className="csx-dots">
            {STUDIES.map((s, i) => (
              <button key={s.slug} type="button" className="csx-dot" aria-label={`Show ${s.project}`} aria-current={i === active || undefined} onClick={() => setActive(i)} />
            ))}
          </div>
          <button type="button" className="hm-marquee-btn" aria-label="Next case study" onClick={() => setActive((a) => (a + 1) % n)}><Arrow /></button>
        </div>
        <Link href="/case-studies" className="hm-btn hm-btn--primary">See all our work →</Link>
      </div>
    </div>
  );
}
