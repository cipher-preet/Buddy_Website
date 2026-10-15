import Link from "next/link";
import { HiArrowUpRight, HiOutlineShieldCheck } from "react-icons/hi2";
import { CinematicHero } from "@/components/home/CinematicHero";
import { MobileProductGallery } from "@/components/marketing/MobileProductGallery";
import { PlatformSelector } from "@/components/marketing/PlatformSelector";
import { ProductStorySequence } from "@/components/marketing/ProductStorySequence";
import { Action, FAQ, FinalCTA, SectionHeading } from "@/components/marketing/UI";
import { WorkspaceExplorer } from "@/components/marketing/WorkspaceExplorer";
import { faqItems } from "@/lib/home-data";

const uses = [
  {
    href: "/ai-meeting-recorder",
    title: "Meetings",
    copy: "Record when you choose. Return to the summary.",
  },
  {
    href: "/ai-note-taker",
    title: "Notes",
    copy: "Keep the useful parts with the work they belong to.",
  },
  {
    href: "/ai-lecture-notes",
    title: "Study",
    copy: "Lectures become notes and follow-up tasks.",
  },
  {
    href: "/ai-personal-assistant",
    title: "Ask",
    copy: "Question a Space about what you already captured.",
  },
];

export function LaunchLanding() {
  return (
    <>
      <CinematicHero />
      <ProductStorySequence />

      <section id="spaces" className="v3-workspace section">
        <div className="container">
          <div className="v3-split-heading">
            <SectionHeading
              eyebrow="The workspace"
              title="Everything connected. Everything in its place."
            >
              One screen for the Space. Switch the view when you want the notes,
              the tasks, or an answer.
            </SectionHeading>
            <Link className="text-link" href="/platform">
              Open the workspace <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <WorkspaceExplorer />
        </div>
      </section>

      <section className="v3-phones section" aria-labelledby="mobile-title">
        <div className="container">
          <div className="v3-split-heading">
            <SectionHeading
              eyebrow="On the phone"
              title={<span id="mobile-title">The same work, in your pocket.</span>}
            >
              Daily briefing, notes, tasks, and goals. One device at a time, at
              a size you can read.
            </SectionHeading>
          </div>
          <MobileProductGallery />
        </div>
      </section>

      <section className="v3-uses section">
        <div className="container v3-uses-grid">
          <div>
            <p className="eyebrow">Where it fits</p>
            <h2>For the work that follows a conversation.</h2>
            <Link className="text-link" href="/use-cases">
              All use cases <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <ul>
            {uses.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="v3-platforms section">
        <div className="container">
          <div className="v3-split-heading">
            <SectionHeading
              eyebrow="Platforms"
              title={
                <>
                  At your desk.
                  <br />
                  In your pocket.
                </>
              }
            >
              Capture in the moment. Pick the work up later on the device you
              already use.
            </SectionHeading>
            <Link href="/get-kukunotes" className="text-link">
              All downloads <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <PlatformSelector />
        </div>
      </section>

      <section className="v3-trust section container">
        <div>
          <HiOutlineShieldCheck className="v3-trust-icon" aria-hidden="true" />
          <p className="eyebrow">Recording stays in your hands</p>
          <h2>
            Be present.
            <br />
            Capture deliberately.
          </h2>
        </div>
        <div>
          <p>
            KukuNotes is built around user-started capture. You choose when to
            record, keep people informed, and decide what to share.
          </p>
          <ul>
            <li>You start the capture.</li>
            <li>You review the output.</li>
            <li>You choose what to share.</li>
          </ul>
          <Link className="text-link" href="/privacy">
            Read the privacy policy <HiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="v3-pricing container">
        <div>
          <p className="eyebrow">Plans</p>
          <h2>Start free. Choose a plan when the work grows.</h2>
        </div>
        <Action href="/pricing" secondary>
          Explore plans
        </Action>
      </section>

      <FAQ items={faqItems} />
      <FinalCTA
        eyebrow="KukuNotes"
        title="Make room for what matters next."
        lede="Start free. Keep the notes, tasks, and context from your conversations in one place."
      />
    </>
  );
}
