"use client";

import { useEffect, useState } from "react";
import StepBadge from "@/components/ui/StepBadge";
import { readInviteeFirstName } from "@/lib/inviteeName";

/**
 * Step 1 of /booked: text us to confirm.
 *
 * The message is pre-filled with the invitee's own first name from the Calendly
 * redirect ("Sarah confirming my call") so the text that lands on our side names
 * the person without them typing anything. The same sentence is echoed in the
 * on-a-computer fallback below the button, so someone typing it by hand sends
 * exactly what the tap-to-confirm button would have sent.
 *
 * Client component: the name only exists in the URL. First paint renders the
 * un-personalized message so server and client agree; the name is swapped in on
 * mount, which is also what happens when Calendly sends no name at all.
 */

const SMS_NUMBER = "+18666901229";
const SMS_NUMBER_DISPLAY = "+1 (866) 690-1229";
const SMS_NUMBER_SPOKEN = "plus one, eight six six, six nine zero, one two two nine";

export default function BookedConfirmStep() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstName(readInviteeFirstName());
  }, []);

  const message = firstName ? `${firstName} confirming my call` : "Confirming my call";
  const href = `sms:${SMS_NUMBER}?&body=${encodeURIComponent(message)}`;

  return (
    <section className="focus-step">
      <StepBadge n={1} hint="5 seconds" title="Text to confirm your meeting" />
      <a className="btn btn-red btn-block-mobile" href={href}>
        Tap here to confirm your call <span className="arrow" aria-hidden="true">&rarr;</span>
      </a>
      <p className="fallback">
        On a computer? Just text{" "}
        <a href={href} role="text" aria-label={SMS_NUMBER_SPOKEN}>
          {SMS_NUMBER_DISPLAY}
        </a>{" "}
        and say &ldquo;{message}.&rdquo;
      </p>
    </section>
  );
}
