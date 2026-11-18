// Careers page content (copy: AW-10). No job listings, no form: an
// always-on signal page.

// "Why Aripra": 6 tiles (icon + short headline + one-line description).
// `icon` keys map to the line icons in CareersPage.jsx.
export const WHY = [
  { icon: 'ai', title: 'Live AI in production.', text: 'Not prototypes. Systems processing 40,000 calls a month and managing 4,000 driver jobs a week.' },
  { icon: 'people', title: 'Work directly with decision-makers.', text: 'You’ll talk to the people who own the problem, not pass briefs through layers of handoff.' },
  { icon: 'stakes', title: 'Real clients, real stakes.', text: 'Businesses depend on what we build. If it breaks, they feel it. If it works, they commission the next one.' },
  { icon: 'stack', title: 'Full-stack problems.', text: 'AI pipelines, operations platforms, consumer websites. The work doesn’t repeat.' },
  { icon: 'bolt', title: 'Small team, fast decisions.', text: 'No approval chains. If the right call is obvious, we make it.' },
  { icon: 'shield', title: 'High standard, no politics.', text: 'The code is reviewed seriously. The culture isn’t.' },
];

export const LOOK_FOR = [
  'Have built something they’re proud of and can talk about it specifically',
  'Have firm views on what good engineering looks like and can defend them',
  'Take ownership of the problem, not just the ticket',
  'Are honest about what they know and what they don’t',
  'Know how to direct AI to build the right thing. The typing isn’t the job. The judgment is.',
  'Communicate clearly in English, in writing and on calls. You’ll be talking to clients directly. There’s no account manager in between.',
];

// "Why they stay": two engineer videos, recorded on phones (portrait).
// public/careers/*.mp4: H.264 720×1280, ~5 MB; `poster` = the still shown
// before play.
export const VIDEOS = [
  { name: 'Aayush Malviya', discipline: 'AI Engineer', years: '3+ years at Aripra', src: '/careers/ayush.mp4', poster: '/careers/ayush-poster.jpg' },
  { name: 'Manas Malakar', discipline: 'AI-native Engineer', years: '3+ years at Aripra', src: '/careers/manas.mp4', poster: '/careers/manas-poster.jpg' },
];

export const ROLES = [
  {
    title: 'AI Engineers',
    stack: ['Python', 'Model integration', 'Production pipelines'],
    text: 'You’ve shipped AI into a real product: voice, data, agents. You know what breaks at scale.',
  },
  {
    title: 'AI-native Engineers',
    stack: ['Node.js', 'React', 'Next.js'],
    text: 'You care about architecture as much as output. You use AI to move faster without cutting corners.',
  },
];
