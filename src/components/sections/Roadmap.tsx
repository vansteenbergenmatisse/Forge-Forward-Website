import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import { roadmapSteps } from "@/data/home";
import { BOOK_CALL_URL } from "@/lib/constants";

export default function Roadmap() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,96px)]">
        <Reveal>
          <Label>The roadmap</Label>
          <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-[14px] mb-0">
            What working with us looks like
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-slate max-w-[650px]">
            Three steps. Your total time investment: about 30 minutes and one form.
          </p>
        </Reveal>

        <div className="mt-11 border-t border-hairline">
          {roadmapSteps.map((step, i) => (
            <Reveal
              key={step.number}
              className="grid grid-cols-[72px_1fr] sm:grid-cols-[clamp(72px,9vw,130px)_minmax(0,1fr)_auto] gap-5 sm:gap-[clamp(20px,3vw,48px)] items-start py-[34px] border-b border-hairline"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="font-display font-black text-[clamp(48px,5.5vw,76px)] leading-[0.85] text-hairline">
                  {step.number}
                </div>
                {i < roadmapSteps.length - 1 && (
                  <div className="w-11 h-11 rounded-full bg-red flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-[14px] flex-wrap">
                  <h3 className="font-display font-bold text-[clamp(20px,2vw,26px)] leading-[1.15] text-navy m-0">
                    {step.title}
                  </h3>
                  <span className="border border-red rounded-full px-[14px] py-[5px] text-[12px] font-semibold tracking-[0.04em] text-red">
                    {step.duration}
                  </span>
                </div>
                <p className="m-0 text-[15px] leading-[1.6] text-slate max-w-[560px]">
                  {step.description}
                </p>
                {/* Stat inline on mobile */}
                <div className="sm:hidden flex items-baseline gap-2 mt-1">
                  <div className="font-display font-black text-[22px] leading-none text-red">{step.stat}</div>
                  <div className="text-[11px] font-medium tracking-[0.06em] uppercase text-slate">{step.statLabel}</div>
                </div>
              </div>

              {/* Stat column: hidden on mobile, visible on sm+ */}
              <div className="hidden sm:flex flex-col gap-1 text-right">
                <div className="font-display font-black text-[26px] leading-none text-red">
                  {step.stat}
                </div>
                <div className="text-[12px] font-medium tracking-[0.06em] uppercase text-slate">
                  {step.statLabel}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge>Book a Call</Button>
        </Reveal>
      </div>
    </section>
  );
}
