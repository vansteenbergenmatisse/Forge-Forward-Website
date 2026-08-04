"use client";

import { useEffect, useRef } from "react";

export default function IClosedWidget() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any previously injected instance so hot-reloads don't double-up
    const existing = document.getElementById("iclosed-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "iclosed-script";
    script.type = "text/javascript";
    script.src = "https://app.iclosed.io/assets/widget.js";
    // Intentionally NOT async: the script must run synchronously so it
    // finds the .call-details-widget div that is already in the DOM by
    // the time this effect fires (after React has painted the component).
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("iclosed-script");
      if (s) s.remove();
    };
  }, []);

  return (
    // Fixed-height, scrollable viewport so the widget stays a contained box
    // (scroll down inside it) instead of stretching the whole card tall.
    <div
      ref={divRef}
      style={{ width: "100%", height: "360px", overflowY: "auto", overflowX: "hidden" }}
    >
      <div
        className="call-details-widget"
        data-url="https://app.iclosed.io/embed"
        style={{ width: "100%", height: "820px" }}
      />
    </div>
  );
}
