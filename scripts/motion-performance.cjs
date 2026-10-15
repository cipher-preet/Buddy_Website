/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser QA. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  await page.goto(process.env.QA_URL || "http://localhost:3001", {
    waitUntil: "networkidle",
  });
  await page.waitForFunction(
    () => document.documentElement.dataset.scrollMode === "smooth",
  );
  await page
    .locator("#product-step-0")
    .evaluate((el) =>
      el.scrollIntoView({ block: "center", behavior: "instant" }),
    );
  await page.waitForTimeout(300);
  const measure = page.evaluate(
    () =>
      new Promise((resolve) => {
        const intervals = [],
          longTasks = [];
        const observer = new PerformanceObserver((list) =>
          longTasks.push(...list.getEntries().map((entry) => entry.duration)),
        );
        observer.observe({ type: "longtask" });
        let start, previous;
        const frame = (now) => {
          start ??= now;
          if (previous !== undefined) intervals.push(now - previous);
          previous = now;
          if (now - start < 4000) requestAnimationFrame(frame);
          else {
            observer.disconnect();
            const sorted = [...intervals].sort((a, b) => a - b);
            resolve({
              frames: intervals.length,
              durationMs: now - start,
              meanFrameMs:
                intervals.reduce((a, b) => a + b, 0) / intervals.length,
              p95FrameMs: sorted[Math.floor(sorted.length * 0.95)],
              framesOver33ms: intervals.filter((t) => t > 33).length,
              longTasks,
            });
          }
        };
        requestAnimationFrame(frame);
      }),
  );
  await page.mouse.move(1050, 500);
  for (let i = 0; i < 14; i++) {
    await page.mouse.wheel(0, i < 7 ? 180 : -180);
    await page.waitForTimeout(200);
  }
  const result = await measure;
  fs.writeFileSync(
    "qa-artifacts/motion-frame-profile.json",
    JSON.stringify(result, null, 2),
  );
  console.log(result);
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
