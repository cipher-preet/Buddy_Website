/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node QA runner. */
// Run after npm run build. Uses the existing local Playwright QA installation.
const assert = require("node:assert/strict");
const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const { spawn } = require("node:child_process");
const { once } = require("node:events");
const { chromium } = require("../.qa-tools/node_modules/playwright");

const root = path.resolve(__dirname, "..");
const websitePort = Number(process.env.PRICING_QA_PORT || 3105);
const base = `http://127.0.0.1:${websitePort}`;

// These are test inputs, not fallback prices used by the website.
function makePlan(code, sortOrder, amount, yearlyAmount, allowance) {
  return {
    code,
    name: `${code[0].toUpperCase()}${code.slice(1)} API`,
    description: `${code} description from the API`,
    amount,
    yearlyAmount,
    currency: "INR",
    interval: code === "free" ? "forever" : "monthly",
    isActive: true,
    sortOrder,
    features: [`${code} feature from the API`],
    languages: ["English", "Hindi"],
    limits: {
      notesRecordingHours: allowance,
      meetingRecordingHours: allowance,
      mindmaps: allowance,
      documents: allowance,
      goals: allowance,
      marketplaceAccess:
        code === "business" ? "full" : code === "pro" ? "limited" : "none",
    },
    internalOnly: "must not be forwarded",
  };
}

async function run() {
  const free = makePlan("free", 1, 0, 0, 2);
  const pro = makePlan("pro", 2, 49900, 360000, 100);
  const business = makePlan("business", 3, 99900, 720000, -1);
  const catalog = [business, { code: "hidden", isActive: false }, pro, free];
  let mode = "ready";
  let requests = 0;
  let logs = "";
  let app;
  let browser;
  const backend = http.createServer((request, response) => {
    assert.equal(request.url, "/api/v1/plans");
    requests++;
    response.setHeader("Content-Type", "application/json");
    if (mode === "down") {
      response.writeHead(503).end(JSON.stringify({ success: false }));
      return;
    }
    if (mode === "non-json") {
      response.end("upstream returned an HTML error");
      return;
    }
    let plans = catalog;
    if (mode === "empty") plans = [];
    if (mode === "malformed") plans = [{ ...pro, amount: "49900" }];
    if (mode === "duplicate") plans = [pro, pro];
    response.end(JSON.stringify({ success: true, data: { plans } }));
  });

  try {
    backend.listen(0, "127.0.0.1");
    await once(backend, "listening");
    app = spawn(
      process.execPath,
      [
        path.join(root, "node_modules/next/dist/bin/next"),
        "start",
        "--port",
        String(websitePort),
        "--hostname",
        "127.0.0.1",
      ],
      {
        cwd: root,
        env: {
          ...process.env,
          BACKEND_API_URL: `http://127.0.0.1:${backend.address().port}/api/v1/`,
        },
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true,
      },
    );
    for (const output of [app.stdout, app.stderr]) {
      output.on("data", (chunk) => {
        logs = (logs + chunk).slice(-12000);
      });
    }
    const deadline = Date.now() + 30000;
    while (true) {
      try {
        const response = await fetch(`${base}/api/plans`);
        if (response.ok) break;
      } catch {
        /* Wait for the owned preview server. */
      }
      if (app.exitCode !== null || Date.now() > deadline)
        throw new Error(`Preview failed to start.\n${logs}`);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const response = await fetch(`${base}/api/plans`);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("cache-control"), "no-store");
    const body = await response.json();
    assert.deepEqual(
      body.data.plans.map((plan) => plan.code),
      ["free", "pro", "business"],
    );
    assert.equal(body.data.plans[0].internalOnly, undefined);
    console.log(
      "PASS API envelope, inactive filtering, backend ordering, and no-store response",
    );

    browser = await chromium.launch({
      executablePath:
        process.env.CHROME_PATH ||
        "C:/Program Files/Google/Chrome/Application/chrome.exe",
      headless: true,
    });
    const staticContext = await browser.newContext({
      javaScriptEnabled: false,
    });
    const staticPage = await staticContext.newPage();
    await staticPage.goto(`${base}/pricing`);
    assert.deepEqual(
      await staticPage.locator(".price-display strong").allTextContents(),
      ["₹0", "₹499", "₹999"],
    );
    assert.equal(
      await staticPage
        .getByText("pro description from the API", { exact: true })
        .count(),
      1,
    );
    await staticContext.close();
    console.log(
      "PASS prices and descriptions are server rendered without JavaScript",
    );

    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`${base}/pricing`);
    await page.getByRole("radio", { name: "Yearly", exact: true }).check();
    assert.deepEqual(
      await page.locator(".price-display strong").allTextContents(),
      ["₹0", "₹300", "₹600"],
    );
    assert.equal(
      await page.locator(".pricing-featured .price-cadence").innerText(),
      "/month",
    );
    assert.deepEqual(await page.locator(".price-billing").allTextContents(), [
      "Free forever",
      "₹3,600 billed annually",
      "₹7,200 billed annually",
    ]);
    assert.match(
      await page.getByRole("row", { name: /^Yearly price/ }).innerText(),
      /₹3,600 \/ year/,
    );
    assert.deepEqual(
      await page
        .getByRole("row", { name: /^Notes recording/ })
        .locator("td")
        .allTextContents(),
      ["2 hours", "100 hours", "Unlimited"],
    );
    assert.match(
      await page.getByRole("row", { name: /^Included languages/ }).innerText(),
      /English, Hindi/,
    );
    assert.equal(
      await page.getByText("pro feature from the API", { exact: true }).count(),
      1,
    );
    fs.mkdirSync(path.join(root, "qa-artifacts"), { recursive: true });
    await page
      .locator(".pricing-content")
      .screenshot({ path: path.join(root, "qa-artifacts/pricing-yearly.png") });
    await page.getByRole("radio", { name: "Yearly", exact: true }).focus();
    await page.keyboard.press("ArrowLeft");
    assert.equal(
      await page
        .getByRole("radio", { name: "Monthly", exact: true })
        .isChecked(),
      true,
    );
    assert.deepEqual(
      await page.locator(".price-display strong").allTextContents(),
      ["₹0", "₹499", "₹999"],
    );
    assert.deepEqual(await page.locator(".price-billing").allTextContents(), [
      "Free forever",
      "Billed monthly",
      "Billed monthly",
    ]);
    await page
      .locator(".pricing-content")
      .screenshot({
        path: path.join(root, "qa-artifacts/pricing-desktop.png"),
      });
    console.log(
      "PASS billing toggle, annual totals, monthly equivalents, keyboard controls, features, and unlimited limits",
    );

    pro.amount = 12345;
    pro.yearlyAmount = 0;
    await page.reload();
    assert.equal(
      await page.locator(".pricing-featured .price-display strong").innerText(),
      "₹123.45",
    );
    await page.getByRole("radio", { name: "Yearly", exact: true }).check();
    assert.equal(
      await page.locator(".pricing-featured .price-display strong").innerText(),
      "Unavailable",
    );
    assert.equal(
      await page
        .getByRole("row", { name: /^Yearly price/ })
        .locator("td")
        .nth(1)
        .innerText(),
      "Unavailable",
    );
    console.log(
      "PASS fresh backend changes, fractional rupees, and unavailable yearly billing",
    );
    pro.amount = 49900;
    pro.yearlyAmount = 360000;

    mode = "down";
    await page.reload();
    await page.locator(".pricing-error").getByRole("alert").waitFor();
    assert.equal(await page.locator(".pricing-grid .pricing-card").count(), 0);
    assert.equal(await page.locator(".comparison-section").count(), 0);
    const beforeRetry = requests;
    mode = "ready";
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await page.locator(".pricing-featured").waitFor();
    assert.ok(requests > beforeRetry);
    assert.equal(await page.locator(".comparison-section").count(), 1);
    assert.equal(
      await page.locator(".pricing-featured .price-display strong").innerText(),
      "₹499",
    );
    console.log(
      "PASS outage state has no fabricated prices; retry recovers cards and comparison",
    );

    for (mode of ["malformed", "duplicate", "empty", "non-json"]) {
      const failure = await fetch(`${base}/api/plans`);
      assert.equal(failure.status, 502, mode);
      assert.equal((await failure.json()).success, false, mode);
    }
    mode = "ready";
    console.log(
      "PASS malformed, duplicate, empty, and non-JSON catalogs return a controlled error",
    );

    // The launch homepage now links to dedicated pricing. Exercise the loading
    // state through the real retry flow rather than a removed homepage widget.
    mode = "down";
    await page.goto(`${base}/pricing`);
    await page.locator(".pricing-error").getByRole("alert").waitFor();
    mode = "ready";
    let release;
    const waiting = new Promise((resolve) => {
      release = resolve;
    });
    await page.route("**/api/plans", async (route) => {
      await waiting;
      await route.continue();
    });
    await page.getByRole("button", { name: "Try again", exact: true }).click();
    await page.getByText("Loading current plans…", { exact: true }).waitFor();
    release();
    await page.locator(".pricing-featured").waitFor();
    assert.deepEqual(
      await page.locator(".price-display strong").allTextContents(),
      ["₹0", "₹499", "₹999"],
    );
    await page.unroute("**/api/plans");
    console.log("PASS retry loading state and shared live catalog");

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${base}/pricing`);
    await page.getByRole("radio", { name: "Yearly", exact: true }).check();
    assert.equal(
      await page.locator(".pricing-featured .price-display strong").innerText(),
      "₹300",
    );
    assert.equal(
      await page.locator(".pricing-featured .price-billing").innerText(),
      "₹3,600 billed annually",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      true,
    );
    await page
      .locator(".pricing-content")
      .screenshot({ path: path.join(root, "qa-artifacts/pricing-mobile.png") });
    assert.deepEqual(errors, []);
    console.log(
      "PASS mobile layout, yearly prices, and no browser runtime errors",
    );
  } catch (error) {
    console.error(logs);
    throw error;
  } finally {
    if (browser) await browser.close();
    if (app && app.exitCode === null) {
      const stopped = once(app, "exit");
      app.kill();
      await stopped;
    }
    backend.closeAllConnections();
    await new Promise((resolve) => backend.close(resolve));
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
