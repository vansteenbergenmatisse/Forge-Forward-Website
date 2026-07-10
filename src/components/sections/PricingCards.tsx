"use client";
import { useState, useRef } from "react";
import Button from "@/components/ui/Button";
import { BOOK_CALL_URL } from "@/lib/constants";

const coreFeatures = [
  "Functional website (15 to 20 pages)",
  "Google My Business optimization",
  "On-site SEO",
  "AI search ranking (ChatGPT)",
  "Command Center (your CRM)",
  "Self-booking calendar (AI)",
  "Missed call text back (AI)",
  "Automated lead follow-up (AI)",
  "5-star review funnel (automation)",
  "One-click marketing campaigns",
];

const annualBonuses = [
  "12 weeks free (one year at a time)",
  "$197 setup fee waived",
  "All 5 bonuses free ($4,985 value)",
  "30-day money-back guarantee",
];

const multiLocationFeatures = [
  "One system across every location",
  "A location page and GMB profile per town",
  "One shared calendar and CRM",
  "Priced around your footprint",
];

const monthlyNote = "Billed every 4 weeks. Plus a $197 one-time setup fee. Cancel anytime.";
const annualNote = "$3,564, billed one year at a time. Includes 12 weeks free.";

const CheckSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const StarSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none" aria-hidden="true">
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function PricingCards() {
  const [annual, setAnnual] = useState(true);
  const priceRef = useRef<HTMLDivElement>(null);

  const select = (next: boolean) => {
    if (next === annual) return;
    if (priceRef.current) {
      priceRef.current.style.animation = "none";
      void priceRef.current.offsetHeight;
      priceRef.current.style.animation =
        "ff-price-in 0.35s cubic-bezier(0.22,1,0.36,1) both";
    }
    setAnnual(next);
  };

  return (
    <>
      {/* Toggle: knob left = Monthly, knob right = Yearly */}
      <div className="mt-7 flex items-center gap-[14px] flex-wrap">
        <div className="flex items-center gap-[14px]">
          <button
            type="button"
            onClick={() => select(false)}
            aria-pressed={!annual}
            className={`text-[15px] font-semibold transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer ${
              !annual ? "text-[#2563EB]" : "text-slate/60 hover:text-slate"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle yearly billing"
            onClick={() => select(!annual)}
            className="relative w-12 h-7 rounded-full flex-none cursor-pointer border-0 p-0 transition-colors duration-300"
            style={{ backgroundColor: annual ? "#0B1020" : "#DBEAFE" }}
          >
            <span
              className="absolute top-[3px] w-[22px] h-[22px] rounded-full shadow transition-[left,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                left: annual ? "23px" : "3px",
                backgroundColor: annual ? "#FFFFFF" : "#2563EB",
              }}
            />
          </button>

          <button
            type="button"
            onClick={() => select(true)}
            aria-pressed={annual}
            className={`text-[15px] font-semibold transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer ${
              annual ? "text-navy" : "text-slate/60 hover:text-slate"
            }`}
          >
            Yearly
          </button>
        </div>

        <span className="text-[12px] font-bold tracking-[0.02em] text-green bg-green/10 rounded-full px-[10px] py-1 whitespace-nowrap">
          12 weeks free on the yearly plan
        </span>
      </div>

      {/* Cards + bonus column — side by side on desktop */}
      <div className="mt-6 flex gap-5 items-start w-full max-md:flex-col">

        {/* LEFT: Landscaper Elite card, then bonus block directly below it */}
        <div className="flex flex-col gap-4" style={{ flex: "1.3 1 0", minWidth: 0 }}>

          <div className="relative bg-white border border-hairline rounded-[20px] shadow-[0_12px_30px_rgba(11,16,32,0.06)] p-[clamp(24px,3vw,32px)] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-[10px] flex-wrap">
              <span className="text-[20px] font-bold text-navy">Landscaper Elite</span>
              {annual && (
                <span className="rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.06em] uppercase bg-red text-white">
                  Best deal
                </span>
              )}
            </div>

            {/* Price */}
            <div ref={priceRef} className="mt-[18px] flex items-baseline gap-2 flex-wrap">
              <span className="font-display font-extrabold text-[clamp(34px,3.4vw,44px)] leading-none text-navy">
                {annual ? "$238" : "$297"}
              </span>
              <span className="text-[14px] font-semibold text-slate">/mo</span>
            </div>
            <div className="mt-2 text-[12.5px] text-slate">
              {annual ? annualNote : monthlyNote}
            </div>

            <div className="my-5 h-px bg-hairline" />

            {/* Core features */}
            <div className="flex flex-col gap-[11px]">
              {coreFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckSVG />
                  <span className="text-[14.5px] font-medium text-navy">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-[22px]">
              <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge className="w-full justify-center">
                Book a Call
              </Button>
            </div>
          </div>

          {/* Annual bonus block — directly under Landscaper Elite, animates in on toggle */}
          {annual && (
            <div
              className="border border-red/20 rounded-[20px] p-[clamp(20px,2.5vw,28px)]"
              style={{ background: "rgba(246,65,62,0.04)" }}
            >
              <div className="ff-add-in text-[12.5px] font-bold tracking-[0.06em] uppercase text-red mb-4">
                Extra when you go yearly
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-[14px] max-sm:grid-cols-1">
                {annualBonuses.map((b, i) => (
                  <div
                    key={b}
                    className="ff-add-in flex items-center gap-3"
                    style={{ animationDelay: `${60 + i * 55}ms` }}
                  >
                    <StarSVG />
                    <span className="text-[14.5px] font-semibold text-navy">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Multi-Location */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <div className="bg-navy rounded-[20px] p-[clamp(24px,3vw,32px)] flex flex-col">
            <div className="text-[20px] font-bold text-white">Multi-Location</div>
            <p className="mt-[10px] text-[14px] leading-[1.6] text-gray-cool">
              Running more than one crew or town? We build it as one connected
              system priced around your footprint.
            </p>
            <div className="flex flex-col gap-[11px] mt-[22px]">
              {multiLocationFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckSVG />
                  <span className="text-[14.5px] font-medium text-white">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-[22px]">
              <Button href={BOOK_CALL_URL} external variant="light" className="w-full justify-center">
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
