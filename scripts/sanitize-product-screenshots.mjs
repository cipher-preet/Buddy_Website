// Deterministic privacy redactions on genuine screenshots. No UI is generated.
// Original inputs are retained only in the ignored qa-artifacts directory.
import sharp from "sharp";
import { copyFile, mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const masks = {
  "desktop/spaces-tasks.png": [[29, 32, 96, 23, "#f4f6f8"]],
  "desktop/ai-chat.png": [
    [29, 32, 96, 23, "#f4f6f8"],
    [597, 106, 140, 17, "#f2f3f7"],
  ],
  "desktop/meeting-detail.png": [
    [30, 80, 68, 12, "#131313"],
    [117, 283, 48, 13, "#1c1f2a"],
  ],
  "desktop/meetings.png": [
    [64, 254, 96, 14, "#f2f3f7"],
    [426, 254, 96, 14, "#f2f3f7"],
  ],
  "goal-monitor.jpeg": [[58, 1485, 435, 48, "#eaf4f6"]],
  "notes-board.jpeg": [
    [52, 244, 223, 38, "#f8e5f2"],
    [614, 244, 95, 38, "#f3f6f6"],
  ],
};

for (const [file, rectangles] of Object.entries(masks)) {
  const source = path.join(root, "public/screenshots", file);
  const original = path.join(root, "qa-artifacts/screenshot-originals", file);
  await mkdir(path.dirname(original), { recursive: true });
  try { await access(original); } catch { await copyFile(source, original); }
  const overlays = await Promise.all(rectangles.map(async ([left, top, width, height, background]) => ({
    left, top,
    input: await sharp({ create: { width, height, channels: 4, background } }).png().toBuffer(),
  })));
  const image = sharp(await readFile(original)).composite(overlays);
  const output = file.endsWith(".png") ? await image.png().toBuffer() : await image.jpeg({ quality: 97 }).toBuffer();
  await writeFile(source, output);
  console.log(`Sanitized ${file}`);
}
