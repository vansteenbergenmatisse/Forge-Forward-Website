"use client";

import { useEffect, useState } from "react";

/**
 * Top-of-page greeting for /booked. Reads the invitee's first name from the
 * Calendly redirect query string (invitee_first_name, else the first token of
 * invitee_full_name) and personalizes the headline.
 *
 * First paint renders the un-personalized headline so server and client agree;
 * the name is swapped in on mount, avoiding any hydration mismatch.
 */

const BRAND_RED = "#F6413E";
const TEXT_DIM = "#9A9A9A";

export default function BookedGreeting() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const first = params.get("invitee_first_name");
    const full = params.get("invitee_full_name");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstName((first || (full ? full.split(" ")[0] : "") || "").trim());
  }, []);

  const title = firstName
    ? `${firstName}, your call is not confirmed yet…`
    : "Your call is not confirmed yet…";

  return (
    <>
      {/* Eyebrow — high-contrast alert badge */}
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        margin: "0 0 18px",
        background: BRAND_RED,
        color: "#fff",
        fontWeight: 900,
        fontSize: "clamp(11px, 1.4vw, 13px)",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        padding: "8px 18px",
        borderRadius: "999px",
        boxShadow: "0 0 26px rgba(246,65,62,0.55)",
      }}>
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff", boxShadow: "0 0 8px rgba(255,255,255,0.9)" }} aria-hidden="true" />
        Action required
      </span>

      {/* Personalized headline */}
      <h1 style={{
        margin: "0 auto",
        fontWeight: 900,
        fontSize: "clamp(30px, 6vw, 52px)",
        lineHeight: 1.08,
        maxWidth: "960px",
        letterSpacing: "-0.02em",
        color: "#fff",
        textWrap: "balance",
      }}>
        {title}
      </h1>

      {/* Subtitle */}
      <p style={{ margin: "clamp(14px, 2vw, 18px) auto 0", fontSize: "clamp(14px, 1.7vw, 17px)", color: TEXT_DIM, fontWeight: 500, lineHeight: 1.6, maxWidth: "620px" }}>
        Do these three small steps to confirm your call. It takes two to three minutes.
      </p>
    </>
  );
}
