'use client';

import { useState } from 'react';
import Image from 'next/image';
import LinkedInLink from './LinkedInLink';

// Team grid (client pick "D" from the team layout demo, 2026-10-12): vertical
// "ID card" per person — small round photo on a soft header band (employee
// photos share one background), name, LinkedIn, bio clamped to 2 lines with
// Read more — plus discipline filter pills. Full grid, no pagination (copy
// AW-04: "Show all engineers"). Styles: .tm-* in about.css.

// discipline from the bio's opening words (no job titles are shown)
const disciplineOf = (bio) => {
  if (bio.startsWith('AI-native QA')) return 'QA';
  if (/^AI-native (product )?design/.test(bio)) return 'Design';
  return 'Engineering';
};
// 'AI' filter removed (founders, 2026-10-19): AI engineers count as Engineering
const FILTERS = ['All', 'Engineering', 'QA', 'Design'];

function PersonCard({ person }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="tm-pc">
      <div className="tm-pc-photo">
        {person.photo ? (
          <Image src={person.photo} alt="" fill sizes="96px" />
        ) : (
          // no photo yet: initials on the same lavender circle
          <span className="tm-pc-initials" aria-hidden="true">{person.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
        )}
      </div>
      <h3 className="tm-pc-name">{person.name}</h3>
      <LinkedInLink name={person.name} href={person.linkedin} />
      <p className={open ? 'tm-pc-bio is-open' : 'tm-pc-bio'}>{person.bio}</p>
      <button type="button" className="tm-pc-more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? 'Show less' : 'Read more'}
      </button>
    </li>
  );
}

export default function TeamGrid({ people }) {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? people : people.filter((p) => disciplineOf(p.bio) === filter);

  return (
    <>
      <div className="tm-filters" role="group" aria-label="Filter the team by discipline">
        {FILTERS.map((f) => {
          const count = f === 'All' ? people.length : people.filter((p) => disciplineOf(p.bio) === f).length;
          return (
            <button key={f} type="button" className="tm-filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f} <span>{count}</span>
            </button>
          );
        })}
      </div>
      {/* keyed on the filter so the cards fade in again on every change */}
      <ul key={filter} className="tm-pcs">
        {shown.map((p) => <PersonCard key={p.name} person={p} />)}
      </ul>
    </>
  );
}
