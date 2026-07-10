import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PartnerBand from "@/components/sections/PartnerBand";
import WebWeapon from "@/components/sections/WebWeapon";
import MissedCall from "@/components/sections/MissedCall";
import GetFound from "@/components/sections/GetFound";
import LocalCoverage from "@/components/sections/LocalCoverage";
import Campaigns from "@/components/sections/Campaigns";
import Roadmap from "@/components/sections/Roadmap";
import WhyItWorks from "@/components/sections/WhyItWorks";
import PricingFAQ from "@/components/sections/PricingFAQ";
import TrustBand from "@/components/sections/TrustBand";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "ForgeForward | Marketing Systems for Landscapers",
  description: "Website design and marketing systems built for landscaping contractors. Get found on Google, answer every lead in 5 seconds, and fill your calendar, automatically.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PartnerBand />
        <WebWeapon />
        <MissedCall />
        <GetFound />
        <LocalCoverage />
        <Campaigns />
        <Roadmap />
        <WhyItWorks />
        <PricingFAQ />
        <TrustBand />
        <CTA showPricingLink showPriceNote />
      </main>
      <Footer />
    </>
  );
}
