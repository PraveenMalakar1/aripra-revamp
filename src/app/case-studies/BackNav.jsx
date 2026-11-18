import Link from 'next/link';

// Breadcrumb strip attached under the navbar on case study detail pages,
// always visible so readers can get back from anywhere (client choice).
export default function BackStrip({ name }) {
  return (
    <nav className="cd-strip" aria-label="Breadcrumb">
      <div className="hm-wrap cd-strip-inner">
        <Link href="/case-studies" className="cd-strip-link">
          <span aria-hidden="true">←</span> Case studies
        </Link>
        <span className="cd-strip-sep" aria-hidden="true">/</span>
        <span className="cd-strip-current" aria-current="page">{name}</span>
      </div>
    </nav>
  );
}
