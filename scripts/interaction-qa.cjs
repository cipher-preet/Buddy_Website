/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node QA runner. */
const { chromium } = require("../.qa-tools/node_modules/playwright");
const {
  AxeBuilder,
} = require("../.qa-tools/node_modules/@axe-core/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.QA_URL || "http://localhost:3000";
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
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const checks = [];
  const pass = (name) => {
    checks.push(name);
    console.log("PASS", name);
  };
  await page.goto(base);
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  assert.equal(await page.locator("#mobile-navigation").isVisible(), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#mobile-navigation").isVisible(), false);
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation", exact: true })
      .evaluate((el) => el === document.activeElement),
    true,
  );
  pass(
    "Mobile navigation opens, Escape closes it, focus returns to the trigger",
  );
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Pricing", exact: true })
    .click();
  await page.waitForURL("**/pricing");
  assert.equal(await page.locator("#mobile-navigation").isVisible(), false);
  pass("Mobile navigation links navigate and close the menu");
  await page.getByRole("radio", { name: "Yearly", exact: true }).check();
  assert.equal(
    await page.getByRole("radio", { name: "Yearly", exact: true }).isChecked(),
    true,
  );
  assert.match(
    await page.locator(".billing-context").innerText(),
    /yearly billing/,
  );
  assert.match(
    await page.locator(".pricing-featured .button").getAttribute("aria-label"),
    /yearly billing/,
  );
  await page.getByRole("radio", { name: "Yearly", exact: true }).focus();
  await page.keyboard.press("ArrowLeft");
  assert.equal(
    await page.getByRole("radio", { name: "Monthly", exact: true }).isChecked(),
    true,
  );
  pass(
    "Billing selector changes context and supports native keyboard radio behavior",
  );
  await page.goto(base + "/get-kukunotes");
  const destinations = [
    "play.google.com",
    "apps.microsoft.com",
    "chromewebstore.google.com",
    "platform.kukunotes.com",
  ];
  for (let i = 0; i < 4; i++) {
    await page.locator(".platform-tabs [role=tab]").nth(i).click();
    assert.equal(
      await page
        .locator(".platform-tabs [role=tab]")
        .nth(i)
        .getAttribute("aria-selected"),
      "true",
    );
    assert.match(
      await page.locator(".platform-panel .button").getAttribute("href"),
      new RegExp(destinations[i].replaceAll(".", "\\.")),
    );
  }
  await page.locator(".platform-tabs [role=tab]").last().focus();
  await page.keyboard.press("Home");
  assert.equal(
    await page
      .locator(".platform-tabs [role=tab]")
      .first()
      .getAttribute("aria-selected"),
    "true",
  );
  pass(
    "Every platform tab displays the correct official destination; keyboard Home works",
  );
  await page.goto(base);
  await page.getByRole("tab", { name: "Spaces & tasks", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  assert.equal(
    await page
      .getByRole("tab", { name: "Mindmap", exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  assert.match(
    await page
      .locator("#workspace-preview figure")
      .getAttribute("data-product-screen"),
    /mindmap/,
  );
  await page.keyboard.press("End");
  assert.equal(
    await page
      .getByRole("tab", { name: "Documents", exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  assert.match(
    await page
      .locator("#workspace-preview figure")
      .getAttribute("data-product-screen"),
    /documents/,
  );
  pass(
    "Workspace explorer switches genuine product views with keyboard navigation",
  );
  const summary = page.locator(".faq-list summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  assert.equal(
    await page.locator(".faq-list details").first().getAttribute("open"),
    "",
  );
  await page.keyboard.press("Enter");
  assert.equal(
    await page.locator(".faq-list details").first().getAttribute("open"),
    null,
  );
  pass("FAQ opens and closes with the keyboard");
  await page.goto(base + "/contact");
  assert.equal(
    await page.locator("form").evaluate((el) => el.checkValidity()),
    false,
  );
  await page
    .getByRole("textbox", { name: "Your name", exact: true })
    .fill("QA Example");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("invalid-address");
  await page
    .getByRole("textbox", { name: "Your message", exact: true })
    .fill("Testing the email handoff validation only.");
  assert.equal(
    await page.locator("form").evaluate((el) => el.checkValidity()),
    false,
  );
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("qa@example.com");
  assert.equal(
    await page.locator("form").evaluate((el) => el.checkValidity()),
    true,
  );
  await page
    .getByRole("button", { name: "Prepare email", exact: true })
    .click();
  await page
    .getByRole("status")
    .filter({ hasText: "Send the message there" })
    .waitFor();
  assert.doesNotMatch(
    await page.getByRole("status").innerText(),
    /message (sent|received)|successfully sent/i,
  );
  pass(
    "Contact validates required fields/email and reports email-client handoff without claiming delivery",
  );
  await page.goto(base + "/privacy");
  const toc = page.locator(".legal-toc a").first();
  const hash = await toc.getAttribute("href");
  await toc.click();
  assert.equal(new URL(page.url()).hash, hash);
  await page.reload();
  assert.equal(new URL(page.url()).hash, hash);
  pass(
    "Legal table of contents navigates to sections and preserves deep links on reload",
  );
  const mobileAxe = [];
  const links = new Set();
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator("main#main-content").count(), 1);
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll("a[href]")]
        .filter((a) => {
          const href = a.getAttribute("href");
          return (
            !href ||
            href === "#" ||
            href.startsWith("javascript:") ||
            (href.startsWith("#") &&
              !document.getElementById(decodeURIComponent(href.slice(1))))
          );
        })
        .map((a) => a.outerHTML),
    );
    assert.deepEqual(broken, [], route + " has dead anchors");
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((els) => els.map((el) => el.getAttribute("href"))))
      links.add(href);
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    mobileAxe.push({
      route,
      violations: axe.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
    assert.equal(axe.violations.length, 0, route + " mobile axe violations");
    console.log("MOBILE AXE", route, 0);
  }
  for (const href of links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const url = new URL(href, base);
    if (url.pathname.startsWith("/screenshots/")) {
      const asset = await context.request.get(url.href);
      assert.equal(
        asset.status(),
        200,
        "Broken screenshot inspection link: " + href,
      );
      assert.match(asset.headers()["content-type"], /image/);
      continue;
    }
    assert(routes.includes(url.pathname), "Unknown internal route: " + href);
    if (url.hash) {
      await page.goto(url.href);
      assert.equal(
        await page
          .locator("[id]")
          .evaluateAll(
            (els, id) => els.some((el) => el.id === id),
            decodeURIComponent(url.hash.slice(1)),
          ),
        true,
        href,
      );
    }
  }
  pass(
    "All 18 routes have one H1/main, valid local navigation, no placeholder actions, and zero mobile axe violations",
  );
  fs.writeFileSync(
    "qa-artifacts/interactions.json",
    JSON.stringify({ checks, mobileAxe, links: [...links] }, null, 2),
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
