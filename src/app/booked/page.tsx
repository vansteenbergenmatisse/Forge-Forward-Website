import type { Metadata } from "next";
import CalendarConfirmation from "@/components/ui/CalendarConfirmation";
import FaqVideoCard from "@/components/ui/FaqVideoCard";
import BreakdownModal from "@/components/ui/BreakdownModal";
import BookedGreeting from "@/components/ui/BookedGreeting";
import StepBadge from "@/components/ui/StepBadge";

export const metadata: Metadata = {
  title: "You're booked | ForgeForward",
  description: "Your call has been tentatively scheduled. Complete the steps below to confirm.",
  robots: { index: false, follow: false },
};

// Each card plays inline on click. Swap the empty `videoId` for the real YouTube ID (in this order).
const faqVideos = [
  { q: "Why do I need this if I already get leads and referrals?", time: "3:09", videoId: "" },
  { q: "How is this different from a marketing agency or a company like Angi?", time: "6:26", videoId: "" },
  { q: "Will this actually help me win profitable jobs, or just give me bad leads?", time: "1:38", videoId: "" },
  { q: "What exactly do I get, and what does ForgeForward handle for me?", time: "1:51", videoId: "" },
  { q: "What is the complete cost, and are there any additional fees?", time: "2:47", videoId: "" },
  { q: "How long does everything take, and when should I realistically see results?", time: "4:12", videoId: "" },
  { q: "How will I know the system is working, and which jobs came from it?", time: "3:33", videoId: "" },
];

// "Get Your Questions Answered" (the FAQ video grid) is hidden for now.
// Flip this to true to bring the whole section back — nothing else needs to change.
const SHOW_FAQ = false;

export default function BookedPage() {
  return (
    <div style={{ background: "rgb(16, 18, 20)", color: "#fff", fontFamily: "Satoshi, Inter, system-ui, sans-serif" }}>

      {/* ── 1. TOP BANNER ── */}
      <div style={{ background: "#fff", borderBottom: "3px solid #F6413E", textAlign: "center", padding: "12px 16px", overflowX: "auto" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: "clamp(11px, 1.5vw, 14px)", lineHeight: 1.4, color: "#111", whiteSpace: "nowrap" }}>
          <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Important:</span>{" "}
          Our team will reach out from a{" "}
          <span style={{ color: "#F6413E" }} role="text" aria-label="plus one, eight six six">+1(866)</span>{" "}
          number. Please pick up. That&rsquo;s our team.
        </p>
      </div>

      {/* ── 2. TOP GREETING (Action required · personalized headline · subtitle) ── */}
      <div style={{ background: "rgb(16, 18, 20)", textAlign: "center", padding: "clamp(44px, 5.5vw, 68px) 20px clamp(28px, 3vw, 40px)" }}>
        <BookedGreeting />
      </div>

      {/* ── 3. STEP 1 — CONFIRM ── */}
      <div style={{ background: "rgb(16, 18, 20)", textAlign: "center", padding: "clamp(10px, 1.5vw, 16px) 20px clamp(24px, 3vw, 34px)" }}>

        <StepBadge n={1} title="Text us to confirm" />

        {/* Tap-to-confirm caption */}
        <p style={{ margin: "0 auto 14px", fontSize: "clamp(13px, 1.6vw, 15px)", color: "#9A9A9A", fontWeight: 500 }}>
          Tap below to confirm now. Takes 5 seconds.
        </p>

        {/* Primary confirm button */}
        <a
          href="sms:+18666901229?&body=Confirming my call"
          style={{
            display: "inline-block",
            background: "#F6413E",
            color: "#fff",
            fontWeight: 800,
            fontSize: "clamp(16px, 2.2vw, 20px)",
            textDecoration: "none",
            padding: "16px 40px",
            borderRadius: "12px",
            boxShadow: "0 0 28px rgba(246,65,62,0.45)",
            maxWidth: "520px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Tap here to confirm your call
        </a>

        {/* Computer fallback */}
        <p style={{ margin: "16px auto 0", fontSize: "clamp(12px, 1.5vw, 14px)", color: "#9A9A9A", lineHeight: 1.6, maxWidth: "640px" }}>
          On a computer? Just text{" "}
          <a
            href="sms:+18666901229?&body=Confirming my call"
            role="text"
            aria-label="plus one, eight six six, six nine zero, one two two nine"
            style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 700 }}
          >
            +1 (866) 690-1229
          </a>
          {" "}and say &ldquo;Confirming my call.&rdquo;
        </p>
      </div>

      {/* ── 4. STEP 2 — VIDEO ── */}
      <div style={{ background: "rgb(16, 18, 20)", padding: "clamp(24px, 3.4vw, 44px) clamp(20px, 4vw, 48px) clamp(10px, 1.4vw, 16px)" }}>
        <StepBadge n={2} title="Watch the video" />
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "#F6413E", borderRadius: "8px 8px 0 0", padding: "10px 20px", textAlign: "center" }}>
            <span style={{ fontWeight: 800, fontSize: "clamp(10px, 1.4vw, 12px)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
              Watch the video below and complete the 2 easy steps.
            </span>
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
            <iframe
              src="/booked-vsl.html?banner=0"
              title="Watch this video for how to confirm your call"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
            />
          </div>

          <p style={{ margin: "8px 0 0", textAlign: "center", fontWeight: 700, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F6413E" }}>
            Headphones In And Sound Up For Best Experience
          </p>
        </div>
      </div>

      {/* ── 4. TWO FINAL STEPS (picks up straight from the video) ── */}
      <div style={{ background: "rgb(16, 18, 20)", padding: "clamp(10px, 1.4vw, 18px) clamp(16px, 3vw, 32px) clamp(40px, 5vw, 64px)" }}>

        <style>{`
          .bkSteps{display:grid;grid-template-columns:1fr auto 1fr;align-items:stretch;gap:clamp(16px,2vw,24px);}
          @media (max-width:880px){.bkSteps{grid-template-columns:1fr;}.bkArrow{transform:rotate(90deg);}}
          @keyframes bkNudge{0%,100%{transform:translateY(0);}50%{transform:translateY(6px);}}
          .bkConnectArrow{animation:bkNudge 1.5s ease-in-out infinite;will-change:transform;}
          @media (prefers-reduced-motion:reduce){.bkConnectArrow{animation:none;}}
        `}</style>

        {/* Section intro — the arrow + copy make clear these are the video's 2 steps */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto clamp(18px, 2.4vw, 28px)" }}>
          <div className="bkConnectArrow" style={{ width: "40px", height: "40px", margin: "0 auto clamp(10px, 1.4vw, 14px)", borderRadius: "50%", background: "rgba(246,65,62,0.14)", border: "1px solid rgba(246,65,62,0.45)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F6413E", fontSize: "20px", fontWeight: 900, lineHeight: 1, boxShadow: "0 0 18px rgba(246,65,62,0.4)" }} aria-hidden="true">&darr;</div>
          <p style={{ margin: "0 0 8px", fontSize: "clamp(12px, 1.5vw, 14px)", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F6413E" }}>
            Watched it? Now do both below
          </p>
          <h2 style={{ margin: "0 0 10px", fontSize: "clamp(24px, 3.4vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#fff", textWrap: "balance" }}>
            Two last things to confirm your call
          </h2>
          <p style={{ margin: 0, fontSize: "clamp(14px, 1.6vw, 16px)", color: "#9A9A9A", lineHeight: 1.6 }}>
            These are the exact 2 steps from the video. Do both now, then double-check they went through. Your spot isn&rsquo;t saved until you do.
          </p>
        </div>

        <div className="bkSteps" style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Step 1: the priority action — focal glow, bold heading, large widget */}
          <div style={{ background: "#17191C", borderRadius: "20px", overflow: "hidden", padding: "clamp(24px, 3vw, 34px)", textAlign: "center", border: "1px solid rgba(246,65,62,0.3)", boxShadow: "0 0 0 1px rgba(246,65,62,0.12), 0 26px 70px -32px rgba(246,65,62,0.4), 0 20px 50px -24px rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", width: "100%" }}>
            {/* Numbered marker */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px", marginBottom: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F6413E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "22px", color: "#fff", boxShadow: "0 0 24px rgba(246,65,62,0.5)" }}>
                1
              </div>
              <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#F6413E" }}>Do This First</span>
            </div>
            <h3 style={{ margin: "0 0 8px", fontWeight: 900, fontSize: "clamp(22px, 2.8vw, 30px)", letterSpacing: "-0.015em", lineHeight: 1.12, color: "#fff", textWrap: "balance" }}>
              Add Our Call To Your Calendar
            </h3>
            <p style={{ margin: "0 0 18px", fontSize: "clamp(14px, 1.5vw, 15px)", color: "#9A9A9A", lineHeight: 1.6 }}>
              Save the call to your Google Calendar, Outlook, or any other calendar app.
            </p>

            {/* Prominent click cue — sits above the widget */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(246,65,62,0.12)", border: "1px solid rgba(246,65,62,0.4)", borderRadius: "12px", padding: "12px 16px", marginBottom: "12px", textAlign: "left" }}>
              <span style={{ fontSize: "18px", lineHeight: 1, flexShrink: 0, color: "#F6413E" }}>&darr;</span>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "#fff", lineHeight: 1.4 }}>
                Add it to your calendar app in the box below
              </span>
            </div>

            {/* Booking confirmation + add-to-calendar, read from the Calendly redirect URL */}
            <CalendarConfirmation />

            {/* Zoom disclaimer — demoted */}
            <div style={{ marginTop: "16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "12px 16px", fontSize: "13px", color: "#9A9A9A", lineHeight: 1.6, display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
              {/* Zoom logo with red cross-out */}
              <div style={{ position: "relative", flexShrink: 0, width: "36px", height: "36px" }}>
                {/* Zoom blue rounded square */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect width="36" height="36" rx="8" fill="#2D8CFF"/>
                  {/* Camera body */}
                  <rect x="7" y="12" width="16" height="12" rx="2.5" fill="white"/>
                  {/* Camera lens triangle */}
                  <path d="M24 15.5L30 12V24L24 20.5V15.5Z" fill="white"/>
                </svg>
                {/* Red no-sign overlay */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
                  <circle cx="18" cy="18" r="16" stroke="#F6413E" strokeWidth="3"/>
                  <line x1="6" y1="6" x2="30" y2="30" stroke="#F6413E" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>No Zoom account needed.</strong> You do not need to download or sign up for anything. Just show up at the scheduled time and we will handle the rest.
              </div>
            </div>

          </div>

          {/* Connector arrow (→ on desktop, ↓ when stacked) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="bkArrow" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(246,65,62,0.12)", border: "1px solid rgba(246,65,62,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F6413E", fontSize: "22px", fontWeight: 900, lineHeight: 1 }} aria-hidden="true">&rarr;</div>
          </div>

          {/* Step 2: Google Calendar email warning — framed as a warning */}
          <div style={{ background: "#17191C", borderRadius: "20px", padding: "clamp(24px, 3vw, 34px)", textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 0 0 1px rgba(255,255,255,0.02), 0 20px 50px -24px rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", overflow: "hidden", width: "100%" }}>
            {/* Dimmer circle + label */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#252525", border: "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "24px", color: "#888" }}>
                2
              </div>
              <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Then This</span>
            </div>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.3 }}>
              Watch For The Google Calendar Email
            </h3>

            {/* Read this first */}
            <div style={{ background: "#fff", border: "2px solid #111", borderRadius: "8px", padding: "16px 18px", marginBottom: "18px", textAlign: "left" }}>
              <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: "clamp(12px, 1.5vw, 14px)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#111" }}>
                Read This First
              </p>
              <p style={{ margin: 0, fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.6, color: "#222", fontWeight: 500 }}>
                You may get an email from Google that says &ldquo;Invitation from an unknown sender.&rdquo; This is a Google bug. If you see it, click &ldquo;I know the sender&rdquo; on the event to add it to your calendar.
              </p>
            </div>

            {/* Warning card */}
            <div style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.35)", textAlign: "left" }}>

              {/* Red header */}
              <div style={{
                background: "#F6413E",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                {/* Google G icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#fff"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                </svg>
                <span style={{ fontWeight: 800, fontSize: "clamp(11px, 1.5vw, 13px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
                  This Google Update Could Affect Your Appointment
                </span>
              </div>

              {/* Card body */}
              <div style={{ background: "#f0f0eb", padding: "24px 24px 20px" }}>
                <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 16px)", color: "#111" }}>
                  Unknown sender: not added to Calendar yet
                </p>
                <p style={{ margin: "0 0 12px", fontSize: "clamp(13px, 1.4vw, 14px)", color: "#444", lineHeight: 1.65 }}>
                  It looks like you&rsquo;ve never been in contact with this sender{" "}
                  <span style={{ background: "#111", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontFamily: "monospace", fontSize: "12px", whiteSpace: "nowrap" }}>
                    [name]@forgeforward.io
                  </span>
                  , so this event hasn&rsquo;t been added to your calendar. It won&rsquo;t appear there unless you say you know the sender.
                </p>
                <p style={{ margin: "0 0 20px", fontSize: "clamp(13px, 1.4vw, 14px)", color: "#444", lineHeight: 1.65 }}>
                  Avoid clicking links, downloading attachments, or replying with personal information unless you trust the sender.
                </p>

                {/* Button row */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  {/* "I know the sender" button with red circle outline */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <button style={{
                      background: "#fff",
                      color: "#444",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "9px 18px",
                      fontWeight: 500,
                      fontSize: "14px",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 1,
                    }}>
                      I know the sender
                    </button>
                    {/* Red circle around button */}
                    <div style={{
                      position: "absolute",
                      inset: "-5px -6px",
                      border: "3px solid #F6413E",
                      borderRadius: "8px",
                      pointerEvents: "none",
                    }} />
                  </div>

                  {/* Red arrow */}
                  <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                    <svg width="52" height="28" viewBox="0 0 52 28" fill="none" aria-hidden="true">
                      <path d="M52 14H8M8 14L20 4M8 14L20 24" stroke="#F6413E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Dark CTA box */}
                  <div style={{
                    background: "#111",
                    color: "#fff",
                    padding: "12px 18px",
                    borderRadius: "6px",
                    fontSize: "clamp(12px, 1.4vw, 13px)",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    flex: 1,
                    minWidth: "180px",
                  }}>
                    Press The{" "}
                    <span style={{ color: "#F6413E" }}>&ldquo;I Know The Sender&rdquo;</span>
                    {" "}Button<br />To Add The Event To Your Calendar
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── 5. STEP 3 — READ THE FULL BREAKDOWN ── */}
      <div style={{ background: "rgb(16, 18, 20)", textAlign: "center", padding: "clamp(40px, 5vw, 64px) 20px" }}>
        <StepBadge n={3} title="Read the full breakdown" />
        <BreakdownModal />
      </div>

      {/* ── 6. STEP 3 — GET YOUR QUESTIONS ANSWERED (hidden; flip SHOW_FAQ to re-enable) ── */}
      {SHOW_FAQ && (
      <div style={{ background: "rgb(16, 18, 20)", textAlign: "center", padding: "clamp(40px, 5vw, 64px) clamp(16px, 3vw, 32px)" }}>

        <style>{`
          .bkFaqGrid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(14px,2vw,24px);max-width:1080px;margin:clamp(20px,3vw,32px) auto 0;}
          .bkFaqCard{display:block;width:100%;box-shadow:0 12px 34px -14px rgba(0,0,0,0.65);transition:transform .15s ease, box-shadow .15s ease;}
          .bkFaqCard:hover{transform:translateY(-3px);box-shadow:0 18px 44px -14px rgba(246,65,62,0.45);}
          @media (min-width:761px){.bkFaqGrid>.bkFaqCard:last-child:nth-child(odd){grid-column:1 / -1;width:calc(50% - clamp(7px,1vw,12px));margin-left:auto;margin-right:auto;}}
          @media (max-width:760px){.bkFaqGrid{grid-template-columns:1fr;}}
        `}</style>

        <p style={{ margin: "0 0 12px", fontSize: "clamp(11px, 1.4vw, 13px)", fontWeight: 800, letterSpacing: "0.28em", textTransform: "uppercase", color: "#F6413E" }}>
          Step 3
        </p>
        <h2 style={{ margin: 0, fontSize: "clamp(24px, 3.2vw, 34px)", fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1.12, color: "#fff", textWrap: "balance" }}>
          Get Your Questions Answered
        </h2>

        <div className="bkFaqGrid">
          {faqVideos.map((v) => (
            <FaqVideoCard key={v.q} q={v.q} time={v.time} videoId={v.videoId} />
          ))}
        </div>
      </div>
      )}

      {/* ── 7. FOOTER ── */}
      <div style={{ background: "rgb(16, 18, 20)", padding: "clamp(40px, 5vw, 64px) 20px 32px", textAlign: "center" }}>
        <p style={{ margin: "0 0 20px", fontWeight: 900, fontSize: "22px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
          ForgeForward
        </p>
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Earnings Disclaimer", href: "/earnings-disclaimer" },
            { label: "Data Protection", href: "/data-protection" },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{ color: "#888", fontSize: "12px", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
        <p style={{ margin: "0 0 16px", color: "#555", fontSize: "12px" }}>© 2026 ForgeForward. All rights reserved.</p>
        <p style={{ margin: 0, color: "#444", fontSize: "11px", lineHeight: 1.6, maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
        </p>
      </div>

    </div>
  );
}
