import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import { PUBLISHED_CASE_STUDIES } from './data';
import KeyStat from './KeyStat';
import '../_shared/shared.css';
import './case-studies-page.css';

export function CaseCard({ study }) {
  const { client, project, title, industry, services, context, highlights, image, href } = study;
  return (
    <li className="cs-card hm-reveal">
      {/* project image goes here (data.js `image`); grey until supplied */}
      <div className="cs-card-media">
        {image && <Image src={image} alt="" fill sizes="(max-width: 720px) 90vw, (max-width: 1100px) 45vw, 380px" />}
      </div>
      <p className="cs-card-client">
        {/* client tag: CarPlanet appears on four cards, so the grouping reads
            as depth of relationship (copy AW-5 designer note) */}
        {client && <span className="cs-card-client-tag">{client}</span>}
        <span className="cs-card-project">{project}</span>
      </p>
      <h3 className="cs-card-title">
        {href ? <Link href={href} className="cs-card-link">{title}</Link> : title}
      </h3>
      <p className="cs-card-tags">
        {industry} <span aria-hidden="true">|</span> {services}
      </p>
      <p className="cs-card-context">{context}</p>
      <p className="cs-card-stat">
        <span className="cs-card-stat-label">Key stat</span>
        <KeyStat highlights={highlights} />
      </p>
      {href ? (
        <span className="cs-card-cta" aria-hidden="true">Read the case study →</span>
      ) : (
        <span className="cs-card-cta is-soon">Case study coming soon</span>
      )}
    </li>
  );
}

// Case Studies page (layout: Figma 686:145; copy: AW-5). The hero uses the
// shared PageHero (client request: match the other pages).
export default function CaseStudiesPage() {
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          <PageHero id="cs-hero-title" className="pg-hero--no-dim" badge="Proven Results" title="Real problems. Real systems. Real numbers." titleWidth={800} contentWidth={800}>
            <p className="cs-hero-lead">
              From brief to production, every case study here is a product running in a real business with results we can
              put a number on.
            </p>
          </PageHero>

          <section className="cs-grid-section" aria-label="Case studies">
            <ul className="hm-wrap cs-grid">
              {PUBLISHED_CASE_STUDIES.map((s) => <CaseCard key={s.slug} study={s} />)}
              {/* "and many more" tile fills the grid's last slot (founders,
                  2026-10-30; was a separate band under the grid) */}
              <li className="cs-more hm-reveal">
                {/* copy + CTA: founders, 2026-11-17 (the contact page, not the booking calendar) */}
                <p className="cs-more-text">
                  <strong>And many more.</strong>{' '}If you’re in a different industry and want to see work relevant to
                  your problem, send us a note. We’ll share what fits.
                </p>
                <Link href="/contact" className="hm-btn hm-btn--primary">Get in touch</Link>
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
