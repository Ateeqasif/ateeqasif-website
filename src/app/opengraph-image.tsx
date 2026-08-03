import { ImageResponse } from "next/og";
import { siteSettings } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#10172a",
          color: "#faf7f1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#e9d9b8", letterSpacing: 4, textTransform: "uppercase" }}>
          Founder · Operator · Strategist
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            {siteSettings.name}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#8891a0" }}>{siteSettings.descriptor}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
