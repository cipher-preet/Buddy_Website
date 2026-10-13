/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "KukuNotes — AI note taker, meeting recorder & personal assistant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconData = await readFile(join(process.cwd(), "public/brand/kukunotes-icon-512.png"), "base64");
const iconSrc = `data:image/png;base64,${iconData}`;

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
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 12% 18%, rgba(56, 189, 248, 0.22), transparent 42%), radial-gradient(circle at 88% 82%, rgba(168, 85, 247, 0.2), transparent 40%), linear-gradient(160deg, #060b28 0%, #0c1548 55%, #08103a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img
            src={iconSrc}
            alt=""
            width={72}
            height={72}
            style={{ width: 72, height: 72, borderRadius: 16 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", fontSize: 36, fontWeight: 700, letterSpacing: -0.5 }}>
              <span style={{ color: "#ffffff" }}>Kuku</span>
              <span style={{ color: "#a78bfa" }}>Notes</span>
            </div>
            <div style={{ display: "flex", fontSize: 16, color: "#94a3b8", letterSpacing: 2 }}>
              CAPTURE · ORGANIZE · GROW
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.2,
              color: "#f8fafc",
            }}
          >
            AI note taker for real conversations — no meeting bot.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            Record on Android, get notes, decisions, and action items in English, Hindi & Hinglish.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#94a3b8",
          }}
        >
          <span>Android · Windows · Chrome · Web</span>
          <span>kukunotes.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
