import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Buddy — Listen. Remember. Act.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f4f3ef",
          color: "#16171d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "linear-gradient(145deg, #4336d6, #5b4cff)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 4,
              paddingBottom: 10,
            }}
          >
            <div style={{ width: 6, height: 12, borderRadius: 99, background: "#fff" }} />
            <div style={{ width: 6, height: 22, borderRadius: 99, background: "#fff" }} />
            <div style={{ width: 6, height: 16, borderRadius: 99, background: "#fff" }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.8 }}>Buddy</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 620,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            Listen. Remember. Act.
          </div>
          <div
            style={{
              maxWidth: 760,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#3c3e48",
            }}
          >
            The AI companion that turns conversations into notes, tasks, and a plan you can use.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6a6c76" }}>
          <span>Available on iOS & Android</span>
          <span>Worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
