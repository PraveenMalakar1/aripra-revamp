'use client';

import { useEffect, useRef } from 'react';

// Endless moments row with previous / next arrows (founders, 2026-10-13).
// The list is rendered twice (the copy hidden from assistive tech) and the
// scroll position wraps by one copy, so it loops seamlessly both ways.
// It drifts slowly on its own, and pauses while hovered or focused, while
// off-screen or in a hidden tab, and for a few seconds after the visitor
// uses the arrows or swipes. With "reduce motion" it never drifts; the arrows
// and swiping still work.
const DRIFT_SECONDS_PER_LOOP = 60;
const RESUME_AFTER_MS = 4000;
const STEP_MS = 450;

const ArrowIcon = ({ flip }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// `note`: shown between the row and the arrows (founders, 2026-11-04).
export default function MomentsCarousel({ children, copy, note }) {
  const scroller = useRef(null);
  const track = useRef(null);
  const api = useRef(null);

  useEffect(() => {
    const el = scroller.current;
    const tr = track.current;
    if (!el || !tr) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pos = el.scrollLeft;
    let hovered = false;
    let focused = false;
    let onScreen = true;
    let holdUntil = 0;
    let tween = null; // { from, to, start }
    let last = performance.now();
    let raf = 0;

    const half = () => tr.scrollWidth / 2;
    const wrap = (x) => { const h = half(); if (!h) return x; return ((x % h) + h) % h; };
    const write = (x) => { pos = x; el.scrollLeft = x; };
    const hold = () => { holdUntil = performance.now() + RESUME_AFTER_MS; };
    const ease = (t) => 1 - (1 - t) ** 3;

    const frame = (now) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (tween) {
        const t = Math.min((now - tween.start) / (reduced ? 1 : STEP_MS), 1);
        write(wrap(tween.from + (tween.to - tween.from) * ease(t)));
        if (t === 1) tween = null;
      } else if (!reduced && !hovered && !focused && onScreen && !document.hidden && now > holdUntil) {
        write(wrap(pos + (half() / (DRIFT_SECONDS_PER_LOOP * 1000)) * dt));
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // one card per click: card width + gap
    const step = () => {
      const card = tr.querySelector('.hm-moment');
      const gap = parseFloat(getComputedStyle(card.parentElement).columnGap) || 0;
      return card.offsetWidth + gap;
    };
    api.current = {
      move(dir) {
        hold();
        let from = pos;
        if (dir < 0 && from - step() < 0) from += half(); // stay inside the loop
        tween = { from, to: from + dir * step(), start: performance.now() };
      },
    };

    // visitor swipes / drags the row: follow it and pause the drift
    const onScroll = () => {
      // our own writes land within a pixel of pos (the browser may round)
      if (Math.abs(el.scrollLeft - pos) < 2) return;
      tween = null;
      pos = wrap(el.scrollLeft);
      if (pos !== el.scrollLeft) write(pos);
      hold();
    };
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; });
    io.observe(el);
    const enter = () => { hovered = true; };
    const leave = () => { hovered = false; };
    const fin = () => { focused = true; };
    const fout = () => { focused = false; };
    const root = el.parentElement;
    root.addEventListener('pointerenter', enter);
    root.addEventListener('pointerleave', leave);
    root.addEventListener('focusin', fin);
    root.addEventListener('focusout', fout);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      root.removeEventListener('pointerenter', enter);
      root.removeEventListener('pointerleave', leave);
      root.removeEventListener('focusin', fin);
      root.removeEventListener('focusout', fout);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="hm-marquee-wrap">
      <div className="hm-marquee" ref={scroller}>
        <div className="hm-marquee-track" ref={track}>
          <ul className="hm-marquee-list">{children}</ul>
          <ul className="hm-marquee-list" aria-hidden="true">{copy}</ul>
        </div>
      </div>
      {note}
      <div className="hm-marquee-nav">
        <button type="button" className="hm-marquee-btn" aria-label="Previous moment" onClick={() => api.current?.move(-1)}>
          <ArrowIcon flip />
        </button>
        <button type="button" className="hm-marquee-btn" aria-label="Next moment" onClick={() => api.current?.move(1)}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
