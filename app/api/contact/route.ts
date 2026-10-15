import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

const API_BASE = (process.env.API_URL ?? siteConfig.apiUrl).replace(/\/$/, "");

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Please send a valid contact message." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(`${API_BASE}/api/v1/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(12000),
    });
    const payload = await upstream.json().catch(() => null);

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { success: false, message: "The contact service did not respond. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(payload, { status: upstream.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "We could not reach the contact service. Please try again." },
      { status: 502 },
    );
  }
}
