/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "KukuNotes — Capture. Organize. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bannerData = await readFile(
  join(process.cwd(), "public/brand/kukunotes-logo-banner.png"),
  "base64",
);
const bannerSrc = `data:image/png;base64,${bannerData}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 72px 48px",
          background:
            "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.28), transparent 45%), radial-gradient(circle at 85% 90%, rgba(168, 85, 247, 0.26), transparent 45%), #08103a",
          color: "#ffffff",
        }}
      >
        <img
          src={bannerSrc}
          alt="KukuNotes logo"
          style={{ width: 1056, height: 352, objectFit: "contain" }}
        />

        <div
          style={{
            display: "flex",
            maxWidth: 900,
            textAlign: "center",
            fontSize: 30,
            lineHeight: 1.35,
            color: "#cdd3f5",
          }}
        >
          The AI note taker that turns conversations into notes, tasks, and a plan you can use.
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#8f97c7" }}>
          <span>Android · Desktop · Chrome · Web</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
