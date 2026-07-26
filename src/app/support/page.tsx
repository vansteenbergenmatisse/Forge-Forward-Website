"use client";

import { useState } from "react";
import OffboardingModal from "@/components/support/OffboardingModal";

/**
 * Destinations for each support option.
 * TODO: swap these placeholders for the real form / page URLs once provided.
 */
const REQUEST_CHANGE_URL = "#";
const QUESTION_URL = "#";

/* ── Primary action card (Request a Change / Ask a Question) ── */
type ActionCardProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

function ActionCard({ icon, eyebrow, title, description, href }: ActionCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-hairline bg-white p-[clamp(18px,2.4vw,24px)] transition-all hover:border-red hover:shadow-md hover:-translate-y-[2px]"
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-red text-white flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(246,65,62,0.5)]">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-red">{eyebrow}</span>
            <span className="flex-shrink-0 text-gray-cool group-hover:text-red group-hover:translate-x-0.5 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <h3 className="mt-1 text-[clamp(17px,2vw,19px)] font-black text-navy leading-tight">{title}</h3>
          <p className="mt-1.5 text-[13.5px] leading-[1.55] text-slate">{description}</p>
        </div>
      </div>
    </a>
  );
}

/* ── Checklist item ── */
function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex-shrink-0 text-red">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.2 12.4l2.6 2.6 4.9-5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[16px] font-semibold text-navy">{children}</span>
    </li>
  );
}

export default function SupportPage() {
  const [cancelOpen, setCancelOpen] = useState(false);

  return (
    <main>
      <section
        className="relative overflow-hidden min-h-screen flex items-center justify-center px-5 py-[clamp(48px,7vw,88px)]"
        style={{ background: "linear-gradient(135deg, #FCEBE9 0%, #FCF8F3 46%, #EDF0F6 100%)" }}
      >
        {/* soft ambient glows */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-red/10 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 w-[440px] h-[440px] rounded-full bg-navy/10 blur-[130px]" />

        <div className="relative w-full max-w-[1080px] grid lg:grid-cols-[0.92fr_1.08fr] gap-[clamp(40px,6vw,80px)] items-center">
          {/* ── Left: intro ── */}
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-red mb-4">Client support</p>
            <h1 className="text-[clamp(40px,6vw,66px)] font-black leading-[1.02] text-navy mb-5">
              How can we help?
            </h1>
            <p className="text-[17px] text-slate leading-[1.6] max-w-[440px] mb-8">
              Already a client? Pick what you need on the right and we&rsquo;ll take it from there.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <Check>Request changes to your website or automations</Check>
              <Check>Get answers to any question, fast</Check>
              <Check>Start your offboarding the right way</Check>
            </ul>

            <p className="text-[14px] text-slate leading-[1.6]">
              For anything else, email us at{" "}
              <a
                href="mailto:support@forgeforward.io"
                className="text-red underline underline-offset-2 hover:text-red-hover transition-colors"
              >
                support@forgeforward.io
              </a>
            </p>
          </div>

          {/* ── Right: options panel ── */}
          <div className="rounded-[28px] bg-white/75 border border-white/70 backdrop-blur-md shadow-[0_24px_60px_-20px_rgba(11,16,32,0.28)] p-[clamp(22px,3.2vw,36px)]">
            <h2 className="text-[clamp(22px,2.6vw,28px)] font-black text-navy mb-1.5">What do you need?</h2>
            <p className="text-[14px] text-slate leading-[1.55] mb-6">Choose an option to get started.</p>

            <div className="flex flex-col gap-3.5">
              <ActionCard
                href={REQUEST_CHANGE_URL}
                eyebrow="Changes & requests"
                title="Request a Change"
                description="Update your website, adjust an automation, or add something new. Send us the details and we'll build it for you."
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14.7 6.3l3 3M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19l-4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <ActionCard
                href={QUESTION_URL}
                eyebrow="Questions & help"
                title="Ask a Question"
                description="Questions about your account, billing, or how something works? Reach out and we'll point you the right way."
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9.1 9a3 3 0 015.8 1c0 2-3 2.5-3 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                }
              />

              {/* Cancel: plain text link right below Ask a Question */}
              <button
                type="button"
                onClick={() => setCancelOpen(true)}
                aria-haspopup="dialog"
                className="self-center mt-1 text-[13px] font-semibold text-slate underline underline-offset-2 hover:text-red transition-colors cursor-pointer"
              >
                Start offboarding
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offboarding retention funnel ── */}
      <OffboardingModal
        key={cancelOpen ? "open" : "closed"}
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
      />
    </main>
  );
}
