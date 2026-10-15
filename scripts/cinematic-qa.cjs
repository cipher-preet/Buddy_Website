/* eslint-disable @typescript-eslint/no-require-imports -- Standalone visual/interaction QA. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.QA_URL || "http://localhost:3000";

(async () => {
  fs.mkdirSync("qa-artifacts", { recursive: true });
  const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "no-preference" });
    const page = await context.newPage();
    const errors = [];
    const layouts = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const moveTo = async (selector) => {
      await page.locator(selector).evaluate((element) => element.scrollIntoView({ block: "center", behavior: "instant" }));
      await page.waitForTimeout(850);
    };
    const capture = async (selector, file) => {
      await moveTo(selector);
      await page.locator(selector).screenshot({ path: `qa-artifacts/${file}.png`, style: ".site-header,.skip-link{visibility:hidden!important}" });
    };

    for (const width of [375, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
      assert.equal((await page.goto(base, { waitUntil: "networkidle" })).status(), 200);
      await page.evaluate(() => document.fonts.ready);
      for (const [name, selector] of [
        ["hero", ".hero-cinematic-stage"],
        ["meeting", ".meeting-product-stage"],
        ["tasks", ".paired-phones"],
        ["spaces", ".spaces-product-stage"],
        ["assistant", ".assistant-product-stage"],
        ["daily", ".daily-grid"],
        ["platform", ".platform-panel"],
      ]) await capture(selector, `cinematic-${name}-${width}`);
      const layout = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
      assert.ok(layout.scrollWidth <= width + 1, `Overflow at ${width}`);
      layouts.push(layout);
      console.log(`PASS ${width}px: seven product compositions and no overflow`);
    }

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.waitForFunction(() => document.documentElement.dataset.scrollMode === "smooth");
    for (const index of [0, 1, 2, 3, 4, 3, 2, 1, 0]) {
      await moveTo(`#product-step-${index}`);
      assert.equal(await page.locator(".product-story").getAttribute("data-story-step"), String(index));
      const visible = await page.locator("[data-story-panel]").evaluateAll((panels) => panels.filter((panel) => Number(getComputedStyle(panel).opacity) > .05).length);
      assert.equal(visible, 1, `Chapter ${index} should have a single readable screen`);
      await page.locator(".story-stage").screenshot({ path: `qa-artifacts/cinematic-chapter-${index}.png` });
    }
    console.log("PASS five reversible chapters with a single clear screen at each hold");

    const meeting = page.locator(".meeting-product-stage");
    await moveTo(".meeting-product-stage");
    await meeting.getByRole("button", { name: "Full meeting", exact: true }).click();
    await page.waitForTimeout(750);
    assert.equal(await meeting.locator(".product-image").evaluate((image) => getComputedStyle(image).transform), "none");
    await meeting.getByRole("button", { name: "Meeting summary", exact: true }).focus();
    await page.keyboard.press("Enter");
    assert.equal(await meeting.getByRole("button", { name: "Meeting summary", exact: true }).getAttribute("aria-pressed"), "true");
    const inspect = meeting.getByRole("link", { name: "View the full product screenshot in a new tab" });
    const asset = await context.request.get(new URL(await inspect.getAttribute("href"), base).href);
    assert.equal(asset.status(), 200);
    assert.match(asset.headers()["content-type"], /image/);
    console.log("PASS screenshot focus by keyboard, honest overview, and full-resolution inspection link");

    for (const width of [1440, 375]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const [index, host] of [[0, "play.google.com"], [1, "apps.microsoft.com"], [2, "chromewebstore.google.com"], [3, "platform.kukunotes.com"]]) {
        const tab = page.locator(".platform-tabs [role=tab]").nth(index);
        await tab.click();
        assert.equal(await tab.getAttribute("aria-selected"), "true");
        assert.equal(new URL(await page.locator(".platform-panel .button").getAttribute("href")).hostname, host);
        await capture(".platform-panel", `cinematic-platform-${index}-${width}`);
      }
    }
    console.log("PASS all four platform visuals, active states, and original store/workspace destinations");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(150);
    assert.equal(await page.locator(".story-stage").isVisible(), false);
    assert.equal(await page.locator(".story-mobile-visual").first().isVisible(), true);
    assert.equal(await page.locator(".hero-desktop-layer").evaluate((element) => getComputedStyle(element).animationName), "none");
    assert.deepEqual(errors, []);

    const touch = await browser.newContext({ hasTouch: true, viewport: { width: 1366, height: 1024 } });
    const touchPage = await touch.newPage();
    await touchPage.goto(base);
    assert.equal(await touchPage.locator(".story-stage").isVisible(), false);
    assert.equal(await touchPage.locator(".story-mobile-visual").last().isVisible(), true);
    const short = await browser.newContext({ viewport: { width: 1440, height: 600 } });
    const shortPage = await short.newPage();
    await shortPage.goto(base);
    assert.equal(await shortPage.locator(".story-stage").isVisible(), false);
    assert.equal(await shortPage.locator(".story-mobile-visual").last().isVisible(), true);
    console.log("PASS reduced-motion, large touchscreen, and short landscape fallbacks; zero browser errors");
    fs.writeFileSync("qa-artifacts/cinematic-validation.json", JSON.stringify({ layouts, errors, chapters: 5, platforms: 4, reducedMotion: true, largeTouchscreen: true, shortLandscape: true }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
