---
name: project_homepage_stacked_scroll
description: "Architecture and known gotchas of the homepage's hybrid stacked-scroll feature (src/app/HomepageContent.jsx)."
metadata: 
  node_type: memory
  type: project
  originSessionId: 39ce7362-8c4a-4f00-8edb-d0138b206f44
  modified: 2026-07-30T11:14:33.183Z
---

The homepage (`src/app/HomepageContent.jsx` + `src/app/homepage.css` + `src/app/body-content.js`) implements a hybrid stacked-scroll experience: 7 `.stack` sections (situation, about, not-for-you, services, proof, objections, contact) pin full-screen and slide-cover each other like stacked cards, with tall sections revealing their own overflow content first via an internal scroll simulation before the next section covers them.

**Why this design, not GSAP `pin:true`:** an earlier version used GSAP ScrollTrigger's `pin: true` per section. It caused two separate hard-to-diagnose bugs — GSAP auto-switching to transform-based pinning (conflicting with the depth-fade transform on the same element, leaving stray `translate()` residue after unpinning) and `pinSpacing:false` borrowing scroll space from the footer in a way that could run out for the last section. Rebuilt as a single sticky `.stack-frame` holding all sections as absolutely-positioned layers, with one scroll-driven function (`applyProgress` in `HomepageContent.jsx`) computing each layer's `translateY`/z-index directly — no GSAP `pin` at all, GSAP is only used for `gsap.set()` convenience.

**Key gotchas found during implementation (how to apply next time):**
- Absolute-positioning checks must use `getComputedStyle(el).position === 'absolute'`, not text-matching `el.getAttribute('style')` — several decorative wrappers (e.g. `.tex`, `.tex-rings .ring`) get `position: absolute` from a CSS class, not inline style, so inline-text matching silently misses them.
- Any element with native `position: sticky` nested inside a section (e.g. `.obj-q` in the objections FAQ rows) escapes containment once its ancestor gets a GSAP transform applied — must be neutralized to `position: static` at build time.
- No opacity fade on the outgoing/covered section (removed per explicit user request) — sections stay at `opacity: 1` always; only `translateY` + z-index drive the stacking, so underlying content never bleeds through via alpha blending.
- Decorative absolute shapes (rings, blobs) were originally designed to bleed into the *previous* section in the old normal-flow page (negative top/bottom offsets). In the isolated/stacked layout these get hard-clipped; current code clamps negative offsets to 0 without resizing (resize-based containment fix was tried, then reverted at user's request — see conversation history if revisiting).
- `.homepage-revamp .tex` (the decorative background wrapper class used across most sections) has `opacity: 0.2` added directly in `homepage.css` to keep decorative graphics subtle — this was found live via the user's own DevTools experimentation, not derived from first principles.
