import StepBadge from "@/components/ui/StepBadge";

/**
 * The white "focus card" at the top of /booked: a progress bar plus the two
 * steps the visitor does right here — text us to confirm, then watch the video.
 *
 * The bar is deliberately fixed at 94%: booking the call did nearly all the
 * work, and the remaining sliver is what this page is asking for. It never
 * moves, so it reads as a status ("almost there") rather than a live meter.
 *
 * Server component — no client behavior needed.
 */

const SMS_HREF = "sms:+18666901229?&body=Confirming my call";
const PROGRESS = 94;

export default function BookedFocusCard() {
  return (
    <div className="focus-card">
      <div
        className="progress-track"
        role="img"
        aria-label={`Almost there — your booking is ${PROGRESS}% complete`}
      >
        <div className="progress-fill" style={{ width: `${PROGRESS}%` }} />
      </div>
      <div className="progress-meta" aria-hidden="true">
        <span className="status">Almost there</span>
        <span className="pct">{PROGRESS}% complete</span>
      </div>

      {/* Step 1 — confirm by text */}
      <section className="focus-step">
        <StepBadge n={1} hint="5 seconds" title="Text us to confirm" />
        <a className="btn btn-red btn-block-mobile" href={SMS_HREF}>
          Tap here to confirm your call <span className="arrow" aria-hidden="true">&rarr;</span>
        </a>
        <p className="fallback">
          On a computer? Just text{" "}
          <a
            href={SMS_HREF}
            role="text"
            aria-label="plus one, eight six six, six nine zero, one two two nine"
          >
            +1 (866) 690-1229
          </a>{" "}
          and say &ldquo;Confirming my call.&rdquo;
        </p>
      </section>

      {/* Step 2 — the video (player untouched, embedded exactly as before) */}
      <section className="focus-step">
        <StepBadge n={2} hint="2 minutes" title="Watch the video" tight />
        <p className="note">Watch the video below and complete the 2 easy steps.</p>
        <div className="video-shell">
          <iframe
            src="/booked-vsl.html?banner=0"
            title="Watch this video for how to confirm your call"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="fallback">Headphones in and sound up for the best experience.</p>
      </section>
    </div>
  );
}
