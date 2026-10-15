import "server-only";
import { parsePlanCatalog } from "./pricing-data";

// Same public Node API used by the mobile app. Include /api/v1 in overrides.
const defaultApiUrl = "https://buddy-node-backend-scz7pyp3ha-el.a.run.app/api/v1";

export async function getPlans() {
  const baseUrl = (process.env.BACKEND_API_URL?.trim() || defaultApiUrl).replace(/\/+$/, "");
  const response = await fetch(`${baseUrl}/plans`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`Plan API returned HTTP ${response.status}.`);
  return parsePlanCatalog(await response.json());
}
