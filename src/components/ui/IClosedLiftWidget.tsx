"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function IClosedLiftWidget() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/booked") return;
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.setAttribute("data-cta-widget", "nz3Ff-B7mUca");
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [pathname]);

  return null;
}
