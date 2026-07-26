import type { Metadata } from "next";
import IClosedWidget from "@/components/ui/IClosedWidget";
import LiteYouTube from "@/components/ui/LiteYouTube";

// Video ids. Hero is 0712.mp4; Step 3 is the separate "agenda" video.
// TODO: replace STEP3_VIDEO_ID once the second unlisted YouTube link arrives.
const HERO_VIDEO_ID = "SSe1JP2a7LQ";
const STEP3_VIDEO_ID = "SSe1JP2a7LQ";

export const metadata: Metadata = {
  title: "You're booked | ForgeForward",
  description: "Your call has been tentatively scheduled. Complete the steps below to confirm.",
  robots: { index: false, follow: false },
};

export default function BookedPage() {
  return (
    <div style={{ background: "rgb(16, 18, 20)", color: "#fff", fontFamily: "Satoshi, Inter, system-ui, sans-serif" }}>

      {/* ── 1. TOP BANNER ── */}
      <div style={{ background: "#F6413E", textAlign: "center", padding: "10px 16px" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: "clamp(11px, 1.6vw, 13px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
          Your Spot Is Saved. But NOT Confirmed Yet! Do These 3 Steps To Make It Official.
        </p>
      </div>

      {/* ── 2. HEADLINE ── */}
      <div style={{ background: "rgb(16, 18, 20)", textAlign: "center", padding: "clamp(36px, 3vw, 44px) 20px clamp(30px, 2.5vw, 36px)" }}>
        <h1 style={{
          margin: "0 auto 10px",
          fontWeight: 900,
          fontSize: "clamp(25px, 5.2vw, 38px)",
          lineHeight: 1.12,
          textTransform: "uppercase",
          maxWidth: "900px",
          letterSpacing: "-0.01em",
        }}>
          Watch The Video Below And After,<br />Complete 3 Steps To Confirm Your Call.
        </h1>
      </div>

      {/* ── 3. VIDEO ── */}
      <div style={{ background: "rgb(16, 18, 20)", padding: "0 clamp(20px, 4vw, 48px) clamp(16px, 2vw, 24px)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "#F6413E", borderRadius: "8px 8px 0 0", padding: "10px 20px", textAlign: "center" }}>
            <span style={{ fontWeight: 800, fontSize: "clamp(10px, 1.4vw, 12px)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
              Watch This Video Below For How To Confirm Your Call
            </span>
          </div>
          <LiteYouTube id={HERO_VIDEO_ID} title="Watch this video for how to confirm your call" rate={1.1} />

          <p style={{ margin: "8px 0 0", textAlign: "center", fontWeight: 700, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F6413E" }}>
            Headphones In And Sound Up For Best Experience
          </p>
        </div>
      </div>

      {/* ── 4. THREE STEPS ── */}
      <div style={{ background: "rgb(16, 18, 20)", padding: "clamp(24px, 3vw, 40px) clamp(16px, 2vw, 28px)" }}>

        <p style={{ textAlign: "center", margin: "0 auto 10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>
          After watching the video, complete these steps
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", maxWidth: "1200px", margin: "0 auto 28px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#F6413E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px", color: "#fff", flexShrink: 0, boxShadow: "0 0 16px rgba(246,65,62,0.45)" }}>1</div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>Add To Calendar</span>
          </div>
          <div style={{ color: "#F6413E", fontSize: "26px", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}>→</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#252525", border: "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px", color: "#888", flexShrink: 0 }}>2</div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#888", letterSpacing: "0.03em" }}>Reply YES</span>
          </div>
          <div style={{ color: "#F6413E", fontSize: "26px", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}>→</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#F6413E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "18px", color: "#fff", flexShrink: 0, boxShadow: "0 0 16px rgba(246,65,62,0.45)" }}>3</div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>Watch Video</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))", gap: "20px", maxWidth: "1840px", margin: "0 auto" }}>

          {/* Step 1: red accent signals this is the priority action */}
          <div style={{ background: "#1A1A1A", borderRadius: "12px", overflow: "hidden", padding: "36px 32px 32px", textAlign: "center", border: "1px solid rgba(246,65,62,0.35)", boxShadow: "0 0 40px rgba(246,65,62,0.08), 0 8px 32px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>
            {/* Large numbered circle + label */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#F6413E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "24px", color: "#fff", boxShadow: "0 0 20px rgba(246,65,62,0.5)" }}>
                1
              </div>
              <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F6413E" }}>Step 1</span>
            </div>
            <h3 style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.3 }}>
              Add Our Call To Your Calendar
            </h3>
            <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#AAA", lineHeight: 1.6 }}>
              Click the button below to save the call to your Google Calendar, Outlook, or any other calendar app.
            </p>

            <div>
              <div style={{ borderRadius: "8px 8px 0 0", overflow: "hidden", background: "#111" }}>
                <IClosedWidget />
              </div>
              <div style={{
                background: "#F6413E",
                borderRadius: "0 0 8px 8px",
                padding: "14px 18px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                color: "#fff",
              }}>
                <span style={{ fontSize: "20px", lineHeight: 1.2, flexShrink: 0 }}>↑</span>
                <span style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.5 }}>
                  Click{" "}
                  <span style={{ background: "rgba(255,255,255,0.25)", borderRadius: "3px", padding: "1px 5px" }}>Add to Calendar</span>
                  {" "}in the box above to save this call. If you do not see it right away, scroll down inside the box.
                </span>
              </div>
            </div>

            {/* Zoom disclaimer */}
            <div style={{ marginTop: "16px", background: "#222", borderRadius: "6px", padding: "12px 16px", fontSize: "13px", color: "#AAA", lineHeight: 1.6, display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
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

          {/* Step 2: visually secondary to Step 1 — enlarged phone cropped at the card's bottom edge */}
          <div style={{ background: "#1A1A1A", borderRadius: "12px", padding: "36px 32px 0", textAlign: "center", border: "1px solid #2A2A2A", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Dimmer circle + label */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#252525", border: "2px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "24px", color: "#888" }}>
                2
              </div>
              <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Step 2</span>
            </div>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.3 }}>
              You Will Get A Text Soon. Reply YES To Save Your Spot.
            </h3>
            {/* iPhone frame 9:19.5 proportions — enlarged and cropped at the bottom */}
            <div style={{ position: "relative", width: "100%", flex: 1, minHeight: "200px", overflow: "hidden" }}>
            <div style={{ width: "240px", position: "absolute", top: "6px", left: "50%", transform: "translateX(-50%) scale(1.6)", transformOrigin: "top center" }}>
              {/* Outer shell */}
              <div style={{
                background: "#2A2A2A",
                borderRadius: "46px",
                padding: "12px",
                border: "1px solid #444",
                boxShadow: "0 0 0 1px #222 inset, 0 32px 64px rgba(0,0,0,0.7)",
                position: "relative",
              }}>
                {/* Left buttons */}
                <div style={{ position: "absolute", left: "-3px", top: "90px", width: "3px", height: "24px", background: "#3A3A3A", borderRadius: "2px 0 0 2px" }} />
                <div style={{ position: "absolute", left: "-3px", top: "126px", width: "3px", height: "40px", background: "#3A3A3A", borderRadius: "2px 0 0 2px" }} />
                <div style={{ position: "absolute", left: "-3px", top: "176px", width: "3px", height: "40px", background: "#3A3A3A", borderRadius: "2px 0 0 2px" }} />
                {/* Right button */}
                <div style={{ position: "absolute", right: "-3px", top: "140px", width: "3px", height: "60px", background: "#3A3A3A", borderRadius: "0 2px 2px 0" }} />

                {/* Screen */}
                <div style={{ background: "#000", borderRadius: "36px", overflow: "hidden", height: "480px", display: "flex", flexDirection: "column" }}>

                  {/* Dynamic island */}
                  <div style={{ display: "flex", justifyContent: "center", paddingTop: "14px", paddingBottom: "4px", flexShrink: 0 }}>
                    <div style={{ width: "80px", height: "24px", background: "#111", borderRadius: "16px", border: "1px solid #222" }} />
                  </div>

                  {/* Status bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 20px 6px", flexShrink: 0 }}>
                    <span style={{ fontSize: "11px", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>9:41</span>
                    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                      <svg width="13" height="10" viewBox="0 0 15 11" fill="#fff"><rect x="0" y="4" width="3" height="7" rx="1"/><rect x="4" y="2.5" width="3" height="8.5" rx="1"/><rect x="8" y="1" width="3" height="10" rx="1"/><rect x="12" y="0" width="3" height="11" rx="1" opacity="0.3"/></svg>
                      <svg width="11" height="9" viewBox="0 0 12 10" fill="#fff"><path d="M6 2.5C7.7 2.5 9.2 3.2 10.3 4.3L11.5 3.1C10 1.6 8.1 0.7 6 0.7C3.9 0.7 2 1.6 0.5 3.1L1.7 4.3C2.8 3.2 4.3 2.5 6 2.5Z"/><path d="M6 5C7.1 5 8.1 5.5 8.8 6.2L10 5C8.9 3.9 7.5 3.2 6 3.2C4.5 3.2 3.1 3.9 2 5L3.2 6.2C3.9 5.5 4.9 5 6 5Z"/><circle cx="6" cy="8.5" r="1.2"/></svg>
                      <svg width="20" height="10" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="3.5" stroke="#fff" strokeOpacity="0.35"/><rect x="1.5" y="1.5" width="14" height="8" rx="2" fill="#fff"/><path d="M19.5 3.5V7.5C20.3 7.2 21 6.2 21 5.5C21 4.8 20.3 3.8 19.5 3.5Z" fill="#fff" fillOpacity="0.4"/></svg>
                    </div>
                  </div>

                  {/* Message app header */}
                  <div style={{ background: "#1C1C1E", borderBottom: "1px solid #2C2C2E", padding: "8px 16px 10px", textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: "12px", color: "#AAA", marginBottom: "1px", fontWeight: 600 }}>ForgeForward</div>
                    <div style={{ fontSize: "10px", color: "#666" }}>Text Message</div>
                  </div>

                  {/* Message thread: fills remaining space */}
                  <div style={{ background: "#000", padding: "14px 14px 12px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Incoming bubble: ForgeForward */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3px" }}>
                      <span style={{ fontSize: "10px", color: "#666", paddingLeft: "4px" }}>ForgeForward</span>
                      <div style={{ background: "#2C2C2E", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", fontSize: "13px", lineHeight: 1.45, color: "#fff", maxWidth: "82%" }}>
                        Hi! Reply <strong style={{ color: "#F6413E" }}>YES</strong> to save your spot.
                      </div>
                    </div>

                    {/* Outgoing bubble: You */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3px" }}>
                      <span style={{ fontSize: "10px", color: "#666", paddingRight: "4px" }}>You</span>
                      <div style={{ background: "#F6413E", borderRadius: "16px 16px 4px 16px", padding: "10px 20px", fontSize: "13px", lineHeight: 1.45, color: "#fff", fontWeight: 700 }}>
                        YES
                      </div>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div style={{ background: "#000", padding: "8px 0 12px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "90px", height: "4px", background: "#fff", borderRadius: "2px", opacity: 0.25 }} />
                  </div>

                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Step 3: watch the video — emphasized as important (red accent, like Step 1) */}
          <div style={{ background: "#1A1A1A", borderRadius: "12px", padding: "36px 32px 32px", textAlign: "center", border: "1px solid rgba(246,65,62,0.35)", boxShadow: "0 0 40px rgba(246,65,62,0.08), 0 8px 32px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>
            {/* Red circle + label */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#F6413E", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "24px", color: "#fff", boxShadow: "0 0 20px rgba(246,65,62,0.5)" }}>
                3
              </div>
              <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F6413E" }}>Step 3</span>
            </div>
            {/* Importance tag */}
            <div style={{ display: "inline-block", alignSelf: "center", background: "#F6413E", color: "#fff", borderRadius: "999px", padding: "4px 14px", fontWeight: 800, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>
              Important: Watch This
            </div>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(17px, 2.1vw, 21px)", lineHeight: 1.3, color: "#F6413E" }}>
              Watch The Video Below To See Exactly What We&rsquo;re Doing 👇
            </h3>
            {/* Clicky video + its captions, grouped so the text hugs the video;
                the whole group is centered vertically in the tall card. */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", flex: 1 }}>
              <div style={{ width: "100%", maxWidth: "560px", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(246,65,62,0.35)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                <LiteYouTube id={STEP3_VIDEO_ID} title="Watch exactly what we're doing" rate={1.1} pulse lightbox />
              </div>
              <p style={{ margin: "16px 0 0", fontWeight: 800, fontSize: "clamp(13px, 1.6vw, 15px)", lineHeight: 1.3, color: "#fff" }}>
                👆 Click The Video To Watch It
              </p>
              <p style={{ margin: "8px 0 0", fontWeight: 700, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F6413E" }}>
                Headphones In And Sound Up For Best Experience
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── 5. GOOGLE CALENDAR NOTICE ── */}
      <div style={{ background: "#E8E8E3", padding: "clamp(32px, 5vw, 56px) clamp(20px, 5vw, 40px)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ background: "#fff", border: "2px solid #111", borderRadius: "8px", padding: "20px 24px", marginBottom: "28px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: "clamp(13px, 1.5vw, 15px)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#111" }}>
              Read This First
            </p>
            <p style={{ margin: 0, fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7, color: "#222", fontWeight: 500 }}>
              You may get an email from Google that says &ldquo;Invitation from an unknown sender.&rdquo; This is a Google bug. If you see it, click &ldquo;I know the sender&rdquo; on the event to add it to your calendar.
            </p>
          </div>

          {/* Card */}
          <div style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}>

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

                {/* Info icon */}
                <div style={{ flexShrink: 0, width: "22px", height: "22px", border: "1.5px solid #999", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#999", fontSize: "12px", fontWeight: 700 }}>
                  i
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. FOOTER ── */}
      <div style={{ background: "rgb(16, 18, 20)", borderTop: "1px solid #222", padding: "40px 20px 32px", textAlign: "center" }}>
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
