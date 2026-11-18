// Screenshot report: every page on every device size, side by side.
//
//   npm run screens                     first screen of every page, local site
//   npm run screens -- --full           whole pages instead of the first screen
//   npm run screens -- --staging        the staging site instead of localhost
//   npm run screens -- --url=https://…  any other address
//   npm run screens -- --pages=/,/services --devices=ipad,surface
//                                       only some pages / devices (name match)
//
// The local site must be running (npm run dev). The report opens in your
// browser: screens/<date-time>/index.html (screens/ is not committed).
// First time on a new computer: npx playwright install chromium
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { exec } from 'node:child_process';
import path from 'node:path';

const STAGING = 'https://aripra-revamp.vercel.app';

// CSS-pixel sizes as the browser sees them (laptops: Windows display
// scaling shrinks the usable size, e.g. 1920×1080 at 125% = 1536×730).
const DEVICES = [
  { name: 'iPhone SE', w: 375, h: 667, mobile: true },
  { name: 'iPhone 15', w: 393, h: 852, mobile: true },
  { name: 'Pixel 8', w: 412, h: 915, mobile: true },
  { name: 'iPad mini (portrait)', w: 744, h: 1133, mobile: true },
  { name: 'iPad Air (portrait)', w: 820, h: 1180, mobile: true },
  { name: 'Surface Pro 10 (portrait)', w: 960, h: 1440, mobile: true },
  { name: 'iPad Pro 13 (portrait)', w: 1032, h: 1376, mobile: true },
  { name: 'Laptop 1280 (150% scaling)', w: 1280, h: 609 },
  { name: 'Laptop 1366', w: 1366, h: 657 },
  { name: 'iPad Pro 13 (landscape)', w: 1376, h: 1032, mobile: true },
  { name: 'MacBook Air 13', w: 1440, h: 789 },
  { name: 'Surface Pro 10 (landscape)', w: 1440, h: 960, mobile: true },
  { name: 'Laptop 1536 (125% scaling)', w: 1536, h: 730 },
  { name: 'Desktop 1920', w: 1920, h: 969 },
];
const PAGES = ['/', '/services', '/how-we-work', '/about', '/case-studies', '/case-studies/audiofy', '/careers', '/contact'];

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v ?? true];
}));
const base = (args.url || (args.staging ? STAGING : 'http://localhost:3000')).replace(/\/$/, '');
const full = Boolean(args.full);
const pages = args.pages ? String(args.pages).split(',') : PAGES;
const devices = args.devices
  ? DEVICES.filter((d) => String(args.devices).split(',').some((q) => d.name.toLowerCase().includes(q.toLowerCase())))
  : DEVICES;

const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
const outDir = path.resolve('screens', stamp);
await mkdir(outDir, { recursive: true });

const slug = (s) => s.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'home';
const browser = await chromium.launch();
const shots = [];
const problems = [];
console.log(`${base}: ${pages.length} pages × ${devices.length} devices${full ? ' (full pages)' : ''}`);

for (const d of devices) {
  const ctx = await browser.newContext({ viewport: { width: d.w, height: d.h }, isMobile: Boolean(d.mobile), hasTouch: Boolean(d.mobile) });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => problems.push(`${d.name} ${page.url()}: ${e.message}`));
  for (const p of pages) {
    const file = `${slug(p)}__${slug(d.name)}.png`;
    try {
      await page.goto(base + p, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(2500); // entrance animations
      if (full) { // scroll through once so scroll-in sections are revealed
        await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += innerHeight / 2) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } scrollTo(0, 0); });
        // scroll-linked fade-ins (.hm-reveal) hide again once the page is
        // back at the top, so show them as they look when scrolled to
        await page.addStyleTag({ content: '.hm-reveal { animation: none !important; }' });
        await page.waitForTimeout(500);
      }
      const sideScroll = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      if (sideScroll) problems.push(`${d.name} ${p}: page scrolls sideways`);
      await page.screenshot({ path: path.join(outDir, file), fullPage: full });
      shots.push({ page: p, device: d, file, sideScroll });
      process.stdout.write('.');
    } catch (e) {
      problems.push(`${d.name} ${p}: ${e.message.split('\n')[0]}`);
    }
  }
  await ctx.close();
}
await browser.close();

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Screens ${esc(stamp)}</title><style>
body{margin:0;padding:24px;font:14px/1.4 system-ui,sans-serif;background:#F4F4F7;color:#11023B}
h1{margin:0 0 4px;font-size:22px} .meta{margin:0 0 20px;color:#555}
.warn{padding:12px 16px;margin:0 0 20px;border-radius:10px;background:#FFF1E8;color:#9A3412}
h2{margin:32px 0 12px;font-size:18px}
.row{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;align-items:flex-start}
figure{flex:none;margin:0;background:#fff;border-radius:10px;padding:8px;box-shadow:0 2px 8px rgba(17,2,59,.08)}
figure img{display:block;height:${full ? 520 : 300}px;width:auto;max-width:none;border:1px solid #eee;object-fit:contain;object-position:top}
figcaption{margin-top:6px;font-size:12px;color:#444} .bad{color:#C2410C;font-weight:600}
</style></head><body>
<h1>Screens · ${esc(base)}</h1><p class="meta">${esc(stamp)} · ${full ? 'whole pages' : 'first screen'} · click a picture to open it full size</p>
${problems.length ? `<div class="warn"><b>${problems.length} problem(s):</b><br>${problems.map(esc).join('<br>')}</div>` : ''}
${pages.map((p) => `<h2>${esc(p)}</h2><div class="row">${shots.filter((s) => s.page === p).map((s) => `<figure><a href="${s.file}" target="_blank"><img src="${s.file}" alt="${esc(p)} on ${esc(s.device.name)}" loading="lazy"></a><figcaption>${esc(s.device.name)} · ${s.device.w}×${s.device.h}${s.sideScroll ? ' <span class="bad">· scrolls sideways</span>' : ''}</figcaption></figure>`).join('')}</div>`).join('')}
</body></html>`;
const index = path.join(outDir, 'index.html');
await writeFile(index, html);
console.log(`\n${shots.length} screenshots${problems.length ? `, ${problems.length} problem(s)` : ', no problems'}\n${index}`);
if (!args['no-open']) exec(process.platform === 'win32' ? `start "" "${index}"` : `open "${index}"`);
