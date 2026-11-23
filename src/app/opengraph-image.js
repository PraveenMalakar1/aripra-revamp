import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SITE_URL } from './_shared/company';

// The picture shown when any page is shared on LinkedIn, WhatsApp, Slack, X
// (founders, 2026-11-23). Brand dark gradient (same as --grad-dark), the light
// logo, the tagline and the site address. Generated once at build time; no
// external fonts or network needed (ImageResponse's built-in font). The logo
// is a PNG copy of public/brand/aripra-logo-light.svg (_shared/og/), since
// the SVG's filters don't render in the image generator.
export const alt = 'Aripra: AI-Native Engineering. Built for Founders.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'src/app/_shared/og/aripra-logo-light.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const host = SITE_URL.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(120deg, #2D1470 0%, #11023B 70%)',
          color: '#fff',
        }}
      >
        <img src={logoSrc} width={259} height={84} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>AI-Native Engineering.</div>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, color: '#C9B6FF' }}>Built for Founders.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 30, color: 'rgba(255,255,255,0.75)' }}>
          <div style={{ width: 56, height: 6, borderRadius: 3, background: '#FF5500' }} />
          {host}
        </div>
      </div>
    ),
    size,
  );
}
