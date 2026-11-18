---
name: project-dark-panel-gradient
description: "One dark-panel style site-wide (2026-11-04): --grad-dark violet→navy diagonal token in globals.css"
metadata:
  node_type: memory
  type: project
  originSessionId: 81e5bde4-48ff-402e-829d-f7a04a17c033
  modified: 2026-11-04T10:55:24.820Z
---

On 2026-11-04 the user picked one dark surface style for every dark panel or band on the site: `--grad-dark` (violet #2D1470 to navy, 120deg diagonal), defined in `src/app/globals.css`. It replaced the older grey-blue (#72808F) top-to-bottom gradient.

It is used by `.sb-card` (homepage stats), `.hm-sit-band`, `.hm-dark-panel`, `.hm-final`, `.sv-get` and `.hw-compare`. The circuit-line animations on those panels stay. The footer keeps its own flat navy.

**Why:** two different dark gradients on the same page looked like two separate design decisions.

**How to apply:** any new dark section uses `background: var(--grad-dark)`, never a new gradient. Also add it to the dark-button contexts list ([[project-button-system]]).
