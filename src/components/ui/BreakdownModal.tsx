"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Search, Monitor, PhoneOff, MessageSquare, Check } from "lucide-react";

const promises = ["Free", "15 minutes", "No hard sell"];

const steps = [
  { num: 1, time: "Min 0 to 3", title: "We pull up your business, live", body: "Your website, your Google, your reviews. On the call, together." },
  { num: 2, time: "Min 3 to 8", title: "We show you where the money leaks", body: "Every spot a job slips away. That's your free audit." },
  { num: 3, time: "Min 8 to 13", title: "We map the fix for each one", body: "What we'd change and how we'd handle it for you." },
  { num: 4, time: "Min 13 to 15", title: "We decide together if it fits", body: "No hard sell. If it's not right, we say so." },
];

// Sorted biggest leak first. `share` drives the bar, `tint` the opacity.
const leaks = [
  { icon: Search, label: "Invisible on Google", amount: "$6k/mo", share: 6, tint: 1 },
  { icon: Monitor, label: "Weak website", amount: "$5k/mo", share: 5, tint: 0.7 },
  { icon: PhoneOff, label: "Missed calls", amount: "$4k/mo", share: 4, tint: 0.48 },
  { icon: MessageSquare, label: "No follow-up", amount: "$3k/mo", share: 3, tint: 0.3 },
];

export default function BreakdownModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block bg-red text-white font-bold text-[clamp(14px,1.8vw,16px)] px-[30px] py-[14px] rounded-lg shadow-[0_0_24px_rgba(246,65,62,0.4)] cursor-pointer transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
      >
        Read the Full Breakdown &rarr;
      </button>

      <dialog
        ref={dialogRef}
        className="ff-modal m-auto w-[min(720px,calc(100vw-32px))] max-h-[88vh] overflow-y-auto overflow-x-hidden outline-none p-0 border border-dark-border rounded-[20px] bg-navy text-white shadow-[0_32px_80px_rgba(0,0,0,0.55)] font-display"
        aria-labelledby="ffModalTitle"
        onClick={(e) => { if (e.target === dialogRef.current) setOpen(false); }}
        onClose={() => setOpen(false)}
      >
        <div className="relative text-left p-[clamp(28px,6vw,52px)]">

          <button
            type="button"
            ref={closeRef}
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-[18px] right-[18px] w-10 h-10 rounded-full border border-dark-border bg-transparent text-gray-cool flex items-center justify-center cursor-pointer hover:text-white hover:border-gray-cool focus-visible:ring-2 focus-visible:ring-red outline-none transition-colors"
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          {/* ── Above the fold: what we'll do ── */}
          <p className="m-0 text-[13px] font-bold tracking-[0.14em] uppercase text-red">What we&rsquo;ll do on your call</p>
          <h2 id="ffModalTitle" className="mt-[14px] mb-0 font-black text-[clamp(28px,5.4vw,42px)] leading-[1.08] tracking-[-0.01em] text-pretty pr-9">
            We find where your money&rsquo;s <span className="text-red">leaking</span>. Live.
          </h2>
          <p className="mt-[16px] mb-0 text-[16px] leading-[1.55] text-gray-cool max-w-[560px]">
            A free 15-minute breakdown of your website, your Google, and your follow-up. Here is exactly how it goes.
          </p>

          {/* Promise chips */}
          <div className="mt-[18px] flex flex-wrap gap-x-5 gap-y-2">
            {promises.map((p) => (
              <span key={p} className="inline-flex items-center gap-[7px] text-[13.5px] font-medium text-gray-cool">
                <Check size={13} className="text-red" strokeWidth={3} aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>

          {/* ── The plan: numbered timeline ── */}
          <ol className="list-none mt-9 mb-0 p-0 flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className="ff-anim relative grid grid-cols-[36px_1fr] gap-x-[18px] pb-[30px]"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[17px] top-[42px] bottom-[6px] w-[2px] bg-dark-border" />
                )}
                <span aria-hidden="true" className="w-9 h-9 rounded-full bg-red text-white font-extrabold text-[15px] flex items-center justify-center">
                  {step.num}
                </span>
                <span className="flex flex-col gap-1 pt-[2px]">
                  <span className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-[17.5px] font-bold leading-[1.3] tracking-[-0.01em]">{step.title}</span>
                    <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-slate whitespace-nowrap">{step.time}</span>
                  </span>
                  <span className="text-[15px] leading-[1.5] text-gray-cool max-w-[480px]">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <hr className="mt-[10px] mb-10 border-0 border-t border-dark-border" />

          {/* ── Why it's worth it ── */}
          <p className="m-0 text-[13px] font-bold tracking-[0.14em] uppercase text-red">Why it&rsquo;s worth 15 minutes</p>
          <p className="mt-[14px] mb-0 text-[16px] leading-[1.55] text-gray-cool">
            Most landscapers we look at leak $10,000 to $20,000 a month. That is
          </p>
          <p className="mt-[10px] mb-0 font-black text-red text-[clamp(30px,6.4vw,48px)] leading-[1.05] tracking-[-0.01em]">
            $120,000 to $240,000<span className="text-white">/yr</span>
          </p>
          <p className="mt-[8px] mb-0 text-[14px] text-gray-cool">left on the table, every year</p>

          {/* Leak bar */}
          <div className="mt-7" aria-hidden="true">
            <div className="flex h-[10px] gap-[3px]">
              {leaks.map((leak) => (
                <span key={leak.label} className="bg-red rounded-[3px]" style={{ flex: leak.share, opacity: leak.tint }} />
              ))}
            </div>
            <p className="mt-[10px] mb-0 text-[13px] text-slate">Where the $18,000 a month goes, biggest leak first</p>
          </div>

          {/* Leak cards */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            {leaks.map((leak) => {
              const Icon = leak.icon;
              return (
                <div key={leak.label} className="flex items-center gap-[14px] px-[18px] py-[16px] border border-dark-border rounded-[14px] bg-white/[0.02]">
                  <span className="flex-none w-10 h-10 rounded-[10px] bg-red/[0.12] flex items-center justify-center text-red" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="flex-1 min-w-0 text-[15px] font-bold leading-[1.3]">{leak.label}</span>
                  <span className="flex-none inline-flex items-center gap-2">
                    <span aria-hidden="true" className="w-[7px] h-[7px] rounded-full bg-red" style={{ opacity: leak.tint }} />
                    <span className="text-[15px] font-extrabold text-red">{leak.amount}</span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── Reassurance ── */}
          <div className="mt-11 flex flex-col items-center gap-2 text-center">
            <p className="m-0 text-[18px] font-bold">You keep the full breakdown either way.</p>
            <p className="m-0 text-[15px] leading-[1.5] text-gray-cool">We send it after the call, even if we never work together.</p>
            <p className="mt-4 mb-0 text-[12px] text-slate">
              Illustrative example. Results vary.{" "}
              <Link href="/earnings-disclaimer" className="underline underline-offset-2 hover:text-white">Earnings Disclaimer</Link>
            </p>
          </div>
        </div>
      </dialog>

      <style>{`
        dialog.ff-modal::backdrop { background: rgba(4,7,16,0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); animation: ffFadeIn 260ms ease-out; }
        dialog.ff-modal { animation: ffModalIn 320ms cubic-bezier(0.16,1,0.3,1); scrollbar-width: thin; scrollbar-color: #262E44 transparent; }
        dialog.ff-modal[open] .ff-anim { animation: ffRise 560ms cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes ffModalIn { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: none; } }
        @keyframes ffFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ffRise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          dialog.ff-modal, dialog.ff-modal::backdrop, dialog.ff-modal[open] .ff-anim { animation: none; }
        }
      `}</style>
    </>
  );
}
