import { ImageResponse } from "next/og";

export const alt = "PolicyDiff -- 全政党の政策を、差分で比較する";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #6366f1 100%)",
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
        PolicyDiff
      </div>
      <div style={{ fontSize: 36, opacity: 0.9, display: "flex" }}>
        全政党の政策を、差分で比較する
      </div>
      <div style={{ fontSize: 22, opacity: 0.6, marginTop: 48, display: "flex" }}>
        Open Japan PoliTech Platform
      </div>
    </div>,
    { ...size },
  );
}
