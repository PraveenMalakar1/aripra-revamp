# Memory Index — Aripra Revamp

## Active

- [Always use best practices by default](feedback_best_practices.md) — coding & design, don't wait to be asked
- [Explain before implementing](feedback_explain_before_implementing.md) — simple language, wait for go-ahead first
- [Homepage stacked-scroll architecture](project_homepage_stacked_scroll.md) — how it works, key gotchas found
- [Homepage color tokenization scope](project_homepage_color_tokens.md) — what's tokenized, what's deliberately not
- [/services page architecture](project_services_page.md) — real content only, no placeholder sections, cross-links to homepage
- [Services illustration animation gotchas](project_services_illustration_animation_gotchas.md) — transform-origin/fill-box traps, reduced-motion fallback fills
- [Browser verification setup](reference_browser_verification_setup.md) — no chromium-cli here; ad hoc Playwright install in scratchpad works
- [Shared Nav/Footer components](project_shared_nav_footer.md) — src/app/Nav.jsx + Footer.jsx; why homepage's own nav/footer were left untouched

Shared/cross-project memory (user profile, Jira→Figma workflow, Figma workflow safety rule, etc.) lives in the home memory pool at `C:\Users\HP\.claude\projects\C--Users-HP\memory\` and is not duplicated here.
- [One section at a time](feedback_one_section_at_a_time.md) — Figma page builds: build+verify one section, report, wait
- [New homepage build (2026)](project_new_homepage_build.md) — _home/ structure, 1920 max width, hero CSS-entrance + beam/logo gotchas
- [No copy changes when reformatting](feedback_no_copy_changes.md) — layout/format only; wording stays verbatim unless the user asks
- [Button system](project_button_system.md) — only navy + white-outline buttons, 40px; dark-bg variants
- [Dark panel gradient](project_dark_panel_gradient.md) — every dark panel uses --grad-dark (violet→navy); no new gradients
- [Growth bars animation (saved)](project_growth_bars_animation.md) — £19M→£200M animated bar graph code, removed from hero; reuse on case study detail pages
