import audiofy from './audiofy';
import routePortal from './route-portal';
import caseBriefCo from './casebriefco';
import carPlanetWebsite from './carplanet-website';
import carDaddy from './cardaddy';

// Case study detail content, keyed by slug. Add a file per case study here;
// its slug must match the listing entry in ../data.js (which gets an `href`).
export const CASE_STUDY_DETAILS = Object.fromEntries(
  [audiofy, routePortal, caseBriefCo, carPlanetWebsite, carDaddy].map((s) => [s.slug, s]),
);
