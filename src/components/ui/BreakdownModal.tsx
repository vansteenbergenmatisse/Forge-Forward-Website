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
      {/* Styled by the page-scoped stylesheet in src/app/booked/page.tsx */}
      <button type="button" onClick={() => setOpen(true)} className="btn btn-white btn-block-mobile">
        Read the Full Breakdown <span className="arrow" aria-hidden="true">&rarr;</span>
      </button>

      <dialog
        ref={dialogRef}
        className="ff-modal"
        aria-labelledby="ffModalTitle"
        onClick={(e) => { if (e.target === dialogRef.current) setOpen(false); }}
        onClose={() => setOpen(false)}
      >
        <div className="ffm-body">

          <button
            type="button"
            ref={closeRef}
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="ffm-close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          {/* ── Above the fold: what we'll do ── */}
          <p className="ffm-kicker">What we&rsquo;ll do on your call</p>
          <h2 id="ffModalTitle" className="ffm-title">
            We find where your money&rsquo;s <span className="red">leaking</span>. Live.
          </h2>
          <p className="ffm-lede">
            A free 15-minute breakdown of your website, your Google, and your follow-up. Here is
            exactly how it goes.
          </p>

          {/* Promise chips */}
          <div className="ffm-promises">
            {promises.map((p) => (
              <span key={p} className="ffm-promise">
                <Check size={13} strokeWidth={3} aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>

          {/* ── The plan: numbered timeline ── */}
          <ol className="ffm-steps">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className="ff-anim ffm-step"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {i < steps.length - 1 && <span aria-hidden="true" className="ffm-rail" />}
                <span aria-hidden="true" className="ffm-dot">{step.num}</span>
                <span className="ffm-step-copy">
                  <span className="ffm-step-head">
                    <span className="ffm-step-title">{step.title}</span>
                    <span className="ffm-step-time">{step.time}</span>
                  </span>
                  <span className="ffm-step-body">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <hr className="ffm-rule" />

          {/* ── Why it's worth it ── */}
          <p className="ffm-kicker">Why it&rsquo;s worth 15 minutes</p>
          <p className="ffm-lede ffm-tight">
            Most landscapers we look at leak $10,000 to $20,000 a month. That is
          </p>
          <p className="ffm-figure">
            $120,000 to $240,000<span className="ffm-figure-unit">/yr</span>
          </p>
          <p className="ffm-figure-note">left on the table, every year</p>

          {/* Leak bar */}
          <div className="ffm-leakbar-wrap" aria-hidden="true">
            <div className="ffm-leakbar">
              {leaks.map((leak) => (
                <span key={leak.label} style={{ flex: leak.share, opacity: leak.tint }} />
              ))}
            </div>
            <p className="ffm-leakbar-note">Where the $18,000 a month goes, biggest leak first</p>
          </div>

          {/* Leak cards */}
          <div className="ffm-leaks">
            {leaks.map((leak) => {
              const Icon = leak.icon;
              return (
                <div key={leak.label} className="ffm-leak">
                  <span className="ffm-leak-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="ffm-leak-label">{leak.label}</span>
                  <span className="ffm-leak-amount">
                    <span aria-hidden="true" className="ffm-leak-dot" style={{ opacity: leak.tint }} />
                    {leak.amount}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── Reassurance ── */}
          <div className="ffm-outro">
            <p className="ffm-outro-title">You keep the full breakdown either way.</p>
            <p className="ffm-outro-body">We send it after the call, even if we never work together.</p>
            <p className="ffm-fineprint">
              Illustrative example. Results vary.{" "}
              <Link href="/earnings-disclaimer" className="ffm-link">Earnings Disclaimer</Link>
            </p>
          </div>
        </div>
      </dialog>

      <style>{modalStyles}</style>
    </>
  );
}

/**
 * Self-contained so the dialog looks right wherever it is mounted: the tokens
 * below mirror the /booked palette rather than inheriting it, and every rule is
 * scoped to `dialog.ff-modal`.
 */
const modalStyles = `
  dialog.ff-modal {
    --red: #F6413E;
    --charcoal: #1E1C1A; --charcoal-raised: #2A2724;
    --gray-dark: #C9C5C0; --gray-muted: #8E8984; --dark-line: #3A3633;
    margin: auto;
    width: min(720px, calc(100vw - 32px));
    max-height: 88vh;
    overflow: hidden auto;
    padding: 0;
    outline: none;
    border: 1px solid var(--dark-line);
    border-radius: 16px;
    background: var(--charcoal-raised);
    color: var(--gray-dark);
    font-family: var(--font-inter), Inter, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 32px 80px rgba(0,0,0,0.55);
    scrollbar-width: thin;
    scrollbar-color: var(--dark-line) transparent;
    animation: ffModalIn 320ms cubic-bezier(0.16,1,0.3,1);
  }
  dialog.ff-modal::backdrop { background: rgba(12,11,10,0.74); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); animation: ffFadeIn 260ms ease-out; }
  dialog.ff-modal[open] .ff-anim { animation: ffRise 560ms cubic-bezier(0.16,1,0.3,1) both; }

  dialog.ff-modal .ffm-body { position: relative; text-align: left; padding: clamp(28px, 6vw, 52px); }

  dialog.ff-modal .ffm-close { position: absolute; top: 18px; right: 18px; width: 40px; height: 40px; border-radius: 999px; border: 1px solid var(--dark-line); background: transparent; color: var(--gray-muted); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: color 150ms ease-out, border-color 150ms ease-out; }
  dialog.ff-modal .ffm-close:hover { color: #fff; border-color: var(--gray-muted); }
  dialog.ff-modal .ffm-close:focus-visible { outline: 2px solid var(--red); outline-offset: 2px; }

  dialog.ff-modal .ffm-kicker { margin: 0; font-size: 12.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--red); }
  dialog.ff-modal .ffm-title { font-family: var(--font-barlow), 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(30px, 5.8vw, 46px); line-height: 0.95; color: #fff; margin: 14px 0 0; padding-right: 44px; }
  dialog.ff-modal .ffm-title .red { color: var(--red); }
  dialog.ff-modal .ffm-lede { margin: 16px 0 0; font-size: 15.5px; line-height: 1.6; color: var(--gray-dark); max-width: 560px; }
  dialog.ff-modal .ffm-lede.ffm-tight { margin-top: 14px; }

  dialog.ff-modal .ffm-promises { margin-top: 18px; display: flex; flex-wrap: wrap; gap: 8px 20px; }
  dialog.ff-modal .ffm-promise { display: inline-flex; align-items: center; gap: 7px; font-size: 13.5px; font-weight: 500; color: var(--gray-dark); }
  dialog.ff-modal .ffm-promise svg { color: var(--red); flex: none; }

  dialog.ff-modal .ffm-steps { list-style: none; margin: 36px 0 0; padding: 0; display: flex; flex-direction: column; }
  dialog.ff-modal .ffm-step { position: relative; display: grid; grid-template-columns: 36px 1fr; column-gap: 18px; padding-bottom: 30px; }
  dialog.ff-modal .ffm-rail { position: absolute; left: 17px; top: 42px; bottom: 6px; width: 2px; background: var(--dark-line); }
  dialog.ff-modal .ffm-dot { width: 36px; height: 36px; border-radius: 999px; background: var(--red); color: #fff; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; }
  dialog.ff-modal .ffm-step-copy { display: flex; flex-direction: column; gap: 4px; padding-top: 2px; }
  dialog.ff-modal .ffm-step-head { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
  dialog.ff-modal .ffm-step-title { font-size: 17px; font-weight: 600; line-height: 1.3; color: #fff; }
  dialog.ff-modal .ffm-step-time { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-muted); white-space: nowrap; }
  dialog.ff-modal .ffm-step-body { font-size: 14.5px; line-height: 1.55; color: var(--gray-dark); max-width: 480px; }

  dialog.ff-modal .ffm-rule { margin: 10px 0 40px; border: 0; border-top: 1px solid var(--dark-line); }

  dialog.ff-modal .ffm-figure { font-family: var(--font-barlow), 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase; color: var(--red); font-size: clamp(34px, 7vw, 52px); line-height: 1; margin: 10px 0 0; }
  dialog.ff-modal .ffm-figure-unit { color: #fff; }
  dialog.ff-modal .ffm-figure-note { margin: 8px 0 0; font-size: 13.5px; color: var(--gray-dark); }

  dialog.ff-modal .ffm-leakbar-wrap { margin-top: 28px; }
  dialog.ff-modal .ffm-leakbar { display: flex; height: 10px; gap: 3px; }
  dialog.ff-modal .ffm-leakbar span { background: var(--red); border-radius: 3px; }
  dialog.ff-modal .ffm-leakbar-note { margin: 10px 0 0; font-size: 12.5px; color: var(--gray-muted); }

  dialog.ff-modal .ffm-leaks { margin-top: 16px; display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { dialog.ff-modal .ffm-leaks { grid-template-columns: 1fr 1fr; } }
  dialog.ff-modal .ffm-leak { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border: 1px solid var(--dark-line); border-radius: 12px; background: var(--charcoal); }
  dialog.ff-modal .ffm-leak-icon { flex: none; width: 40px; height: 40px; border-radius: 10px; background: rgba(246,65,62,0.12); display: flex; align-items: center; justify-content: center; color: var(--red); }
  dialog.ff-modal .ffm-leak-label { flex: 1; min-width: 0; font-size: 14.5px; font-weight: 600; line-height: 1.3; color: #fff; }
  dialog.ff-modal .ffm-leak-amount { flex: none; display: inline-flex; align-items: center; gap: 8px; font-size: 14.5px; font-weight: 700; color: var(--red); }
  dialog.ff-modal .ffm-leak-dot { width: 7px; height: 7px; border-radius: 999px; background: var(--red); }

  dialog.ff-modal .ffm-outro { margin-top: 44px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
  dialog.ff-modal .ffm-outro-title { margin: 0; font-size: 17px; font-weight: 600; color: #fff; }
  dialog.ff-modal .ffm-outro-body { margin: 0; font-size: 14.5px; line-height: 1.5; color: var(--gray-dark); }
  dialog.ff-modal .ffm-fineprint { margin: 16px 0 0; font-size: 12px; color: var(--gray-muted); }
  dialog.ff-modal .ffm-link { color: var(--gray-muted); text-decoration: underline; text-underline-offset: 2px; }
  dialog.ff-modal .ffm-link:hover { color: #fff; }

  @keyframes ffModalIn { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: none; } }
  @keyframes ffFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes ffRise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) {
    dialog.ff-modal, dialog.ff-modal::backdrop, dialog.ff-modal[open] .ff-anim { animation: none; }
    dialog.ff-modal .ffm-close { transition: none; }
  }
`;
