---
name: project_services_page_todo
description: Open follow-up on the /services page — illustrations need continuous animation.
metadata: 
  node_type: memory
  type: project
  originSessionId: 39ce7362-8c4a-4f00-8edb-d0138b206f44
  modified: 2026-07-30T14:12:16.942Z
---

Open task (raised 2026-07-30, to continue in a future session): the 4 service illustrations in `src/app/services/ServicesContent.jsx` (RescueIllustration, ProductIllustration, AIIllustration, TeamIllustration) need continuous, ambient animation on every one of them — not static, and not just a single moving dashed line.

**Current state:** RescueIllustration and AIIllustration have a little motion (a moving dashed scan line / flowing dashed edges via SVG `<animate>`). ProductIllustration and TeamIllustration have none at all. User flagged this as insufficient — wants all 4 to feel continuously alive, matching the ambient drift/pulse/flow animations already used elsewhere on the homepage (see `.amb-mesh`, `.ill .pulse`, `.ill .drift` etc. in homepage.css for the site's existing animation vocabulary/timing to stay consistent with).

**How to apply:** when picking this up, animate each illustration's shapes continuously (subtle drift, pulse, opacity breathing, flowing dashes, etc.) using either SVG `<animate>` tags (as already used) or CSS `@keyframes` scoped in services.css — keep durations slow/subtle (5-10s) to match the site's calm, premium feel, not fast/attention-grabbing. Respect `prefers-reduced-motion` (services.css already has a global reduce-motion override for `.reveal`; extend it to cover any new keyframe animations too).
