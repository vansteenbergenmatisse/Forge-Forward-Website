"use client";
import { useState } from "react";

export default function YouTubeErrorMock() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(true)}
      style={{
        position: "absolute",
        inset: 0,
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        cursor: clicked ? "default" : "pointer",
        userSelect: "none",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      {/* Main area */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!clicked ? (
          /* Thumbnail state: looks like a paused video ready to play */
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
            {/* YouTube play button */}
            <div style={{
              width: "68px",
              height: "48px",
              background: "#FF0000",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ) : (
          /* Error state: WiFi error */
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "0 24px", textAlign: "center" }}>
            {/* WiFi error icon */}
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M1 1l22 22" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10.71 5.05A16 16 0 0 1 22.56 9" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="20" r="1" fill="#aaa"/>
            </svg>
            <p style={{ margin: 0, color: "#e8e8e8", fontSize: "14px", lineHeight: 1.4 }}>
              Check your internet connection
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); setClicked(false); }}
              style={{
                marginTop: "4px",
                background: "transparent",
                color: "#3ea6ff",
                border: "none",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                padding: "6px 12px",
                letterSpacing: "0.01em",
              }}
            >
              Retry
            </button>
          </div>
        )}
      </div>

      {/* Bottom controls bar */}
      <div style={{ background: "rgba(0,0,0,0.9)", padding: "0 12px 4px" }}>
        {/* Progress bar */}
        <div style={{ height: "3px", background: "#333", borderRadius: "2px", margin: "6px 0 8px" }}>
          <div style={{ width: "0%", height: "100%", background: "#FF0000", borderRadius: "2px" }} />
        </div>
        {/* Controls row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Play */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa"><path d="M8 5v14l11-7z"/></svg>
            {/* Next */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
            {/* Volume */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
            <span style={{ color: "#aaa", fontSize: "11px" }}>0:00 / 0:00</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Settings */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.02 7.02 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.476.476 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            {/* Fullscreen */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
