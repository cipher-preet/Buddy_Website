import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { legalJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Delete Your Buddy Account",
  description:
    "Request permanent deletion of your Buddy account and associated data. Required web resource for Google Play account deletion.",
  alternates: { canonical: "/delete-account" },
  openGraph: {
    title: "Delete Your Buddy Account | Buddy",
    url: "/delete-account",
    type: "website",
  },
};

const deleteMailto =
  "mailto:hello@buddy.ai?subject=Buddy%20account%20deletion%20request&body=Please%20delete%20my%20Buddy%20account%20and%20associated%20data.%0A%0AAccount%20email%3A%20%0AAdditional%20details%20(optional)%3A%20";

export default function DeleteAccountPage() {
  return (
    <LegalShell>
      <JsonLd
        data={legalJsonLd(
          "Delete Your Buddy Account",
          "/delete-account",
          "Request permanent deletion of your Buddy account and associated data. Required web resource for Google Play account deletion.",
        )}
      />
      <article className="legal-page delete-account-page">
        <header className="legal-hero">
          <p className="studio-kicker">Account</p>
          <h1>Delete your Buddy account</h1>
          <p className="legal-intro">
            Use this page to request permanent deletion of your Buddy account
            and the data linked to it. This web resource is provided so you can
            request deletion even if you no longer have the Buddy app installed.
          </p>
          <p className="legal-meta">Last updated: August 8, 2026</p>
        </header>

        <div className="delete-layout">
          <section className="delete-request" id="request" aria-labelledby="request-title">
            <p className="studio-kicker">Start here</p>
            <h2 id="request-title">Request account deletion</h2>
            <p>
              Email us from the address tied to your Buddy account. We will verify
              the request and permanently delete your account and associated data.
            </p>
            <a className="studio-btn studio-btn-ink" href={deleteMailto}>
              Email deletion request
            </a>
            <p className="delete-request-note">
              Or write to{" "}
              <a href="mailto:hello@buddy.ai">hello@buddy.ai</a> with the subject
              line <strong>Buddy account deletion request</strong> and include the
              email used for your Buddy account.
            </p>
          </section>

          <aside className="delete-facts" aria-label="How deletion works">
            <article>
              <span>01</span>
              <h3>Email from your account</h3>
              <p>Send the request from the address you use to sign in to Buddy.</p>
            </article>
            <article>
              <span>02</span>
              <h3>We verify ownership</h3>
              <p>We confirm it is your account before anything is permanently removed.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Deleted within 30 days</h3>
              <p>Verified requests are processed within 30 days, with confirmation when possible.</p>
            </article>
          </aside>
        </div>

        <nav className="legal-toc legal-toc-inline" aria-label="Delete account sections">
          <a href="#request">Request deletion</a>
          <a href="#in-app">In the app</a>
          <a href="#what-we-delete">What we delete</a>
          <a href="#timeline">Timeline</a>
          <a href="#retention">Data we may retain</a>
          <a href="#after">After deletion</a>
        </nav>

        <div className="legal-content">
          <section id="in-app" className="legal-section">
            <h2>Delete from inside the Buddy app</h2>
            <p>
              If you still have Buddy installed, you can also start deletion from
              the app:
            </p>
            <ol className="delete-steps">
              <li>Open Buddy and sign in to your account.</li>
              <li>Go to Settings (or your profile).</li>
              <li>Select Delete account (or Account → Delete account).</li>
              <li>Confirm the deletion when prompted.</li>
            </ol>
            <p>
              If you cannot find the in-app option, use the email request above.
              Both paths permanently delete your Buddy account.
            </p>
          </section>

          <section id="what-we-delete" className="legal-section">
            <h2>What we delete</h2>
            <p>
              When your Buddy account is deleted, we delete the account and
              associated user data, including:
            </p>
            <ul className="delete-list">
              <li>Account profile details (such as name and email)</li>
              <li>Spaces and workspace organization</li>
              <li>Notes, tasks, and chat history</li>
              <li>Voice recordings, transcripts, and related AI-generated content tied to your account</li>
              <li>App preferences linked to your account</li>
            </ul>
            <p>
              Freezing, disabling, or temporarily deactivating an account is not
              treated as deletion. A completed deletion request removes your
              Buddy account.
            </p>
          </section>

          <section id="timeline" className="legal-section">
            <h2>How long deletion takes</h2>
            <p>
              We aim to process verified deletion requests within{" "}
              <strong>30 days</strong>. You will receive a confirmation email
              when the request is received and again when deletion is complete,
              when possible.
            </p>
            <p>
              If we need more information to verify that you own the account, we
              may contact you before completing the deletion.
            </p>
          </section>

          <section id="retention" className="legal-section">
            <h2>Data we may retain</h2>
            <p>
              In limited cases, we may retain certain information when required
              for legitimate reasons, such as:
            </p>
            <ul className="delete-list">
              <li>Security, fraud prevention, or abuse investigation</li>
              <li>Legal, tax, or regulatory obligations</li>
              <li>Resolving disputes or enforcing our Terms of Service</li>
            </ul>
            <p>
              Any retained data is kept only as long as needed for those purposes
              and is handled according to our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </section>

          <section id="after" className="legal-section">
            <h2>After your account is deleted</h2>
            <p>
              You will no longer be able to sign in to Buddy with that account.
              Spaces, notes, tasks, and conversation history linked to the
              account will no longer be available.
            </p>
            <p>
              If you use Buddy again later, you will need to create a new
              account. Previous data will not be restored.
            </p>
          </section>
        </div>

        <p className="legal-related">
          Questions? Contact{" "}
          <a href="mailto:hello@buddy.ai">hello@buddy.ai</a>. Also see our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </article>
    </LegalShell>
  );
}
