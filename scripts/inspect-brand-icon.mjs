import { readFile, writeFile } from "node:fs/promises";
const data = await readFile("D:/AI_Personal_Buddy/brandingMaterial/kukunotes-icon.ico");
const entries = [];
for (let index = 0; index < data.readUInt16LE(4); index++) {
  const at = 6 + index * 16;
  const size = data.readUInt32LE(at + 8);
  const offset = data.readUInt32LE(at + 12);
  const embedded = data.subarray(offset, offset + size);
  const png = embedded.subarray(1, 4).toString() === "PNG";
  entries.push({ width: data[at] || 256, height: data[at + 1] || 256, size, png });
  if (png) await writeFile(`qa-artifacts/reference-icon-${data[at] || 256}.png`, embedded);
}
console.log(JSON.stringify(entries));
