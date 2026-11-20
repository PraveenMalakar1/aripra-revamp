import { yearsInBusinessWords } from '../_shared/company';
import FounderCards from './FounderCards';

// "THE FOUNDERS" (Figma 677:41; copy AW-04). Text is final. Layout: FounderCards.jsx
// (client pick from the founders demo, 2026-10-12).
// Order: Mahesh, Akash, Saurabh (client, 2026-10-08).
// `cutout`: the client's transparent portraits (public/about/founder-*.webp,
// 2026-10-19), trimmed to the person. `width` = % of the card width, chosen so
// the three heads come out the same size (their photos are framed differently)
// with space left on both sides of the shoulders (founders).
// `linkedin`: client-supplied profiles (2026-10-12), tracking params removed.
// `area`: the card tag ("Co-founder · …", About copy AW-4, 2026-11-20).
// `role`: the bio's opening line. `quote`: the pull-quote, shown as the
// callout only (not repeated in the body, AW-4). `bio`: the body paragraphs.
// The card shows area + quote; the "Read more" panel shows area, role,
// quote, then the bio.
const FOUNDERS = [
  {
    name: 'Mahesh Pogra',
    role: 'Mahesh heads delivery and operations.',
    linkedin: 'https://www.linkedin.com/in/mahesh-pogra/',
    area: 'Co-founder · Delivery & operations',
    cutout: { src: '/about/founder-mahesh-pogra.webp', w: 1119, h: 760, width: 84 },
    quote: 'His measure isn’t delivery. It’s whether the client walks away glad they chose Aripra.',
    bio: [
      'Every engagement runs the way he designed it: requirements that emerge through conversation, direct access to the engineers doing the work, course corrections made early, not at the end.',
      // "fifteen" = years running Aripra's delivery, from FOUNDED_YEAR
      `Twenty years in the industry, ${yearsInBusinessWords().toLowerCase()} of them running Aripra’s delivery. He knows what breaks.`,
      'Once you’re in, Mahesh owns what happens next. Not a process. Not a project management tool. A person. The promises made to you are his to keep.',
      'Risks get spotted before they become problems. Timelines get managed before they slip. When something needs to get done, he does it himself if that’s what it takes.',
      'Clients don’t just stay with Aripra because the engineering is good. They stay because someone made sure the whole experience was worth it. That’s Mahesh.',
    ],
  },
  {
    name: 'Akash Robert',
    role: 'Akash leads client relationships and new business.',
    linkedin: 'https://www.linkedin.com/in/akashrobert/',
    area: 'Co-founder · Clients & new business',
    cutout: { src: '/about/founder-akash-robert.webp', w: 997, h: 760, width: 70 },
    quote: 'Most people who are good with clients aren’t engineers. Most engineers aren’t good with clients.',
    bio: [
      'Akash has spent two decades on both sides of that line. He’s the one who takes the first call with new clients, because nobody else at Aripra sits at that intersection.',
      'He takes a rough vision, asks the right questions, and gives it shape. He can build a prototype to show what’s possible before a line of production code is written. And he’ll tell you honestly whether Aripra is the right fit, and why.',
    ],
  },
  {
    name: 'Saurabh Chouhan',
    role: 'Saurabh heads engineering.',
    linkedin: 'https://www.linkedin.com/in/saurabh-chouhan-0b2a03b4/',
    area: 'Co-founder · Engineering',
    cutout: { src: '/about/founder-saurabh-chouhan.webp', w: 1054, h: 760, width: 82 },
    quote: 'The standard hasn’t been handed off. He’s still the one raising it.',
    bio: [
      'He has firm views on what good engineering looks like. At Aripra, those views are the standard. Not a compromise. Not a process document someone else wrote. His.',
      'That’s not a management principle. It’s what happens when the person who leads engineering never stepped away from the work.',
      'He hires and trains the engineers. The person on your project wasn’t just hired to Aripra’s standard. They were built to it. Saurabh brought them in, shaped how they think, and stays close to the work that ships.',
      'He also decides what Aripra learns next. When cloud infrastructure became non-negotiable, Aripra was already there. AI is the same story. It’s production engineering now, and Aripra is already deep in it. Someone has to watch what’s coming before clients need to ask. That’s him.',
      // AW-4 marks this line NEEDS APPROVAL: confirm with Saurabh before it goes live
      'For you, that means software that holds up as your business grows.',
      'When you work with Aripra, you get the output of everything he builds: the standard, the team, and someone who has spent two decades refusing to settle for good enough.',
    ],
  },
];

export default function Founders() {
  return (
    <section className="ab-founders" aria-labelledby="ab-founders-title">
      <div className="hm-wrap ab-founders-inner">
        <div className="ab-founders-head hm-reveal">
          <p className="hm-overline hm-overline--caps">THE FOUNDERS</p>
          <h2 id="ab-founders-title" className="hm-h2 ab-founders-title">
            Three people run this company. All three of them build.
          </h2>
        </div>
        <FounderCards founders={FOUNDERS} />
      </div>
    </section>
  );
}
