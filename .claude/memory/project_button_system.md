---
name: project-button-system
description: "Site-wide button rule (2026-11-03): only two button styles, both navbar \"Book a Call\" size; dark-background variants"
metadata:
  node_type: memory
  type: project
  originSessionId: 81e5bde4-48ff-402e-829d-f7a04a17c033
  modified: 2026-11-03T12:10:56.722Z
---

The user set a site-wide rule on 2026-11-03: use only two buttons, both the navbar "Book a Call" size (40px tall, 8px/20px padding).
- `.hm-btn--primary`: dark navy, the same as Book a Call.
- `.hm-btn--secondary`: white with a navy outline, like "See Our Work".
- The purple `.hm-btn--accent` (#5835E8) was removed.

On dark backgrounds, primary turns white and secondary becomes a transparent white outline. These dark contexts are listed in `_shared/shared.css` as `:is(.hm-dark-panel, .hm-final, .sv-get)`. The homepage hero (.hfb) became light on 2026-11-04, so it was dropped from the list.

**Why:** the user wants consistent, smaller buttons that match the navbar CTA.

**How to apply:**
- Any new button uses one of these two classes. Never add a new colour or size.
- A new dark section must be added to the `:is(...)` list.
- The two-buttons-on-dark pattern (white filled + white outline) was my interpretation of "use the white button on dark". Confirm with the user if they question it.
