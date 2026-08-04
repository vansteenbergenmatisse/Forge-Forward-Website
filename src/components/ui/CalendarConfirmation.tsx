"use client";

import { useEffect, useState } from "react";

/**
 * Reads the booking details Calendly appends to its redirect URL
 * (enable "Pass event details to your redirected page" in Calendly, and
 * point the redirect at https://forgeforward.io/booked) and renders a
 * confirmation + native "add to calendar" links (Google + Outlook + Apple).
 *
 * Everything is derived purely from the URL query string:
 *   event_type_name, event_start_time, event_end_time (ISO8601 in the
 *   invitee's timezone, offset only), invitee_first_name / invitee_full_name.
 *
 * No network calls, no SDK — safe on a statically prerendered page.
 *
 * Presentation classes (.badge, .detail-box, .cal-link, …) come from the
 * page-scoped stylesheet in src/app/booked/page.tsx.
 */

type Booking = {
  firstName: string;
  eventName: string;
  dateLabel: string;
  timeLabel: string;
  tzLabel: string;
  googleUrl: string;
  outlookUrl: string;
  ics: string;
};

/** Minutes east of UTC encoded in an ISO8601 string, or null if none/Z. */
function isoOffsetMinutes(iso: string): number | null {
  if (/[zZ]$/.test(iso)) return 0;
  const m = iso.match(/([+-])(\d{2}):(\d{2})$/);
  if (!m) return null;
  const sign = m[1] === "-" ? -1 : 1;
  return sign * (parseInt(m[2], 10) * 60 + parseInt(m[3], 10));
}

/** The literal wall-clock components as written in the ISO string. */
function isoWallParts(iso: string) {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/);
  if (!m) return null;
  return { y: +m[1], mo: +m[2], d: +m[3], hh: +m[4], mm: +m[5], ss: +(m[6] || 0) };
}

/** "GMT-5" / "GMT+5:30" from an offset in minutes. */
function gmtLabel(min: number | null): string {
  if (min == null) return "";
  const sign = min < 0 ? "-" : "+";
  const abs = Math.abs(min);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `GMT${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`;
}

/** YYYYMMDDTHHMMSSZ (UTC) for the Google Calendar template link. */
function toUtcStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function buildBooking(params: URLSearchParams): Booking | null {
  const startIso = params.get("event_start_time");
  if (!startIso) return null;

  const wall = isoWallParts(startIso);
  const startInstant = new Date(startIso);
  if (!wall || isNaN(startInstant.getTime())) return null;

  const rawEnd = params.get("event_end_time");
  const endInstant =
    rawEnd && !isNaN(new Date(rawEnd).getTime())
      ? new Date(rawEnd)
      : new Date(startInstant.getTime() + 30 * 60 * 1000);
  const endIso = rawEnd || endInstant.toISOString();

  // First name: explicit param, else first token of full name, else friendly default.
  const first = params.get("invitee_first_name");
  const full = params.get("invitee_full_name");
  const firstName = (first || (full ? full.split(" ")[0] : "") || "there").trim();

  // Drop a trailing campaign tag (e.g. "15-min Discovery call - ad" -> "...call").
  let eventName = (params.get("event_type_name") || "Your ForgeForward call").trim();
  eventName = eventName.replace(/\s+[-–—]\s+\S+$/, "").trim() || eventName;

  // Render date/time from the wall clock exactly as Calendly wrote it (the
  // invitee's own timezone), independent of this browser's timezone.
  const wallUtc = new Date(Date.UTC(wall.y, wall.mo - 1, wall.d, wall.hh, wall.mm, wall.ss));
  const dateLabel = wallUtc.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const timeLabel = wallUtc.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });

  // Timezone label: use the browser's named zone only when its offset matches
  // the booking offset (i.e. the visitor is in the timezone they booked in);
  // otherwise fall back to the honest GMT offset from the ISO string.
  const offset = isoOffsetMinutes(startIso);
  const browserOffset = -startInstant.getTimezoneOffset();
  let tzLabel = gmtLabel(offset);
  if (offset != null && browserOffset === offset) {
    try {
      const named = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
        .formatToParts(startInstant)
        .find((p) => p.type === "timeZoneName")?.value;
      if (named) tzLabel = named;
    } catch {
      /* keep GMT fallback */
    }
  }

  const details = `${eventName} with ForgeForward. Your video call link is in the confirmation email from Calendly.`;

  const googleUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(eventName)}` +
    `&dates=${toUtcStamp(startInstant)}/${toUtcStamp(endInstant)}` +
    `&details=${encodeURIComponent(details)}`;

  const outlookUrl =
    "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent" +
    `&subject=${encodeURIComponent(eventName)}` +
    `&startdt=${encodeURIComponent(startIso)}` +
    `&enddt=${encodeURIComponent(endIso)}` +
    `&body=${encodeURIComponent(details)}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ForgeForward//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${toUtcStamp(startInstant)}-forgeforward@forgeforward.io`,
    `DTSTAMP:${toUtcStamp(new Date())}`,
    `DTSTART:${toUtcStamp(startInstant)}`,
    `DTEND:${toUtcStamp(endInstant)}`,
    `SUMMARY:${eventName}`,
    `DESCRIPTION:${details}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return { firstName, eventName, dateLabel, timeLabel, tzLabel, googleUrl, outlookUrl, ics };
}

function downloadIcs(booking: Booking) {
  const blob = new Blob([booking.ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "forgeforward-call.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Tells the focus card at the top of the page to fill its progress bar. */
function markCalendarAdded() {
  window.dispatchEvent(new CustomEvent("ff:calendar-added"));
}

/* ---- Brand logos (inline, self-contained — no external requests) ---- */

function GoogleCalendarLogo() {
  return (
    <svg className="cc-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="5" fill="#fff" stroke="#DADCE0" />
      <rect x="8" y="8" width="32" height="4.5" rx="2.25" fill="#4285F4" />
      <rect x="8" y="35.5" width="32" height="4.5" rx="2.25" fill="#FBBC04" />
      <rect x="8" y="8" width="4.5" height="32" rx="2.25" fill="#EA4335" />
      <rect x="35.5" y="8" width="4.5" height="32" rx="2.25" fill="#34A853" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="#4285F4"
      >
        31
      </text>
    </svg>
  );
}

function OutlookLogo() {
  return (
    <svg className="cc-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="34" height="30" rx="6" fill="#0F6CBD" />
      <path
        d="M12 18l12 8 12-8"
        fill="none"
        stroke="#BFE0F8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="24" cy="24.5" rx="8.5" ry="9.5" fill="#0F6CBD" stroke="#fff" strokeWidth="4.5" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg className="cc-logo" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.05-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.14-2.53.99-1.45 1.4-2.85 1.42-2.93-.03-.01-2.73-1.05-2.76-4.15z" />
      <path d="M14.63 4.44c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.33-.58 3.03-1.45z" />
    </svg>
  );
}

function Chevron() {
  return (
    <span className="icon chev" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CalendarGlyph() {
  return (
    <span className="icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    </span>
  );
}

function ClockGlyph() {
  return (
    <span className="icon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    </span>
  );
}

export default function CalendarConfirmation() {
  // `null` = not yet read (server + first client paint, keeps hydration stable);
  // `{ booking }` = URL parsed on the client, booking may itself be null.
  const [state, setState] = useState<{ booking: Booking | null } | null>(null);

  useEffect(() => {
    // Reading window.location on mount is a deliberate external-system sync; the
    // deterministic first paint below prevents any hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ booking: buildBooking(new URLSearchParams(window.location.search)) });
  }, []);

  const mounted = state !== null;
  const booking = state?.booking ?? null;

  if (!mounted) {
    return (
      <div className="inner">
        <p>Loading your booking details&hellip;</p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="inner">
        <div className="row-title">
          <CalendarGlyph />
          <span className="row-label">No booking found yet</span>
        </div>
        <p>
          Once you schedule your call, your meeting details and one-tap calendar links (Google,
          Outlook and Apple) will appear right here.
        </p>
      </div>
    );
  }

  return (
    <div className="inner">
      <span className="badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        You&rsquo;re booked
      </span>

      <div className="booked-title">Hey {booking.firstName}, your call is booked.</div>

      <p>
        It&rsquo;s set for <strong>{booking.dateLabel}</strong> at <strong>{booking.timeLabel}</strong>
        {booking.tzLabel ? ` (${booking.tzLabel})` : ""}. Add it to your calendar so you don&rsquo;t
        miss it.
      </p>

      <div className="detail-box">
        <div className="detail-row">
          <CalendarGlyph />
          <div>
            <div className="lbl">Meeting</div>
            <div className="val">{booking.eventName}</div>
          </div>
        </div>
        <div className="detail-row">
          <ClockGlyph />
          <div>
            <div className="lbl">When</div>
            <div className="val">{booking.dateLabel}</div>
            <div className="sub">
              {booking.timeLabel}
              {booking.tzLabel ? ` · ${booking.tzLabel}` : ""}
            </div>
          </div>
        </div>
      </div>

      <span className="cal-label">Add to your calendar</span>
      <div className="cal-links">
        <a
          className="cal-link"
          href={booking.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={markCalendarAdded}
        >
          <GoogleCalendarLogo />
          <span className="cal-name">Add to Google Calendar</span>
          <Chevron />
        </a>
        <a
          className="cal-link"
          href={booking.outlookUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={markCalendarAdded}
        >
          <OutlookLogo />
          <span className="cal-name">Add to Outlook Calendar</span>
          <Chevron />
        </a>
        <button
          className="cal-link"
          type="button"
          onClick={() => {
            downloadIcs(booking);
            markCalendarAdded();
          }}
        >
          <AppleLogo />
          <span className="cal-name">Add to Apple Calendar</span>
          <Chevron />
        </button>
      </div>

      <p className="cal-note">Your video call link is in the confirmation email from Calendly.</p>
    </div>
  );
}
