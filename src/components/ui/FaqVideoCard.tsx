"use client";

import { useState, type CSSProperties } from "react";

type FaqVideoCardProps = {
  q: string;
  time: string;
  videoId: string;
};

const cardBase: CSSProperties = {
  position: "relative",
  aspectRatio: "16 / 9",
  borderRadius: "12px",
  overflow: "hidden",
};

export default function FaqVideoCard({ q, time, videoId }: FaqVideoCardProps) {
  const [playing, setPlaying] = useState(false);

  // Clicked: the YouTube player loads inline, in place — no new tab, no leaving the page.
  if (playing) {
    return (
      <div className="bkFaqCard" style={{ ...cardBase, background: "#000" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={q}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  // Facade: the branded thumbnail. Title sits just above the play button so it stays readable.
  return (
    <button
      type="button"
      className="bkFaqCard"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${q}`}
      style={{
        ...cardBase,
        padding: 0,
        border: 0,
        cursor: "pointer",
        fontFamily: "inherit",
        background: "radial-gradient(115% 120% at 50% 32%, #a5342f 0%, #6d1a17 44%, #1c0a09 100%)",
      }}
    >
      {/* Title above the play button, both centered as a group — nudged up 4px to clear the control bar */}
      <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "clamp(12px, 2vw, 18px)", padding: "clamp(16px, 3vw, 24px) clamp(18px, 4vw, 36px) clamp(34px, 5vw, 44px)", transform: "translateY(-4px)" }}>
        <span style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.35, textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
          {q}
        </span>
        <span style={{ width: "64px", height: "46px", borderRadius: "12px", background: "rgba(224,42,39,0.92)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "16px solid #fff", marginLeft: "3px" }} />
        </span>
      </span>

      {/* Player control bar — decorative, part of the facade */}
      <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px" }}>
        <span style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid #fff", flexShrink: 0 }} aria-hidden="true" />
        <span style={{ color: "#fff", fontSize: "11px", fontWeight: 600, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{time}</span>
        <span style={{ flex: 1, height: "3px", borderRadius: "2px", background: "rgba(246,65,62,0.35)", position: "relative" }}>
          <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "#F6413E", borderRadius: "2px" }} />
          <span style={{ position: "absolute", left: "6px", top: "50%", transform: "translate(-50%, -50%)", width: "9px", height: "9px", borderRadius: "50%", background: "#F6413E" }} />
        </span>
        <span style={{ border: "1px solid rgba(255,255,255,0.7)", borderRadius: "3px", padding: "0 3px", fontSize: "9px", fontWeight: 700, color: "#fff", lineHeight: "13px", flexShrink: 0 }} aria-hidden="true">CC</span>
        <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="#fff" />
          <path d="M16.5 8.5a4.5 4.5 0 010 7" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }} aria-hidden="true">
          <path d="M19.14 12.94a7.49 7.49 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.61-.22l-2.39.96a7 7 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.58.24-1.12.56-1.62.94l-2.39-.96a.5.5 0 00-.61.22L2.71 8.84a.5.5 0 00.12.64l2.03 1.58a7.49 7.49 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.92 3.32c.14.24.42.34.68.22l2.39-.96c.5.38 1.04.7 1.62.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.58-.24 1.12-.56 1.62-.94l2.39.96c.26.12.54.02.68-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" />
        </svg>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true">
          <path d="M3 8V4h4M21 8V4h-4M3 16v4h4M21 16v4h-4" />
        </svg>
      </span>
    </button>
  );
}
