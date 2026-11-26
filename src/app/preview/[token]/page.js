import { notFound } from 'next/navigation';
import CaseStudyDetail from '../../case-studies/CaseStudyDetail';
import { DRAFT_DETAILS } from '../../case-studies/details';

// Private preview of a case study waiting for the client's approval
// (founders, 2026-11-25). The address is /preview/<previewToken> from
// case-studies/data.js: not linked from anywhere, not in the sitemap, and
// search engines are told not to list it. Anything else here is a 404, and so
// is the token once the study is published.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DRAFT_DETAILS).map((token) => ({ token }));
}

export async function generateMetadata({ params }) {
  const { token } = await params;
  const study = DRAFT_DETAILS[token];
  if (!study) return {};
  return {
    title: `${study.name} Case Study (preview) | Aripra Infotech`,
    description: study.description,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function PreviewPage({ params }) {
  const { token } = await params;
  const study = DRAFT_DETAILS[token];
  if (!study) notFound();
  return <CaseStudyDetail study={study} preview />;
}
