/**
 * Rebuild app/favicon.ico from the current brand K icon PNGs.
 * Never draw the legacy bird mascot — Google caches favicons aggressively.
 *
 * Usage: node scripts/generate-favicon.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sizes = [16, 24, 32, 48, 64, 128, 256];

const source = readFileSync(join(root, "public/brand/kukunotes-icon-512.png"));

// Prefer pre-exported size PNGs when present; otherwise pack the 512 master only.
const images = [];
for (const s of sizes) {
  const sizedPath = join(root, `public/brand/favicon-${s}.png`);
  try {
    images.push({ s, data: readFileSync(sizedPath) });
  } catch {
    // size not exported yet
  }
}

if (images.length === 0) {
  images.push({ s: 256, data: source });
}

const headerSize = 6 + images.length * 16;
let offset = headerSize;
const dirs = images.map((img) => {
  const entry = {
    width: img.s >= 256 ? 0 : img.s,
    height: img.s >= 256 ? 0 : img.s,
    size: img.data.length,
    offset,
  };
  offset += img.data.length;
  return entry;
});

const buf = Buffer.alloc(offset);
buf.writeUInt16LE(0, 0);
buf.writeUInt16LE(1, 2);
buf.writeUInt16LE(images.length, 4);

let o = 6;
for (const d of dirs) {
  buf[o++] = d.width;
  buf[o++] = d.height;
  buf[o++] = 0;
  buf[o++] = 0;
  buf.writeUInt16LE(1, o);
  o += 2;
  buf.writeUInt16LE(32, o);
  o += 2;
  buf.writeUInt32LE(d.size, o);
  o += 4;
  buf.writeUInt32LE(d.offset, o);
  o += 4;
}

let off = headerSize;
for (const img of images) {
  img.data.copy(buf, off);
  off += img.data.length;
}

writeFileSync(join(root, "app/favicon.ico"), buf);
writeFileSync(join(root, "app/icon.png"), readFileSync(join(root, "public/brand/kukunotes-icon-192.png")));
writeFileSync(join(root, "app/apple-icon.png"), readFileSync(join(root, "public/brand/kukunotes-icon-192.png")));
console.log(`Wrote favicon.ico (${buf.length} bytes) from brand K icon.`);
