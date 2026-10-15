/* eslint-disable @typescript-eslint/no-require-imports -- Browser motion and frame checks. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.QA_URL || "http://localhost:3000";
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "no-preference",
    });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.waitForFunction(
      () => document.documentElement.dataset.scrollMode === "smooth",
    );
    const stages = [];
    for (const index of [0, 1, 2, 3, 4, 3, 2, 1, 0]) {
      await page
        .locator(".film-chapter")
        .nth(index)
        .evaluate((element) =>
          element.scrollIntoView({ block: "center", behavior: "instant" }),
        );
      await page.waitForTimeout(100);
      const active = await page
        .locator(".film-chapter.is-active .film-number")
        .innerText();
      assert.equal(active, `0${index + 1}`);
      stages.push(active);
    }
    await page.setViewportSize({ width: 1440, height: 650 });
    const frames = [];
    for (const index of [0, 1, 2, 3, 4]) {
      await page
        .locator(".film-chapter")
        .nth(index)
        .evaluate((element) =>
          element.scrollIntoView({ block: "center", behavior: "instant" }),
        );
      await page.waitForTimeout(400);
      const frame = await page.evaluate(() => {
        const stage = document
          .querySelector(".film-stage")
          .getBoundingClientRect();
        const image = document
          .querySelector(".film-visual figure")
          .getBoundingClientRect();
        const header = document
          .querySelector(".film-stage-top")
          .getBoundingClientRect();
        const footer = document
          .querySelector(".film-stage-bottom")
          .getBoundingClientRect();
        return {
          top: image.top - stage.top,
          bottom: stage.bottom - image.bottom,
          headerGap: image.top - header.bottom,
          footerGap: footer.top - image.bottom,
        };
      });
      assert.ok(
        frame.headerGap >= -2 && frame.footerGap >= -2,
        `Chapter ${index}: frame overlaps its labels ${JSON.stringify(frame)}`,
      );
      frames.push(frame);
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForFunction(
      () => document.documentElement.dataset.scrollMode !== "smooth",
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: /03.*Take action/ }).click();
    await page
      .locator("#film-screen")
      .screenshot({ path: "qa-artifacts/launch/film-mobile-tasks.png" });
    await page.getByRole("button", { name: /05.*Move forward/ }).click();
    await page
      .locator("#film-screen")
      .screenshot({ path: "qa-artifacts/launch/film-mobile-goals.png" });
    await page.getByRole("tab", { name: "Mindmap", exact: true }).click();
    await page
      .locator("#workspace-preview")
      .screenshot({ path: "qa-artifacts/launch/mindmap-mobile.png" });
    await page.getByRole("tab", { name: "Documents", exact: true }).click();
    await page
      .locator("#workspace-preview")
      .screenshot({ path: "qa-artifacts/launch/documents-mobile.png" });
    fs.writeFileSync(
      "qa-artifacts/launch/motion-results.json",
      JSON.stringify(
        { stages, shortViewportFrames: frames, liveReducedMotion: true },
        null,
        2,
      ),
    );
    console.log(
      "PASS normal-motion stages forward and reverse, short-viewport geometry, live reduced-motion cleanup, mobile chapter controls",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
