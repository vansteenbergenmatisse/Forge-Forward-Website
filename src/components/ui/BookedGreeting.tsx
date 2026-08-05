"use client";

import { useEffect, useState } from "react";
import { readInviteeFirstName } from "@/lib/inviteeName";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstName(readInviteeFirstName());
  }, []);

  return (
    <>
      <span className="badge" style={{ marginBottom: "18px" }}>Action required</span>

      <h1 className="headline">
        {firstName ? <span style={{ color: "var(--red)" }}>{firstName}, </span> : null}
        your call is not confirmed yet&hellip;
      </h1>

      <p className="lede">
        Do these 3 small steps to confirm your call. It takes 2 to 3 minutes.
      </p>
    </>
  );
}
