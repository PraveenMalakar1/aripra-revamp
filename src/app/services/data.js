import { RescueIllustration, ProductIllustration, TeamIllustration } from './ServiceIllustrations';
import { GroundUpIllustration } from './ServiceIllustrationsGroundUp';

// Content for the four service sections, rendered by ServiceSection. Copy:
// AW-2 Services Page v3 (founders, 2026-11-02; updated doc 2026-11-04). Ids match the homepage
// "Learn More" deep links, the sidebar / strip and the bridge.
//   fit — the bridge's one-line "this is you if…" (verbatim from v3)
//   situation body / what you get — strings, or { text, strong } for bold lines
//   whatWeDo — blocks of { lead, body[] }: the lead renders as a bold line
//   cta — the service's own booking-button label
//   callNote — false hides the first-call note under the button
// Service 3's illustration: ServiceIllustrationsGroundUp.jsx (from the
// earlier Ground-Up AI Build service).
export const SERVICES = [
  {
    id: 'technology-rescue-rebuild',
    fit: 'your existing technology is broken',
    when: 'When your existing technology is the problem',
    title: 'Technology Rescue & Rebuild',
    lead: 'Most founders who come to us have already tried to fix this. Someone took their money, made promises, and left them worse off. We’re the team they come to after that.',
    Illustration: RescueIllustration,
    situation: {
      cards: [
        {
          title: 'The situation',
          body: [
            'You’ve been here before.',
            'You hired someone to fix it. An agency. An offshore team. Maybe a freelancer who seemed capable. For a while it looked like it was working.',
            'Then it wasn’t.',
            'Now you’re sitting on a codebase nobody fully understands, paying to maintain something that doesn’t work properly, and trying to decide whether to trust anyone with it again.',
            'There’s a name for this: comprehension debt. The team’s understanding of the system has fallen so far behind the system itself that nobody can confidently change it without risk. It lives in the people, not just the code.',
            'That’s the situation we walk into most often.',
            'We’ve stepped in after agencies, offshore teams, and AI-assisted builds more times than we can count. We know exactly what they leave behind. We know what the promises look like. We know what the excuses sound like. And we know exactly what to look for when we open the codebase.',
          ],
        },
      ],
    },
    whatWeDo: [
      { lead: 'Before we write a single line of code, we diagnose.', body: ['AI tooling maps your entire codebase, including the parts that were AI-generated, the parts nobody documented, and the parts the last team hoped nobody would look at. We find what’s broken, what’s at risk, and what needs to happen.'] },
      { lead: 'Then we tell you. No jargon. No softening. Just a straight answer.', body: ['Days, not weeks.'] },
      { lead: 'Then we fix it. Not patches. A proper rebuild.', body: [] },
    ],
    steps: [
      { title: 'Diagnosis', body: 'We map your codebase using AI tooling. Plain-English picture of what’s broken, what’s at risk, and what needs to happen. Days, not weeks.' },
      { title: 'Rebuild plan', body: 'We prioritise the work with you. What needs fixing first, what can wait, and why. No surprises.' },
      { title: 'Execution', body: 'We fix it properly. Direct access to the engineers doing the work. No layers. No handoffs. No disappearing.' },
    ],
    outcome: [
      { text: 'Technology that works under real load.', strong: true },
      { text: 'A codebase your next team can read, understand, and maintain. An honest answer about what state your system is in, even if it’s not what you want to hear. A foundation your business can actually grow on.' },
      { text: 'Built to last. Not built to ship and hope.', strong: true },
    ],
    cta: 'Let’s start with what’s broken →', // founders, 2026-11-17
  },
  {
    id: 'ai-product-engineering',
    fit: 'you need software built around a clear outcome',
    when: 'When you know what you want your business to do, but not exactly what to build',
    title: 'AI Product Engineering',
    lead: 'You have a clear outcome in mind. You’re less sure what to build to get there. We figure that out with you, then build it AI-native from the first line of code.',
    Illustration: ProductIllustration,
    situation: {
      cards: [
        {
          title: 'The situation',
          body: [
            'Most founders come to us with a direction, not a spec.',
            'They know what they want their business to do. They don’t always know what to build to make it happen. That’s not their job.',
            'The problem is most agencies treat it as yours.',
            'They ask for a brief, take whatever you give them, and build exactly that. Three months later you have software that does what you asked for. Not what you needed.',
          ],
        },
        {
          title: 'AI hasn’t fixed this.',
          body: [
            'If anything, it’s made it worse. Vibe coding gets you something fast. A prototype built on unclear requirements is still a prototype built on unclear requirements, just faster.',
          ],
        },
      ],
    },
    whatWeDo: [
      { lead: 'We start with where you are.', body: ['A direction, a vision, some early thinking. We ask the questions that turn a direction into something you can actually build to. What your customers actually need. Where your current process breaks.'] },
      {
        lead: 'Every engineer on your project thinks like a product owner and builds AI-native from day one.',
        body: [
          'Not a ticket-taker waiting to be told what to build. Someone who understands what you’re trying to achieve, asks the right questions before building anything, and uses AI at every stage of the build to deliver faster without cutting corners.',
          'We course correct alongside you as things get clearer. No surprises at the end. What gets built is what you meant. Not just what you were able to specify at the start.',
        ],
      },
    ],
    steps: [
      { title: 'Discovery', body: 'You don’t write a spec. It emerges through conversation and early builds. We adjust as you go.' },
      { title: 'Build', body: 'AI-native engineering throughout. Direct access to the engineers. You speak to the people writing the code, not a relay in between.' },
      { title: 'Iterate', body: 'As your understanding gets clearer, we adjust. The team stays close. Nothing gets locked in too early.' },
    ],
    outcome: [
      { text: 'A product built around where you were going, not where you started.', strong: true },
      { text: 'Engineers who took ownership of the outcome, not just the task. A codebase built AI-native from day one, so the next engineer who works on it can understand it, extend it, and maintain it.' },
      { text: 'No gap between what you meant and what got built.', strong: true },
    ],
    cta: 'Have the conversation most agencies skip →',
  },
  {
    // AI Consultation and Implementation (AW-2 update, 2026-11-05; replaces
    // Ground-Up AI Build; keeps its illustration for now)
    id: 'ai-consultation-and-implementation',
    fit: 'you know AI is relevant to your business but not where to start or what to build',
    when: 'When you know AI should be part of your business, but not what to build',
    title: 'AI Consultation and Implementation',
    lead: 'You’ve been sold AI by everyone. We tell you where it actually moves the needle in your business, then build it. If you already know what you want, we skip straight to building.',
    Illustration: GroundUpIllustration,
    situation: {
      cards: [
        {
          title: 'The situation',
          body: [
            'Every founder we speak to knows AI is relevant to their business.',
            'Few know exactly where to use it, what to build, or how to tell the difference between AI that creates real value and AI that looks good in a pitch deck.',
            'The market isn’t helping.',
            'Every agency now offers an AI strategy. Most of them are rebranded consulting engagements that end with a document, a roadmap, and a handoff to whoever does the actual building. By the time you’ve paid for the strategy and found someone to implement it, you’ve spent twice and waited twice as long.',
          ],
        },
        {
          title: 'We don’t separate the thinking from the building.',
          body: [
            'If you know what you want, we build it. If you’re still working out where AI creates value in your business, we figure that out with you first. Either way, the team that identifies the opportunity is the same team that builds it.',
          ],
        },
      ],
    },
    whatWeDo: [
      {
        lead: 'We start with your business, not with AI.',
        body: [
          'Where are decisions being made manually that could be automated? Where is your team doing repetitive work that a system could handle at scale? Where are you losing customers, missing leads, or operating blind because the data exists but nobody’s looking at it?',
          'Those are the questions that lead to AI worth building.',
        ],
      },
      {
        lead: 'For many businesses, the answer is AI agents.',
        body: [
          'Autonomous systems that handle decisions and actions at scale, without a human in the loop for each one. Not a chatbot on your website. Agents that work inside your actual operations, qualifying leads, managing pipelines, scoring calls, routing decisions, flagging exceptions, at a volume no team could manage manually.',
          'We’ve built this for CarPlanet. Their agents now handle decisions across tens of thousands of interactions a month. That didn’t start with an AI strategy. It started with one question: where is your team spending time on decisions that follow a pattern?',
        ],
      },
      {
        lead: 'That question is where we always start.',
        body: [
          'For other businesses, the answer is AI embedded into existing workflows. Classification, recommendation, automation that removes friction from the parts of the business that slow everything else down.',
          'We build to the outcome, not to a category.',
        ],
      },
    ],
    steps: [
      { title: 'Discovery', body: 'We map where AI creates measurable value in your business. If you already know what you want built, we skip this and go straight to step two.' },
      { title: 'Build', body: 'AI-native engineering from the first line of code. The same team that identified the opportunity builds it.' },
      { title: 'Measure', body: 'We define what success looks like before we start. The build is measured against the outcome, not the spec.' },
    ],
    outcome: [
      { text: 'AI that does something specific for your business.', strong: true },
      { text: 'Not a strategy deck. Not a proof of concept that never makes it to production. A working system, built properly, measured against a real business outcome.' },
      { text: 'Because the team that consulted is the team that built, nothing gets lost between the thinking and the making.', strong: true },
    ],
    cta: 'Start with the architecture conversation →', // founders, 2026-11-17
  },
  {
    id: 'dedicated-ai-engineering-teams',
    fit: 'you need engineers embedded in your business',
    when: 'When you need engineers who act like they work for you',
    title: 'Dedicated AI Engineering Teams',
    lead: 'Not a team you manage. Not a team that needs hand-holding. Engineers who understand your business, take ownership, and build AI-native from day one.',
    Illustration: TeamIllustration,
    situation: {
      cards: [
        {
          title: 'The situation',
          body: [
            'You’ve got more to build than your current team can handle.',
            'Or you don’t have a team yet. Either way, the answer everyone gives you is the same. Hire, or outsource.',
            'Hiring takes time you don’t have.',
            'And outsourcing has a track record. An agency that disappears for three months and comes back with something technically correct and useless in practice. An offshore team that needs so much management it defeats the point. A codebase you paid for that nobody can fully explain. If any of that sounds familiar, you already know what you don’t want.',
            'What you actually need is engineers who behave like they work for you.',
          ],
        },
      ],
    },
    whatWeDo: [
      { lead: 'We put a dedicated team on your business.', body: ['Not a shared resource pool. Not engineers split across five clients. Engineers whose primary context is you.'] },
      { lead: 'Direct access to everyone on the team.', body: ['Zero handoffs. The person with the problem and the people solving it in the same conversation. You speak directly to the engineers building your product. No translation layer in between.'] },
      {
        lead: 'Every engineer is an AI-native, full-stack builder.',
        body: [
          'They build across the stack, not one narrow slice of it, and use AI as the foundation at every layer. Not as an occasional shortcut. And they think like product owners: working with you to get the requirements right before anything gets built.',
          'You don’t need to manage the gap between your business and your engineers. They close it.',
        ],
      },
      {
        lead: 'They don’t wait to be told what to build.',
        body: [
          'Given access, they talk to the real users of your system. They look at how users behave in your current software, where they drop off, what they avoid, what they work around.',
          'Requirements that come from that are requirements that hold up.',
        ],
      },
    ],
    steps: [
      { title: 'Start small', body: 'We begin with the right-sized team for where you are now. Not oversized to justify a bigger contract.' },
      { title: 'Direct access from day one', body: 'You speak to the engineers before the engagement starts. You know who’s working on your business.' },
      { title: 'Scale as you grow', body: 'As the work grows, so does the team. No renegotiation, no procurement process.' },
    ],
    outcome: [
      { text: 'Engineers who take ownership.', strong: true },
      { text: 'A codebase built to last and readable by whoever comes next. The ability to move at the pace your business actually needs. Without building an internal team from scratch.' },
      { text: 'Engineers who stay. That’s rarer than it sounds.', strong: true },
      { text: 'Your IP stays yours. We don’t retain what we build, license it back, or use it elsewhere. You run your business. We build your technology. No overlap. No agenda.' },
    ],
    cta: 'Talk to an engineer, not a salesperson →', // founders, 2026-11-13
    callNote: false, // no "not a salesperson" note under it: the button already says it (founders, 2026-11-17)
  },
];
