import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ForgeForward — Marketing Systems for Landscapers";
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
            }}
          />
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FCF8F3",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ForgeForward
          </div>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: "center",
            color: "#FCF8F3",
            maxWidth: "900px",
          }}
        >
          Marketing Systems for{" "}
          <span style={{ color: "#F6413E" }}>Landscapers</span>
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#8890A0",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Website, SEO, AI ranking, and lead follow-up — one system built for
          contractors.
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
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
