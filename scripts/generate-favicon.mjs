import { writeFileSync } from "node:fs";

const size = 64;
const pixels = new Uint8ClampedArray(size * size * 4);

function mix(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function setPixel(x, y, rgba) {
  if (x < 0 || x >= size || y < 0 || y >= size) return;
  const i = (y * size + x) * 4;
  pixels[i] = rgba[0];
  pixels[i + 1] = rgba[1];
  pixels[i + 2] = rgba[2];
  pixels[i + 3] = rgba[3];
}

function blendPixel(x, y, rgba) {
  if (x < 0 || x >= size || y < 0 || y >= size) return;
  const i = (y * size + x) * 4;
  const alpha = rgba[3] / 255;
  const inv = 1 - alpha;
  pixels[i] = Math.round(rgba[0] * alpha + pixels[i] * inv);
  pixels[i + 1] = Math.round(rgba[1] * alpha + pixels[i + 1] * inv);
  pixels[i + 2] = Math.round(rgba[2] * alpha + pixels[i + 2] * inv);
  pixels[i + 3] = Math.min(255, Math.round(rgba[3] + pixels[i + 3] * inv));
}

function roundedRect(x, y, w, h, r, color) {
  for (let py = Math.floor(y); py < Math.ceil(y + h); py++) {
    for (let px = Math.floor(x); px < Math.ceil(x + w); px++) {
      const cx = Math.max(x + r, Math.min(px, x + w - r));
      const cy = Math.max(y + r, Math.min(py, y + h - r));
      if ((px - cx) ** 2 + (py - cy) ** 2 <= r ** 2) setPixel(px, py, color);
    }
  }
}

function ellipse(cx, cy, rx, ry, color) {
  for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++) {
    for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
      if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) blendPixel(x, y, color);
    }
  }
}

function polygon(points, color) {
  const minY = Math.floor(Math.min(...points.map((p) => p[1])));
  const maxY = Math.ceil(Math.max(...points.map((p) => p[1])));
  for (let y = minY; y <= maxY; y++) {
    const nodes = [];
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const [xi, yi] = points[i];
      const [xj, yj] = points[j];
      if ((yi < y && yj >= y) || (yj < y && yi >= y)) {
        nodes.push(xi + ((y - yi) / (yj - yi)) * (xj - xi));
      }
    }
    nodes.sort((a, b) => a - b);
    for (let i = 0; i < nodes.length; i += 2) {
      for (let x = Math.floor(nodes[i]); x < Math.ceil(nodes[i + 1]); x++) {
        blendPixel(x, y, color);
      }
    }
  }
}

function thickLine(x1, y1, x2, y2, width, color) {
  const minX = Math.floor(Math.min(x1, x2) - width);
  const maxX = Math.ceil(Math.max(x1, x2) + width);
  const minY = Math.floor(Math.min(y1, y2) - width);
  const maxY = Math.ceil(Math.max(y1, y2) + width);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / len2));
      const px = x1 + t * dx;
      const py = y1 + t * dy;
      if ((x - px) ** 2 + (y - py) ** 2 <= (width / 2) ** 2) blendPixel(x, y, color);
    }
  }
}

roundedRect(0, 0, size, size, 13, [246, 243, 255, 255]);

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const t = (x + y) / (size * 2);
    const purple = [mix(79, 49, t), mix(70, 46, t), mix(229, 159, t), 255];
    const inHead = ((x - 35) / 28) ** 2 + ((y - 32) / 26) ** 2 <= 1;
    const inLeft = ((x - 26) / 19) ** 2 + ((y - 36) / 26) ** 2 <= 1;
    if (inHead || inLeft) blendPixel(x, y, purple);
  }
}

polygon(
  [
    [16, 48],
    [16, 60],
    [30, 48],
    [38, 44],
  ],
  [49, 46, 159, 255],
);

polygon(
  [
    [46, 15],
    [56, 9],
    [49, 19],
    [56, 24],
    [44, 25],
  ],
  [49, 46, 159, 255],
);

ellipse(33, 33, 19, 11, [251, 250, 255, 255]);
ellipse(25, 32, 2.4, 4.2, [41, 32, 128, 255]);
ellipse(39, 32, 2.4, 4.2, [41, 32, 128, 255]);
thickLine(29, 39, 33, 42, 2.2, [41, 32, 128, 255]);
thickLine(33, 42, 38, 39, 2.2, [41, 32, 128, 255]);

const star = [
  [53, 11],
  [56, 18],
  [63, 21],
  [56, 24],
  [53, 32],
  [49, 24],
  [42, 21],
  [49, 18],
];
polygon(star.map(([x, y]) => [x + 0.8, y + 0.8]), [251, 250, 255, 255]);
polygon(star, [41, 191, 208, 255]);

const xorBytes = [];
for (let y = size - 1; y >= 0; y--) {
  for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    xorBytes.push(pixels[i + 2], pixels[i + 1], pixels[i], pixels[i + 3]);
  }
}

const andBytes = new Uint8Array(((size + 31) >> 5) * 4 * size);
const dibSize = 40 + xorBytes.length + andBytes.length;
const icoSize = 6 + 16 + dibSize;
const buffer = Buffer.alloc(icoSize);
let offset = 0;

buffer.writeUInt16LE(0, offset);
offset += 2;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer[offset++] = size;
buffer[offset++] = size;
buffer[offset++] = 0;
buffer[offset++] = 0;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(32, offset);
offset += 2;
buffer.writeUInt32LE(dibSize, offset);
offset += 4;
buffer.writeUInt32LE(22, offset);
offset += 4;

buffer.writeUInt32LE(40, offset);
offset += 4;
buffer.writeInt32LE(size, offset);
offset += 4;
buffer.writeInt32LE(size * 2, offset);
offset += 4;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(32, offset);
offset += 2;
buffer.writeUInt32LE(0, offset);
offset += 4;
buffer.writeUInt32LE(xorBytes.length, offset);
offset += 4;
buffer.writeInt32LE(0, offset);
offset += 4;
buffer.writeInt32LE(0, offset);
offset += 4;
buffer.writeUInt32LE(0, offset);
offset += 4;
buffer.writeUInt32LE(0, offset);
offset += 4;

Buffer.from(xorBytes).copy(buffer, offset);
offset += xorBytes.length;
Buffer.from(andBytes).copy(buffer, offset);

writeFileSync("app/favicon.ico", buffer);
