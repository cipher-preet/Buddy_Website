/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser QA. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const fs = require("node:fs");
const base = process.env.QA_URL || "http://localhost:3000";
const phase = process.argv[2] || "after";
(async () => {
  fs.mkdirSync("qa-artifacts", { recursive: true });
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  for (const width of phase === "before" ? [1440, 375] : [1440, 1024, 768, 375]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base, { waitUntil: "networkidle" });
    for (const [name, selector] of [
      ["hero", ".home-hero"],
      ["workflow", "#product"],
      ["notes", "#listen"],
      ["tasks", ".tasks-section"],
      ["spaces", "#spaces"],
      ["assistant", "#ask"],
      ["goals", ".daily-section"],
      ["cta", ".final-cta"],
    ]) {
      await page.locator(selector).scrollIntoViewIfNeeded();
      await page.waitForTimeout(750);
      await page.screenshot({
        path: `qa-artifacts/motion-${phase}-${name}-${width}.png`,
      });
    }
    console.log(phase, width, "section screenshots saved");
  }
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
