import audiofy from './audiofy';
import routePortal from './route-portal';
import caseBriefCo from './casebriefco';
import carPlanetWebsite from './carplanet-website';
import carDaddy from './cardaddy';
import lumaBooth from './lumabooth';
import { CASE_STUDIES } from '../data';

// Case study detail content, keyed by slug. Add a file per case study here;
// its slug must match the listing entry in ../data.js (which gets an `href`).
const ALL = [audiofy, routePortal, caseBriefCo, carPlanetWebsite, carDaddy, lumaBooth];

// public pages (/case-studies/<slug>, sitemap): drafts left out
const isDraft = (slug) => CASE_STUDIES.find((c) => c.slug === slug)?.draft;
export const CASE_STUDY_DETAILS = Object.fromEntries(
  ALL.filter((s) => !isDraft(s.slug)).map((s) => [s.slug, s]),
);

// drafts awaiting client approval, keyed by their private preview token
export const DRAFT_DETAILS = Object.fromEntries(
  CASE_STUDIES.filter((c) => c.draft && c.previewToken)
    .map((c) => [c.previewToken, ALL.find((s) => s.slug === c.slug)])
    .filter(([, s]) => s),
);
