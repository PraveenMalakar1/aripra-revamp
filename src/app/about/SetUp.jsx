import Image from 'next/image';
import CircuitBg from '../_shared/CircuitBg';

// "// HOW WE’RE SET UP" (Figma 677:228; copy AW-04, split verbatim across the
// heading, lead and the two glass cards). Icons: Figma shows the same rocket
// twice; the second card uses the headset icon until the final one is supplied.
const POINTS = [
  {
    icon: '/home/icon-deploy.svg',
    title: 'Clients don’t get handed off.',
    text: 'There’s no translation layer between you and the engineers.',
  },
  {
    icon: '/home/icon-support.svg',
    title: 'You speak directly to the people writing your code.',
    text: 'From the first conversation to the last commit.',
  },
];

export default function SetUp() {
  return (
    <section className="ab-setup hm-dark-panel has-circuit" aria-labelledby="ab-setup-title">
      <CircuitBg variant="accent" />
      <div className="hm-dark-panel-inner ab-setup-inner">
        <div className="ab-setup-head hm-reveal">
          <p className="hm-overline hm-dark-panel-overline">HOW WE’RE SET UP</p>
          <h2 id="ab-setup-title" className="ab-setup-title">
            Everyone at Aripra builds.
          </h2>
        </div>
        <div className="ab-setup-copy hm-reveal">
          <p><strong>The people you talk to are the people doing the work.</strong></p>
        </div>
        <ul className="ab-setup-cards">
          {POINTS.map((p) => (
            <li key={p.title} className="ab-setup-card hm-glass hm-reveal">
              <Image src={p.icon} alt="" width={50} height={50} />
              <h3 className="hm-glass-title">{p.title}</h3>
              <p className="hm-glass-text">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
