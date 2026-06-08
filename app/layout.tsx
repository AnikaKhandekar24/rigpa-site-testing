import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteContent } from "@/content/site";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
  variable: "--font-display",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-text",
});

const { identity } = siteContent;
const title = "Rigpa — Technology & Privacy Law";
const description =
  "India-qualified counsel for technology, artificial intelligence, and data matters that cross borders.";

export const metadata: Metadata = {
  metadataBase: new URL(identity.domain),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Rigpa",
    type: "website",
    images: [{ url: "/opengraph.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: identity.name,
    legalName: identity.companyName,
    url: identity.domain,
    email: identity.email,
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
