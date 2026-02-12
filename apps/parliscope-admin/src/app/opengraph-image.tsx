import { ImageResponse } from "next/og";

export const alt = "ParliScope Admin -- 議会データ管理画面";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #3b0764 0%, #6b21a8 50%, #a855f7 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 16, display: "flex" }}>
        ParliScope
      </div>
      <div
        style={{
          fontSize: 32,
          opacity: 0.7,
          marginBottom: 8,
          display: "flex",
          background: "rgba(255,255,255,0.15)",
          padding: "4px 24px",
          borderRadius: "8px",
        }}
      >
        Admin
      </div>
      <div style={{ fontSize: 36, opacity: 0.9, marginTop: 8, display: "flex" }}>
        法案データ・議論の管理
      </div>
      <div style={{ fontSize: 22, opacity: 0.6, marginTop: 48, display: "flex" }}>
        Open Japan PoliTech Platform
      </div>
    </div>,
    { ...size },
  );
}
