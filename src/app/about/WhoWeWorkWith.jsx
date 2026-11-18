
// "WHO WE WORK WITH" (Figma 677:59). The terminal is the shared animated
// one, without its title bar — Figma crops the same image to its body here.
// Copy AW-04, split verbatim into the three trait cards.
const TRAITS = [
  { title: 'They’re building something real', text: 'A product, a platform, an internal system their business depends on.' },
  { title: 'Sometimes the technology isn’t working', text: 'Sometimes it doesn’t exist yet and needs to be built right the first time.' },
  { title: 'Most came to us after others had already tried', text: 'They arrived frustrated. They stayed because we fixed what others couldn’t.' },
];

export default function WhoWeWorkWith() {
  return (
    <section className="ab-who" aria-labelledby="ab-who-title">
      <div className="hm-wrap ab-who-inner">
        {/* header centred above the content, like every section (founders, 2026-10-19) */}
        <div className="ab-who-head hm-reveal">
          <p className="hm-overline hm-overline--caps">WHO WE WORK WITH</p>
          <h2 id="ab-who-title" className="hm-h2">Our ideal clients are founders who own the technology decision.</h2>
          <p className="ab-who-lead">They’re not running it through a committee.</p>
        </div>
        <ul className="ab-who-traits">
          {TRAITS.map((t) => (
            <li key={t.title} className="ab-who-trait hm-reveal">
              <h3 className="ab-who-trait-title">{t.title}</h3>
              <p className="ab-who-trait-text">{t.text}</p>
            </li>
          ))}
        </ul>
        <div className="ab-who-closer hm-reveal">
          <p>
            That’s not accidental. We don’t take on work we can’t do exceptionally well. If we’re not the right fit,
            we’ll say so on the call.
          </p>
          <p>Some of our best work isn’t on our website. Some clients need it that way. We respect that.</p>
        </div>
      </div>
    </section>
  );
}
