/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser QA. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const {
  AxeBuilder,
} = require("../.qa-tools/node_modules/@axe-core/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const results = [];
  for (const width of [375, 768, 1440]) {
    const mobile = width < 1024;
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      hasTouch: mobile,
      isMobile: mobile,
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    const requests = [];
    page.on("request", (r) => {
      if (r.url().includes("/chunks/") && r.url().endsWith(".js"))
        requests.push(r.url().split("/").pop());
    });
    await page.goto(process.env.QA_URL || "http://localhost:3001", {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(900);
    if (mobile) {
      assert.equal(
        await page.evaluate(() =>
          document.documentElement.classList.contains("lenis"),
        ),
        false,
      );
      const cdp = await context.newCDPSession(page);
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: width / 2, y: 720 }],
      });
      for (let i = 1; i <= 8; i++) {
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x: width / 2, y: 720 - i * 50 }],
        });
        await page.waitForTimeout(25);
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await page.waitForTimeout(300);
      assert(
        (await page.evaluate(() => scrollY)) > 100,
        "Native touch scroll must move the page",
      );
    }
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const engineRequested = requests.some((name) =>
      fs
        .readFileSync(".next/static/chunks/" + name, "utf8")
        .includes("stopInertiaOnNavigate"),
    );
    if (mobile)
      assert.equal(
        engineRequested,
        false,
        "Touch devices should not download the scroll engine",
      );
    const result = {
      width,
      nativeTouch: mobile,
      scrollY: await page.evaluate(() => scrollY),
      engineRequested,
      violations: axe.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    };
    results.push(result);
    console.log(
      width,
      "nativeTouch:",
      mobile,
      "engine:",
      engineRequested,
      "axe:",
      axe.violations.length,
    );
    await context.close();
  }
  fs.writeFileSync(
    "qa-artifacts/motion-touch-accessibility.json",
    JSON.stringify(results, null, 2),
  );
  assert.equal(results.flatMap((r) => r.violations).length, 0);
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
