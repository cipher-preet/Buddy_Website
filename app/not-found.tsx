import type { Metadata } from "next";
import { NotFoundView } from "@/components/home/NotFoundView";

export const metadata: Metadata = {
  title: "Page not found — Buddy",
  description: "This page doesn’t exist. Head back to Buddy to keep listening, noting, and acting.",
};

export default function NotFound() {
  return <NotFoundView />;
}
