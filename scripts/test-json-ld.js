async function testRoute(path) {
  const res = await fetch(`http://localhost:3000${path}`);
  const html = await res.text();
  const matches = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  console.log(`\n================= ${path} (${matches.length} JSON-LD blocks) =================`);
  for (let i = 0; i < matches.length; i++) {
    const jsonStr = matches[i][1];
    const parsed = JSON.parse(jsonStr);
    if (parsed["@graph"]) {
      console.log(`Block ${i + 1} @graph items: ${parsed["@graph"].map((x) => x["@type"]).join(", ")}`);
    } else {
      console.log(`Block ${i + 1} @type: ${parsed["@type"]}`);
    }
  }
}

async function run() {
  await testRoute("/");
  await testRoute("/pricing");
  await testRoute("/get-buddy");
  await testRoute("/use-cases");
  await testRoute("/contact");
}

run().catch(console.error);
