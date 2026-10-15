/* eslint-disable @typescript-eslint/no-require-imports -- Local browser QA runner. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const {
  AxeBuilder,
} = require("../.qa-tools/node_modules/@axe-core/playwright");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QA_URL || "http://localhost:3000";
const quick = process.argv.includes("quick");
const routes = quick
  ? ["/"]
  : [
      "/",
      "/pricing",
      "/get-kukunotes",
      "/use-cases",
      "/about",
      "/contact",
      "/ai-note-taker",
      "/ai-meeting-recorder",
      "/ai-personal-assistant",
      "/ai-lecture-notes",
      "/hindi-speech-to-text",
      "/platform",
      "/android",
      "/windows",
      "/chrome-extension",
      "/privacy",
      "/terms",
      "/delete-account",
    ];
const widths = [320, 375, 390, 768, 1024, 1280, 1440, 1920];
const output = "qa-artifacts/launch";
const reportFile = quick ? "home-results.json" : "results.json";
fs.mkdirSync(output, { recursive: true });
(async () => {
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
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let y = 0; y < document.body.scrollHeight; y += 800) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    const name = route === "/" ? "home" : route.slice(1);
    await page.screenshot({
      path: path.join(output, `${name}-desktop.png`),
      fullPage: true,
    });
    if (route === "/") {
      await page.screenshot({ path: path.join(output, "hero-desktop.png") });
      for (const selector of [
        "#product",
        "#listen",
        "#spaces",
        "#ask",
        ".launch-progress-section",
        ".launch-platforms",
      ]) {
        await page
          .addStyleTag({
            content:
              ".site-header, .skip-link, nextjs-portal { visibility: hidden !important; }",
          })
          .then((tag) =>
            tag.evaluate((element) =>
              element.setAttribute("data-qa-capture-style", ""),
            ),
          );
        await page.locator(selector).screenshot({
          path: path.join(
            output,
            `${selector.replace(/[^a-z-]/g, "")}-desktop.png`,
          ),
        });
        await page
          .locator("style[data-qa-capture-style]")
          .evaluateAll((elements) =>
            elements.forEach((element) => element.remove()),
          );
      }
    }
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const sizes = [];
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(
        () =>
          new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve)),
          ),
      );
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await page.waitForLoadState("networkidle");
      sizes.push(
        await page.evaluate(() => ({
          width: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          distortedImages: [...document.images]
            .filter((image) => {
              const box = image.getBoundingClientRect();
              const expected =
                Number(image.getAttribute("width")) /
                Number(image.getAttribute("height"));
              return (
                image.closest(".launch-screen") &&
                box.width > 0 &&
                image.complete &&
                image.naturalWidth > 0 &&
                Math.abs(box.width / box.height / expected - 1) > 0.01
              );
            })
            .map((image) => image.getAttribute("alt")),
        })),
      );
      if (width === 390) {
        await page.screenshot({
          path: path.join(output, `${name}-mobile.png`),
          fullPage: true,
        });
        if (route === "/")
          await page.screenshot({ path: path.join(output, "hero-mobile.png") });
      }
    }
    const result = {
      route,
      status: response.status(),
      headings: await page.locator("h1").allTextContents(),
      sizes,
      accessibility: accessibility.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      })),
    };
    results.push(result);
    fs.writeFileSync(
      path.join(output, reportFile),
      JSON.stringify({ results, errors, inProgress: true }, null, 2),
    );
    console.log(
      route,
      response.status(),
      "axe",
      result.accessibility.length,
      "overflow",
      sizes.filter((s) => s.overflow).map((s) => s.width),
      "distorted",
      sizes.filter((s) => s.distortedImages.length).length,
    );
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  await page.goto(base, { waitUntil: "networkidle" });
  const interactionChecks = [];
  for (const label of ["Mindmap", "Documents", "Spaces & tasks"]) {
    await page.getByRole("tab", { name: label, exact: true }).click();
    interactionChecks.push({
      workspaceTab: label,
      selected: await page
        .getByRole("tab", { name: label, exact: true })
        .getAttribute("aria-selected"),
      image: await page
        .locator("#workspace-preview figure")
        .getAttribute("data-product-screen"),
    });
  }
  for (const label of ["Android", "Windows", "Chrome", "Web workspace"]) {
    await page.getByRole("tab", { name: label, exact: true }).click();
    interactionChecks.push({
      platform: label,
      selected: await page
        .getByRole("tab", { name: label, exact: true })
        .getAttribute("aria-selected"),
      href: await page.locator("#platform-panel .button").getAttribute("href"),
    });
  }
  await page.getByRole("tab", { name: "Documents", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  interactionChecks.push({
    workspaceKeyboard: await page
      .getByRole("tab", { name: "Spaces & tasks", exact: true })
      .getAttribute("aria-selected"),
  });
  const stages = [];
  for (const index of [0, 1, 2, 3, 4, 3, 2, 1, 0]) {
    await page.locator(".film-chapter").nth(index).scrollIntoViewIfNeeded();
    await page
      .locator(".film-chapter")
      .nth(index)
      .evaluate((element) =>
        element.scrollIntoView({ block: "center", behavior: "instant" }),
      );
    await page.waitForTimeout(100);
    stages.push({
      index,
      active: await page
        .locator(".film-chapter.is-active .film-number")
        .innerText(),
    });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  const toggle = page.getByRole("button", { name: /open navigation/i });
  if (await toggle.count()) {
    await toggle.click();
    interactionChecks.push({
      mobileMenuOpened: await page
        .locator(".nav-menu-btn")
        .getAttribute("aria-expanded"),
    });
    await page.keyboard.press("Escape");
    interactionChecks.push({
      mobileMenuClosed: await page
        .locator(".nav-menu-btn")
        .getAttribute("aria-expanded"),
    });
  }
  await page.getByRole("button", { name: /05.*Move forward/i }).click();
  interactionChecks.push({
    mobileFilm: await page.locator("#film-screen").getAttribute("aria-label"),
  });
  const mobileAxe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  const brokenImages = await page.evaluate(() =>
    [...document.images]
      .filter(
        (image) =>
          image.getBoundingClientRect().width &&
          image.complete &&
          image.naturalWidth === 0,
      )
      .map((image) => image.src),
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(output, "hero-motion-desktop.png") });
  const report = {
    results,
    interactionChecks,
    stages,
    errors,
    brokenImages,
    mobileAccessibility: mobileAxe.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  };
  fs.writeFileSync(
    path.join(output, reportFile),
    JSON.stringify(report, null, 2),
  );
  console.log(
    "Interactions",
    interactionChecks,
    "scroll stages",
    stages,
    "runtime errors",
    errors,
    "mobile axe",
    report.mobileAccessibility,
  );
  await browser.close();
  if (
    results.some(
      (r) =>
        r.status !== 200 ||
        r.accessibility.length ||
        r.sizes.some((s) => s.overflow || s.distortedImages.length),
    ) ||
    errors.length ||
    brokenImages.length ||
    report.mobileAccessibility.length
  )
    process.exitCode = 1;
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
