// "WHO WE WORK WITH" (Figma 677:59). Copy verbatim from About AW-4
// (2026-11-20; replaces the earlier three titled trait cards, whose titles
// weren't in the copy): the heading line (its second sentence as the lead),
// then the body as one centred, continuous read. Styles: .ab-who-* in
// about.css.
export default function WhoWeWorkWith() {
  return (
    <section className="ab-who" aria-labelledby="ab-who-title">
      <div className="hm-wrap ab-who-inner">
        {/* header centred above the content, like every section (founders, 2026-10-19) */}
        <div className="ab-who-head hm-reveal">
          <p className="hm-overline hm-overline--caps">WHO WE WORK WITH</p>
          <h2 id="ab-who-title" className="hm-h2">Our clients are founders who own the technology decision.</h2>
          <p className="ab-who-lead">They’re not running it through a committee.</p>
        </div>
        <div className="ab-who-body hm-reveal">
          <p>
            They’re building something real: a product, a platform, an internal system their business depends on.
            The technology isn’t working the way it should. Or it doesn’t exist yet, and they need to build it right
            the first time.
          </p>
          <p className="ab-who-strong">They came to us frustrated. They stayed because we fixed what others couldn’t.</p>
          <p>We don’t take on work we can’t do exceptionally well. If we’re not the right fit, we’ll say so on the call.</p>
          <p>Some clients prefer to stay anonymous. We’ll never push for public attribution.</p>
        </div>
      </div>
    </section>
  );
}
