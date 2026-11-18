import StatNumber from './StatNumber';
import { yearsInBusiness } from './company';

// "years / 33+ / Since 2014" stats strip (homepage, under the testimonials).
// Labels per homepage copy v4.
const STATS = [
  { value: yearsInBusiness(), label: 'Years building software for founders' }, // since FOUNDED_YEAR
  { value: 33, suffix: '+', label: 'Products built and shipped' },
  { value: 2014, lead: 'Since', label: 'Longest client', static: true }, // a year: don’t count up
];

export default function StatsStrip() {
  return (
    <ul className="hm-stats hm-reveal">
      {STATS.map((s) => (
        <li key={s.label} className="hm-stat">
          <span className="hm-stat-value">
            {s.lead && <span className="hm-stat-lead">{s.lead} </span>}
            {s.static ? s.value : <StatNumber value={s.value} suffix={s.suffix} />}
          </span>
          <span className="hm-stat-label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
