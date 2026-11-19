import Image from 'next/image';
import MomentsCarousel from './MomentsCarousel';

// "The moments we hear most often" (Figma 419:246; homepage copy v4,
// 2026-11-04: five moments in the founder's voice, AI prototype first). Images supplied by the
// client (2026-10-09); they come pre-darkened. Card: title, then description
// (the category labels were removed: founders, 2026-11-16, not in the copy).
// Arrows: MomentsCarousel.jsx.
const MOMENTS = [
  {
    id: 'freedom',
    title: 'You used AI to build something. You’ve got a prototype. But not a product.',
    text: 'You validated the idea. Customers want it. But what you’ve got can’t handle real users and nobody can fully explain how it works. From prototype to production, that’s the gap. We close it.',
    image: '/home/moment-freedom.png',
  },
  {
    id: 'retaining',
    title: 'Your users are leaving and you don’t know why.',
    text: 'The product is live. It looks fine. But retention is dropping, support tickets are climbing, and the team keeps saying it needs more time.',
    image: '/home/moment-retain.png',
  },
  {
    id: 'creating',
    title: 'Every new feature you ship takes forever and breaks something else.', // founders, 2026-11-18
    text: 'What should take a week takes a month. Every fix introduces a new problem. Progress has stalled.',
    image: '/home/moment-create.png',
  },
  {
    id: 'growing',
    title: 'Your previous vendor is gone and you’re stuck with what they left.',
    text: 'You paid for it. You trusted someone with it. And now they’re not around to explain it, fix it, or own what went wrong. Every agency you talk to since has a different story about what it’ll take. You’ve stopped believing most of them.',
    image: '/home/moment-grow.png',
  },
  {
    // new in copy v4. TODO: needs its own photo; for now moment-grow.png
    // mirrored (moment-scale.png)
    id: 'scaling',
    title: 'You’ve outgrown what you built on.',
    text: 'It worked when the business was smaller. Now there are more locations, more transactions, more people. And the system underneath it all was never built for this scale.',
    image: '/home/moment-scale.png',
  },
];

function MomentCard({ moment, decorative }) {
  return (
    <li className="hm-moment" aria-hidden={decorative || undefined}>
      <Image src={moment.image} alt="" fill sizes="500px" className="hm-moment-img" />
      <h3 className="hm-moment-title">{moment.title}</h3>
      <p className="hm-moment-text">{moment.text}</p>
    </li>
  );
}

export default function Moments() {
  return (
    <section className="hm-moments" aria-labelledby="hm-moments-title">
      <div className="hm-moments-head">
        <span className="hm-moments-rule" aria-hidden="true" />
        <h2 id="hm-moments-title" className="hm-moments-title">The problems we hear most often</h2>{/* founders, 2026-11-16 (was "The moments…") */}
        <span className="hm-moments-rule" aria-hidden="true" />
      </div>
      {/* the question and the cards read as one beat (founders, 2026-11-18) */}
      <p className="hm-moments-sub">Sound familiar?</p>

      {/* the closing line sits between the row and the arrows (founders, 2026-11-04) */}
      <MomentsCarousel
        copy={MOMENTS.map((m) => <MomentCard key={m.id} moment={m} decorative />)}
        note={
          <p className="hm-moments-close hm-reveal">
            Any of these sound familiar? <strong>You’re in the right place.</strong>
          </p>
        }
      >
        {MOMENTS.map((m) => <MomentCard key={m.id} moment={m} />)}
      </MomentsCarousel>
    </section>
  );
}
