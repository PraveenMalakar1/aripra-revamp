---
name: feedback-best-practices
description: "User wants best practices followed by default, in both code and visual/design decisions, without being asked each time."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 39ce7362-8c4a-4f00-8edb-d0138b206f44
  modified: 2026-07-30T11:13:53.862Z
---

Always apply coding and design best practices by default — don't wait to be asked, and don't take the fastest/hackiest route to make a symptom go away.

**Why:** Said explicitly after a long debugging session on the hybrid stacked-scroll feature ([[project_homepage_stacked_scroll]]) where several early fixes were too narrow (e.g. checking `el.getAttribute('style')` text for `"position: absolute"` instead of `getComputedStyle(el).position`, which silently failed to match CSS-class-based positioning like `.tex-rings .ring` and wasted several round-trips before being caught). The user also had to explicitly request centralizing hardcoded colors into CSS variables ([[project_homepage_color_tokens]]) rather than it being done proactively.

**How to apply:**
- Coding: prefer robust checks over brittle text-matching (e.g. computed style over inline-style-string sniffing), avoid `!important`/inline-style overrides as a first resort, keep DOM/CSS structural changes consistent with how the rest of the codebase already does things.
- Design/CSS: keep colors, spacing, and other repeated values centralized in `homepage.css` custom properties rather than hardcoded inline, so a single change propagates everywhere — proactively flag or fix new hardcoded values introduced by future edits rather than leaving them for the user to catch.
- When implementing a new feature, sanity-check the approach against known-good patterns for that mechanism (e.g. GSAP ScrollTrigger's own recommended pinning patterns) before hand-rolling something ad hoc.
