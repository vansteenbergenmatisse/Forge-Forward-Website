import BookedConfirmStep from "@/components/ui/BookedConfirmStep";
import StepBadge from "@/components/ui/StepBadge";

/**
 * The white "focus card" at the top of /booked: a progress bar plus the two
 * steps the visitor does right here — text us to confirm, then watch the video.
 *
 * The bar is deliberately fixed at 94%: booking the call did nearly all the
 * work, and the remaining sliver is what this page is asking for. It never
 * moves, so it reads as a status ("almost there") rather than a live meter.
 *
 * Server component — step 1 is the only client piece, because it reads the
 * invitee's name out of the URL to pre-fill the text message.
 */

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

      {/* Step 1 — confirm by text (client: pre-fills the invitee's name) */}
      <BookedConfirmStep />

      {/* Step 2 — the video (player untouched, embedded exactly as before) */}
      <section className="focus-step">
        <StepBadge n={2} hint="2 minutes" title="Don’t risk missing your meeting" tight />
        <p className="note">
          Watch this video to add this meeting to your calendar, to remember your appointment and
          get the full value from your scheduled call.
        </p>
        <div className="video-shell">
          <iframe
            src="/booked-vsl.html?banner=0&speed=1.25"
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
