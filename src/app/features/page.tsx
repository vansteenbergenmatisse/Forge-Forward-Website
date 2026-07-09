import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Label from "@/components/ui/Label";
import Reveal from "@/components/ui/Reveal";
import WebWeapon from "@/components/sections/WebWeapon";
import MissedCall from "@/components/sections/MissedCall";
import GetFound from "@/components/sections/GetFound";
import LocalCoverage from "@/components/sections/LocalCoverage";
import Campaigns from "@/components/sections/Campaigns";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features",
  description: "See every part of the ForgeForward system — website, missed call text-back, local SEO, AI search ranking, location coverage, and one-click marketing campaigns.",
  alternates: { canonical: "https://forgeforward.com/features" },
  openGraph: {
    title: "Features — ForgeForward",
    description: "See every part of the ForgeForward system — website, missed call text-back, local SEO, AI search ranking, location coverage, and one-click marketing campaigns.",
    url: "https://forgeforward.com/features",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — ForgeForward",
    description: "See every part of the ForgeForward system — website, missed call text-back, local SEO, AI search ranking, location coverage, and one-click marketing campaigns.",
    images: ["/opengraph-image.png"],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section style={{ background: 'radial-gradient(circle at 15% 0%,rgba(122,92,255,0.35),transparent 40%),radial-gradient(circle at 85% 0%,rgba(255,78,78,0.32),transparent 38%),radial-gradient(circle at 55% 0%,rgba(255,179,87,0.25),transparent 35%),#0B1020' }}>
          <div
            className="bg-ivory"
            style={{ backgroundImage: 'linear-gradient(#EDE7DF 1px,transparent 1px),linear-gradient(90deg,#EDE7DF 1px,transparent 1px)', backgroundSize: '44px 44px' }}
          >
            <div className="max-w-[1000px] mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,6vw,76px)] pb-[clamp(40px,5vw,64px)] flex flex-col items-center text-center">
              <Reveal>
                <Label>The full system</Label>
                <h1 className="font-display font-black text-[clamp(34px,4.6vw,62px)] leading-[1.1] tracking-[-0.01em] text-navy mt-4 mb-0 max-w-[17ch]">
                  Everything inside the <span className="text-red">machine</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1} className="mt-5 text-[17px] leading-[1.6] text-slate max-w-[580px]">
                Nine tools. One system. Built exclusively for landscaping contractors who want to stop chasing leads and start booking jobs automatically.
              </Reveal>
            </div>
          </div>
        </section>
        <WebWeapon />
        <MissedCall />
        <GetFound />
        <LocalCoverage />
        <Campaigns />
        <CTA showPricingLink />
      </main>
      <Footer />
    </>
  );
}
