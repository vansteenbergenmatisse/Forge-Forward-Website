"use client";

import { useEffect, useState } from "react";

/**
 * Hero copy for /booked. Reads the invitee's first name from the Calendly
 * redirect query string (invitee_first_name, else the first token of
 * invitee_full_name) and personalizes the headline.
 *
 * First paint renders the un-personalized headline so server and client agree;
 * the name is swapped in on mount, avoiding any hydration mismatch.
 */

export default function BookedGreeting() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const first = params.get("invitee_first_name");
    const full = params.get("invitee_full_name");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstName((first || (full ? full.split(" ")[0] : "") || "").trim());
  }, []);

  return (
    <>
      <span className="badge" style={{ marginBottom: "18px" }}>Action required</span>

      <h1 className="headline">
        {firstName ? <span style={{ color: "var(--red)" }}>{firstName}, </span> : null}
        your call is not confirmed yet&hellip;
      </h1>

      <p className="lede">
        Do these three small steps to confirm your call. It takes two to three minutes.
      </p>
    </>
  );
}
