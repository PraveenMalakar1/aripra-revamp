---
name: project_homepage_color_tokens
description: "Scope and location of the homepage's color-tokenization effort (CSS custom properties in homepage.css)."
metadata: 
  node_type: memory
  type: project
  originSessionId: 39ce7362-8c4a-4f00-8edb-d0138b206f44
  modified: 2026-07-30T11:14:48.892Z
---

`body-content.js` is a large generated HTML string (~124K chars) where almost everything is inline-styled by design. The user asked to centralize colors into CSS variables so a single change in `homepage.css` propagates everywhere, but explicitly scoped this down twice:

1. First narrowed from "remove all inline CSS" to "colors only" (layout/spacing/sizing stays inline).
2. Then narrowed further to: primary button colors, text colors, and description colors only — explicitly excluding SVG `fill`/`stroke`/`stop-color` attributes (logo/icon artwork) and background gradients (section backgrounds, decorative blob/glow gradients, ambient effects).

**Current state:** all `style="..."` occurrences (never SVG attributes) of the core brand colors are tokenized in `homepage.css`'s `.homepage-revamp` custom-property block: `--color-accent` (#6C47FF), `--color-white` (#FFFFFF), `--color-brand-orange` (#FF5500), `--color-primary` (#11023B), plus newer additions `--color-accent-bright` (#8B6BFF, button gradient second stop) and several `--color-text-dark-*` / `--color-text-footer-body` tokens for description/caption text on dark sections (not-for-you, contact, footer).

**Deliberately left hardcoded (do not "helpfully" tokenize without asking):** the hero-terminal's decorative syntax-highlight-style text colors (e.g. `#C9BCFF`, `#7BE0A5`, `#6C7A99` used for lines like "analyzing requirements…", "✓ deploy → production"), all SVG artwork colors, and all background/gradient colors. If asked to "cover all colors," confirm scope first — the user's default intent here is narrower than it sounds.
