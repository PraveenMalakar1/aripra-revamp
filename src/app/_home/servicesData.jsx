import { RescueCompact, ProductCompact, TeamCompact } from '../services/ServiceIllustrations';
import { GroundUpCompact } from '../services/ServiceIllustrationsGroundUp';

// Homepage "What we do" content (homepage copy v4, 2026-11-04), shared by the
// grid and the tab layouts. `when` = the one-line summary under each title.
// "Learn more" deep-links to the matching block on /services.
export const SERVICES = [
  {
    id: 'technology-rescue-rebuild',
    title: 'Technology Rescue & Rebuild',
    when: 'Your technology is broken. We find out why, fix it properly, and build something that holds.',
    Illustration: RescueCompact,
    body: [
      'Before we write a single line of code, we diagnose. We map what you have, find what’s broken, and tell you exactly what needs to happen. Most founders have sat through six-week discovery phases that produced a slide deck. We produce a diagnosis in days.',
      'Then we fix it properly. Not patches. Not workarounds. A rebuild that’s built to last.',
      'We’ve stepped in after agencies, offshore teams, and AI-assisted builds. We know exactly what to look for.',
    ],
  },
  {
    id: 'ai-product-engineering',
    title: 'AI Product Engineering',
    when: 'You know the outcome you need. We figure out what to build and build it AI-native from day one.',
    Illustration: ProductCompact,
    body: [
      'Most founders know the outcome they need. They don’t always know what to build to get there. That’s our job too.',
      'We start with your intent and work backwards. AI-native from the first line of code means faster delivery and architecture that holds up when your business scales. Every engineer thinks like a product owner. You don’t need to manage the gap between what you meant and what gets built.',
    ],
  },
  {
    // homepage copy update, 2026-11-05: replaces Ground-Up AI Build (keeps
    // its illustration for now)
    id: 'ai-consultation-and-implementation',
    title: 'AI Consultation and Implementation',
    when: 'You know AI is relevant to your business. We tell you where it moves the needle, then build it.',
    Illustration: GroundUpCompact,
    body: [
      'Every founder we speak to knows AI is relevant to their business. Few know exactly where to use it or what to build. We start with your business, not with AI. If you already know what you want, we skip straight to building.',
      'For many businesses, the answer is AI agents: autonomous systems that handle decisions and actions at scale, without a human in the loop for each one. We’ve built that for CarPlanet. Their agents now handle decisions across tens of thousands of interactions a month.',
    ],
  },
  {
    id: 'dedicated-ai-engineering-teams',
    title: 'Dedicated AI Engineering Teams',
    when: 'Engineers who act like they work for you, because they do.',
    Illustration: TeamCompact,
    body: [
      'Not a team you have to manage. Not a team that needs hand-holding. Engineers who understand your business, take ownership of their work, and make decisions you’d be comfortable with.',
      'They use AI as the foundation of how they build, not as an occasional shortcut. Direct access to everyone on the team. We scale alongside you as your needs grow.',
    ],
  },
];
