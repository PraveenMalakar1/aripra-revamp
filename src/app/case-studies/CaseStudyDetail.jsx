import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';
import Footer from '../Footer';
import MotionProvider from '../_shared/MotionProvider';
import PageHero from '../_shared/PageHero';
import StatNumber from '../_shared/StatNumber';
import BackStrip from './BackNav';
import { CASE_STUDIES } from './data';
import '../_shared/shared.css';
import './case-study-detail.css';

// Case study detail template (layout: Figma "Case study - detail page", node
// 690:303; copy: the AW-CS-0x documents). Content comes from
// ./details/<slug>.js. Hero is the shared PageHero (client request: match the
// other pages). Back to the listing: the always-visible breadcrumb strip
// under the navbar, plus a button at the end.
//
// Content shapes: client / problem / outcome / feature bodies are arrays of
// paragraphs; a stat is { value, prefix?, suffix? } (counts up) or { text }
// (shown as-is, e.g. "3:27"); quote and facts are optional.
const paras = (list, className) => list.map((p) => <p key={p.slice(0, 40)} className={className}>{p}</p>);

export default function CaseStudyDetail({ study }) {
  const { slug, name, badge, title, subtitle, stats, client, problem, builtIntro, features, outcome, quote, facts } = study;
  // the project image (logo) is shared with the listing card (./data.js)
  const image = CASE_STUDIES.find((c) => c.slug === slug)?.image;
  return (
    <MotionProvider>
      <div className="site-page">
        <Nav />
        <main>
          {/* headline, subheadline and stats all in the first screen
              (founders, 2026-10-30): the stats are the hero's last row */}
          <PageHero
            id="cd-title"
            className="cd-hero"
            badge={badge}
            title={title}
            titleWidth={1040}
            contentWidth={1040}
            after={(
              <ul className="hm-wrap cd-stats hm-rise" style={{ '--cd-stats': stats.length, '--rise-delay': '350ms' }} aria-label="Outcome snapshot">
                {stats.map((s) => (
                  <li key={s.label} className="cd-stat">
                    <span className={s.text?.length > 8 ? 'cd-stat-value is-text' : 'cd-stat-value'}>
                      {s.text ?? <StatNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />}
                    </span>
                    <span className="cd-stat-label">{s.label}</span>
                  </li>
                ))}
              </ul>
            )}
          >
            <p className="cd-subtitle">{subtitle}</p>
          </PageHero>

          <section className="cd-section" aria-label="The client and the problem">
            <div className="hm-wrap cd-col">
              {/* heading centred above the text + logo row (founders, 2026-10-19) */}
              <div className="cd-block hm-reveal">
                <h2 className="cd-h2">The Client</h2>
                <div className={image ? 'cd-client has-image' : 'cd-client'}>
                  <div className="cd-block">
                    {paras(client, 'cd-lead')}
                  </div>
                  {image && (
                    <div className="cd-client-image hm-reveal">
                      <Image src={image} alt={`${name} logo`} fill sizes="(max-width: 1100px) 90vw, 440px" />
                    </div>
                  )}
                </div>
              </div>
              <div className="cd-block hm-reveal">
                <h2 className="cd-h2">The Problem</h2>
                {paras(problem, 'cd-lead')}
              </div>
            </div>
          </section>

          <section className="cd-section cd-built" aria-labelledby="cd-built-title">
            <div className="hm-wrap cd-col cd-built-col">
              <h2 id="cd-built-title" className="cd-h2 hm-reveal">What We Built</h2>
              <p className="cd-lead hm-reveal">{builtIntro}</p>
              <ul className="cd-features">
                {features.map((f) => (
                  <li key={f.title} className="cd-feature hm-reveal">
                    <h3 className="cd-feature-title">{f.title}</h3>
                    {paras(f.body, 'cd-feature-body')}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="cd-section cd-outcome" aria-labelledby="cd-outcome-title">
            <div className="hm-wrap cd-col cd-outcome-col">
              <h2 id="cd-outcome-title" className="cd-h2 hm-reveal">The Outcome</h2>
              {paras(outcome, 'cd-lead hm-reveal')}
              {quote && (
                <blockquote className="cd-quote hm-reveal">
                  <span className="cd-quote-mark" aria-hidden="true">“</span>
                  <p>{quote}</p>
                </blockquote>
              )}
            </div>
          </section>

          {facts && (
            <section className="cd-section cd-facts-section" aria-labelledby="cd-facts-title">
              <div className="hm-wrap cd-col">
                <div className="cd-facts hm-reveal">
                  <h2 id="cd-facts-title" className="cd-facts-title">Build facts</h2>
                  <dl className="cd-facts-list">
                    {facts.map(([label, value]) => (
                      <div key={label} className="cd-fact">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <Link href="/case-studies" className="hm-learn cd-back hm-reveal">
                  <span className="cd-back-arrow" aria-hidden="true">←</span> Back to case studies
                </Link>
              </div>
            </section>
          )}
        </main>
        <Footer />
        <BackStrip name={name} />
      </div>
    </MotionProvider>
  );
}
