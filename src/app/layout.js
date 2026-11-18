import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "./_shared/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Aripra Infotech",
  description: "Aripra Infotech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
