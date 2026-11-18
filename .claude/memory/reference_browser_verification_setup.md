---
name: reference_browser_verification_setup
description: This machine has no chromium-cli/Playwright preinstalled for visually verifying UI changes — how it was set up ad hoc.
metadata: 
  node_type: memory
  type: reference
  originSessionId: fb82fe72-d073-4acc-8e80-8432b4d407c1
  modified: 2026-07-31T07:51:00.312Z
---

This Windows dev machine does not have `chromium-cli` (the tool the built-in `run` skill prefers for browser-driven verification) or Playwright/Puppeteer preinstalled or on PATH.

**How to get real browser screenshots when needed:** install Playwright into the session scratchpad (not the project — avoid touching the project's package.json/lock for a dev-only verification tool) and download just Chromium:

```
cd <scratchpad>
npm init -y && npm install playwright
npx playwright install chromium
```

This downloads ~300MB (Chrome for Testing + headless shell + ffmpeg) and takes a couple minutes. After that, a plain Node script using `require('playwright')` can `goto()` the local Next.js dev server, screenshot elements/pages, emulate `prefers-reduced-motion`, and read `console`/`pageerror` events — this is how the two real animation bugs in [[project_services_illustration_animation_gotchas]] were actually found (console + build were both clean; only visual inspection caught them).

**How to apply:** when the user asks for real visual/browser verification on this project and chromium-cli isn't available, don't just fall back to "trust the build" — do this ad hoc Playwright install in scratchpad. The user has explicitly asked for this once already rather than accepting code-review-only verification.
