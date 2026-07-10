import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://forgeforward.com"),
  title: {
    default: "ForgeForward | Marketing Systems for Landscapers",
    template: "%s | ForgeForward",
  },
  description:
    "Website design and marketing systems built for landscaping contractors. Get found on Google, answer every lead in 5 seconds, and fill your calendar automatically.",
  openGraph: {
    type: "website",
    siteName: "ForgeForward",
    title: "ForgeForward | Marketing Systems for Landscapers",
    description:
      "Website design and marketing systems built for landscaping contractors. Get found on Google, answer every lead in 5 seconds, and fill your calendar automatically.",
    url: "https://forgeforward.com",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeForward | Marketing Systems for Landscapers",
    description:
      "Website design and marketing systems built for landscaping contractors.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://forgeforward.com",
  },
  icons: {
    icon: [
      { url: "/logos/ff-mark-red.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ForgeForward",
    url: "https://forgeforward.com",
    logo: "https://forgeforward.com/logos/ff-horizontal-charcoal.svg",
    description:
      "Website design and marketing systems built for landscaping contractors.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-646-951-7542",
      email: "hello@forgeforward.com",
      contactType: "customer service",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ForgeForward",
    url: "https://forgeforward.com",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        />
      </head>
      <body className="bg-ivory text-navy antialiased">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
