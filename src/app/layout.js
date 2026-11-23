import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import BackToTop from "./_shared/BackToTop";
import ConsentBanner from "./_shared/ConsentBanner";
import { CONSENT_DEFAULTS_SCRIPT } from "./_shared/consent";
import { GoogleTagManager } from "@next/third-parties/google";
import { SITE_URL, SITE_NAME, GTM_ID, GOOGLE_SITE_VERIFICATION } from "./_shared/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Site-wide defaults; each page sets its own title / description / share card
// (_shared/seo.js). metadataBase turns the pages' relative share URLs into
// full ones on the live domain (SITE_URL). The share image is
// app/opengraph-image.js.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: "AI-Native Engineering. Built for Founders.",
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
  verification: { google: GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      {/* Tag Manager only when its ID is set (the real domain; see company.js) */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className="min-h-full flex flex-col font-sans">
        {/* cookie consent defaults ("denied" until the visitor accepts):
            must run before Tag Manager loads (_shared/consent.js) */}
        <Script id="consent-defaults" strategy="beforeInteractive">{CONSENT_DEFAULTS_SCRIPT}</Script>
        {children}
        <BackToTop />
        <ConsentBanner />
      </body>
    </html>
  );
}
