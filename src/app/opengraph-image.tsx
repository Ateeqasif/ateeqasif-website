import { ImageResponse } from "next/og";
import { siteSettings } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

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
          backgroundColor: "#05060a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 5% 85%, rgba(56,189,248,0.3), transparent 45%)",
          color: "#f5f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundImage: "linear-gradient(135deg, #38bdf8, #8b5cf6)",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#a3acc2", letterSpacing: 4, textTransform: "uppercase" }}>
            Collaboration &middot; Opportunity &middot; Community
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {siteSettings.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a3acc2" }}>{siteSettings.descriptor}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
