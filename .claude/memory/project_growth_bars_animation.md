---
name: growth-bars-animation
description: "Saved \"£19M → £200M\" animated 12-bar growth graph (removed from the hero 2026-11-05); founders want it reused on case study detail pages"
metadata:
  node_type: memory
  type: project
  originSessionId: 81e5bde4-48ff-402e-829d-f7a04a17c033
  modified: 2026-11-05T13:33:22.668Z
---

The animated bar graph built for the hero demos ("Odometer + bars", "Bento · £19M") was removed from the site on 2026-11-05 when the founders made the plain **Odometer** hero final. The user asked to keep it so it can be **used inside the case study detail pages** (e.g. CarPlanet's three-year growth). It was never committed, so the full code is kept here.

**Why:** founders liked the continuously running graph; it tells the £19M → £200M journey over 2023–2025 at a glance.

**How to apply:** when asked to add it to a case study page, recreate the component + CSS below (rename `hfb-` classes to the case-study prefix, e.g. `cs-bars-`), make the labels/years props instead of hard-coded, and pick the dark or light theme for the page background. Keep it decorative (`aria-hidden`) with the real numbers in text nearby. Check [[project-dark-panel-gradient]] if it sits on a dark panel.

What it looks like: 12 bars (one per quarter), heights on steady compound growth 19 × (200/19)^(i/11) as a fraction of 200. Bars rise one after another (90ms stagger) in a wave, hold, sink and rise again on a 6s loop. Last bar is orange (the highlight) with "£200M" fading in above it; "£19M" sits above the first bar. Years 2023 / 2024 / 2025 faint along a thin baseline, one under each group of four bars. Still for reduced motion.

Component (was `src/app/_home/GrowthBars.jsx`):

```jsx
const N = 12, FROM = 19, TO = 200;
const YEARS = ['2023', '2024', '2025'];
const HEIGHTS = Array.from({ length: N }, (_, i) => (FROM * (TO / FROM) ** (i / (N - 1))) / TO);

export default function GrowthBars() {
  return (
    <div className="hfb-bars" aria-hidden="true">
      <div className="hfb-bars-row">
        <span className="hfb-bars-label is-from">£19M</span>
        <span className="hfb-bars-label is-to">£200M</span>
        {HEIGHTS.map((h, i) => (
          <span key={i} className={i === N - 1 ? 'hfb-bar is-last' : 'hfb-bar'} style={{ '--h': h, '--i': i }} />
        ))}
      </div>
      <div className="hfb-bars-years">{YEARS.map((y) => <span key={y}>{y}</span>)}</div>
    </div>
  );
}
```

CSS, dark-background version (was on the black bento card). Give the wrapper a height; the bars fill it:

```css
.hfb-bars { --bar-gap: clamp(6px, 1vw, 12px); display: flex; flex-direction: column; gap: 8px; flex: 1 1 0; min-height: 120px; width: 100%; padding-top: 30px; }
.hfb-bars-row { position: relative; display: flex; align-items: flex-end; gap: var(--bar-gap); flex: 1 1 0; min-height: 0; }
.hfb-bars-years { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: var(--bar-gap); padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.32); font-size: 12px; font-weight: 500; line-height: 1; letter-spacing: 0.04em; text-align: center; font-variant-numeric: tabular-nums; }
.hfb-bar { flex: 1 1 0; height: calc(var(--h) * 100%); border-radius: 6px 6px 2px 2px; background: linear-gradient(180deg, #A78BFA, rgba(124,92,224,0.35)); transform-origin: bottom; animation: hfb-bar 6s cubic-bezier(0.22,1,0.36,1) calc(var(--i) * 90ms) infinite both; }
.hfb-bar.is-last { background: linear-gradient(180deg, #FFB48A, var(--brand-orange)); box-shadow: 0 0 24px rgba(255,85,0,0.55); }
.hfb-bars-label { position: absolute; z-index: 1; font-size: 13px; font-weight: 700; line-height: 1; }
.hfb-bars-label.is-from { left: 0; bottom: calc(9.5% + 8px); color: #C4B5FD; }
.hfb-bars-label.is-to { right: 0; top: -24px; color: #FFB48A; font-size: 15px; animation: hfb-bar-label 6s ease calc(11 * 90ms) infinite both; }
@keyframes hfb-bar { 0% { transform: scaleY(0); } 14% { transform: scaleY(1); } 78% { transform: scaleY(1); opacity: 1; } 90% { transform: scaleY(0); opacity: 0.4; } 100% { transform: scaleY(0); opacity: 0.4; } }
@keyframes hfb-bar-label { 0%, 10% { opacity: 0; transform: translateY(6px); } 16%, 78% { opacity: 1; transform: none; } 88%, 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .hfb-bar, .hfb-bars-label.is-to { animation: none; } }
```

Light-background overrides (user approved "lighter shades", last bar stays orange; wrapper was max-width 620px, height clamp(120px,15vh,160px), 140px on ≤900px):

```css
.light .hfb-bars { min-height: 0; padding-top: 26px; }
.light .hfb-bar { background: linear-gradient(180deg, #D4C8FD, rgba(221,214,254,0.35)); }
.light .hfb-bar.is-last { background: linear-gradient(180deg, #FFC4A3, #FF8A4C); box-shadow: 0 0 16px rgba(255,85,0,0.2); }
.light .hfb-bars-label.is-from { color: #A08BEA; }
.light .hfb-bars-label.is-to { color: var(--brand-orange); }
.light .hfb-bars-years { border-top-color: rgba(17,2,59,0.1); color: rgba(17,2,59,0.38); }
```
