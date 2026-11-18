---
name: feedback-no-copy-changes
description: "When reformatting/relayouting sections, never change the wording — only layout and formatting unless the user explicitly asks for copy changes"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 81e5bde4-48ff-402e-829d-f7a04a17c033
  modified: 2026-10-13T13:07:31.439Z
---

Never change website copy (wording) while doing layout/format work. Reformat only: move, split, emphasise, restyle the existing text verbatim. Do not add new copy (labels, taglines, captions, summaries) or reword anything unless the user explicitly asks; if new or changed wording seems useful, propose it and wait for approval.

**Why:** the copy comes from the client's approved docs and the founders review it; the user said (2026-10-13, during founder-feedback section redesigns) "don't change the text until I told you, just reformatting text".

**How to apply:** after any section redesign, diff the visible text against the previous version (git show HEAD:<file>) to confirm it is identical; removals only when the user asked for that element to go. Related: [[feedback-explain-before-implementing]]
