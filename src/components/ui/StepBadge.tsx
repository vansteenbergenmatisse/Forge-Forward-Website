/**
 * High-contrast "STEP N" marker used to give the /booked page a clear
 * top-to-bottom hierarchy: title → step 1 → step 2 → step 3.
 *
 * A filled red pill (white text) carries the step number, with a bold white
 * heading underneath. Server component — no client behavior needed.
 */

const BRAND_RED = "#F6413E";

export default function StepBadge({ n, title }: { n: number; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "9px",
          background: BRAND_RED,
          color: "#fff",
          fontWeight: 900,
          fontSize: "clamp(12px, 1.5vw, 14px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "8px 18px",
          borderRadius: "999px",
          boxShadow: "0 0 22px rgba(246,65,62,0.5)",
        }}
      >
        {/* Number chip inside the pill for extra weight */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "#fff",
            color: BRAND_RED,
            fontSize: "13px",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {n}
        </span>
        Step {n}
      </span>

      <h2
        style={{
          margin: "14px 0 0",
          fontWeight: 900,
          fontSize: "clamp(24px, 3.4vw, 36px)",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          color: "#fff",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
