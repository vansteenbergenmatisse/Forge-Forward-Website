"use client";
import { useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";

export default function TrustBand() {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    const target = 92;
    const duration = 1200;
    let ran = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran) {
        ran = true;
        const start = Date.now();
        const tick = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ivory">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(64px,8vw,112px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(32px,4vw,56px)] items-center">
        <Reveal>
          <Label>Results that matter</Label>
          <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-[14px] mb-0">
            Trusted by crews like yours
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-slate max-w-[560px]">
            Contractors who run this system stop chasing leads and start turning them away.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="bg-white border border-hairline rounded-[18px] shadow-[0_12px_30px_rgba(11,16,32,0.06)] p-[clamp(28px,3vw,40px)] flex flex-col gap-2 ff-hover-lift">
          <div className="font-display font-black text-[clamp(40px,4vw,54px)] leading-none text-red">
            <span ref={countRef}>0</span>%
          </div>
          <div className="text-[15px] leading-[1.5] text-slate">of clients reach the top 3 map results within 90 days</div>
        </Reveal>

        <Reveal delay={0.2} className="bg-white border border-hairline rounded-[18px] shadow-[0_12px_30px_rgba(11,16,32,0.06)] p-[clamp(28px,3vw,40px)] flex flex-col gap-2 ff-hover-lift">
          <div className="flex items-baseline gap-[14px]">
            <div className="font-display font-black text-[clamp(40px,4vw,54px)] leading-none text-navy">4.9</div>
            <div className="text-red text-[20px] tracking-[2px]">★★★★★</div>
          </div>
          <div className="text-[15px] leading-[1.5] text-slate">average client rating on Google</div>
        </Reveal>
      </div>
    </section>
  );
}
