/* eslint-disable @typescript-eslint/no-require-imports -- Read-only design reference capture. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const fs = require("node:fs");
const urls = [
  "https://www.granola.ai/",
  "https://linear.app/",
  "https://www.raycast.com/",
  "https://fireflies.ai/",
  "https://tldv.io/",
];
(async () => {
  fs.mkdirSync("qa-artifacts/references", { recursive: true });
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 25000 });
      await page.waitForTimeout(2500);
      await page.screenshot({
        path: `qa-artifacts/references/${new URL(url).hostname}.png`,
      });
      console.log(url, await page.title());
    } catch (error) {
      console.log(url, String(error).slice(0, 170));
    }
  }
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
