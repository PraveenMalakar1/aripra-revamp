// Case studies listing (layout: Figma "Case Studies Page", node 686:145;
// copy: AW-5 Case Studies Index). Card = client + project, transformation
// headline, industry | service tags, one-line context, key stat, link.
// Images: project logos supplied by the client (2026-10-09), 1680×960 each;
// the card's image area keeps that 7:4 shape so logos are never cropped. `href` = the detail page (details/<slug>.js); a card without
// one shows "Case study coming soon".
// `highlights`: the key numbers (homepage copy v4, 2026-11-04), value +
// label; a highlight without a value is a plain line. Shown on the homepage
// carousel and the Our Work cards alike (KeyStat.jsx).
// `draft: true` (founders, 2026-11-25): a case study waiting for the client's
// approval. It stays off the homepage, the Our Work page and the sitemap, and
// its own address is a 404; it is only shown at the private link
// /preview/<previewToken> (app/preview), to send to the client. To publish:
// delete `draft` and `previewToken` (the private link then stops working).
export const CASE_STUDIES = [
  {
    slug: 'audiofy',
    client: 'CarPlanet',
    project: 'Audiofy',
    title: 'From blind management to knowing exactly what’s happening on every call.',
    industry: 'Automotive retail',
    services: 'AI engineering',
    context: 'Management had no visibility into 40,000 calls a month. Now every one is scored, classified, and checked automatically.',
    highlights: [{ value: '4 in 10', label: 'customers who were leaving, stayed' }],
    href: '/case-studies/audiofy',
    image: '/case-studies/audiofy.png',
  },
  {
    slug: 'route-portal',
    client: 'CarPlanet',
    project: 'Route Portal',
    title: 'From manual payments and no visibility to a transport operation that runs itself.', // homepage copy, 2026-11-24
    industry: 'Automotive / Fleet operations',
    services: 'Operations software · AI engineering',
    context: 'Payments were calculated by hand. Billing patterns were invisible. Driver costs were out of control.', // founders, 2026-11-26
    highlights: [{ value: '£60,000', label: 'saved per month' }, { value: '3', label: 'irregular billing patterns caught and closed automatically' }],
    href: '/case-studies/route-portal',
    image: '/case-studies/route-portal.png',
  },
  {
    slug: 'carplanet-website',
    client: 'CarPlanet',
    project: 'Website',
    title: 'From invisible to Google to 434,000 users in six months.',
    industry: 'Automotive retail',
    services: 'Web development · SEO',
    context: 'The old site was a JavaScript bundle. Google found nothing. Every customer had to be paid for or referred.',
    highlights: [{ value: '14x', label: 'user growth' }, { label: 'Best Used Car Website, UK 2025.' }],
    href: '/case-studies/carplanet-website',
    image: '/case-studies/carplanet-website.png',
  },
  {
    slug: 'cardaddys',
    client: 'CarPlanet',
    project: 'Cardaddys' /* client's spelling, 2026-11-26 */,
    title: 'From spreadsheets and WhatsApp to an end-to-end car acquisition pipeline.',
    industry: 'Automotive / Car buying',
    services: 'Operations software · Automation',
    context: 'Every stage of the buying operation leaked time. Eligibility was checked manually. Valuations were sent by hand.',
    highlights: [{ value: '74%', label: 'of leads screened out automatically, no agent involved' }],
    href: '/case-studies/cardaddys',
    image: '/case-studies/cardaddy.png',
  },
  {
    slug: 'casebriefco',
    client: null,
    project: 'CaseBriefCo',
    title: 'From a physical archive to a subscription platform used by Bar exam students across the US.',
    industry: 'Legal / EdTech',
    services: 'Web development · AI engineering',
    context: 'A lawyer’s library of case studies, outlines, and exam materials could only reach students in a room.',
    highlights: [{ value: '$14/month or $90/year', label: 'a lawyer’s archive, now a subscription business' }],
    href: '/case-studies/casebriefco',
    image: '/case-studies/casebriefco.png',
  },
  {
    slug: 'lumabooth',
    client: 'LumaSoft',
    project: 'LumaBooth',
    // DRAFT card copy (not in the AW-CS-06 doc): headline, subheadline and
    // stats taken from the case study itself, until the founders send card copy
    title: 'Every event. Branded. Every device. One app.',
    industry: 'Events / Photo booth software',
    services: 'App development',
    context: 'LumaBooth grew from a lighter iPad app into one full-featured, best-selling photo booth on iPad, iPhone and Mac, at a fraction of the price of competitor booth apps.',
    highlights: [{ value: '4.6★', label: 'App Store rating' }, { value: '1,600+', label: 'App Store reviews' }],
    href: '/case-studies/lumabooth',
    image: '/case-studies/lumabooth.png', // logo supplied 2026-11-27
    draft: true,
    previewToken: '96ceb27e0e',
  },
];

// what the homepage and the Our Work page show
export const PUBLISHED_CASE_STUDIES = CASE_STUDIES.filter((s) => !s.draft);
