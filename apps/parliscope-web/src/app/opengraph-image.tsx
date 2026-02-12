import { ImageResponse } from "next/og";

export const alt = "ParliScope -- 議会を、すべての人とエージェントに開く";
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
      <div style={{ fontSize: 36, opacity: 0.9, display: "flex" }}>
        議会を、すべての人とエージェントに開く
      </div>
      <div style={{ fontSize: 22, opacity: 0.6, marginTop: 48, display: "flex" }}>
        Open Japan PoliTech Platform
      </div>
    </div>,
    { ...size },
  );
}
