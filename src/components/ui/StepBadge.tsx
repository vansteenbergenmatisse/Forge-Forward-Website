/**
 * Step marker for /booked: a quiet uppercase kicker ("Step 1 · 5 seconds")
 * above a condensed heading. Sizing comes from the surrounding section
 * (`.focus-step h2` / `.step3 h2`), so this only picks the type treatment.
 *
 * Server component — no client behavior needed.
 */

export default function StepBadge({
  n,
  title,
  hint,
  large = false,
  tight = false,
}: {
  n: number;
  title: string;
  /** Optional time/effort hint appended to the kicker. */
  hint?: string;
  /** Use the display headline face instead of the smaller subhead. */
  large?: boolean;
  /** Tighten the gap below when a note follows the heading. */
  tight?: boolean;
}) {
  return (
    <>
      <div className="kicker">
        Step {n}
        {hint ? ` · ${hint}` : ""}
      </div>
      <h2 className={`${large ? "headline" : "subhead"}${tight ? " tight" : ""}`}>{title}</h2>
    </>
  );
}
