---
name: feedback-explain-before-implementing
description: "Before implementing any change, explain the plan in very simple, non-technical language and wait for the user's go-ahead — don't implement first."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 39ce7362-8c4a-4f00-8edb-d0138b206f44
  modified: 2026-07-30T11:16:42.596Z
---

Do not jump straight to implementing. First explain what I'm about to do in very simple, plain language — as if explaining to a 5th-grade student, no jargon — and wait for the user to respond/approve before writing or editing any code.

**Why:** Said explicitly after a long session of directly implementing fixes (the stacked-scroll feature, color tokenization) that took many round trips to get right. The user wants a chance to weigh in on the approach before time is spent building it.

**How to apply:** For any non-trivial request (new feature, design change, bug investigation with more than one plausible fix), give a short, simple-language summary of what I plan to do and why, then stop and wait for their reply — don't start editing files. Trivial one-line fixes or things the user has already explicitly approved the approach for can still move faster, but default to explain-first when in doubt. Pairs with [[feedback_best_practices]].
