import Link from "next/link";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import {
  PageHero,
  FAQ,
  FinalCTA,
  SectionHeading,
} from "@/components/marketing/UI";
import { PlatformSelector } from "@/components/marketing/PlatformSelector";
import { getKukuNotesFaqs } from "@/lib/get-kukunotes-data";
export default function GetKukuNotesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="A place for your next conversation"
        title={
          <>
            Your day moves.
            <br />
            <span className="accent-text">KukuNotes comes along.</span>
          </>
        }
        description="On your phone, at your desk, or in a browser meeting. Choose how you want to capture, review, and move forward."
      />
      <section
        className="container downloads-main"
        aria-label="Choose a KukuNotes platform"
      >
        <PlatformSelector standalone />
      </section>
      <section className="section container download-guide">
        <SectionHeading
          eyebrow="A good place to start"
          title="Capture here. Pick it up there."
        >
          Each experience has its place. Your account keeps the thread
          connected.
        </SectionHeading>
        <div className="download-guide-grid">
          <article>
            <span className="step-number">01 / Capture</span>
            <h3>For the conversation.</h3>
            <p>
              Explore Android for conversations on the go, Windows for your PC,
              and Chrome for supported browser meetings. Review each app’s
              permissions before starting.
            </p>
            <Link href="/ai-meeting-recorder" className="text-link">
              How capture works →
            </Link>
          </article>
          <article>
            <span className="step-number">02 / Review & organize</span>
            <h3>For what comes next.</h3>
            <p>
              Return to the web workspace to review notes, organize tasks in
              Spaces, and ask questions from your captured context. No
              installation required.
            </p>
            <Link href="/platform" className="text-link">
              Meet the web workspace →
            </Link>
          </article>
        </div>
        <p className="small-note">
          Store listings show current requirements and device eligibility. No
          native iOS or macOS download is listed here.
        </p>
      </section>
      <FAQ items={getKukuNotesFaqs} />
      <FinalCTA />
    </SiteLayout>
  );
}
