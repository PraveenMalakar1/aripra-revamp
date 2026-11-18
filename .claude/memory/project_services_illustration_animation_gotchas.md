---
name: project_services_illustration_animation_gotchas
description: "Two real SVG/CSS animation bugs found while building the /services page's animated illustrations — both about transform-origin with transform-box:fill-box."
metadata: 
  node_type: memory
  type: project
  originSessionId: fb82fe72-d073-4acc-8e80-8432b4d407c1
  modified: 2026-07-31T07:50:32.958Z
---

(Note 2026-10-09: those illustrations were replaced by the shared .il-* kit — _shared/illustrationKit.jsx + shared.css — but the gotchas below still apply to it.)

While building the 8 continuously-animated SVG illustrations for [[project_services_page]] (`src/app/services/illustrations.jsx` + `svc-illu-*` classes in services.css), two non-obvious bugs surfaced only via actual browser rendering (not from build/lint):

1. **`transform-origin` pixel values are relative to the element's own bounding box, not the SVG viewBox**, when the class also sets `transform-box: fill-box` (which all `svc-illu-*` animation classes do, so percentage-based centering works per-instance). Setting `transformOrigin: '${viewBoxX}px ${viewBoxY}px'` inline (as if it were an absolute canvas coordinate) is wrong — it offsets from the element's own bbox top-left, which for a small element can fling it far outside the viewBox and get clipped by the container's `overflow: hidden`. Fix: use `'center'` (or omit — the class already defaults to center) whenever the intent is "rotate/scale around this element's own middle." Only use pixel/percent values when intentionally rotating around a point *other than* the element's own center.

2. **Forgetting `transform-origin: center` on one CSS class while setting it on all its siblings** silently defaults to `0px 0px` in Chrome for SVG elements with `transform-box: fill-box` (not the CSS-spec "50% 50%" one might expect) — causing rotation to swing around the top-left of the viewport/box instead of in place. Caught via `getComputedStyle(el).transformOrigin` returning `"0px 0px"` in a Playwright eval, not visible from a quick glance at a screenshot at some animation phases.

3. Related but different bug: an element whose visible color came *only* from a CSS animation keyframe (no static `fill`/`stroke` attribute on the element itself) went fully invisible once `prefers-reduced-motion` froze the animation (`animation: none`) — it fell back to the SVG default (`fill: none`, inherited from a parent `<svg fill="none">`). Any animated-color element needs a static base `fill`/`stroke` attribute as a reduced-motion fallback, with the keyframe only *overriding* that base color while running.

**How to apply:** when adding more animated SVG illustrations to this codebase, always visually verify both the normal AND `prefers-reduced-motion: reduce` state (Playwright's `page.emulateMedia({ reducedMotion: 'reduce' })`) — these bugs produced zero console errors and a clean `next build`, so they're invisible to anything except actually looking at the rendered page.
