"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * Loads the YouTube IFrame API exactly once and resolves when it's ready.
 * Shared across every LiteYouTube instance on the page.
 */
let apiPromise: Promise<void> | null = null;
function loadYouTubeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  // Already loaded.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prev = (window as any).onYouTubeIframeAPIReady;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    document.head.appendChild(tag);
  });
  return apiPromise;
}

type LiteYouTubeProps = {
  /** YouTube video id, e.g. "SSe1JP2a7LQ". */
  id: string;
  /** Accessible label / poster caption. */
  title: string;
  /** Optional custom poster image; defaults to the YouTube thumbnail. */
  poster?: string;
  /** Vertical padding as a % of width — 56.25 = 16:9. */
  aspect?: number;
  /** Playback speed applied on play, e.g. 1.1 for a slightly snappier pace. */
  rate?: number;
  /** Gently bounce the poster play button to draw attention. */
  pulse?: boolean;
  /**
   * When true, clicking the poster opens the video large and centered in a
   * fullscreen modal (dark backdrop, Escape / click-outside to close) instead
   * of playing inline in the small card slot.
   */
  lightbox?: boolean;
};

/**
 * A privacy- and click-locked YouTube player.
 *
 * - Shows a poster with a play button; the iframe (and any YouTube contact)
 *   only loads after the user clicks — so nothing phones home on page load.
 * - Plays WITH sound, because the first play happens inside a user gesture.
 * - A transparent overlay sits on top of the iframe and swallows every click,
 *   toggling play/pause via the JS API. Users can never click through to the
 *   YouTube title, logo, "Watch on YouTube", or end-screen suggestions.
 * - On end, resets to the poster instead of showing clickable suggestions.
 */
export default function LiteYouTube({ id, title, poster, aspect = 56.25, rate = 1, pulse = false, lightbox = false }: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [thumbFallback, setThumbFallback] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  // Only read at render time; the iframe (the sole consumer) mounts client-side
  // after a user click, so this is always populated by the time it's used.
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const thumb =
    poster ??
    `https://i.ytimg.com/vi/${id}/${thumbFallback ? "hqdefault" : "maxresdefault"}.jpg`;

  // Attach the JS API to the iframe once it's rendered, so we can control
  // playback and detect the ended state without letting clicks reach YouTube.
  useEffect(() => {
    if (!activated || !iframeRef.current) return;
    let cancelled = false;

    loadYouTubeAPI().then(() => {
      if (cancelled || !iframeRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const YT = (window as any).YT;
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (e: any) => {
            // Force captions off — belt and suspenders alongside cc_load_policy=0,
            // so a viewer's "captions on" preference can't turn them on here.
            try {
              e.target.unloadModule("captions");
              e.target.unloadModule("cc");
            } catch {
              /* module may not be present yet; cc_load_policy=0 still applies */
            }
            if (rate !== 1) {
              try { e.target.setPlaybackRate(rate); } catch { /* rate unsupported */ }
            }
            e.target.playVideo();
            setPlaying(true);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            if (e.data === YT.PlayerState.ENDED) {
              setEnded(true);
              setPlaying(false);
            } else if (e.data === YT.PlayerState.PLAYING) {
              // Captions can load once playback starts; unload again so a
              // viewer's "always show captions" preference stays suppressed.
              try {
                e.target.unloadModule("captions");
                e.target.unloadModule("cc");
              } catch {
                /* no-op */
              }
              setEnded(false);
              setPlaying(true);
            } else if (e.data === YT.PlayerState.PAUSED) {
              setPlaying(false);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
    // Player is built exactly once, when the user activates it; id/rate are
    // stable for the component's lifetime, so they're intentionally omitted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activated]);

  const toggle = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (ended) {
      p.seekTo(0, true);
      p.playVideo();
      setEnded(false);
      return;
    }
    if (playing) p.pauseVideo();
    else p.playVideo();
  }, [playing, ended]);

  // Close the lightbox: tear the player down and reset to the poster so the
  // next open starts clean (and nothing keeps playing off-screen).
  const close = useCallback(() => {
    const p = playerRef.current;
    try { p?.destroy?.(); } catch { /* already gone */ }
    playerRef.current = null;
    setActivated(false);
    setPlaying(false);
    setEnded(false);
  }, []);

  // While the lightbox is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!lightbox || !activated) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, activated, close]);

  // Built only after activation so nothing loads from YouTube on page load.
  // enablejsapi + origin let us attach the API to this exact iframe.
  const src =
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1` +
    `&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&enablejsapi=1` +
    (origin ? `&origin=${encodeURIComponent(origin)}` : "");

  const showOverlayIcon = !playing || ended;

  /* ── Poster state ── */
  const posterButton = (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            backgroundImage: `url("${thumb}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#0f0f0f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Hidden img just to detect maxres 404 and fall back to hqdefault */}
          {!poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt=""
              aria-hidden="true"
              onError={() => setThumbFallback(true)}
              style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
            />
          )}
          {/* Dark scrim for contrast */}
          <span style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
          {/* YouTube-style play button */}
          <span
            className={pulse ? "ff-bounce" : undefined}
            style={{
              position: "relative",
              width: "72px",
              height: "50px",
              background: "#F6413E",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
  );

  /* ── Active player ── */
  const activePlayer = (
        <>
          <iframe
            ref={iframeRef}
            src={src}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
          {/* Top gradient mask: hides YouTube's title/uploader bar that flashes
              at playback start (no embed setting removes it). pointer-events
              none so it never interferes with the click overlay below it. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "20%",
              pointerEvents: "none",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Click-capture overlay: swallows every click so users can never
              reach YouTube's chrome. Toggles play/pause instead. */}
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              padding: 0,
              // Opaque when paused/ended so YouTube's own paused overlay
              // (title + "Watch on YouTube" link, bottom-left) can't bleed
              // through. Fully transparent while playing (controls=0 already
              // hides all chrome then).
              background: showOverlayIcon ? "rgba(0,0,0,0.82)" : "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s ease",
            }}
          >
            {showOverlayIcon && (
              <span
                style={{
                  width: "72px",
                  height: "50px",
                  background: "#F6413E",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                }}
              >
                {ended ? (
                  /* Replay icon */
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                  </svg>
                ) : (
                  /* Play icon */
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
            )}
          </button>
        </>
  );

  // Lightbox mode: the poster stays in its small card slot, but clicking it
  // opens the player large and centered over a dark backdrop.
  if (lightbox) {
    return (
      <>
        <div style={{ position: "relative", width: "100%", paddingBottom: `${aspect}%`, background: "#0f0f0f", overflow: "hidden" }}>
          {posterButton}
        </div>
        {activated &&
          createPortal(
            <div
              onClick={close}
              role="dialog"
              aria-modal="true"
              aria-label={title}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(0,0,0,0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(16px, 4vw, 56px)",
              }}
            >
              {/* Close button (click-outside and Escape also close) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                aria-label="Close video"
                style={{
                  position: "absolute",
                  top: "clamp(12px, 3vw, 28px)",
                  right: "clamp(12px, 3vw, 28px)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              {/* Centered 16:9 stage, sized to fill most of the viewport.
                  The 152vh cap keeps the 16:9 box within ~85vh tall on short
                  screens so it never overflows vertically. */}
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  width: "min(92vw, 1100px, 152vh)",
                  aspectRatio: "16 / 9",
                  background: "#0f0f0f",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
                }}
              >
                {activePlayer}
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }

  // Inline mode (default): the player plays in place, in the card slot.
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: `${aspect}%`, background: "#0f0f0f", overflow: "hidden" }}>
      {!activated ? posterButton : activePlayer}
    </div>
  );
}
