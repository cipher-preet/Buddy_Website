import fs from "node:fs";
import lighthouse from "../.qa-tools/node_modules/lighthouse/core/index.js";
import { chromium } from "../.qa-tools/node_modules/playwright/index.mjs";
const base = process.env.QA_URL || "http://localhost:3001";
const routes = ["/", "/pricing", "/get-kukunotes"];
const results = [];
for (const formFactor of ["desktop", "mobile"]) {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
    args: ["--remote-debugging-port=9223"],
  });
  try {
    for (const route of routes) {
      const desktop = formFactor === "desktop";
      const result = await lighthouse(base + route, {
        port: 9223,
        output: ["json", "html"],
        logLevel: "error",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        formFactor,
        screenEmulation: {
          mobile: !desktop,
          width: desktop ? 1350 : 390,
          height: desktop ? 940 : 844,
          deviceScaleFactor: desktop ? 1 : 1.75,
          disabled: false,
        },
        throttling: desktop
          ? {
              rttMs: 40,
              throughputKbps: 10240,
              cpuSlowdownMultiplier: 1,
              requestLatencyMs: 0,
              downloadThroughputKbps: 0,
              uploadThroughputKbps: 0,
            }
          : undefined,
      });
      const name = route === "/" ? "home" : route.slice(1);
      fs.writeFileSync(
        `qa-artifacts/lighthouse-${name}-${formFactor}.json`,
        result.report[0],
      );
      fs.writeFileSync(
        `qa-artifacts/lighthouse-${name}-${formFactor}.html`,
        result.report[1],
      );
      const scores = Object.fromEntries(
        Object.entries(result.lhr.categories).map(([k, v]) => [
          k,
          Math.round(v.score * 100),
        ]),
      );
      const data = {
        route,
        formFactor,
        scores,
        lcp: result.lhr.audits["largest-contentful-paint"].numericValue,
        cls: result.lhr.audits["cumulative-layout-shift"].numericValue,
        tbt: result.lhr.audits["total-blocking-time"].numericValue,
      };
      results.push(data);
      console.log(JSON.stringify(data));
    }
  } finally {
    await browser.close();
  }
}
fs.writeFileSync(
  "qa-artifacts/lighthouse-summary.json",
  JSON.stringify(results, null, 2),
);
