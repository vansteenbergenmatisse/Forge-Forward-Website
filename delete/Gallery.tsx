"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/* ── tokens ── */
const BG = "rgb(16, 18, 20)";
const PANEL = "#1A1A1A";
const RED = "#F6413E";
const BORDER = "#2A2A2A";
const DIM = "#9A9A9A";
const MUT = "#AAA";
const FONT = "Satoshi, Inter, system-ui, sans-serif";

const DESIGN_W = 1440;

/* ─────────────────────────────────────────────────────────────
   FULL-FIDELITY DESKTOP BUILDING BLOCKS (real copy)
   Every variant reuses these; they carry the content that must
   appear on all designs: banner, headline, tap-to-confirm,
   computer fallback, Step 2 video.
   ───────────────────────────────────────────────────────────── */

function Banner() {
  return (
    <div style={{ background: "#fff", borderBottom: `3px solid ${RED}`, textAlign: "center", padding: "14px 16px" }}>
      <p style={{ margin: 0, fontWeight: 800, fontSize: 15, lineHeight: 1.4, color: "#111" }}>
        <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Important:</span> Our team will reach
        out from a <span style={{ color: RED }}>+1 (414)</span> number. Please pick up. That&rsquo;s our team.
      </p>
    </div>
  );
}

function Eyebrow({ children, active = true }: { children: ReactNode; active?: boolean }) {
  return (
    <p
      style={{
        margin: "0 0 10px",
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: active ? RED : "#777",
      }}
    >
      {children}
    </p>
  );
}

function Headline({ size = 52, align = "center" as const }: { size?: number; align?: "center" | "left" }) {
  return (
    <h1
      style={{
        margin: 0,
        fontWeight: 900,
        fontSize: size,
        lineHeight: 1.06,
        letterSpacing: "-0.02em",
        color: "#fff",
        textAlign: align,
      }}
    >
      Your Call Is Not Confirmed Just Yet
    </h1>
  );
}

function ConfirmButton({ full = false }: { full?: boolean }) {
  return (
    <a
      href="sms:+14142488797?&body=Hey, I want to confirm my call."
      style={{
        display: "inline-block",
        background: RED,
        color: "#fff",
        fontWeight: 800,
        fontSize: 20,
        textDecoration: "none",
        padding: "17px 40px",
        borderRadius: 12,
        boxShadow: "0 0 28px rgba(246,65,62,0.45)",
        width: full ? "100%" : undefined,
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      Tap here to confirm your call
    </a>
  );
}

function ComputerFallback() {
  return (
    <p style={{ margin: "16px 0 0", fontSize: 14, color: DIM, lineHeight: 1.6 }}>
      On a computer? Just text{" "}
      <a
        href="sms:+14142488797?&body=Hey, I want to confirm my call."
        style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 700 }}
      >
        +1 (414) 248-8797
      </a>{" "}
      and say &ldquo;Hey, I want to confirm my call.&rdquo;
    </p>
  );
}

function ConfirmBlock({ align = "center" as const }: { align?: "center" | "left" }) {
  return (
    <div style={{ textAlign: align }}>
      <Eyebrow>Step 1 — Confirm your booking</Eyebrow>
      <p style={{ margin: "0 auto 16px", fontSize: 15, color: DIM, fontWeight: 500, maxWidth: align === "center" ? 560 : undefined, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
        Congrats on booking your call! Tap below to confirm now. Takes 5 seconds.
      </p>
      <ConfirmButton full={align === "left"} />
      <ComputerFallback />
    </div>
  );
}

function VideoStep({ showLabel = true }: { showLabel?: boolean }) {
  return (
    <div>
      {showLabel && <Eyebrow>Step 2 — Watch this 2 minute video</Eyebrow>}
      <div style={{ background: RED, borderRadius: "8px 8px 0 0", padding: "10px 20px", textAlign: "center" }}>
        <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
          2 minutes here, then the 2 quick steps below. Almost done.
        </span>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          background: "#000",
          borderRadius: "0 0 8px 8px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: "50%",
            background: RED,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 28,
            boxShadow: "0 0 40px rgba(246,65,62,0.5)",
          }}
        >
          ▶
        </div>
      </div>
      <p style={{ margin: "8px 0 0", textAlign: "center", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: RED }}>
        Sound On. Yes, This One Has Audio.
      </p>
    </div>
  );
}

function StepChips({ activeSecond = false }: { activeSecond?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: RED, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#fff", boxShadow: "0 0 16px rgba(246,65,62,0.45)" }}>1</div>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Add To Calendar</span>
      </div>
      <div style={{ color: RED, fontSize: 26, fontWeight: 900 }}>→</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: activeSecond ? RED : "#252525", border: activeSecond ? "none" : "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: activeSecond ? "#fff" : "#888" }}>2</div>
        <span style={{ fontSize: 15, fontWeight: 700, color: activeSecond ? "#fff" : "#888" }}>Reply YES</span>
      </div>
    </div>
  );
}

function CalendarWidget() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", background: "#111" }}>
      <div style={{ padding: "12px 16px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Select a time</span>
        <span style={{ fontSize: 12, color: DIM }}>August 2026</span>
      </div>
      <div style={{ padding: 14, display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={`h${i}`} style={{ textAlign: "center", fontSize: 10, color: DIM, fontWeight: 700 }}>{d}</div>
        ))}
        {days.map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontSize: 12,
              padding: "6px 0",
              borderRadius: 6,
              color: d === 14 ? "#fff" : "#ccc",
              background: d === 14 ? RED : "transparent",
              fontWeight: d === 14 ? 800 : 500,
            }}
          >
            {d}
          </div>
        ))}
      </div>
      <div style={{ background: RED, color: "#fff", fontSize: 13, fontWeight: 800, textAlign: "center", padding: "12px" }}>
        ↑ Add to Calendar
      </div>
    </div>
  );
}

function CalendarCard() {
  return (
    <div style={{ background: PANEL, borderRadius: 12, padding: "32px 28px", border: `1px solid rgba(246,65,62,0.35)`, boxShadow: "0 0 40px rgba(246,65,62,0.08)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: RED, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22, color: "#fff", boxShadow: "0 0 20px rgba(246,65,62,0.5)" }}>1</div>
        <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: RED }}>Step 1</span>
      </div>
      <h3 style={{ margin: "0 0 10px", fontWeight: 800, fontSize: 19, textAlign: "center" }}>Add Our Call To Your Calendar</h3>
      <p style={{ margin: "0 0 16px", fontSize: 14, color: MUT, lineHeight: 1.6, textAlign: "center" }}>
        Click the button below to save the call to your Google Calendar, Outlook, or any other calendar app.
      </p>
      <CalendarWidget />
      <div style={{ marginTop: 16, background: "#222", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: MUT, lineHeight: 1.6 }}>
        <strong style={{ color: "#fff" }}>No Zoom account needed.</strong> You do not need to download or sign up for
        anything. Just show up at the scheduled time and we will handle the rest.
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div style={{ width: 220, background: "#2A2A2A", borderRadius: 40, padding: 10, border: "1px solid #444", margin: "0 auto", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}>
      <div style={{ background: "#000", borderRadius: 32, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 12 }}>
          <div style={{ width: 72, height: 22, background: "#111", borderRadius: 14 }} />
        </div>
        <div style={{ background: "#1C1C1E", borderBottom: "1px solid #2C2C2E", padding: "8px 16px 10px", textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "#AAA", fontWeight: 600 }}>ForgeForward</div>
          <div style={{ fontSize: 10, color: "#666" }}>Text Message</div>
        </div>
        <div style={{ padding: "16px 14px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ alignSelf: "flex-start", background: "#2C2C2E", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", fontSize: 13, color: "#fff", maxWidth: "85%" }}>
            Hi! Reply <strong style={{ color: RED }}>YES</strong> to save your spot.
          </div>
          <div style={{ alignSelf: "flex-end", background: RED, borderRadius: "16px 16px 4px 16px", padding: "10px 22px", fontSize: 13, color: "#fff", fontWeight: 700 }}>YES</div>
        </div>
      </div>
    </div>
  );
}

function ReplyCard() {
  return (
    <div style={{ background: PANEL, borderRadius: 12, padding: "32px 28px", border: `1px solid ${BORDER}`, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#252525", border: "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22, color: "#888" }}>2</div>
        <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Step 2</span>
      </div>
      <h3 style={{ margin: "0 0 22px", fontWeight: 800, fontSize: 19, textAlign: "center", lineHeight: 1.3 }}>
        You Will Get A Text Soon. Reply YES To Save Your Spot.
      </h3>
      <PhoneMock />
    </div>
  );
}

function Progress({ variant, total, current, label }: { variant: "bar" | "rail" | "dots"; total: number; current: number; label?: string }) {
  if (variant === "bar") {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: RED }}>
            {label ?? `Step ${current + 1} of ${total}`}
          </span>
          <span style={{ fontSize: 12, color: DIM }}>{Math.round(((current) / total) * 100)}% complete</span>
        </div>
        <div style={{ height: 8, borderRadius: 999, background: "#252525", overflow: "hidden" }}>
          <div style={{ width: `${(current / total) * 100}%`, height: "100%", background: RED, borderRadius: 999 }} />
        </div>
      </div>
    );
  }
  if (variant === "dots") {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 999, background: i <= current ? RED : "#333", transition: "all .2s" }} />
        ))}
        <span style={{ fontSize: 12, color: DIM, marginLeft: 6, fontWeight: 700 }}>Step {current + 1} of {total}</span>
      </div>
    );
  }
  // rail
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flex: i < total - 1 ? 1 : "none" }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              flexShrink: 0,
              background: i < current ? "#4ade80" : i === current ? RED : "#252525",
              border: i > current ? `1px solid ${BORDER}` : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 900,
              color: "#fff",
            }}
          >
            {i < current ? "✓" : i + 1}
          </div>
          {i < total - 1 && <div style={{ flex: 1, height: 3, borderRadius: 2, background: i < current ? "#4ade80" : "#252525" }} />}
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "32px 20px 28px", textAlign: "center" }}>
      <p style={{ margin: "0 0 14px", fontWeight: 900, fontSize: 20, letterSpacing: "0.08em", textTransform: "uppercase" }}>ForgeForward</p>
      <p style={{ margin: 0, color: "#555", fontSize: 12 }}>© 2026 ForgeForward. All rights reserved.</p>
    </div>
  );
}

/* generic section wrappers */
function Section({ children, bg, pad = "56px 64px" }: { children: ReactNode; bg?: string; pad?: string }) {
  return <div style={{ background: bg ?? BG, padding: pad }}>{children}</div>;
}
function Center({ children, max = 1120 }: { children: ReactNode; max?: number }) {
  return <div style={{ maxWidth: max, margin: "0 auto" }}>{children}</div>;
}
function Design({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: DESIGN_W, background: BG, color: "#fff", fontFamily: FONT }}>
      <Banner />
      {children}
      <Footer />
    </div>
  );
}
function TwoStepsSection() {
  return (
    <Section>
      <Center>
        <p style={{ textAlign: "center", margin: "0 0 12px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>
          After watching the video, complete these steps
        </p>
        <div style={{ marginBottom: 28 }}><StepChips /></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <CalendarCard />
          <ReplyCard />
        </div>
      </Center>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   12 FULL DESKTOP DESIGNS (1440px)
   ───────────────────────────────────────────────────────────── */

// 1 — Single honest progress rail (sticky top rail, single column)
const D1 = (
  <Design>
    <div style={{ position: "sticky", top: 0, zIndex: 5, background: "rgba(16,18,20,0.92)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${BORDER}`, padding: "16px 64px" }}>
      <Center max={900}><Progress variant="rail" total={4} current={0} /></Center>
    </div>
    <Section pad="48px 64px 32px">
      <Center max={900}>
        <Headline />
        <div style={{ height: 32 }} />
        <ConfirmBlock />
      </Center>
    </Section>
    <Section pad="8px 64px 40px">
      <Center max={860}><VideoStep /></Center>
    </Section>
    <TwoStepsSection />
  </Design>
);

// 2 — Boxed steps — always open, fully responsive (container queries)
const ACC_CSS = `
.ffacc-root{container-type:inline-size;width:100%;background:${BG};color:#fff;font-family:${FONT};}
.ffacc-wrap{padding:52px 64px;}
.ffacc-headline{margin:0 0 10px;font-weight:900;font-size:52px;line-height:1.04;letter-spacing:-0.02em;text-align:center;}
.ffacc-sub{margin:0 auto 38px;max-width:600px;text-align:center;color:${DIM};font-size:16px;line-height:1.6;}
.ffacc-grid{display:grid;grid-template-columns:230px 1fr;gap:44px;max-width:1080px;margin:0 auto;align-items:start;}
.ffacc-stepper{display:flex;flex-direction:column;gap:4px;position:sticky;top:24px;}
.ffacc-stepitem{display:flex;align-items:center;gap:12px;padding:12px;border-radius:10px;color:#bbb;}
.ffacc-stepnum{width:30px;height:30px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;background:#252525;border:1px solid #444;color:#aaa;}
.ffacc-stepitem[data-primary="true"] .ffacc-stepnum{background:${RED};border:none;color:#fff;}
.ffacc-steplabel{font-size:14px;font-weight:700;white-space:nowrap;}
.ffacc-panels{display:flex;flex-direction:column;gap:18px;}
.ffacc-item{background:${PANEL};border:1px solid ${BORDER};border-radius:14px;overflow:hidden;}
.ffacc-item[data-primary="true"]{border-color:rgba(246,65,62,0.55);box-shadow:0 0 44px rgba(246,65,62,0.12);}
.ffacc-head{display:flex;align-items:center;gap:14px;padding:22px 26px 0;}
.ffacc-headnum{width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:17px;background:#252525;border:1px solid #444;color:#888;}
.ffacc-item[data-primary="true"] .ffacc-headnum{background:${RED};border:none;color:#fff;box-shadow:0 0 18px rgba(246,65,62,0.5);}
.ffacc-eyebrow{display:block;font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#777;}
.ffacc-item[data-primary="true"] .ffacc-eyebrow{color:${RED};}
.ffacc-title{display:block;margin-top:3px;font-size:21px;font-weight:800;line-height:1.22;}
.ffacc-body{padding:16px 26px 26px;}
.ffacc-caption{margin:0 0 16px;color:#cfcfcf;font-size:15px;line-height:1.65;}
.ffacc-btnwrap{max-width:560px;margin:0 auto;}
.ffacc-taphint{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 0 10px;color:${RED};font-weight:900;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;}
.ffacc-divider{height:1px;background:${BORDER};margin:24px 0 18px;}
.ffacc-subhead{margin:0 0 12px;text-align:center;font-weight:800;font-size:15px;color:#fff;}
@container (max-width:820px){
  .ffacc-wrap{padding:34px 22px;}
  .ffacc-headline{font-size:38px;}
  .ffacc-grid{grid-template-columns:1fr;gap:18px;}
  .ffacc-stepper{flex-direction:row;position:static;overflow-x:auto;gap:8px;padding-bottom:4px;}
  .ffacc-stepitem{flex:0 0 auto;background:#151719;}
  .ffacc-title{font-size:19px;}
}
@container (max-width:460px){
  .ffacc-wrap{padding:24px 14px;}
  .ffacc-headline{font-size:31px;}
  .ffacc-head{padding:18px 16px 0;gap:12px;}
  .ffacc-body{padding:14px 16px 20px;}
  .ffacc-title{font-size:18px;}
  .ffacc-steplabel{display:none;}
}
`;

function AccBox({ num, primary, eyebrow, title, children }: { num: number; primary?: boolean; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <div className="ffacc-item" data-primary={primary ? "true" : undefined}>
      <div className="ffacc-head">
        <span className="ffacc-headnum">{num}</span>
        <span style={{ flex: 1 }}>
          <span className="ffacc-eyebrow">{eyebrow}</span>
          <span className="ffacc-title">{title}</span>
        </span>
      </div>
      <div className="ffacc-body">{children}</div>
    </div>
  );
}

function AccordionDesign() {
  const index = [
    { n: 1, label: "Confirm & watch", primary: true },
    { n: 2, label: "Add to calendar" },
    { n: 3, label: "Reply YES" },
  ];
  return (
    <div className="ffacc-root">
      <style dangerouslySetInnerHTML={{ __html: ACC_CSS }} />
      <Banner />
      <div className="ffacc-wrap">
        <h1 className="ffacc-headline">Your Call Is Not Confirmed Just Yet</h1>
        <p className="ffacc-sub">You&rsquo;re almost there — complete the 3 quick steps below to lock in your call.</p>
        <div className="ffacc-grid">
          <div className="ffacc-stepper" aria-hidden="true">
            {index.map((s) => (
              <div key={s.n} className="ffacc-stepitem" data-primary={s.primary ? "true" : undefined}>
                <span className="ffacc-stepnum">{s.n}</span>
                <span className="ffacc-steplabel">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="ffacc-panels">
            {/* Step 1 — Confirm + video, always visible, primary emphasis */}
            <AccBox num={1} primary eyebrow="Step 1 · Do this first" title="Confirm your call & watch the video">
              <p className="ffacc-caption">
                Congrats on booking! <strong style={{ color: "#fff" }}>Tap the button below to confirm your call</strong> — it only takes 5 seconds.
              </p>
              <div className="ffacc-taphint">👇 Tap here to confirm your call</div>
              <div className="ffacc-btnwrap"><ConfirmButton full /></div>
              <ComputerFallback />
              <div className="ffacc-divider" />
              <p className="ffacc-subhead">Okay, last video. 2 minutes, no pitch. It shows you how to make our call count.</p>
              <VideoStep showLabel={false} />
            </AccBox>

            {/* Step 2 — Calendar, clearer */}
            <AccBox num={2} eyebrow="Step 2" title="Add the call to your calendar">
              <p className="ffacc-caption">
                So you don&rsquo;t miss it, save the call to your calendar. Pick a time, then click{" "}
                <strong style={{ color: "#fff" }}>Add to Calendar</strong> and choose Google, Outlook, or Apple.
              </p>
              <CalendarWidget />
              <div style={{ marginTop: 16, background: "#222", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: MUT, lineHeight: 1.6 }}>
                <strong style={{ color: "#fff" }}>No Zoom account needed.</strong> You don&rsquo;t need to download or sign up for anything — just show up at the scheduled time and we&rsquo;ll handle the rest.
              </div>
            </AccBox>

            {/* Step 3 — Reply YES, clearer */}
            <AccBox num={3} eyebrow="Step 3" title="Reply YES to lock in your spot">
              <p className="ffacc-caption">
                Within a few minutes you&rsquo;ll get a text from <strong style={{ color: "#fff" }}>ForgeForward</strong>. Just reply{" "}
                <b style={{ color: RED }}>YES</b> and your spot is confirmed.
              </p>
              <PhoneMock />
            </AccBox>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// 3 — Video-first (big video hero, confirm under it, steps below)
const D3 = (
  <Design>
    <Section pad="44px 64px 32px">
      <Center max={860}>
        <div style={{ textAlign: "center", marginBottom: 24 }}><Headline size={44} /></div>
        <VideoStep showLabel={false} />
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <ConfirmBlock />
        </div>
        <div style={{ marginTop: 28 }}><Progress variant="dots" total={4} current={1} /></div>
      </Center>
    </Section>
    <TwoStepsSection />
  </Design>
);

// 4 — Two-column sticky video (left video+headline sticky, right steps scroll)
const D4 = (
  <Design>
    <Section pad="48px 64px 56px">
      <Center>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 24 }}>
            <Headline size={40} align="left" />
            <div style={{ height: 20 }} />
            <VideoStep showLabel={false} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Progress variant="bar" total={3} current={0} label="Step 1 of 3 — Confirm" />
            <div style={{ background: PANEL, border: `1px solid rgba(246,65,62,0.4)`, borderRadius: 12, padding: 28 }}>
              <ConfirmBlock align="left" />
            </div>
            <CalendarCard />
            <ReplyCard />
          </div>
        </div>
      </Center>
    </Section>
  </Design>
);

// 5 — Priority-first (confirm alone, huge; everything else "while you wait")
const D5 = (
  <Design>
    <Section pad="88px 64px 72px">
      <Center max={820}>
        <div style={{ textAlign: "center" }}>
          <Headline />
          <div style={{ margin: "18px 0 8px", color: RED, fontWeight: 800, letterSpacing: "0.22em", fontSize: 12 }}>━ DO THIS ONE THING NOW ━</div>
          <p style={{ margin: "0 auto 24px", maxWidth: 560, fontSize: 16, color: DIM, lineHeight: 1.6 }}>
            Tap below to confirm — takes 5 seconds. Then keep an eye out for a call and text from our +1 (414) number.
          </p>
          <ConfirmButton />
          <ComputerFallback />
        </div>
      </Center>
    </Section>
    <Section bg="#101214" pad="20px 64px 12px">
      <Center max={900}>
        <p style={{ textAlign: "center", color: "#888", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12 }}>While you wait ↓</p>
      </Center>
    </Section>
    <Section pad="8px 64px 40px">
      <Center max={860}><VideoStep /></Center>
    </Section>
    <TwoStepsSection />
  </Design>
);

// 6 — Timeline / what happens next (vertical timeline, video + steps as nodes)
const D6 = (
  <Design>
    <Section pad="48px 64px 24px"><Center max={900}><Headline /></Center></Section>
    <Section pad="8px 64px 56px">
      <Center max={820}>
        {[
          { t: "NOW", h: "Confirm your call", body: <div style={{ marginTop: 10 }}><ConfirmButton /><ComputerFallback /></div>, active: true },
          { t: "STEP 2 · WATCH", h: "Watch this 2 minute video", body: <div style={{ marginTop: 12 }}><VideoStep showLabel={false} /></div> },
          { t: "BEFORE THE CALL", h: "Add it to your calendar", body: <p style={{ margin: "6px 0 0", color: MUT }}>No Zoom account needed — just show up at the scheduled time.</p> },
          { t: "WE TEXT YOU", h: "Reply YES to lock your spot", body: <p style={{ margin: "6px 0 0", color: MUT }}>You&rsquo;ll get a text from ForgeForward. Reply YES.</p> },
          { t: "CALL DAY", h: "We call from +1 (414)", body: <p style={{ margin: "6px 0 0", color: MUT }}>Please pick up — that&rsquo;s our team.</p> },
        ].map((n, i, arr) => (
          <div key={i} style={{ display: "flex", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: n.active ? RED : "#333", border: n.active ? "none" : "1px solid #555", flexShrink: 0, boxShadow: n.active ? "0 0 16px rgba(246,65,62,0.6)" : "none" }} />
              {i < arr.length - 1 && <div style={{ flex: 1, width: 2, background: "#252525", minHeight: 40 }} />}
            </div>
            <div style={{ paddingBottom: 40, flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", color: n.active ? RED : "#777" }}>{n.t}</div>
              <div style={{ fontSize: 22, fontWeight: 800, margin: "4px 0" }}>{n.h}</div>
              {n.body}
            </div>
          </div>
        ))}
      </Center>
    </Section>
  </Design>
);

// 7 — Card deck with peek (row of steps, next card peeking at right edge)
const D7 = (
  <Design>
    <Section pad="48px 64px 24px"><Center max={900}><Headline /><div style={{ marginTop: 24 }}><Progress variant="dots" total={4} current={0} /></div></Center></Section>
    <Section pad="12px 0 56px">
      <div style={{ display: "flex", gap: 20, overflow: "hidden", padding: "0 64px" }}>
        <div style={{ flex: "0 0 620px", background: PANEL, border: `1px solid rgba(246,65,62,0.4)`, borderRadius: 14, padding: 32 }}>
          <ConfirmBlock align="left" />
        </div>
        <div style={{ flex: "0 0 620px", background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32 }}>
          <VideoStep />
        </div>
        <div style={{ flex: "0 0 620px", background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, opacity: 0.75 }}>
          <Eyebrow active={false}>Step 3 — Add to calendar</Eyebrow>
          <p style={{ color: DIM, fontSize: 13, textAlign: "center", marginTop: 40 }}>↓ Next: keep scrolling</p>
        </div>
      </div>
      <p style={{ textAlign: "center", color: DIM, fontSize: 13, marginTop: 20, fontWeight: 700 }}>← swipe / scroll through the steps →</p>
    </Section>
  </Design>
);

// 8 — Bottom action dock (content scrolls, fixed dock at bottom of design)
const D8 = (
  <Design>
    <Section pad="48px 64px 24px"><Center max={900}><Headline /><div style={{ height: 28 }} /><ConfirmBlock /></Center></Section>
    <Section pad="8px 64px 40px"><Center max={860}><VideoStep /></Center></Section>
    <TwoStepsSection />
    <div style={{ position: "sticky", bottom: 0, background: "rgba(16,18,20,0.95)", backdropFilter: "blur(8px)", borderTop: `1px solid ${BORDER}`, padding: "16px 64px", display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ flex: 1 }}><Progress variant="bar" total={2} current={0} label="Step 1 of 2 — Confirm your booking" /></div>
      <a href="sms:+14142488797?&body=Hey, I want to confirm my call." style={{ background: RED, color: "#fff", fontWeight: 800, fontSize: 16, textDecoration: "none", padding: "14px 32px", borderRadius: 10, whiteSpace: "nowrap", boxShadow: "0 0 24px rgba(246,65,62,0.4)" }}>Tap to confirm</a>
    </div>
  </Design>
);

// 9 — Split: confirm now vs prepare (two big zones)
const D9 = (
  <Design>
    <Section pad="48px 64px 24px"><Center max={960}><Headline /></Center></Section>
    <Section pad="8px 64px 56px">
      <Center>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          <div style={{ background: "rgba(246,65,62,0.06)", border: `1px solid rgba(246,65,62,0.4)`, borderRadius: 14, padding: 32 }}>
            <div style={{ color: RED, fontWeight: 800, letterSpacing: "0.16em", fontSize: 13, textTransform: "uppercase", marginBottom: 18 }}>Confirm now</div>
            <ConfirmBlock align="left" />
            <div style={{ height: 24 }} />
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
              <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Then reply YES to our text:</p>
              <PhoneMock />
            </div>
          </div>
          <div style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32 }}>
            <div style={{ color: "#888", fontWeight: 800, letterSpacing: "0.16em", fontSize: 13, textTransform: "uppercase", marginBottom: 18 }}>Prepare for the call</div>
            <VideoStep />
            <div style={{ height: 20 }} />
            <CalendarWidget />
          </div>
        </div>
      </Center>
    </Section>
  </Design>
);

// 10 — Guided one-question wizard (centered card, prominent progress)
const D10 = (
  <Design>
    <Section pad="72px 64px 80px">
      <Center max={680}>
        <div style={{ marginBottom: 32 }}><Progress variant="dots" total={4} current={0} /></div>
        <div style={{ background: PANEL, border: `1px solid rgba(246,65,62,0.4)`, borderRadius: 16, padding: 44, textAlign: "center" }}>
          <Headline size={34} />
          <p style={{ margin: "16px auto 28px", maxWidth: 480, fontSize: 16, color: DIM, lineHeight: 1.6 }}>
            First, confirm your booking. Tap below — takes 5 seconds.
          </p>
          <ConfirmButton />
          <ComputerFallback />
          <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center" }}>
            <button style={{ background: RED, color: "#fff", border: "none", borderRadius: 10, padding: "13px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>I&rsquo;ve confirmed →</button>
            <button style={{ background: "transparent", color: "#fff", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "13px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>Not yet</button>
          </div>
        </div>
        <p style={{ textAlign: "center", color: "#666", fontSize: 12, marginTop: 16 }}>Next: watch the 2-minute video → add to calendar → reply YES</p>
      </Center>
    </Section>
  </Design>
);

// 11 — Proof-reassured (single column + trust strip after confirm)
const D11 = (
  <Design>
    <Section pad="48px 64px 20px"><Center max={900}><Headline /><div style={{ height: 28 }} /><ConfirmBlock /></Center></Section>
    <Section pad="0 64px 8px">
      <Center max={900}>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 24px", background: PANEL }}>
          {["200+ calls booked this month", "Real humans — no bots", "No Zoom install needed"].map((t) => (
            <span key={t} style={{ fontSize: 14, color: "#ccc", fontWeight: 600 }}><span style={{ color: "#4ade80", marginRight: 6 }}>✓</span>{t}</span>
          ))}
        </div>
      </Center>
    </Section>
    <Section pad="24px 64px 16px"><Center max={860}><VideoStep /></Center></Section>
    <Section pad="8px 64px 40px">
      <Center max={720}>
        <div style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, textAlign: "center" }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;Showed up, they called right on time from the 414 number. Easiest call I&rsquo;ve booked.&rdquo;</p>
          <p style={{ margin: 0, color: DIM, fontSize: 13, fontWeight: 700 }}>— a recent client</p>
        </div>
      </Center>
    </Section>
    <TwoStepsSection />
  </Design>
);

// 12 — Minimal one screen (everything above the fold, tight hero)
const D12 = (
  <Design>
    <Section pad="40px 64px 48px">
      <Center>
        <div style={{ marginBottom: 20 }}><Progress variant="bar" total={2} current={0} label="Step 1 of 2 — Confirm your booking" /></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <Headline size={40} align="left" />
            <div style={{ height: 20 }} />
            <ConfirmBlock align="left" />
          </div>
          <div>
            <VideoStep />
          </div>
        </div>
        <div style={{ marginTop: 36, borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
          <StepChips />
        </div>
      </Center>
    </Section>
  </Design>
);

type Variant = {
  n: number;
  name: string;
  purpose: string;
  backs: string;
  tradeoff: string;
  node: ReactNode;
  responsive?: boolean;
};

const VARIANTS: Variant[] = [
  { n: 1, name: "Single honest progress rail", purpose: "Sticky 4-step rail across the top; one clean vertical column: confirm → watch → calendar → reply.", backs: "Baymard one-to-one progress; descriptive step labels.", tradeoff: "Longer scroll; the rail should reflect real completion.", node: D1 },
  { n: 2, name: "Boxed steps (always open)", purpose: "Fully responsive. Three always-open boxes: Step 1 confirms your call with a prominent CTA and the video right there; Step 2 calendar; Step 3 reply YES. Use the device toggle to see it reflow.", backs: "Everything visible, no clicks to hunt; boxes chunk the work.", tradeoff: "Taller page; the primary action must stay the loudest thing.", node: <AccordionDesign />, responsive: true },
  { n: 3, name: "Video-first 'show me, then do'", purpose: "Big video hero explains why the steps matter; confirm sits right under it, steps below.", backs: "Text-led but video demonstrates the promise.", tradeoff: "Pushes the action a little lower for skimmers.", node: D3 },
  { n: 4, name: "Two-column sticky video", purpose: "Video + headline pin on the left while the confirm/calendar/reply steps scroll on the right.", backs: "Sticky progress-story template.", tradeoff: "Desktop-first; needs a clean stacked mobile fallback.", node: D4 },
  { n: 5, name: "Priority-first (confirm alone)", purpose: "The confirm gets a big uncontested hero; video + steps live below under 'while you wait.'", backs: "One dominant action, one dominant treatment.", tradeoff: "De-emphasizes the video/steps some users want first.", node: D5 },
  { n: 6, name: "Timeline / what happens next", purpose: "A vertical timeline of the next 24h — confirm now, watch, calendar, the text, call day — each a node.", backs: "Sequence maps to real user questions; strong scent.", tradeoff: "Story framing must not bury the confirm CTA.", node: D6 },
  { n: 7, name: "Card deck with 'peek'", purpose: "Wide step cards in a row with the next card peeking at the edge so there's never a false ending.", backs: "Partial next-snap peek + 'Next: …' preview.", tradeoff: "Horizontal motion needs an obvious affordance.", node: D7 },
  { n: 8, name: "Bottom action dock", purpose: "Content scrolls; a persistent bottom dock keeps the current step + a Tap-to-confirm always in reach.", backs: "Conversion-dock template.", tradeoff: "Dock must never cover content or the keyboard.", node: D8 },
  { n: 9, name: "Split: confirm vs. prepare", purpose: "Two zones side by side — urgent 'confirm now' (tap + reply YES) vs. calm 'prepare' (video + calendar).", backs: "One dominant cognitive operation per zone.", tradeoff: "Two columns of actions can split attention.", node: D9 },
  { n: 10, name: "Guided one-question wizard", purpose: "A single centered card with a prominent progress dots; advance one decision at a time.", backs: "Interactive guided choice + micro-commitment.", tradeoff: "Most app-like; needs real state to shine.", node: D10 },
  { n: 11, name: "Proof-reassured", purpose: "Single column with a trust strip right after confirm and a short testimonial to defuse 'is this legit?'.", backs: "Pair every major claim with evidence.", tradeoff: "Adds content; keep proof honest and short.", node: D11 },
  { n: 12, name: "Minimal — one screen", purpose: "Everything above the fold: headline + confirm left, video right, steps + thin progress underneath.", backs: "First-viewport weighting; text carries the full path.", tradeoff: "Less room for reassurance/education.", node: D12 },
];

/* ── thumbnail: render the real 1440 design scaled to fit the card ── */
const CARD_W = 420;
const THUMB_H = 300;
const THUMB_SCALE = CARD_W / DESIGN_W;

function Thumb({ node }: { node: ReactNode }) {
  return (
    <div style={{ width: CARD_W, height: THUMB_H, overflow: "hidden", position: "relative", borderBottom: `1px solid ${BORDER}`, background: BG }}>
      <div style={{ width: DESIGN_W, transform: `scale(${THUMB_SCALE})`, transformOrigin: "top left", pointerEvents: "none" }}>
        {node}
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(16,18,20,0.9))" }} />
    </div>
  );
}

const DEVICE_W: Record<string, number | string> = { desktop: "100%", tablet: 800, mobile: 390 };

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const active = open === null ? null : VARIANTS[open];
  const openCard = (i: number) => {
    setDevice("desktop");
    setOpen(i);
  };

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div style={{ background: BG, color: "#fff", fontFamily: FONT, minHeight: "100vh" }}>
      {/* header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: RED, fontWeight: 800 }}>
          Internal · delete later
        </div>
        <h1 style={{ margin: "8px 0 6px", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, letterSpacing: "-0.02em" }}>
          /booked — 12 full desktop designs (1440px)
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 660, fontSize: 13, color: MUT, lineHeight: 1.6 }}>
          Click any card to open the real, complete 1440px design. Every one keeps the banner, the
          &ldquo;Your Call Is Not Confirmed Just Yet&rdquo; headline, the Tap-to-confirm button, the computer
          fallback text, and Step 2 — Watch this 2 minute video. They differ only in structure.
        </p>
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, ${CARD_W}px)`,
          justifyContent: "center",
          gap: 22,
          padding: "28px clamp(16px, 3vw, 40px) 60px",
          margin: "0 auto",
        }}
      >
        {VARIANTS.map((v, i) => (
          <section
            key={v.n}
            role="button"
            tabIndex={0}
            onClick={() => openCard(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openCard(i);
              }
            }}
            style={{
              width: CARD_W,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
              cursor: "pointer",
              outline: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Thumb node={v.node} />
            <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 900, color: "#fff", background: RED, borderRadius: 6, padding: "2px 8px", flexShrink: 0 }}>{v.n}</span>
                <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>{v.name}</h2>
                <span style={{ marginLeft: "auto", fontSize: 10, color: DIM, whiteSpace: "nowrap" }}>⤢ Open</span>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: MUT, lineHeight: 1.5 }}>{v.purpose}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "auto", paddingTop: 4 }}>
                <div style={{ fontSize: 11, color: "#7dd3fc" }}><b style={{ color: DIM }}>Backs:</b> {v.backs}</div>
                <div style={{ fontSize: 11, color: "#fbbf24" }}><b style={{ color: DIM }}>Tradeoff:</b> {v.tradeoff}</div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* modal */}
      {active && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflow: "auto",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: active.responsive ? "min(1320px, 96vw)" : DESIGN_W,
              minWidth: active.responsive ? undefined : DESIGN_W,
              background: PANEL,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
            }}
          >
            {/* sticky modal header */}
            <div style={{ position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", gap: 14, padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, background: "rgba(26,26,26,0.96)", backdropFilter: "blur(8px)" }}>
              <span style={{ fontSize: 15, fontWeight: 900, color: "#fff", background: RED, borderRadius: 8, padding: "3px 11px" }}>{active.n}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{active.name}</h2>
                <p style={{ margin: "2px 0 0", fontSize: 12.5, color: MUT }}>{active.purpose}</p>
              </div>
              {active.responsive ? (
                <div style={{ display: "flex", gap: 4, background: "#0d0f11", border: `1px solid ${BORDER}`, borderRadius: 999, padding: 3, flexShrink: 0 }}>
                  {(["desktop", "tablet", "mobile"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDevice(d)}
                      style={{
                        background: device === d ? RED : "transparent",
                        color: device === d ? "#fff" : DIM,
                        border: "none",
                        borderRadius: 999,
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              ) : (
                <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: DIM, border: `1px solid ${BORDER}`, borderRadius: 999, padding: "4px 10px" }}>Desktop · 1440px</span>
              )}
              <button onClick={() => setOpen(null)} aria-label="Close" style={{ background: "transparent", border: `1px solid ${BORDER}`, color: "#fff", borderRadius: 999, width: 38, height: 38, fontSize: 18, cursor: "pointer", flexShrink: 0 }}>✕</button>
            </div>
            {/* the real design */}
            {active.responsive ? (
              <div style={{ background: "#0d0f11", padding: "28px 24px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: DEVICE_W[device], maxWidth: "100%", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", transition: "width .25s ease" }}>
                  {active.node}
                </div>
              </div>
            ) : (
              active.node
            )}
          </div>
        </div>
      )}
    </div>
  );
}
