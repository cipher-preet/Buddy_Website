import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// Run from the project root. Original reference files are never modified.
const sourceRoot = "D:/AI_Personal_Buddy/brandingMaterial";
const screens = [
  [
    "Screenshot 2026-10-15 162733.png",
    "desktop/workspace.webp",
    "Web / Windows",
    "Spaces and tasks",
    "Hero and workspace explorer",
  ],
  [
    "Screenshot 2026-10-15 162809.png",
    "desktop/context-chat.webp",
    "Web",
    "Ask KukuNotes",
    "Contextual assistant",
  ],
  [
    "Screenshot 2026-10-15 162844.png",
    "desktop/goals.webp",
    "Web / Windows",
    "Goals and strategies",
    "Progress chapter and goal showcase",
  ],
  [
    "Screenshot 2026-10-15 162914.png",
    "desktop/documents.webp",
    "Web / Windows",
    "Document templates",
    "Workspace explorer",
  ],
  [
    "Screenshot 2026-10-15 163111.png",
    "desktop/mindmap.webp",
    "Web / Windows",
    "Connected mindmap",
    "Workspace explorer and organize chapter",
  ],
  [
    "Screenshot 2026-10-15 163138.png",
    "desktop/meetings-library.webp",
    "Web / Windows",
    "Meeting library",
    "Asset catalog; not used in hero",
  ],
  [
    "WhatsApp Image 2026-10-06 M.jpeg",
    "android/capture.webp",
    "Android",
    "User-started recording and Spaces",
    "Hero and capture chapter",
  ],
  [
    "WhatsApp Image 2026-10-06 at 1.23..jpeg",
    "android/notes.webp",
    "Android",
    "Notes",
    "Mobile workspace detail",
  ],
  [
    "WhatsApp Image 2026-10-06 at 1.23.30 PM.jpeg",
    "android/tasks.webp",
    "Android",
    "Tasks",
    "Mobile action detail",
  ],
];
const manifest = JSON.parse(await readFile("lib/product-images.json", "utf8"));
const entries = [];
for (const [original, destination, platform, feature, usage] of screens) {
  const source = path.join(sourceRoot, original);
  const output = path.join("public/screenshots", destination);
  await mkdir(path.dirname(output), { recursive: true });
  await sharp(source).webp({ quality: 91 }).toFile(output);
  const { width, height } = await sharp(output).metadata();
  manifest[`/screenshots/${destination}`] = { width, height };
  entries.push({
    file: `/screenshots/${destination}`,
    source,
    platform,
    feature,
    width,
    height,
    aspectRatio: +(width / height).toFixed(4),
    usage,
    sensitiveData:
      "Contains supplied owner/project names and internal example work; no credentials. Local marketing preview.",
    quality:
      "Original resolution; optimized WebP. Replace with curated demo account imagery before public launch if desired.",
  });
}
const crops = [
  [
    "public/screenshots/desktop/meeting-detail.png",
    "meeting-summary.webp",
    { left: 600, top: 25, width: 424, height: 416 },
    "Actual meeting summary",
  ],
  [
    "public/screenshots/desktop/workspace.webp",
    "workspace-tasks.webp",
    { left: 304, top: 130, width: 1302, height: 574 },
    "Actual task list",
  ],
  [
    "public/screenshots/desktop/context-chat.webp",
    "context-answer.webp",
    { left: 448, top: 82, width: 748, height: 844 },
    "Actual contextual question, answer, and composer",
  ],
  [
    "public/screenshots/desktop/goals.webp",
    "goal-strategies.webp",
    { left: 425, top: 480, width: 1080, height: 325 },
    "Actual goal strategies",
  ],
];
for (const [source, file, crop, feature] of crops) {
  await mkdir("public/screenshots/details", { recursive: true });
  await sharp(source)
    .extract(crop)
    .webp({ quality: 94 })
    .toFile(`public/screenshots/details/${file}`);
  manifest[`/screenshots/details/${file}`] = {
    width: crop.width,
    height: crop.height,
  };
  entries.push({
    file: `/screenshots/details/${file}`,
    source,
    platform: "Web / Windows",
    feature,
    width: crop.width,
    height: crop.height,
    aspectRatio: +(crop.width / crop.height).toFixed(4),
    usage: "Explicit editorial detail crop; retains source pixel proportions",
    sensitiveData: "Same as source",
    quality: "No generated UI or changed product text",
  });
}
for (const [file, dimensions] of Object.entries(manifest)) {
  if (!entries.some((entry) => entry.file === file))
    entries.push({
      file,
      ...dimensions,
      aspectRatio: +(dimensions.width / dimensions.height).toFixed(4),
      platform: file.includes("/desktop/") ? "Web / Windows" : "Android",
      usage: "Existing secondary-page asset / meeting detail / daily briefing",
      sensitiveData:
        "Existing repository assets; existing privacy masks preserved",
      quality:
        "Original repository resolution; avoid enlarging details beyond native size",
    });
}
await writeFile(
  "lib/product-images.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
for (const [source, reason] of [
  [
    "What2026-10-01 at 2.11.05 PM.jpeg",
    "Earlier Android home screenshot; superseded by the supplied version with the K logo.",
  ],
  [
    "WhatsApp Ima-10-01 at 6.45.50 PM.jpeg",
    "Android chat reference contains visible API errors; use the working supplied web assistant screen for marketing.",
  ],
]) {
  const metadata = await sharp(path.join(sourceRoot, source)).metadata();
  entries.push({
    source: path.join(sourceRoot, source),
    platform: "Android",
    width: metadata.width,
    height: metadata.height,
    aspectRatio: +(metadata.width / metadata.height).toFixed(4),
    usage: "Reference only; not copied to public assets",
    sensitiveData:
      "Visible user/project names; chat includes internal error text",
    quality: reason,
  });
}
entries.push({
  source: path.join(sourceRoot, "kukunotes-icon.ico"),
  platform: "Brand",
  usage:
    "Original brand reference. Existing K icon artwork and favicon preserved.",
  sensitiveData: "None",
  quality:
    "Original supplied icon; same folded K identity as existing repository branding.",
});
await writeFile(
  "docs/screenshot-manifest.json",
  JSON.stringify(entries, null, 2) + "\n",
);
const contactFiles = [
  "home.png",
  "listen.png",
  "daily-briefing.jpeg",
  "goal-monitor.jpeg",
  "notes.png",
  "tasks.png",
];
const composites = await Promise.all(
  contactFiles.map(async (file, i) => ({
    input: await sharp(`public/screenshots/${file}`)
      .resize({ width: 180 })
      .png()
      .toBuffer(),
    left: i * 190,
    top: 20,
  })),
);
await sharp({
  create: { width: 1140, height: 435, channels: 4, background: "#e4e4e4" },
})
  .composite(composites)
  .png()
  .toFile("qa-artifacts/asset-contact-sheet.png");
console.log(
  `Prepared ${screens.length} original screens and ${crops.length} explicit detail crops.`,
);
