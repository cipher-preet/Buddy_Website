import { getPlans } from "@/lib/plans-api";
import { connection } from "next/server";

export async function GET() {
  await connection();
  try {
    const plans = await getPlans();
    return Response.json(
      { success: true, data: { plans } },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Unable to fetch the plan catalog:", error);
    return Response.json(
      { success: false, message: "Plan details are temporarily unavailable. Please try again." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
