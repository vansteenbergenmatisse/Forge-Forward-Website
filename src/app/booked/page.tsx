import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import CalendarConfirmation from "@/components/ui/CalendarConfirmation";
import FaqVideoCard from "@/components/ui/FaqVideoCard";
import BreakdownModal from "@/components/ui/BreakdownModal";
import BookedGreeting from "@/components/ui/BookedGreeting";
import BookedFocusCard from "@/components/ui/BookedFocusCard";
import StepBadge from "@/components/ui/StepBadge";

// Condensed uppercase headlines + Inter body — self-hosted, scoped to this route.
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Earnings Disclaimer", href: "/earnings-disclaimer" },
  { label: "Data Protection", href: "/data-protection" },
];

export default function BookedPage() {
  return (
    <div className={`bkPage ${barlow.variable} ${inter.variable}`}>
      <style>{bookedStyles}</style>

      {/* ── 1. TOP NOTICE ── */}
      <div className="notice">
        <p>
          <u>Important:</u> Our team will reach out from a{" "}
          <span className="num" role="text" aria-label="plus one, eight six six">+1(866)</span>{" "}
          number. Please pick up. That&rsquo;s our team.
        </p>
      </div>

      <main className="wrap">

        {/* ── 2. HERO — personalized headline + subtitle ── */}
        <header className="hero">
          <BookedGreeting />
        </header>

        {/* ── 3. FOCUS CARD — Step 1 (confirm by text) + Step 2 (video) ── */}
        <BookedFocusCard />

        {/* ── 4. THE TWO REMAINING ACTIONS ── */}
        <section className="do-both-head">
          <div className="down-chip" aria-hidden="true">
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
              </svg>
            </span>
          </div>
          <div className="kicker red" style={{ marginBottom: "12px" }}>Watched it? Now do both below</div>
          <h2 className="headline">Two last things to confirm your call</h2>
          <p>
            These are the exact 2 steps from the video. Do both now, then double-check they went
            through. Your spot isn&rsquo;t saved until you do.
          </p>
        </section>

        <div className="cards">

          {/* Card 1 — add the call to your calendar */}
          <article className="card">
            <div className="step-dot filled">1</div>
            <span className="kicker red">Do this first</span>
            <h3 className="subhead">Add our call to your calendar</h3>
            <p>Save it to Google Calendar, Outlook, or any other calendar app.</p>

            <div className="callout">
              <span className="icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
                </svg>
              </span>
              <span className="callout-text">Add it to your calendar app in the box below</span>
            </div>

            {/* Booking confirmation + add-to-calendar, read from the Calendly redirect URL */}
            <CalendarConfirmation />

            <div className="inner">
              <div className="row-title">
                <span className="icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                </span>
                <span className="row-label">No Zoom account needed</span>
              </div>
              <p>
                You do not need to download or sign up for anything. Just show up at the scheduled
                time and <strong>we will handle the rest</strong>.
              </p>
            </div>
          </article>

          {/* Card 2 — the Google Calendar "unknown sender" warning */}
          <article className="card">
            <div className="step-dot outline">2</div>
            <span className="kicker">Then this</span>
            <h3 className="subhead">Watch for the Google Calendar email</h3>

            <div className="read-first">
              <div className="lbl">Read this first</div>
              <p>
                You may get an email from Google that says &ldquo;Invitation from an unknown
                sender.&rdquo; This is a Google bug. If you see it, click{" "}
                <strong>&ldquo;I know the sender&rdquo;</strong> on the event to add it to your calendar.
              </p>
            </div>

            <div className="gmock">
              <div className="gmock-head">
                <span className="g" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </span>
                This Google update could affect your appointment
              </div>
              <div className="gmock-body">
                <div className="t">Unknown sender: not added to Calendar yet</div>
                <p>
                  It looks like you&rsquo;ve never been in contact with this sender{" "}
                  <code>[name]@forgeforward.io</code>, so this event hasn&rsquo;t been added to your
                  calendar. It won&rsquo;t appear there unless you say you know the sender.
                </p>
                <p>
                  Avoid clicking links, downloading attachments, or replying with personal
                  information unless you trust the sender.
                </p>
                <div className="gmock-actions">
                  <span className="know-btn">I know the sender</span>
                  <span className="icon" style={{ color: "var(--red)" }} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                    </svg>
                  </span>
                  <span className="know-note">
                    Press the <em>&ldquo;I know the sender&rdquo;</em> button to add the event to your calendar
                  </span>
                </div>
              </div>
            </div>
          </article>

        </div>

        {/* ── 5. STEP 3 — READ THE FULL BREAKDOWN ── */}
        <section className="step3">
          <StepBadge n={3} hint="optional but smart" title="Read the full breakdown" large />
          <BreakdownModal />
        </section>

        {/* ── 6. GET YOUR QUESTIONS ANSWERED (hidden; flip SHOW_FAQ to re-enable) ── */}
        {SHOW_FAQ && (
          <section className="faq">
            <div className="kicker red">Step 4</div>
            <h2 className="headline">Get your questions answered</h2>
            <div className="bkFaqGrid">
              {faqVideos.map((v) => (
                <FaqVideoCard key={v.q} q={v.q} time={v.time} videoId={v.videoId} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* ── 7. FOOTER ── */}
      <footer>
        <div className="wrap">
          <img className="logo" src="/logos/ff-horizontal-white.svg" alt="ForgeForward" />
          <nav>
            {footerLinks.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>
          <p className="copy">© 2026 ForgeForward. All rights reserved.</p>
          <p className="legal">
            This website is not part of the YouTube, Google, or Facebook website; Google Inc or
            Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any
            way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
          </p>
        </div>
      </footer>

    </div>
  );
}

/**
 * Page-scoped design system. Everything hangs off `.bkPage` so none of it can
 * leak into the rest of the site (which runs the light ivory/navy theme).
 * `CalendarConfirmation` and `BookedFocusCard` render inside this scope and
 * reuse these same classes.
 */
const bookedStyles = `
  .bkPage {
    --red: #F6413E; --red-hover: #E1332F;
    --charcoal: #1E1C1A; --charcoal-raised: #2A2724;
    --ivory: #F5F2EC; --ivory-line: #E4DFD6;
    --gray: #68635F; --gray-dark: #C9C5C0; --dark-line: #3A3633;
    min-height: 100vh;
    background: var(--charcoal);
    color: var(--gray-dark);
    font-family: var(--font-inter), Inter, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .bkPage a { color: var(--red); text-decoration: underline; text-underline-offset: 3px; }
  .bkPage a:hover { color: var(--red-hover); }
  .bkPage .headline { font-family: var(--font-barlow), 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase; line-height: 0.95; color: #fff; margin: 0; }
  .bkPage .subhead { font-family: var(--font-barlow), 'Barlow Condensed', sans-serif; font-weight: 700; text-transform: uppercase; line-height: 1; margin: 0; color: #fff; }
  .bkPage .kicker { font-size: 13px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gray-dark); }
  .bkPage .kicker.red { color: var(--red); font-weight: 600; }
  /* Step labels carry the page's structure, so they sit a notch louder than
     the other kickers: bolder, full-contrast number, red marker. */
  .bkPage .step-kicker { display: inline-flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 700; letter-spacing: 0.16em; }
  .bkPage .step-kicker .mark { width: 7px; height: 7px; border-radius: 999px; background: var(--red); flex: none; }
  .bkPage .step-kicker .n { color: #fff; }
  .bkPage .step-kicker .hint { font-weight: 500; color: var(--gray-dark); }
  .bkPage .icon { display: inline-flex; flex: none; vertical-align: middle; }
  .bkPage .icon svg { display: block; }

  /* Top notice */
  .bkPage .notice { background: #fff; border-bottom: 3px solid var(--red); text-align: center; padding: 12px 16px; overflow-x: auto; }
  .bkPage .notice p { margin: 0; font-weight: 600; font-size: clamp(11px, 1.5vw, 14px); line-height: 1.4; color: var(--charcoal); white-space: nowrap; }
  .bkPage .notice u { text-underline-offset: 3px; }
  .bkPage .notice .num { color: var(--red); font-weight: 700; }

  /* Layout */
  .bkPage .wrap { max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
  .bkPage .hero { padding-top: 20px; text-align: center; }
  .bkPage .hero h1 { font-size: clamp(40px, 6.4vw, 60px); }
  /* Wide enough to keep the subtitle on one line from tablet up. */
  .bkPage .hero .lede { font-size: clamp(15px, 1.6vw, 17px); line-height: 1.6; max-width: 660px; margin: 16px auto 0; }

  /* Focus card */
  .bkPage .focus-card { width: min(720px, 100%); margin: clamp(22px, 3.4vw, 32px) auto 0; background: #fff; border-radius: 16px; overflow: hidden; }
  .bkPage .progress-track { height: 6px; background: var(--ivory-line); }
  .bkPage .progress-fill { height: 100%; background: var(--red); }
  .bkPage .progress-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 11px clamp(24px, 6vw, 64px) 0; font-size: 11.5px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  .bkPage .progress-meta .status { color: var(--gray); }
  .bkPage .progress-meta .pct { color: var(--red); }
  .bkPage .focus-step { padding: clamp(26px, 4vw, 38px) clamp(24px, 6vw, 64px) clamp(30px, 4.6vw, 44px); text-align: center; }
  .bkPage .focus-step + .focus-step { border-top: 1px solid var(--ivory-line); }
  .bkPage .focus-step .kicker { color: var(--gray); margin-bottom: 12px; }
  .bkPage .focus-step .step-kicker .n { color: var(--charcoal); }
  .bkPage .focus-step .step-kicker .hint { color: var(--gray); }
  .bkPage .focus-step h2 { font-size: clamp(28px, 4vw, 36px); color: var(--charcoal); margin: 0 0 24px; }
  .bkPage .focus-step h2.tight { margin-bottom: 12px; }
  .bkPage .focus-step .note { font-size: 13.5px; line-height: 1.6; color: var(--gray); margin: 0 0 20px; }
  .bkPage .focus-step .fallback { font-size: 13px; color: var(--gray); margin: 14px 0 0; line-height: 1.5; }
  .bkPage .focus-step .fallback a { color: var(--charcoal); font-weight: 600; }
  .bkPage .focus-step .fallback a:hover { color: var(--red); }

  /* Buttons */
  .bkPage .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 50px; padding: 0 24px; border-radius: 999px; border: none; font-family: inherit; font-weight: 600; font-size: 15px; cursor: pointer; transition: background 150ms ease-out, transform 150ms ease-out; max-width: 100%; white-space: nowrap; text-decoration: none; }
  .bkPage .btn:active { transform: scale(0.98); }
  .bkPage .btn:focus-visible { outline: 2px solid var(--red); outline-offset: 3px; }
  .bkPage .btn-red, .bkPage a.btn-red { background: var(--red); color: #fff; }
  .bkPage .btn-red:hover, .bkPage a.btn-red:hover { background: var(--red-hover); color: #fff; }
  .bkPage .btn-white, .bkPage a.btn-white { background: #fff; color: var(--charcoal); }
  .bkPage .btn-white:hover, .bkPage a.btn-white:hover { background: var(--ivory); color: var(--charcoal); }
  .bkPage .btn .arrow { font-size: 16px; line-height: 1; }
  @media (max-width: 640px) { .bkPage .btn-block-mobile { width: 100%; } }

  /* Video */
  .bkPage .video-shell { position: relative; aspect-ratio: 16 / 9; background: var(--charcoal); border-radius: 16px; overflow: hidden; }
  .bkPage .video-shell iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; }

  /* "Two last things" header */
  .bkPage .do-both-head { text-align: center; padding-top: clamp(44px, 7vw, 56px); }
  .bkPage .down-chip { width: 40px; height: 40px; border-radius: 999px; border: 1px solid var(--dark-line); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--red); animation: bkNudge 1.6s ease-in-out infinite; will-change: transform; }
  .bkPage .do-both-head h2 { font-size: clamp(32px, 4.8vw, 46px); }
  .bkPage .do-both-head p { font-size: clamp(13.5px, 1.5vw, 15px); line-height: 1.6; max-width: 560px; margin: 16px auto 0; }
  @keyframes bkNudge { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

  /* Cards */
  .bkPage .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; width: min(1080px, 100%); margin: clamp(28px, 5vw, 40px) auto 0; }
  @media (max-width: 400px) { .bkPage .cards { grid-template-columns: 1fr; } }
  .bkPage .card { background: var(--charcoal-raised); border: 1px solid var(--dark-line); border-radius: 16px; padding: clamp(24px, 4vw, 40px); text-align: center; }
  .bkPage .card h3 { font-size: clamp(25px, 3.1vw, 31px); color: #fff; margin: 0 0 8px; }
  .bkPage .card > p { font-size: 14px; line-height: 1.6; margin: 0 0 22px; }
  .bkPage .step-dot { width: 44px; height: 44px; border-radius: 999px; font-weight: 700; font-size: 17px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }
  .bkPage .step-dot.filled { background: var(--red); color: #fff; }
  .bkPage .step-dot.outline { border: 2px solid var(--dark-line); color: var(--gray-dark); }
  .bkPage .card .kicker { display: block; font-size: 12px; margin-bottom: 14px; }

  /* Inner blocks */
  .bkPage .inner { background: var(--charcoal); border: 1px solid var(--dark-line); border-radius: 12px; padding: 20px; text-align: left; }
  .bkPage .inner + .inner, .bkPage .callout + .inner, .bkPage .inner + .callout { margin-top: 14px; }
  .bkPage .callout { border: 1px solid var(--red); border-radius: 12px; padding: 13px 17px; display: flex; align-items: center; gap: 10px; text-align: left; color: var(--red); }
  .bkPage .callout .callout-text { font-size: 13.5px; font-weight: 600; color: #fff; }
  .bkPage .inner .row-title { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; color: var(--red); }
  .bkPage .inner .row-title .row-label { font-size: 14.5px; font-weight: 600; color: #fff; }
  .bkPage .inner p { font-size: 13px; line-height: 1.6; margin: 0; color: var(--gray-dark); }
  .bkPage .inner p strong { color: #fff; font-weight: 600; }

  /* Booking confirmation (CalendarConfirmation) */
  .bkPage .booked-title { font-family: var(--font-barlow), 'Barlow Condensed', sans-serif; font-weight: 700; font-size: clamp(23px, 2.9vw, 28px); line-height: 1.05; text-transform: uppercase; color: #fff; margin: 14px 0 6px; }
  .bkPage .badge { display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 12px; border-radius: 999px; background: var(--red); color: #fff; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
  .bkPage .detail-box { background: var(--charcoal-raised); border: 1px solid var(--dark-line); border-radius: 12px; overflow: hidden; margin: 18px 0; }
  .bkPage .detail-row { padding: 14px 16px; display: flex; gap: 10px; align-items: flex-start; color: var(--red); }
  .bkPage .detail-row + .detail-row { border-top: 1px solid var(--dark-line); }
  .bkPage .detail-row .lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-dark); margin-bottom: 3px; }
  .bkPage .detail-row .val { font-size: 14px; font-weight: 600; color: #fff; }
  .bkPage .detail-row .sub { font-size: 12.5px; color: var(--gray-dark); }
  .bkPage .cal-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gray-dark); margin: 0 0 10px; display: block; }
  .bkPage .cal-links { display: flex; flex-direction: column; gap: 10px; }
  .bkPage .cal-link { width: 100%; background: #fff; border: none; border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 10px; cursor: pointer; text-decoration: none; text-align: left; font-family: inherit; color: var(--red); transition: background 150ms ease-out; -webkit-tap-highlight-color: transparent; }
  .bkPage .cal-link:hover { background: var(--ivory); color: var(--red); }
  .bkPage .cal-link:focus-visible { outline: 2px solid var(--red); outline-offset: 2px; }
  .bkPage .cal-link .cc-logo { width: 22px; height: 22px; flex: none; }
  .bkPage .cal-link .cal-name { flex: 1; font-size: 14px; font-weight: 600; color: var(--charcoal); }
  .bkPage .cal-link .chev { color: var(--gray); flex: none; transition: transform 150ms ease-out; }
  .bkPage .cal-link:hover .chev { transform: translateX(2px); }
  .bkPage .inner .cal-note { font-size: 11.5px; line-height: 1.5; color: var(--gray-dark); margin: 14px 0 0; text-align: center; }

  /* "Read this first" + the Gmail warning mock */
  .bkPage .read-first { background: #fff; border-radius: 12px; padding: 18px 20px; text-align: left; margin-bottom: 14px; }
  .bkPage .read-first .lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--charcoal); margin-bottom: 6px; }
  .bkPage .read-first p { font-size: 13px; line-height: 1.6; color: var(--gray); margin: 0; }
  .bkPage .read-first p strong { color: var(--charcoal); font-weight: 600; }
  .bkPage .gmock { border-radius: 12px; overflow: hidden; text-align: left; }
  .bkPage .gmock-head { background: var(--red); color: #fff; padding: 12px 16px; display: flex; align-items: center; gap: 10px; font-size: 11.5px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; line-height: 1.35; }
  .bkPage .gmock-head .g { width: 22px; height: 22px; border-radius: 999px; background: #fff; display: flex; align-items: center; justify-content: center; flex: none; }
  .bkPage .gmock-body { background: var(--ivory); padding: 18px 20px; }
  .bkPage .gmock-body .t { font-size: 14px; font-weight: 600; color: var(--charcoal); margin-bottom: 6px; }
  .bkPage .gmock-body p { font-size: 12.5px; line-height: 1.6; color: var(--gray); margin: 0 0 14px; }
  .bkPage .gmock-body code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11.5px; background: var(--charcoal); color: #fff; padding: 2px 7px; border-radius: 6px; white-space: nowrap; }
  .bkPage .gmock-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .bkPage .know-btn { border: 2px solid var(--red); border-radius: 8px; padding: 9px 17px; font-size: 13px; font-weight: 600; color: var(--charcoal); background: #fff; white-space: nowrap; }
  .bkPage .know-note { background: var(--charcoal); color: #fff; border-radius: 8px; padding: 11px 15px; font-size: 12px; line-height: 1.5; flex: 1; min-width: 160px; }
  .bkPage .know-note em { color: var(--red); font-weight: 600; font-style: normal; }

  /* Step 3 */
  .bkPage .step3 { text-align: center; padding: clamp(52px, 8vw, 72px) 0 clamp(44px, 7vw, 64px); }
  .bkPage .step3 h2 { font-size: clamp(30px, 4.3vw, 42px); margin: 12px 0 28px; }

  /* FAQ (hidden behind SHOW_FAQ) */
  .bkPage .faq { text-align: center; padding: 0 0 clamp(44px, 7vw, 64px); }
  .bkPage .faq h2 { font-size: clamp(30px, 4.3vw, 42px); margin: 12px 0 0; }
  .bkPage .bkFaqGrid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(14px, 2vw, 24px); max-width: 1080px; margin: clamp(20px, 3vw, 32px) auto 0; }
  .bkPage .bkFaqCard { display: block; width: 100%; transition: transform .15s ease; }
  .bkPage .bkFaqCard:hover { transform: translateY(-3px); }
  @media (min-width: 761px) { .bkPage .bkFaqGrid > .bkFaqCard:last-child:nth-child(odd) { grid-column: 1 / -1; width: calc(50% - clamp(7px, 1vw, 12px)); margin-inline: auto; } }
  @media (max-width: 760px) { .bkPage .bkFaqGrid { grid-template-columns: 1fr; } }

  /* Footer */
  .bkPage footer { border-top: 1px solid var(--dark-line); padding: clamp(36px, 6vw, 48px) 0 40px; text-align: center; margin-top: clamp(8px, 2vw, 16px); }
  .bkPage footer .logo { height: clamp(18px, 2.2vw, 22px); width: auto; display: block; margin: 0 auto 22px; }
  .bkPage footer nav { display: flex; justify-content: center; gap: clamp(14px, 2.5vw, 24px); flex-wrap: wrap; margin-bottom: 20px; }
  .bkPage footer nav a { color: var(--gray-dark); font-size: 13px; text-decoration: none; }
  .bkPage footer nav a:hover { color: #fff; }
  .bkPage footer .copy { font-size: 13px; color: var(--gray-dark); margin: 0 0 16px; }
  .bkPage footer .legal { font-size: 11.5px; line-height: 1.6; color: #7A7570; max-width: 640px; margin: 0 auto; }

  @media (prefers-reduced-motion: reduce) {
    .bkPage .down-chip { animation: none; }
    .bkPage .btn, .bkPage .cal-link, .bkPage .cal-link .chev, .bkPage .progress-fill { transition: none; }
    .bkPage .btn:active { transform: none; }
    .bkPage .cal-link:hover .chev { transform: none; }
  }
`;
