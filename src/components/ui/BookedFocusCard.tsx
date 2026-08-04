"use client";

import { useEffect, useState } from "react";
import StepBadge from "@/components/ui/StepBadge";

/**
 * The white "focus card" at the top of /booked: a progress bar plus the two
 * steps the visitor does right here — text us to confirm, then watch the video.
 *
 * The bar reads the two actions this page actually asks for: tapping the
 * confirm button (50%) and adding the call to a calendar (50%). The calendar
 * half is reported by `CalendarConfirmation` further down the page via the
 * `ff:calendar-added` window event. Both halves persist in localStorage so the
 * bar survives the round-trip to the Messages app.
 */

const SMS_HREF = "sms:+18666901229?&body=Confirming my call";
const CONFIRM_KEY = "ff_call_confirm_tapped";
const CALENDAR_KEY = "ff_call_calendar_added";

function read(key: string): boolean {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function write(key: string) {
  try {
    localStorage.setItem(key, "1");
  } catch {
    /* private mode — the bar just won't persist */
  }
}

export default function BookedFocusCard() {
  const [confirmed, setConfirmed] = useState(false);
  const [calendared, setCalendared] = useState(false);

  useEffect(() => {
    // Restoring persisted progress is a deliberate external-system sync; the
    // deterministic 0% first paint keeps server and client markup identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConfirmed(read(CONFIRM_KEY));
    setCalendared(read(CALENDAR_KEY));

    const onCalendarAdded = () => {
      setCalendared(true);
      write(CALENDAR_KEY);
    };
    window.addEventListener("ff:calendar-added", onCalendarAdded);
    return () => window.removeEventListener("ff:calendar-added", onCalendarAdded);
  }, []);

  const progress = (confirmed ? 50 : 0) + (calendared ? 50 : 0);

  return (
    <div className="focus-card">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Step 1 — confirm by text */}
      <section className="focus-step">
        <StepBadge n={1} hint="5 seconds" title="Text us to confirm" />
        <a
          className="btn btn-red btn-block-mobile"
          href={SMS_HREF}
          onClick={() => {
            setConfirmed(true);
            write(CONFIRM_KEY);
          }}
        >
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
