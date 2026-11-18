// How We Work content (layout: Figma "How we works Page", node 534:10; copy:
// AW-3, updated doc 2026-11-04). Intent cards: `after` = an optional paragraph
// under the closing line. Each delivery step has a `detail` + `outcome`, shown in the left
// panel while the step is selected.

export const INTENT_CARDS = [
  {
    title: 'That gap is where most software projects go wrong.',
    body: 'Most agencies treat it as your problem. They take the brief you give them, build to it, and surface three months later with something technically correct and wrong in practice. If the brief was off, the software is off.',
    closer: 'Nobody tells you that upfront.',
    after: 'And if you’ve been through this before, the brief you bring is probably either too tight or too vague. Getting burned teaches you that. We start from wherever you are.',
  },
  {
    title: 'We don’t take briefs at face value.',
    body: 'We start with your intent. Where you’re trying to go. What the business needs to do that it can’t right now. The right questions surface what’s already in your head but hasn’t been put into words yet.',
    closer: 'Not a six-week discovery phase. Not a 40-field requirements document.',
  },
  {
    title: 'Requirements emerge.',
    body: 'Through conversation, through early builds, through seeing what lands and what doesn’t. We course correct continuously. What gets built is shaped by what we learn along the way.',
    closer: 'That’s what stops you getting to the end and finding out it’s not what you needed.',
  },
];

export const DELIVERY_STEPS = [
  {
    title: 'Planning',
    summary: 'The most expensive mistake in software is building the wrong thing well.',
    detail: 'Before any code gets written, we map what needs to happen. For new builds: architecture decisions made upfront, edge cases identified before they become surprises, a clear picture of how the system will scale. For rescue projects: AI tooling maps the existing codebase, engineers read what it finds, and together we decide what to do about it.',
    outcome: 'You know what’s going to be built before it gets built.',
  },
  {
    title: 'Development',
    summary: 'Every engineer uses AI as a coding partner. Not as a code generator.',
    detail: 'The distinction matters. A code generator produces output. A coding partner produces output that an engineer reviews, understands, and owns. No AI-generated code ships without the engineer who owns it signing off. That’s not a rule we enforce. It’s how engineers who care about their work operate.',
    outcome: 'Faster to build. Without the shortcuts that create problems later.',
  },
  {
    title: 'Code Review',
    summary: 'Every pull request goes through AI-assisted review before a human sees it.',
    detail: 'Security vulnerabilities, logic gaps, edge cases that only surface under load: caught before they reach review. Human code review then focuses on what humans are good at. Whether the architecture is right. Whether the approach makes sense. Whether this is the correct solution to the right problem.',
    outcome: 'Problems get caught before they reach you.',
  },
  {
    title: 'Testing',
    summary: 'AI generates test cases faster than any engineer writing them by hand.',
    detail: 'Including edge cases. Including the scenarios that only break things at scale. Engineers review, extend, and own the test suite. The result is coverage that would take far longer to write manually.',
    outcome: 'The software does what it’s supposed to do. Under real load. Not just in a demo.',
  },
  {
    title: 'Documentation',
    summary: 'Code gets documented as it’s written. Not after.',
    detail: 'Most teams document at the end, if at all. By then, the engineer who wrote it has moved on and what gets written is a rough summary of what they remember. We generate documentation at the point of writing. Engineers own and maintain it from there.',
    outcome: 'A codebase your next team can read, understand, and pick up without a handover call.',
  },
];

export const BEFORE = [
  'Software built to spec. Not to purpose.',
  'Engineers you’ve never spoken to, managed through an account manager.',
  'AI opened occasionally in an IDE. On the side of the actual work.',
  'Documentation written at the end. If at all.',
  'A new team on your codebase every 12 to 18 months.',
];

export const AFTER = [
  'Built around where you were going, not where you started.',
  'Direct access to the engineers writing your code. From the first call to the last commit.',
  'AI at every stage. Planning, review, testing, documentation.',
  'Documented as it’s written. Engineers own it from there.',
  'Engineers who stay on your codebase for as long as the project runs.',
];
