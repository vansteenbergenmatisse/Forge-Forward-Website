import { ImageResponse } from "next/og";

export const alt = "ForgeForward | Marketing Systems for Landscapers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1020",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Wordmark row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#F6413E",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FCF8F3",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            ForgeForward
          </div>
        </div>

        {/* Headline — split into two spans inside a flex wrap so Satori is happy */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "64px",
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          <span style={{ color: "#FCF8F3" }}>Marketing Systems for&nbsp;</span>
          <span style={{ color: "#F6413E" }}>Landscapers</span>
        </div>

        {/* Sub-copy */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#8890A0",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Website, SEO, AI ranking, and lead follow-up. One system for contractors.
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            alignItems: "center",
            gap: "8px",
            background: "#F6413E",
            color: "white",
            fontSize: "20px",
            fontWeight: 700,
            padding: "14px 36px",
            borderRadius: "50px",
          }}
        >
          Book a Call at forgeforward.com
        </div>
      </div>
    ),
    { ...size }
  );
}
