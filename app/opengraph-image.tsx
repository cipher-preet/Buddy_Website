/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "KukuNotes — Every conversation. A step forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const iconData = await readFile(
  join(process.cwd(), "public/brand/kukunotes-icon-512.png"),
  "base64",
);
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "52px 64px",
        background: "linear-gradient(140deg, #080e27 40%, #282044 100%)",
        color: "#f4f5ff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src={`data:image/png;base64,${iconData}`}
            alt=""
            width={46}
            height={46}
            style={{ borderRadius: 10 }}
          />
          <span style={{ fontSize: 29, fontWeight: 700, letterSpacing: -1.5 }}>
            KukuNotes.
          </span>
        </div>
        <span style={{ color: "#adb7d2", fontSize: 16 }}>kukunotes.com</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ fontSize: 13, letterSpacing: 2.3, color: "#adb7d2" }}>
          YOUR INTELLIGENT WORKSPACE
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 73,
            fontWeight: 600,
            letterSpacing: -3.8,
            lineHeight: 1.12,
          }}
        >
          <span>Every conversation.</span>
          <span style={{ color: "#a193f2" }}>A step forward.</span>
        </div>
        <span
          style={{
            fontSize: 23,
            color: "#adb7d2",
            maxWidth: 850,
            lineHeight: 1.5,
          }}
        >
          Capture what matters. Turn conversations into notes, next steps, and
          connected context.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          borderTop: "1px solid #ffffff25",
          fontSize: 16,
          color: "#adb7d2",
        }}
      >
        <span>Notes · Tasks · Spaces · Goals</span>
        <span>Android · Windows · Chrome · Web</span>
      </div>
    </div>,
    size,
  );
}
