import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import PricingCards from "@/components/sections/PricingCards";
import PricingInside from "@/components/sections/PricingInside";
import PricingGuarantee from "@/components/sections/PricingGuarantee";
import PricingFAQ from "@/components/sections/PricingFAQ";
import CTA from "@/components/sections/CTA";
import { faqItems } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One system built for landscaping contractors. Pay monthly or pay for the year and unlock $4,985 in bonuses. 30-day money-back guarantee.",
  alternates: { canonical: "https://forgeforward.com/pricing" },
  openGraph: {
    title: "Pricing | ForgeForward",
    description: "One system built for landscaping contractors. Pay monthly or pay for the year and unlock $4,985 in bonuses. 30-day money-back guarantee.",
    url: "https://forgeforward.com/pricing",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | ForgeForward",
    description: "One system built for landscaping contractors. Pay monthly or pay for the year and unlock $4,985 in bonuses. 30-day money-back guarantee.",
    images: ["/opengraph-image.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <section style={{ background: 'radial-gradient(circle at 15% 0%,rgba(122,92,255,0.3),transparent 40%),radial-gradient(circle at 85% 0%,rgba(255,78,78,0.28),transparent 38%),radial-gradient(circle at 55% 0%,rgba(255,179,87,0.2),transparent 35%),#0B1020' }}>
          <div
            className="bg-ivory"
            style={{ backgroundImage: 'linear-gradient(#EDE7DF 1px,transparent 1px),linear-gradient(90deg,#EDE7DF 1px,transparent 1px)', backgroundSize: '44px 44px' }}
          >
            <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(40px,5vw,64px)] pb-[clamp(24px,3vw,36px)] flex flex-col items-center">
              <Reveal>
                <h1 className="font-display font-black text-[clamp(34px,4.2vw,52px)] leading-[1.15] tracking-[-0.01em] text-navy m-0 mb-4 text-center">
                  Our <span className="text-red">pricing</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="m-0 mb-2 text-[16px] leading-[1.55] text-slate max-w-[560px] text-center">
                  One system built for landscaping contractors. Pay monthly or pay for the year and unlock $4,985 in bonuses.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-hairline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-[13.5px] font-semibold text-navy">30-day money-back guarantee on the annual plan</span>
              </Reveal>
              <PricingCards />
            </div>
          </div>
        </section>
        <PricingInside />
        <PricingGuarantee />
        <PricingFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
