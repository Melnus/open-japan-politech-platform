import { ImageResponse } from "next/og";

export const alt = "MoneyGlass -- 政治資金を、ガラスのように透明に";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
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
        MoneyGlass
      </div>
      <div style={{ fontSize: 36, opacity: 0.9, display: "flex" }}>
        政治資金を、ガラスのように透明に
      </div>
      <div style={{ fontSize: 22, opacity: 0.6, marginTop: 48, display: "flex" }}>
        Open Japan PoliTech Platform
      </div>
    </div>,
    { ...size },
  );
}
