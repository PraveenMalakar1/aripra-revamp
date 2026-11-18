// LinkedIn icon link for the founder and team cards. No profile yet: the icon
// still shows (keeps every card the same), greyed out and not a link
// (client, 2026-10-12). Styles: .tm-li in about.css.

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
  </svg>
);

export default function LinkedInLink({ name, href, className = '' }) {
  const cls = `tm-li ${className}`.trim();
  if (!href) {
    return <span className={`${cls} is-disabled`} aria-hidden="true"><LinkedInIcon /></span>;
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
      <LinkedInIcon />
    </a>
  );
}
