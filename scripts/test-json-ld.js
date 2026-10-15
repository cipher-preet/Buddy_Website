// Run against an already-started server: QA_URL=http://localhost:3001 node scripts/test-json-ld.js
async function run() {
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
  const assert = (test, message) => {
    if (!test) throw new Error(message);
  };
  for (const path of routes) {
    const response = await fetch(base + path);
    assert(response.status === 200, `${path}: HTTP ${response.status}`);
    const html = await response.text();
    const blocks = [
      ...html.matchAll(
        /<script type="application\/ld\+json">(.*?)<\/script>/gs,
      ),
    ];
    assert(blocks.length > 0, `${path}: missing JSON-LD`);
    for (const block of blocks) {
      const parsed = JSON.parse(block[1]);
      assert(
        parsed["@context"] === "https://schema.org",
        `${path}: invalid schema context`,
      );
      assert(parsed["@graph"]?.length > 0, `${path}: empty graph`);
      assert(
        !/"price":"(?:499|799|999|1999)"/.test(block[1]),
        `${path}: unverified paid offer emitted`,
      );
    }
    assert(
      (html.match(/<h1(?:\s|>)/g) || []).length === 1,
      `${path}: expected one H1`,
    );
    assert(
      html.includes('<link rel="canonical"'),
      `${path}: missing canonical`,
    );
    assert(
      html.includes('<meta name="description"'),
      `${path}: missing description`,
    );
    assert(
      !/<meta name="robots" content="[^"]*noindex/.test(html),
      `${path}: unexpected noindex`,
    );
    console.log(
      `PASS ${path}: HTTP, JSON-LD, canonical, metadata, heading, pricing accuracy`,
    );
  }
  const redirect = await fetch(base + "/get-buddy", { redirect: "manual" });
  assert(
    [301, 308].includes(redirect.status),
    "Legacy download redirect is not permanent",
  );
  assert(
    redirect.headers.get("location")?.endsWith("/get-kukunotes"),
    "Legacy redirect destination changed",
  );
  const notFound = await fetch(base + "/this-page-does-not-exist");
  assert(notFound.status === 404, "Unknown route must return 404");
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  for (const path of routes)
    assert(
      sitemap.includes(`https://kukunotes.com${path}</loc>`),
      `${path}: missing sitemap entry`,
    );
  assert((await fetch(base + "/robots.txt")).ok, "robots.txt missing");
  console.log("PASS legacy redirect, 404, all sitemap entries, robots.txt");
}
run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
