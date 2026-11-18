import CaseShowcase from './CaseShowcase';

// "FEATURED CASE STUDIES" (founders, 2026-10-19): every case study from Our
// Work in the spotlight carousel (CaseShowcase.jsx), heading centred like
// every section. The CarPlanet story + £ stats were removed. id="work"
// is the hero's "See Our Work" target.
export default function CaseStudy() {
  return (
    <section id="work" className="hm-case" aria-labelledby="hm-case-title">
      <div className="hm-wrap hm-case-inner">
        <div className="hm-case-head hm-reveal">
          <p className="hm-overline">FEATURED CASE STUDIES</p>
          <h2 id="hm-case-title" className="hm-h2">What we’ve built</h2>
        </div>

        <CaseShowcase />
      </div>
    </section>
  );
}
