/**
 * The invitee's first name as Calendly appends it to the /booked redirect URL.
 *
 * Prefers `invitee_first_name`, falls back to the first token of
 * `invitee_full_name`, and returns "" when neither is present so callers can
 * pick their own default. Browser-only — call it from an effect, never during
 * render, or server and client paint different markup.
 */
export function readInviteeFirstName(search: string = window.location.search): string {
  const params = new URLSearchParams(search);
  const first = params.get("invitee_first_name");
  const full = params.get("invitee_full_name");
  return (first || (full ? full.split(" ")[0] : "") || "").trim();
}
