import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import { trustStats } from "@/data/home";

export default function WhyItWorks() {
  return (
    <section className="bg-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(64px,8vw,112px)]">
        <Reveal className="text-center max-w-[640px] mx-auto">
          <Label>Why it works</Label>
          <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-white mt-[14px] mb-0">
            Built fast, backed by a <span className="text-red">guarantee</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mt-12">
          {trustStats.map(({ value, description }) => (
            <div key={value} className="bg-dark-card border border-dark-border rounded-[18px] p-[clamp(28px,3vw,36px)] flex flex-col gap-2">
              <div className="font-display font-black text-[clamp(36px,4vw,48px)] leading-none text-white">
                {value}
              </div>
              <div className="text-[15px] leading-[1.5] text-gray-cool">{description}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-9 text-center">
          <Link href="/features" className="font-semibold text-[15px] text-white no-underline hover:text-gray-cool transition-colors">
            See how the system works &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
