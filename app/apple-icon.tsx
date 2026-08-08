import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 10,
          paddingBottom: 44,
          borderRadius: 40,
          background: "linear-gradient(145deg, #4338CA 0%, #8B5CF6 100%)",
        }}
      >
        <div
          style={{
            width: 16,
            height: 36,
            borderRadius: 999,
            background: "#fff",
          }}
        />
        <div
          style={{
            width: 16,
            height: 64,
            borderRadius: 999,
            background: "#fff",
          }}
        />
        <div
          style={{
            width: 16,
            height: 48,
            borderRadius: 999,
            background: "#fff",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
