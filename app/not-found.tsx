import type { Metadata } from "next";
import { NotFoundView } from "@/components/home/NotFoundView";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn’t exist. Head back to Buddy to keep listening, noting, and acting.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
