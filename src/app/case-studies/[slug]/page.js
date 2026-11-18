import { notFound } from 'next/navigation';
import CaseStudyDetail from '../CaseStudyDetail';
import { CASE_STUDY_DETAILS } from '../details';

// Only case studies with written content get a page; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDY_DETAILS[slug];
  if (!study) return {};
  return { title: `${study.name} Case Study | Aripra Infotech`, description: study.description };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDY_DETAILS[slug];
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
