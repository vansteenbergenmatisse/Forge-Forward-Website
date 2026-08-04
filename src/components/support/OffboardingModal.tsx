"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { OFFBOARDING_REASONS } from "./offboardingReasons";

/**
 * Retention offboarding funnel.
 *
 * Flow: offer1 (free month) -> consequences -> reason survey -> offer2 (3 months free)
 * -> final (mandatory offboarding call). Accepting either offer short-circuits to a
 * confirmation card. Every terminal action fires a non-blocking webhook POST.
 *
 * This is a static site with no billing backend, so offers are applied manually by
 * the team once the webhook notifies them.
 */

/** Swap in a Zapier/Make/webhook URL to start capturing the survey. Empty = no-op. */
const OFFBOARD_WEBHOOK_URL = "";

const ICLOSED_URL = "https://app.iclosed.io/e/Matisse/offboarding-call";
/** Offer 2: months given completely free (100% off for this many months). */
const FREE_MONTHS = 3;
const MIN_DESCRIPTION = 50;
const MAX_DESCRIPTION = 500;

type Step = "offer1" | "consequences" | "reason" | "offer2" | "final";
type Outcome = "free_month" | "free_3mo" | null;

type WebhookPayload = {
  event: "offer_accepted" | "cancel_requested";
  offer?: "free_month" | "free_3_months";
  mainReason: string | null;
  subReason: string | null;
  description: string;
  timestamp: string;
};

async function postWebhook(payload: WebhookPayload) {
  if (!OFFBOARD_WEBHOOK_URL) return;
  try {
    await fetch(OFFBOARD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Never block or break the UI on a failed notification.
  }
}

/* ─────────────────────────── Shared UI bits ─────────────────────────── */

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close"
      className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-white text-slate transition-colors hover:bg-ivory-hover hover:text-navy"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full bg-navy px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-navy ${className}`}
    >
      {children}
    </button>
  );
}

function QuietButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border border-hairline bg-white px-6 py-3 text-[15px] font-bold text-navy transition-colors hover:bg-ivory-hover ${className}`}
    >
      {children}
    </button>
  );
}

function CheckDot() {
  return (
    <span className="mt-[2px] flex-shrink-0 text-red">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2.1" />
        <path d="M8.2 12.4l2.6 2.6 4.9-5.4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ─────────────────────────── Branded graphics ─────────────────────────── */

function GiftGraphic() {
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden="true">
      {/* sparkle */}
      <g stroke="#F6413E" strokeWidth="2.4" strokeLinecap="round" opacity="0.55">
        <path d="M110 26l0 12M104 32l12 0" />
        <path d="M20 40l0 8M16 44l8 0" />
      </g>
      {/* box */}
      <rect x="30" y="58" width="72" height="52" rx="8" fill="#0B1020" />
      <rect x="30" y="58" width="72" height="16" rx="6" fill="#151C33" />
      <rect x="60" y="58" width="12" height="52" fill="#F6413E" />
      {/* bow */}
      <path d="M66 58c-8-4-22-10-22-20 0-6 8-8 12-3 4 5 10 16 10 23z" fill="#F6413E" />
      <path d="M66 58c8-4 22-10 22-20 0-6-8-8-12-3-4 5-10 16-10 23z" fill="#F6413E" />
      <circle cx="66" cy="55" r="6" fill="#FCF8F3" />
      {/* +1 month tag */}
      <g transform="rotate(-8 44 96)">
        <rect x="24" y="86" width="40" height="24" rx="5" fill="#FCF8F3" stroke="#E5E0D8" />
        <text x="44" y="102" textAnchor="middle" fontSize="11" fontWeight="800" fill="#F6413E" fontFamily="Inter, sans-serif">
          +1 MTH
        </text>
      </g>
    </svg>
  );
}

function FreeBurst() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" aria-hidden="true" className="max-w-[220px]">
      <rect width="220" height="220" rx="20" fill="#0B1020" />
      {/* gift */}
      <rect x="66" y="96" width="88" height="64" rx="9" fill="#FCF8F3" />
      <rect x="66" y="96" width="88" height="18" rx="7" fill="#E9E3D9" />
      <rect x="104" y="96" width="12" height="64" fill="#F6413E" />
      <path d="M110 96c-9-5-24-11-24-22 0-6 9-8 13-3 5 6 11 18 11 25z" fill="#F6413E" />
      <path d="M110 96c9-5 24-11 24-22 0-6-9-8-13-3-5 6-11 18-11 25z" fill="#F6413E" />
      {/* free-months badge */}
      <circle cx="158" cy="70" r="33" fill="#F6413E" />
      <text x="158" y="66" textAnchor="middle" fontSize="17" fontWeight="900" fill="#fff" fontFamily="Inter, sans-serif">
        3 MOS
      </text>
      <text x="158" y="83" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">
        FREE
      </text>
    </svg>
  );
}

function LeaveGraphic() {
  // Sturdy booking calendar with a bold check: grounded, not soft.
  return (
    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" aria-hidden="true">
      <rect x="16" y="24" width="72" height="66" rx="8" fill="#0B1020" />
      <rect x="16" y="24" width="72" height="20" fill="#0B1020" />
      <rect x="16" y="42" width="72" height="3" fill="#F6413E" />
      <rect x="30" y="16" width="7" height="18" rx="3.5" fill="#0B1020" />
      <rect x="67" y="16" width="7" height="18" rx="3.5" fill="#0B1020" />
      <path d="M38 66l9 9 19-19" stroke="#F6413E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Consequence line-icon (single generic "minus/blocked" mark). */
function LossIcon() {
  return (
    <span className="mt-[1px] flex-shrink-0 text-red">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2.1" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ─────────────────────────── iClosed final step ─────────────────────────── */

function OffboardingCall() {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-inject the loader each mount so it re-scans and renders the widget.
    const existing = document.getElementById("iclosed-widget-js");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "iclosed-widget-js";
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={holderRef}
      className="iclosed-widget w-full overflow-hidden rounded-2xl border border-hairline"
      data-url={ICLOSED_URL}
      title="Offboarding Call"
      style={{ width: "100%", height: "560px" }}
    />
  );
}

/* ─────────────────────────── Main modal ─────────────────────────── */

export default function OffboardingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("offer1");
  const [outcome, setOutcome] = useState<Outcome>(null);
  const [mainReason, setMainReason] = useState<string | null>(null);
  const [subReason, setSubReason] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [showReasonError, setShowReasonError] = useState(false);

  // Portal mount guard: document.body is unavailable during SSR, so we render
  // null until the first client render flips this on.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // The parent remounts this modal on open (via key), so state starts clean each
  // time. This effect only wires up the external side effects: scroll lock + Escape.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const buildPayload = useCallback(
    (event: WebhookPayload["event"], offer?: WebhookPayload["offer"]): WebhookPayload => ({
      event,
      offer,
      mainReason,
      subReason,
      description: description.trim(),
      timestamp: new Date().toISOString(),
    }),
    [mainReason, subReason, description],
  );

  const acceptFreeMonth = () => {
    postWebhook(buildPayload("offer_accepted", "free_month"));
    setOutcome("free_month");
  };

  const acceptDiscount = () => {
    postWebhook(buildPayload("offer_accepted", "free_3_months"));
    setOutcome("free_3mo");
  };

  const goFinal = () => {
    postWebhook(buildPayload("cancel_requested"));
    setStep("final");
  };

  const canContinueReason = Boolean(mainReason && subReason && description.trim().length >= MIN_DESCRIPTION);

  if (!mounted || !open) return null;

  /* Confirmation card takes over once an offer is accepted. */
  const body = outcome ? (
    <ConfirmationCard outcome={outcome} onClose={onClose} />
  ) : (
    <>
      {step === "offer1" && (
        <OfferOne onAccept={acceptFreeMonth} onCancel={() => setStep("consequences")} />
      )}
      {step === "consequences" && (
        <Consequences onContinue={() => setStep("reason")} onStop={onClose} />
      )}
      {step === "reason" && (
        <ReasonSurvey
          mainReason={mainReason}
          subReason={subReason}
          description={description}
          canContinue={canContinueReason}
          showError={showReasonError}
          onSelectMain={(id) => {
            setMainReason(id);
            setSubReason(null);
            setShowReasonError(false);
          }}
          onSelectSub={(sub) => {
            setSubReason(sub);
            setShowReasonError(false);
          }}
          onDescription={setDescription}
          onBack={() => setStep("consequences")}
          onContinue={() => {
            if (canContinueReason) setStep("offer2");
            else setShowReasonError(true);
          }}
        />
      )}
      {step === "offer2" && <OfferTwo onAccept={acceptDiscount} onCancel={goFinal} />}
      {step === "final" && <FinalStep />}
    </>
  );

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-navy-deep/80 p-4 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[820px] rounded-[28px] border border-hairline bg-white p-[clamp(22px,4vw,48px)] shadow-[0_30px_80px_-24px_rgba(11,16,32,0.4)]"
      >
        <CloseButton onClose={onClose} />
        {body}
      </div>
    </div>,
    document.body,
  );
}

/* ─────────────────────────── Step 1: free month ─────────────────────────── */

function OfferOne({ onAccept, onCancel }: { onAccept: () => void; onCancel: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 flex justify-center">
        <GiftGraphic />
      </div>
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red">A gift before you go</p>
      <h2 className="mt-2 text-[clamp(24px,3.4vw,30px)] font-black leading-tight text-navy">
        Stay one more month, <span className="text-red">on us</span>
      </h2>
      <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-[1.6] text-slate">
        We&rsquo;d hate to see you go. Stay a full month completely free and keep everything we&rsquo;ve
        built for you running exactly as it is.
      </p>
      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
        <QuietButton onClick={onCancel}>Cancel my subscription</QuietButton>
        <PrimaryButton onClick={onAccept}>Claim my free month</PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 2: consequences ─────────────────────────── */

const CONSEQUENCES = [
  "Your website and booking pages will be removed.",
  "Your lead campaigns will be stopped and stop delivering new booked appointments",
  "Your automations, follow-ups and CRM workflows will be switched off",
  "You will lose support and your dedicated account manager",
  "Custom integrations and reporting dashboards are deactivated",
  "You will lose access of your lead data and assets during offboarding",
];

function Consequences({ onContinue, onStop }: { onContinue: () => void; onStop: () => void }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red/10 text-red">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 8v4m0 4h.01M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red">Before you cancel</p>
          <h2 className="mt-0.5 pr-6 text-[clamp(22px,3.2vw,28px)] font-black leading-tight text-navy">
            If you cancel&hellip;
          </h2>
        </div>
      </div>
      <p className="text-[15px] leading-[1.6] text-slate">
        Your subscription stays active until the end of your current billing period. When it ends,
        here is what changes:
      </p>
      <ul className="mt-6 flex flex-col gap-3.5">
        {CONSEQUENCES.map((c) => (
          <li key={c} className="flex items-start gap-3 rounded-xl border border-hairline bg-[#FCF8F3] px-4 py-3">
            <LossIcon />
            <span className="text-[14.5px] font-medium leading-[1.5] text-navy">{c}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onContinue}
          className="px-2 py-2 text-[14px] font-semibold text-gray-cool underline underline-offset-2 transition-colors hover:text-slate"
        >
          Continue to cancel
        </button>
        <PrimaryButton onClick={onStop} className="w-full sm:w-auto">
          Grab The One-Time Offer
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 3: reason survey ─────────────────────────── */

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Main-reason dropdown. Shows every reason at once (no inner scrollbar). Selecting a
 * reason closes the panel; the sub-reasons then render inline beneath it (see
 * ReasonSurvey).
 */
function ReasonSelect({
  mainReason,
  onSelect,
}: {
  mainReason: string | null;
  onSelect: (mainId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const selected = OFFBOARDING_REASONS.find((r) => r.id === mainReason);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3.5 text-left transition-colors ${
          open ? "border-navy" : "border-hairline hover:border-navy/50"
        }`}
      >
        <span className={`min-w-0 truncate text-[15px] ${selected ? "font-semibold text-navy" : "text-slate"}`}>
          {selected ? selected.label : "Select a reason"}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`flex-shrink-0 text-navy transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-full overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_24px_60px_-20px_rgba(11,16,32,0.4)]">
          <ul className="divide-y divide-hairline">
            {OFFBOARDING_REASONS.map((r) => {
              const isSel = mainReason === r.id;
              return (
                <li key={r.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(r.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[14.5px] leading-snug transition-colors hover:bg-[#FCF8F3] ${
                      isSel ? "bg-red/[0.07] font-semibold text-navy" : "font-medium text-navy"
                    }`}
                  >
                    <span>{r.label}</span>
                    {isSel ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 text-red">
                        <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span className="text-slate">
                        <ChevronRight />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function ReasonSurvey({
  mainReason,
  subReason,
  description,
  canContinue,
  showError,
  onSelectMain,
  onSelectSub,
  onDescription,
  onBack,
  onContinue,
}: {
  mainReason: string | null;
  subReason: string | null;
  description: string;
  canContinue: boolean;
  showError: boolean;
  onSelectMain: (mainId: string) => void;
  onSelectSub: (sub: string) => void;
  onDescription: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const remaining = Math.max(0, MIN_DESCRIPTION - description.trim().length);
  const selectedCat = OFFBOARDING_REASONS.find((r) => r.id === mainReason);

  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h1a8 8 0 018 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red">One quick question</p>
          <h2 className="mt-0.5 pr-6 text-[clamp(22px,3.2vw,28px)] font-black leading-tight text-navy">
            Goodbyes are tough
          </h2>
        </div>
      </div>
      <p className="text-[15px] leading-[1.6] text-slate">
        We are sorry to see you go. Before you cancel, help us understand what led to this.
      </p>

      {/* Main reason (dropdown) */}
      <p className="mt-6 text-[14px] font-bold text-navy">
        What is your main reason for cancelling? <span className="text-red">*</span>
      </p>
      <div className="mt-2">
        <ReasonSelect mainReason={mainReason} onSelect={onSelectMain} />
      </div>

      {/* Sub reason (inline beneath the main reason) */}
      {selectedCat && (
        <fieldset className="mt-4">
          <legend className="mb-2 text-[13.5px] font-bold text-navy">
            Which best describes it? <span className="text-red">*</span>
          </legend>
          <div className="flex flex-col gap-2">
            {selectedCat.subReasons.map((sub) => {
              const sel = subReason === sub;
              return (
                <label
                  key={sub}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[14px] leading-snug transition-colors ${
                    sel ? "border-red bg-red/[0.06] font-semibold text-navy" : "border-hairline bg-white font-medium text-navy hover:border-navy/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="ob-sub-reason"
                    value={sub}
                    checked={sel}
                    onChange={() => onSelectSub(sub)}
                    className="h-4 w-4 flex-shrink-0 accent-red"
                  />
                  <span>{sub}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* Description */}
      <label htmlFor="ob-description" className="mt-5 block text-[14px] font-bold text-navy">
        Tell us more about what led to this decision <span className="text-red">*</span>
      </label>
      <textarea
        id="ob-description"
        value={description}
        onChange={(e) => onDescription(e.target.value.slice(0, MAX_DESCRIPTION))}
        rows={4}
        placeholder="I think..."
        className="mt-2 w-full resize-none rounded-xl border border-hairline bg-white px-4 py-3 text-[15px] leading-[1.55] text-navy outline-none transition-colors placeholder:text-gray-cool focus:border-navy"
      />
      <div className="mt-1.5 flex items-center justify-between text-[12.5px]">
        <span className={remaining > 0 ? "text-slate" : "font-semibold text-red"}>
          {remaining > 0 ? `Write atleast ${remaining} more character${remaining === 1 ? ", to submit your decision" : "s, to submit your decision"}` : "Thanks, that helps"}
        </span>
        <span className="text-gray-cool">
          {description.trim().length}/{MAX_DESCRIPTION}
        </span>
      </div>

      {showError && !canContinue && (
        <p className="mt-3 text-[13px] font-semibold text-red">
          Please pick a reason and add at least {MIN_DESCRIPTION} characters.
        </p>
      )}

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <QuietButton onClick={onBack}>Back</QuietButton>
        <PrimaryButton onClick={onContinue} disabled={!canContinue}>
          Continue to cancel
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 4: 3 months free ─────────────────────────── */

const FREE_BENEFITS = [
  `Your next ${FREE_MONTHS} payments are completely free`,
  "Every campaign, automation, website and booked-call system keeps running",
  "You can still cancel anytime, no strings attached",
  `After your ${FREE_MONTHS} free months, billing returns to your normal rate unless you cancel`,
];

function OfferTwo({
  onAccept,
  onCancel,
}: {
  onAccept: () => void;
  onCancel: () => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red">Special offer</p>
      <h2 className="mt-2 pr-10 text-[clamp(22px,3.2vw,28px)] font-black leading-tight text-navy">
        Before you go
      </h2>
      <p className="mt-2 text-[15px] leading-[1.6] text-slate">
        We understand you might be reconsidering. Before you go, here is an exclusive offer to keep
        your growth running, completely on us.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-[190px_1fr] sm:items-center">
        <div className="flex justify-center">
          <FreeBurst />
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-[44px] font-black leading-none text-navy">{FREE_MONTHS} months</span>
            <span className="text-[20px] font-black text-red">FREE</span>
          </div>
          <p className="mt-1.5 text-[15px] font-bold text-navy">
            completely on us, nothing to pay
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FREE_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckDot />
                <span className="text-[13.5px] leading-[1.5] text-navy">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-2 py-2 text-[14px] font-semibold text-slate underline underline-offset-2 transition-colors hover:text-navy"
        >
          Cancel subscription
        </button>
        <PrimaryButton onClick={onAccept} className="w-full sm:w-auto">
          Keep my {FREE_MONTHS} free months
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 5: offboarding call ─────────────────────────── */

function FinalStep() {
  return (
    <div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <LeaveGraphic />
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red">Required to cancel</p>
          <h2 className="mt-1 pr-10 text-[clamp(21px,3vw,26px)] font-black leading-tight text-navy">
            Book your offboarding call
          </h2>
          <p className="mt-2 text-[14.5px] leading-[1.6] text-slate">
            Your cancellation request is in and our team has been notified. Your subscription is only
            cancelled once you{" "}
            <span className="font-bold text-navy">book and attend a short 5min offboarding call</span>. Until you
            show up on that call, your account and payment stays active. On the call we&rsquo;ll hand back your lead data with no loose ends.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <OffboardingCall />
      </div>
    </div>
  );
}

/* ─────────────────────────── Offer-accepted confirmation ─────────────────────────── */

function ConfirmationCard({ outcome, onClose }: { outcome: Exclude<Outcome, null>; onClose: () => void }) {
  const isFreeMonth = outcome === "free_month";
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red/10">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.25" stroke="#F6413E" strokeWidth="1.6" />
          <path d="M8 12.4l2.6 2.6 4.9-5.4" stroke="#F6413E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="text-[clamp(22px,3.2vw,28px)] font-black leading-tight text-navy">You&rsquo;re all set</h2>
      <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[1.6] text-slate">
        {isFreeMonth
          ? "We'll apply your free month and confirm by email shortly. Nothing changes in the meantime. Your campaigns and automations keep running."
          : `We'll apply your ${FREE_MONTHS} free months and confirm by email shortly. Your growth systems keep running as normal.`}
      </p>
      <div className="mt-8 flex justify-center">
        <PrimaryButton onClick={onClose}>Done</PrimaryButton>
      </div>
    </div>
  );
}
