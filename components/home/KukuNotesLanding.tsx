import Link from "next/link";
import {
  HiArrowRight,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineHandRaised,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import {
  Action,
  FAQ,
  FinalCTA,
  ProductFrame,
  SectionHeading,
} from "@/components/marketing/UI";
import { SpacesDemo } from "@/components/marketing/SpacesDemo";
import { PlatformSelector } from "@/components/marketing/PlatformSelector";
import { Pricing } from "@/components/marketing/Pricing";
import { faqItems } from "@/lib/home-data";
import { Reveal } from "./Reveal";
import { ProductStory } from "@/components/marketing/ProductStory";
import { TaskDemo } from "@/components/marketing/TaskDemo";
import { AssistantDemo } from "@/components/marketing/AssistantDemo";
import { MeetingDigest } from "@/components/marketing/MeetingDigest";
import { CinematicStage, HeroProductStage } from "@/components/marketing/ProductShowcase";
import { ScreenshotSpotlight } from "@/components/marketing/ScreenshotSpotlight";

export function KukuNotesLanding() {
  return (
    <>
      <section className="home-hero container" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Your AI workspace for conversations
            and action
          </p>
          <h1 id="home-title">
            <span className="hero-line">Every conversation</span>
            <br />
            <span className="accent-text hero-line">moves you forward.</span>
          </h1>
          <p className="hero-description">
            Capture meetings and ideas, turn what matters into notes and next
            steps, and keep everything connected to your goals.
          </p>
          <div className="hero-actions">
            <Action />
            <Action href="#product" secondary>
              Explore KukuNotes
            </Action>
          </div>
          <p className="hero-fineprint">
            Be present. Remember the details. Know what’s next.
          </p>
        </div>
        <div className="hero-product">
          <div className="hero-product-label">
            <span className="small-label">
              A conversation is just the beginning
            </span>
            <span>Notes. Tasks. Context.</span>
          </div>
          <HeroProductStage />
          <div className="hero-product-caption">
            <span className="status-dot" />
            <p>Your work, with the context still attached.</p>
            <Link href="/platform">
              Meet your workspace <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="platform-strip">
          <span>At your desk. On the go. In the conversation.</span>
          <div>
            <Link href="/android">Android</Link>
            <i />
            <Link href="/windows">Windows</Link>
            <i />
            <Link href="/chrome-extension">Chrome</Link>
            <i />
            <Link href="/platform">Web</Link>
          </div>
        </div>
      </section>

      <section id="product" className="section container workflow-section">
        <SectionHeading
          eyebrow="From conversation to momentum"
          title={
            <>
              The meeting ends.
              <br />
              The useful part carries on.
            </>
          }
          centered
        >
          A transcript remembers the words. KukuNotes helps you return to the
          decisions, commitments, and context behind them.
        </SectionHeading>
        <ProductStory />
      </section>

      <section id="listen" className="section feature-section container">
        <Reveal>
          <div className="feature-heading-row">
            <SectionHeading
              eyebrow="01 / AI meeting notes"
              title={
                <>
                  More listening.
                  <br />
                  Less catching up.
                </>
              }
            >
              Typing while listening means missing a little of both. Capture
              deliberately, then come back to a clear summary and the original
              conversation.
            </SectionHeading>
            <Link className="text-link" href="/ai-meeting-recorder">
              Explore meeting notes <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="meeting-showcase">
            <CinematicStage tone="blue" className="meeting-product-stage">
              <ScreenshotSpotlight
                src="/screenshots/desktop/meeting-detail.png"
                label="Explore the actual meeting screen"
                initialFocus="summary"
                options={[{ id: "overview", label: "Full meeting" }, { id: "summary", label: "Meeting summary" }]}
              >
                <ProductFrame
                  src="/screenshots/desktop/meeting-detail.png"
                  alt="Actual KukuNotes meeting recording and summary; identifying meeting details redacted"
                  sizes="(max-width: 680px) 90vw, (max-width: 1280px) 85vw, 1060px"
                />
              </ScreenshotSpotlight>
            </CinematicStage>
            <MeetingDigest />
            <div className="showcase-bottom">
              <span>
                <HiOutlineMicrophone aria-hidden="true" /> Capture when you
                choose
              </span>
              <span>
                <HiOutlineDocumentText aria-hidden="true" /> Review what
                mattered
              </span>
              <span>
                <HiOutlineChatBubbleLeftRight aria-hidden="true" /> Keep the
                context
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section container tasks-section">
        <Reveal>
          <div className="feature-split">
            <div className="feature-copy">
              <SectionHeading
                eyebrow="02 / Automatic task extraction"
                title={
                  <>
                    “I’ll take care of it.”
                    <br />
                    <span className="accent-text">Now it has a home.</span>
                  </>
                }
              >
                Good intentions get lost between calls. KukuNotes finds action
                items in your conversations, so you can review the commitment
                and decide what happens next.
              </SectionHeading>
              <ul className="check-list">
                <li>Keep follow-ups alongside the conversation</li>
                <li>Review priorities, dates, and task status</li>
                <li>Return to the details before you act</li>
              </ul>
              <Action href="/ai-note-taker" secondary>
                Turn notes into next steps
              </Action>
            </div>
            <div className="task-feature-visual">
              <div className="paired-phones">
                <ProductFrame
                  src="/screenshots/notes.png"
                  alt="KukuNotes notes library organized by Space"
                  sizes="(max-width: 680px) 40vw, 210px"
                />
                <ProductFrame
                  src="/screenshots/tasks.png"
                  alt="Extracted KukuNotes tasks with priority and completion status"
                  sizes="(max-width: 680px) 40vw, 210px"
                />
                <span className="visual-annotation">
                  The context and the commitment.
                  <br />
                  Always close together.
                </span>
              </div>
              <TaskDemo />
            </div>
          </div>
        </Reveal>
      </section>

      <section id="spaces" className="section spaces-section">
        <div className="container">
          <div className="feature-heading-row">
            <SectionHeading
              eyebrow="03 / Spaces & contextual memory"
              title={
                <>
                  Everything in its place.
                  <br />
                  Every place with its context.
                </>
              }
            >
              A project, a client, a plan just for you. Give each one a Space,
              with its notes, tasks, and goals together.
            </SectionHeading>
            <span className="section-side-note">
              Try a different context below.
              <br />
              Same clarity, different priorities.
            </span>
          </div>
          <CinematicStage tone="teal" className="spaces-product-stage" caption="Your notes, tasks, and context in the actual KukuNotes workspace">
            <ScreenshotSpotlight
              src="/screenshots/desktop/spaces-tasks.png"
              label="Explore the actual Spaces workspace"
              options={[{ id: "overview", label: "Workspace" }, { id: "workspace", label: "Spaces & tasks" }]}
            >
              <ProductFrame src="/screenshots/desktop/spaces-tasks.png" alt="Actual KukuNotes desktop Spaces with a contextual task list; account details redacted" />
            </ScreenshotSpotlight>
          </CinematicStage>
          <SpacesDemo />
          <div className="section-footnote">
            <span>
              Representative examples. Your Spaces contain your own
              conversations and work.
            </span>
            <Link href="/platform" className="text-link">
              Explore your workspace <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="ask" className="section ask-section">
        <div className="container">
          <div className="feature-split">
            <div className="feature-copy">
              <p className="eyebrow">04 / Ask KukuNotes</p>
              <h2>
                You had the conversation.
                <br />
                <span>Keep the answer close.</span>
              </h2>
              <p>
                What did we decide? What needs a follow-up? Ask questions from
                your captured context, instead of piecing the story together
                from scattered notes.
              </p>
              <Action href="/ai-personal-assistant" secondary>
                Get to know your assistant
              </Action>
              <p className="dark-footnote">
                Review the source context before acting on AI-generated answers.
              </p>
            </div>
            <div className="ask-visual">
              <AssistantDemo />
              <CinematicStage tone="violet" className="assistant-product-stage">
                <ScreenshotSpotlight
                  src="/screenshots/desktop/ai-chat.png"
                  label="Explore the actual Ask KukuNotes screen"
                  options={[{ id: "overview", label: "Workspace" }, { id: "answer", label: "The answer" }, { id: "prompt", label: "Your context" }]}
                >
                  <ProductFrame src="/screenshots/desktop/ai-chat.png" alt="Actual Ask KukuNotes answer and contextual prompt; account details and internal identifier redacted" />
                </ScreenshotSpotlight>
              </CinematicStage>
              <div className="ask-caption">
                <HiOutlineChatBubbleLeftRight aria-hidden="true" /> Less
                searching. More remembering.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container daily-section">
        <SectionHeading
          eyebrow="05 / Daily briefings & goals"
          title={
            <>
              A clearer day.
              <br />A more intentional tomorrow.
            </>
          }
          centered
        >
          Move from remembering what happened to making room for what matters
          next.
        </SectionHeading>
        <div className="daily-grid">
          <article className="daily-card briefing-card">
            <div>
              <p className="eyebrow">Your daily briefing</p>
              <h3>Start with a little perspective.</h3>
              <p>
                Bring priorities and upcoming commitments into view before the
                day gets busy.
              </p>
              <Link href="/ai-personal-assistant" className="text-link">
                Find your focus <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
            <ProductFrame
              src="/screenshots/daily-briefing.jpeg"
              alt="KukuNotes daily briefing with priorities and planned focus time"
            />
          </article>
          <article className="daily-card goal-card">
            <div>
              <p className="eyebrow">Goals & progress</p>
              <h3>Keep the bigger picture in sight.</h3>
              <p>
                Give your Space a goal and return to the work that moves it
                forward.
              </p>
              <Link href="/use-cases" className="text-link">
                Make room for progress <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
            <ProductFrame
              src="/screenshots/goal-monitor.jpeg"
              alt="KukuNotes goal monitor for a Space"
            />
          </article>
        </div>
      </section>

      <section className="section container audience-section">
        <div className="audience-intro">
          <p className="eyebrow">For the way you work</p>
          <h2>
            Different days.
            <br />
            The same need for clarity.
          </h2>
          <Link className="text-link" href="/use-cases">
            Find your use case <HiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="audience-links">
          {[
            [
              "Founders & teams",
              "Keep decisions and the next steps together.",
              "/use-cases#teams",
            ],
            [
              "Students & educators",
              "Be in the lesson. Come back to the learning.",
              "/ai-lecture-notes",
            ],
            [
              "Sales & client work",
              "Remember the promise behind the proposal.",
              "/use-cases#sales",
            ],
            [
              "Your own plans",
              "Give a good idea somewhere to grow.",
              "/use-cases#personal",
            ],
          ].map(([title, copy, href]) => (
            <Link href={href} key={title}>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <HiArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section container platforms-section">
        <SectionHeading
          eyebrow="06 / Wherever the day happens"
          title={
            <>
              One thread.
              <br />
              Across your devices.
            </>
          }
        >
          Capture in the moment. Pick up the context when you’re ready. Choose
          the KukuNotes experience that fits your day.
        </SectionHeading>
        <PlatformSelector />
      </section>

      <section className="section privacy-section">
        <div className="container privacy-layout">
          <div>
            <HiOutlineShieldCheck
              className="privacy-emblem"
              aria-hidden="true"
            />
            <SectionHeading
              eyebrow="Your conversations. Your choice."
              title={
                <>
                  Present in the meeting.
                  <br />
                  Deliberate about recording.
                </>
              }
            >
              KukuNotes is built around user-started capture. Choose when to
              record, keep the people in the conversation informed, and review
              what you share.
            </SectionHeading>
            <Link href="/privacy" className="text-link">
              Read our privacy policy <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="privacy-principles">
            <article>
              <HiOutlineHandRaised aria-hidden="true" />
              <h3>You start the capture.</h3>
              <p>
                Use the recording controls and review the permissions requested
                by your device or browser.
              </p>
            </article>
            <article>
              <HiOutlineChatBubbleLeftRight aria-hidden="true" />
              <h3>Consent is part of the conversation.</h3>
              <p>
                Tell participants before recording and get the consent required
                in your situation.
              </p>
            </article>
            <article>
              <HiOutlineDocumentText aria-hidden="true" />
              <h3>Your next step stays informed.</h3>
              <p>
                Review AI notes and extracted tasks before relying on or sharing
                them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="feature-heading-row">
          <SectionHeading
            eyebrow="A little space to begin"
            title="Start free. Find your flow."
          >
            Explore KukuNotes, then choose the plan that fits your work.
          </SectionHeading>
          <Link href="/pricing" className="text-link">
            Explore plans <HiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <Pricing compact />
      </section>
      <FAQ items={faqItems} />
      <FinalCTA />
    </>
  );
}
