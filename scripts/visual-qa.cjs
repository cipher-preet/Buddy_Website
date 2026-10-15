/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node QA runner. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const {
  AxeBuilder,
} = require("../.qa-tools/node_modules/@axe-core/playwright");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QA_URL || "http://localhost:3000";
const mode = process.argv[2] || "final";
const routes = [
  "/",
  "/pricing",
  "/get-kukunotes",
  "/use-cases",
  "/about",
  "/contact",
  "/ai-note-taker",
  "/ai-meeting-recorder",
  "/hindi-speech-to-text",
  "/ai-personal-assistant",
  "/ai-lecture-notes",
  "/chrome-extension",
  "/platform",
  "/windows",
  "/android",
  "/privacy",
  "/terms",
  "/delete-account",
];
(async () => {
  fs.mkdirSync("qa-artifacts", { recursive: true });
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  const results = [];
  for (const route of mode === "baseline"
    ? ["/", "/pricing", "/contact"]
    : routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 750) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    const h1 = await page.locator("h1").allTextContents();
    const desktop = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const file = route === "/" ? "home" : route.slice(1);
    await page.screenshot({
      path: path.join("qa-artifacts", `${mode}-${file}-desktop.png`),
      fullPage: true,
    });
    const widths = [];
    for (const width of mode === "baseline"
      ? [390]
      : [320, 375, 390, 768, 1024, 1280, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(
        () =>
          new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve)),
          ),
      );
      widths.push(
        await page.evaluate(() => ({
          width: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
        })),
      );
      if (width === 390)
        await page.screenshot({
          path: path.join("qa-artifacts", `${mode}-${file}-mobile.png`),
          fullPage: true,
        });
    }
    results.push({
      route,
      status: response.status(),
      h1,
      desktop,
      widths,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    console.log(
      route,
      response.status(),
      "axe:",
      axe.violations.length,
      "overflow:",
      widths
        .filter((w) => w.overflow)
        .map((w) => w.width)
        .join(","),
    );
  }
  fs.writeFileSync(
    `qa-artifacts/${mode}-results.json`,
    JSON.stringify({ results, errors }, null, 2),
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
