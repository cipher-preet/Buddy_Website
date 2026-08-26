import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalShell } from "@/components/legal/LegalShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { legalJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for using Buddy, the AI assistant for listening, notes, tasks, and Spaces.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Buddy",
    url: "/terms",
    type: "website",
  },
};

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to these Terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of Buddy, including our website, mobile application, and related services.",
      "By creating an account or using Buddy, you agree to these Terms. If you do not agree, do not use Buddy.",
    ],
  },
  {
    id: "service",
    title: "2. The Buddy service",
    body: [
      "Buddy helps you organize conversations into Spaces, listen to discussions, generate notes and tasks, and chat with an AI assistant using your workspace context.",
      "Features may change over time as we improve the product. We may add, modify, or discontinue features with or without notice where permitted.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and eligibility",
    body: [
      "You must provide accurate account information and keep your login credentials secure. You are responsible for activity under your account.",
      "You must be legally able to enter this agreement in your jurisdiction. Buddy is not intended for children under 13 (or the higher age required locally).",
    ],
  },
  {
    id: "acceptable",
    title: "4. Acceptable use",
    body: [
      "You agree not to misuse Buddy, including by attempting to break security, reverse engineer the service unlawfully, overload systems, or use Buddy for illegal, harmful, or deceptive purposes.",
      "You must not use listening or recording features in violation of applicable laws. You are responsible for obtaining required consents before recording other people.",
    ],
  },
  {
    id: "content",
    title: "5. Your content",
    body: [
      "You retain rights to the content you submit, including voice input, notes, tasks, and Space materials (“Your Content”).",
      "You grant Buddy a limited license to host, process, transmit, and display Your Content as needed to operate and improve the service you request.",
      "You represent that you have the rights necessary to use and share Your Content with Buddy.",
    ],
  },
  {
    id: "ai",
    title: "6. AI-generated results",
    body: [
      "Buddy uses automated systems that may generate transcripts, notes, tasks, summaries, and chat answers. These outputs can be incomplete or incorrect.",
      "You should review important outputs before relying on them. Buddy is not a substitute for professional advice.",
    ],
  },
  {
    id: "privacy",
    title: "7. Privacy",
    body: [
      "Our collection and use of personal information is described in our Privacy Policy. By using Buddy, you also acknowledge that Policy.",
    ],
  },
  {
    id: "availability",
    title: "8. Availability and changes",
    body: [
      "We aim to keep Buddy reliable, but we do not guarantee uninterrupted or error-free service. Maintenance, outages, or updates may occur.",
      "We may suspend or terminate access if needed to protect users, comply with law, or address Terms violations.",
    ],
  },
  {
    id: "disclaimer",
    title: "9. Disclaimers",
    body: [
      "Buddy is provided on an “as is” and “as available” basis to the fullest extent permitted by law. We disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    id: "liability",
    title: "10. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Buddy and its providers will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or business arising from your use of the service.",
      "Our total liability for any claim relating to Buddy will not exceed the greater of amounts you paid us in the 12 months before the claim or USD $50, if no fees were paid.",
    ],
  },
  {
    id: "indemnity",
    title: "11. Indemnity",
    body: [
      "You agree to defend and indemnify Buddy against claims arising from your use of the service, Your Content, or your violation of these Terms or applicable law.",
    ],
  },
  {
    id: "governing",
    title: "12. Governing law",
    body: [
      "These Terms are governed by applicable laws of the jurisdiction in which Buddy operates its primary business, without regard to conflict-of-law rules, unless mandatory local consumer laws provide otherwise.",
    ],
  },
  {
    id: "changes",
    title: "13. Changes to these Terms",
    body: [
      "We may update these Terms from time to time. We will post updates on this page and revise the “Last updated” date. Continued use after changes become effective constitutes acceptance.",
    ],
  },
  {
    id: "contact",
    title: "14. Contact",
    body: [
      "Questions about these Terms? Contact us at hello@buddy.ai.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalShell>
      <JsonLd
        data={legalJsonLd(
          "Terms of Service",
          "/terms",
          "Read the Terms of Service for using Buddy, the AI assistant for listening, notes, tasks, and Spaces.",
        )}
      />
      <LegalDocument
        title="Terms of Service"
        intro="Clear rules for using Buddy—so conversations, notes, and tasks stay useful and responsible."
        updated="August 8, 2026"
        tocLabel="Terms of Service sections"
        sections={sections}
        related={
          <>
            Also read our <Link href="/privacy">Privacy Policy</Link>.
          </>
        }
      />
    </LegalShell>
  );
}
