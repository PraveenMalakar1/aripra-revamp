---
name: project_shared_nav_footer
description: "Shared Nav/Footer components (src/app/Nav.jsx, src/app/Footer.jsx) added 2026-07-31, and why homepage's own nav/footer were deliberately left untouched."
metadata: 
  node_type: memory
  type: project
  originSessionId: fb82fe72-d073-4acc-8e80-8432b4d407c1
  modified: 2026-07-31T09:21:16.277Z
---

Added `src/app/Nav.jsx` (default export `Nav({ currentHref })` + named `ArrowIcon`) and `src/app/Footer.jsx` (default export `Footer`) as the canonical, reusable nav/footer for any *new* React-authored page. `/services` (`ServicesContent.jsx`) now imports both instead of hand-rolling its own copies — this fixed a real bug where `/services` had no footer at all.

**Why the homepage was NOT switched to these shared components:** the homepage (`HomepageContent.jsx`) renders its nav and footer from inside `body-content.js` — a single ~126KB one-line raw HTML string (parsed via `html-react-parser`) that is the original exported design. Per [[project_homepage_stacked_scroll]], this file/mechanism has a documented history of subtle breakage from edits. The nav and footer content in that blob is NOT part of the GSAP stacked-scroll sections (`STACK_IDS`), so swapping them for the shared components is probably low-risk, but editing that giant escaped string was judged not worth the risk for a page that already visibly has both nav and footer working correctly. This was a deliberate, disclosed choice, not an oversight — revisit only if the user explicitly asks to unify homepage onto the same components too.

**Footer content is real, not placeholder** — ported verbatim from the homepage's own footer (same Quick Links, Our Products, Information, Contact columns, same address/email, same social icon), just with hrefs adjusted to work from any page (e.g. `/#about` instead of bare `#about`, and "Services" now points to the real `/services` page instead of a homepage anchor). Placeholder-looking values already in the original (phone number, product links, `#` social href) were kept as-is since they're pre-existing site content, not something this session invented.
