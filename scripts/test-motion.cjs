/* eslint-disable @typescript-eslint/no-require-imports -- Standalone browser QA. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const {
  AxeBuilder,
} = require("../.qa-tools/node_modules/@axe-core/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.QA_URL || "http://localhost:3000";
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  const errors = [],
    checks = [],
    layouts = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const pass = (message) => {
    checks.push(message);
    console.log("PASS", message);
  };
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => document.documentElement.dataset.scrollMode === "smooth",
  );
  assert.equal(await page.locator("[data-motion-root]").count(), 1);
  for (const i of [0, 1, 2, 3, 4, 3, 2, 1, 0]) {
    await page
      .locator("#product-step-" + i)
      .evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "instant" }),
      );
    await page.waitForTimeout(450);
    assert.equal(
      await page.locator(".product-story").getAttribute("data-story-step"),
      String(i),
    );
    assert.equal(
      await page
        .locator('[data-story-panel="' + i + '"]')
        .getAttribute("aria-hidden"),
      "false",
    );
    assert.equal(
      await page
        .locator('[data-story-panel="' + i + '"]')
        .evaluate((el) => getComputedStyle(el).visibility),
      "visible",
    );
  }
  pass(
    "All five story phases work downward and upward, with correct accessible active panels",
  );
  await page.mouse.move(1000, 500);
  const start = await page.evaluate(() => scrollY);
  await page.mouse.wheel(0, 480);
  await page.waitForTimeout(55);
  const early = await page.evaluate(() => scrollY);
  await page.waitForTimeout(240);
  const later = await page.evaluate(() => scrollY);
  assert(
    early > start && later > early,
    "Wheel movement should interpolate forward",
  );
  await page.waitForTimeout(650);
  pass("Desktop wheel input interpolates and settles");
  await page.locator("#main-content").focus();
  const keyStart = await page.evaluate(() => scrollY);
  await page.keyboard.press("PageDown");
  await page.waitForTimeout(400);
  assert(
    (await page.evaluate(() => scrollY)) > keyStart,
    "Keyboard PageDown must scroll natively",
  );
  pass("Keyboard PageDown remains usable alongside desktop wheel smoothing");

  const cdp = await context.newCDPSession(page);
  const wheelListeners = async () => {
    const { result } = await cdp.send("Runtime.evaluate", {
      expression: "window",
    });
    const { listeners } = await cdp.send("DOMDebugger.getEventListeners", {
      objectId: result.objectId,
    });
    return listeners.filter((listener) => listener.type === "wheel").length;
  };
  const baselineListeners = await wheelListeners();
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page
    .getByRole("link", { name: "Explore KukuNotes", exact: true })
    .click();
  await page.waitForTimeout(1100);
  assert.equal(new URL(page.url()).hash, "#product");
  const anchorY = await page
    .locator("#product")
    .evaluate((el) => el.getBoundingClientRect().top);
  assert(
    Math.abs(anchorY - 100) < 5,
    "Anchor must settle below the sticky header: " + anchorY,
  );
  assert.equal(await page.evaluate(() => document.activeElement.id), "product");
  pass(
    "Same-page anchor updates history, lands below the header, and moves focus",
  );

  for (let i = 0; i < 3; i++) {
    const beforeNavigation = await page.evaluate(() => scrollY);
    // Use the visible sticky link directly. Locator.click's auto-scroll can
    // itself change the departure position before the click in Chrome.
    const navLink = await page
      .locator(".nav-links")
      .getByRole("link", { name: "Pricing", exact: true })
      .boundingBox();
    assert(navLink);
    await page.mouse.click(
      navLink.x + navLink.width / 2,
      navLink.y + navLink.height / 2,
    );
    await page.waitForURL("**/pricing");
    await page.waitForFunction(() =>
      document
        .querySelector("h1")
        ?.textContent.includes("Start with a conversation."),
    );
    await page.waitForFunction(
      () => document.documentElement.dataset.scrollMode === "smooth",
    );
    await page.goBack();
    await page.waitForURL("**/#product");
    await page.waitForFunction(() =>
      Boolean(document.querySelector("#home-title")),
    );
    await page.waitForFunction(
      (previous) => Math.abs(scrollY - previous) < 100,
      beforeNavigation,
    );
    assert(
      Math.abs((await page.evaluate(() => scrollY)) - beforeNavigation) < 100,
      "Back navigation must restore the previous position",
    );
    assert.equal(
      await wheelListeners(),
      baselineListeners,
      "Route changes leaked wheel listeners",
    );
  }
  pass(
    "Repeated route/back navigation retains one scroll owner and stable wheel-listener count",
  );

  await page
    .locator(".tasks-section .task-demo")
    .getByRole("checkbox")
    .first()
    .check();
  assert.equal(
    await page
      .locator(".tasks-section [role=progressbar]")
      .getAttribute("aria-valuenow"),
    "1",
  );
  await page
    .locator(".tasks-section .task-demo")
    .getByRole("checkbox")
    .nth(1)
    .focus();
  await page.keyboard.press("Space");
  assert.equal(
    await page
      .locator(".tasks-section [role=progressbar]")
      .getAttribute("aria-valuenow"),
    "2",
  );
  assert.equal(await page.locator(".goal-card .phone-frame").count(), 1);
  await page
    .getByRole("button", { name: "What’s my next step?", exact: true })
    .click();
  assert.match(
    await page.locator(".assistant-answer").innerText(),
    /release brief/,
  );
  pass(
    "Task examples update accessible progress; goals use the real screen; contextual question switches correctly",
  );

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(200);
  assert.equal(
    await page.evaluate(() =>
      document.documentElement.classList.contains("lenis"),
    ),
    false,
  );
  assert.equal(await page.locator(".story-stage").isVisible(), false);
  assert.equal(
    await page.locator(".story-mobile-visual").first().isVisible(),
    true,
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.waitForTimeout(250);
  assert.equal(
    await page.evaluate(() =>
      document.documentElement.classList.contains("lenis"),
    ),
    true,
  );
  assert.equal(await wheelListeners(), baselineListeners);
  pass(
    "Live reduced-motion changes remove smoothing/sticky motion and safely restore it once",
  );

  for (const width of [375, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForFunction(
      (expected) =>
        document.documentElement.classList.contains("lenis") === expected,
      width >= 1024,
    );
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      lenis: document.documentElement.classList.contains("lenis"),
    }));
    layouts.push(layout);
    assert(layout.scrollWidth <= width + 1, "Overflow at " + width);
    assert.equal(layout.lenis, width >= 1024);
  }
  pass(
    "375/768 use native scrolling; 1024/1440/1920 use smoothing; no horizontal overflow",
  );

  await page.setViewportSize({ width: 375, height: 844 });
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  assert.equal(
    await page.evaluate(() => document.body.style.overflow),
    "hidden",
  );
  await page.keyboard.press("Escape");
  assert.notEqual(
    await page.evaluate(() => document.body.style.overflow),
    "hidden",
  );
  pass("Mobile menu locks background scrolling and restores it on Escape");
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  const violations = axe.violations.map((v) => ({
    id: v.id,
    nodes: v.nodes.map((n) => ({
      target: n.target,
      summary: n.failureSummary,
    })),
  }));
  fs.writeFileSync(
    "qa-artifacts/motion-interactions.json",
    JSON.stringify(
      { checks, errors, layouts, violations, baselineListeners },
      null,
      2,
    ),
  );
  assert.equal(violations.length, 0, JSON.stringify(violations));
  assert.deepEqual(errors, []);
  const noJs = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    javaScriptEnabled: false,
  });
  const staticPage = await noJs.newPage();
  await staticPage.goto(base);
  assert.equal(await staticPage.locator(".home-hero h1").isVisible(), true);
  assert.equal(
    await staticPage.locator(".story-mobile-visual").first().isVisible(),
    true,
  );
  assert.equal(await staticPage.locator(".story-step").count(), 5);
  pass("No-JavaScript content and all five workflow visuals remain visible");
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
