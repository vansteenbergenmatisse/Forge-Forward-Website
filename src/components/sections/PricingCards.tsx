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
];

const annualBonuses = [
  "3 months free (pay 12, get 15)",
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

const monthlyAmount = "$297";
const monthlyUnit = "/mo";
const monthlyNote = "Plus a $197 one-time setup fee. Cancel any month.";
const annualAmount = "$238";
const annualUnit = "/mo";
const annualNote = "Billed $3,564 for the year (15 months of service).";

export default function PricingCards() {
  const [annual, setAnnual] = useState(true);
  const priceRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setAnnual(a => {
      const next = !a;
      if (priceRef.current) {
        priceRef.current.style.animation = 'none';
        void priceRef.current.offsetHeight;
        priceRef.current.style.animation = 'ff-price-in 0.35s cubic-bezier(0.22,1,0.36,1) both';
      }
      return next;
    });
  };

  return (
    <>
      {/* Toggle */}
      <div className="mt-7 flex items-center gap-[14px]">
        <button
          onClick={handleToggle}
          role="switch"
          aria-checked={annual}
          className="flex items-center gap-[14px] cursor-pointer bg-transparent border-0 p-0"
        >
          <span className={`text-[15px] font-semibold transition-colors duration-250 ${annual ? 'text-slate/60' : 'text-navy'}`}>
            Monthly
          </span>
          <span className="relative w-12 h-7 rounded-full bg-navy flex-none block">
            <span
              className="absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: annual ? 'translateX(20px)' : 'translateX(3px)' }}
            ></span>
          </span>
          <span className={`text-[15px] font-semibold transition-colors duration-250 ${annual ? 'text-navy' : 'text-slate/60'}`}>
            Yearly
          </span>
        </button>
        <span className="text-[12px] font-bold tracking-[0.02em] text-green bg-green/10 rounded-full px-[10px] py-1 whitespace-nowrap">
          3 months free on the yearly plan
        </span>
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-5 w-full items-stretch max-md:grid-cols-1">
        {/* Landscaper Elite */}
        <div className="relative bg-white border border-hairline rounded-[20px] shadow-[0_12px_30px_rgba(11,16,32,0.06)] p-[clamp(24px,3vw,32px)] flex flex-col">
          <div className="grid grid-cols-2 gap-[clamp(20px,2.5vw,28px)] flex-1 max-sm:grid-cols-1">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-[10px] flex-wrap">
                <span className="text-[20px] font-bold text-navy">Landscaper Elite</span>
                {annual && (
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.06em] uppercase bg-red text-white transition-all duration-300">
                    Best deal
                  </span>
                )}
              </div>
              <div ref={priceRef} className="mt-[18px] flex items-baseline gap-2 flex-wrap">
                <span className="font-display font-extrabold text-[clamp(34px,3.4vw,44px)] leading-none text-navy">
                  {annual ? annualAmount : monthlyAmount}
                </span>
                <span className="text-[14px] font-semibold text-slate">
                  {annual ? annualUnit : monthlyUnit}
                </span>
              </div>
              <div className="mt-2 text-[12.5px] text-slate max-w-[240px]">
                {annual ? annualNote : monthlyNote}
              </div>
            </div>

            <div className="flex flex-col gap-[11px]">
              {annual && (
                <div className="flex flex-col gap-[11px] mb-[11px] pb-[11px] border-b border-dashed border-hairline">
                  <div className="text-[12.5px] font-bold tracking-[0.06em] uppercase text-red mb-[2px]">
                    Extra when you go yearly
                  </div>
                  {annualBonuses.map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none">
                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-[14.5px] font-semibold text-navy">{b}</span>
                    </div>
                  ))}
                </div>
              )}
              {coreFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[14.5px] font-medium text-navy">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[22px]">
            <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge className="w-full justify-center">
              Book a Call
            </Button>
          </div>
        </div>

        {/* Multi-Location */}
        <div className="bg-navy rounded-[20px] p-[clamp(24px,3vw,32px)] flex flex-col">
          <div className="text-[20px] font-bold text-white">Multi-Location</div>
          <p className="mt-[10px] text-[14px] leading-[1.6] text-gray-cool">
            Running more than one crew or town? We build it as one connected system priced around your footprint.
          </p>
          <div className="flex flex-col gap-[11px] mt-[22px] flex-1">
            {multiLocationFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
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
    </>
  );
}
