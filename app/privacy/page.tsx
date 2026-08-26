import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Buddy",
  description:
    "Learn how Buddy collects, uses, and protects your information when you use our AI listening, notes, and tasks app.",
};

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    body: [
      "Buddy (“we”, “our”, or “us”) provides an AI assistant that can listen to conversations and help turn them into notes, tasks, and useful answers inside Spaces.",
      "This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Buddy, you agree to this Policy.",
    ],
  },
  {
    id: "information",
    title: "2. Information we collect",
    body: [
      "Account information: such as your name, email address, and profile details when you create or sign in to an account.",
      "Voice and conversation data: when you use Start Listening or related features, we may process audio, transcripts, and derived content so Buddy can generate notes, tasks, and chat responses.",
      "Workspace content: including Spaces, notes, tasks, tags, confidence scores, evidence snippets, and chat history you create or that Buddy generates for you.",
      "Device and usage data: such as app version, device type, approximate location (if permitted), diagnostics, and how you interact with Buddy features.",
      "Support communications: messages you send us when you contact support or request access.",
    ],
  },
  {
    id: "use",
    title: "3. How we use your information",
    body: [
      "Provide and improve Buddy’s listening, notes, tasks, Spaces, and AI chat features.",
      "Personalize your experience and keep context organized within the Spaces you create.",
      "Maintain security, prevent abuse, and troubleshoot product issues.",
      "Communicate with you about product updates, support, and important service notices.",
      "Comply with legal obligations and enforce our Terms of Service.",
    ],
  },
  {
    id: "voice",
    title: "4. Voice, notes, and AI processing",
    body: [
      "Buddy’s core value depends on processing voice and conversation context. When listening is active, audio may be uploaded and processed to create transcripts, notes, tasks, and answers.",
      "We use this content to deliver the features you request. We do not sell your personal conversation content.",
      "You control when listening starts and stops. You are responsible for obtaining any consent required from other people before recording or processing their conversations.",
    ],
  },
  {
    id: "sharing",
    title: "5. How we share information",
    body: [
      "Service providers: trusted vendors that help us host, process, analyze, or support the product (for example cloud infrastructure or AI processing partners), under appropriate confidentiality and security obligations.",
      "Legal requirements: if required by law, regulation, legal process, or to protect the rights, safety, and security of Buddy, our users, or the public.",
      "Business transfers: if Buddy is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction with notice where required.",
    ],
  },
  {
    id: "retention",
    title: "6. Data retention",
    body: [
      "We retain account, Space, note, task, and related data for as long as needed to provide Buddy and for legitimate business or legal purposes.",
      "You may delete Spaces, notes, tasks, or your account where the product allows. Some backups or logs may persist for a limited period for security and continuity.",
    ],
  },
  {
    id: "security",
    title: "7. Security",
    body: [
      "We use administrative, technical, and organizational measures designed to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
      "We encourage you to use a strong password, keep your devices updated, and avoid sharing sensitive information you do not want processed.",
    ],
  },
  {
    id: "rights",
    title: "8. Your choices and rights",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, export, or restrict certain personal data, or to object to certain processing.",
      "You can usually manage Spaces and content in the app. For account or privacy requests, contact us at hello@buddy.ai.",
      "To permanently delete your Buddy account and associated data, visit our Delete Account page or email hello@buddy.ai with the subject “Buddy account deletion request”.",
      "You may also control microphone and notification permissions through your device settings.",
    ],
  },
  {
    id: "children",
    title: "9. Children’s privacy",
    body: [
      "Buddy is not directed to children under 13 (or the minimum age required in your region). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will take appropriate steps.",
    ],
  },
  {
    id: "international",
    title: "10. International transfers",
    body: [
      "Your information may be processed in countries other than your own. Where required, we use appropriate safeguards for cross-border transfers.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to this Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the “Last updated” date. Continued use of Buddy after changes means you accept the updated Policy.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact us",
    body: [
      "If you have questions about this Privacy Policy or your data, contact us at hello@buddy.ai.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalShell>
      <LegalDocument
        title="Privacy Policy"
        intro="Your conversations, notes, and tasks deserve careful handling. This Policy explains how Buddy protects them."
        updated="August 8, 2026"
        tocLabel="Privacy Policy sections"
        sections={sections}
        related={
          <>
            Also read our <Link href="/terms">Terms of Service</Link> or{" "}
            <Link href="/delete-account">delete your Buddy account</Link>.
          </>
        }
      />
    </LegalShell>
  );
}
