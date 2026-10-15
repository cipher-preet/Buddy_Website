import { ProductFrame } from "./UI";
import { AmbientGlow, CaptureWaveform } from "./ProductShowcase";
import {
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineFolder,
  HiOutlineFlag,
  HiArrowDown,
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlineMicrophone,
    label: "Capture",
    title: "Be in the conversation.",
    copy: "Choose when to record. Keep your attention on the conversation, with the people involved informed and the right permissions in place.",
    image: "/screenshots/listen.png",
    alt: "KukuNotes user-controlled listening and conversation capture",
    accent: "blue",
    caption: "01 / Capture a conversation",
  },
  {
    icon: HiOutlineDocumentText,
    label: "Understand",
    title: "Return to what mattered.",
    copy: "Come back to a clear meeting summary, the key points, and the original conversation when you need the detail.",
    image: "/screenshots/desktop/meeting-detail.png",
    alt: "A real KukuNotes meeting with a summary, transcript, notes, and tasks",
    accent: "violet",
    caption: "02 / Review the summary",
  },
  {
    icon: HiOutlineCheckCircle,
    label: "Take action",
    title: "Give the commitment a next step.",
    copy: "Review extracted action items, priorities, and status. The useful part of the conversation has somewhere to go.",
    image: "/screenshots/tasks.png",
    alt: "KukuNotes task list with extracted action items and priorities",
    accent: "coral",
    caption: "03 / Find the next steps",
  },
  {
    icon: HiOutlineFolder,
    label: "Connect",
    title: "Keep the context attached.",
    copy: "Bring notes and tasks together in the right Space. A project, a client, or a personal plan stays close to its own story.",
    image: "/screenshots/desktop/spaces-tasks.png",
    alt: "KukuNotes Spaces and contextual tasks in the desktop workspace",
    accent: "teal",
    caption: "04 / Organize in Spaces",
  },
  {
    icon: HiOutlineFlag,
    label: "Move forward",
    title: "Come back to your bigger picture.",
    copy: "Return to your Space’s goal and the work that moves it forward. Follow up with the context still close at hand.",
    image: "/screenshots/goal-monitor.jpeg",
    alt: "The real KukuNotes goal monitor for a Space",
    accent: "violet",
    caption: "05 / Follow through on progress",
  },
];

export function ProductStory() {
  return (
    <div className="product-story" data-story-step="0" data-story-accent="blue">
      <noscript>
        <style>{`.product-story .story-stage,.product-story .story-rail{display:none}.product-story .story-layout{display:block}.product-story .story-steps{padding:0}.product-story .story-mobile-visual{display:flex;justify-content:center;padding:24px;background:#eaf1ff;border-radius:14px;overflow:hidden}.product-story .story-mobile-visual .phone-frame{width:170px}.product-story .story-mobile-visual .desktop-frame{width:100%}.product-story .story-step{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;min-height:0;padding:30px 0}.product-story .story-step-icon{position:static}@media(max-width:680px){.product-story .story-step{grid-template-columns:1fr;gap:24px}}`}</style>
      </noscript>
      <div className="story-layout">
        <ol className="story-steps">
          <li className="story-rail" aria-hidden="true">
            <span />
          </li>
          {steps.map((step, i) => (
            <li
              className="story-step"
              id={`product-step-${i}`}
              data-story-index={i}
              data-story-label={step.label}
              data-story-active={i === 0 ? "true" : "false"}
              key={step.label}
            >
              <div className="story-step-copy">
                <a href={`#product-step-${i}`} className="story-step-label">
                  <span className="story-step-icon">
                    <step.icon aria-hidden="true" />
                  </span>
                  <span>
                    0{i + 1} / {step.label}
                  </span>
                  <HiArrowDown aria-hidden="true" />
                </a>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              <div className="story-mobile-visual">
                <ProductFrame
                  src={i === 3 ? "/screenshots/home.png" : step.image}
                  alt={i === 3 ? "Actual KukuNotes Android Spaces with user-controlled listening" : step.alt}
                  focus={i === 1 ? "summary" : "overview"}
                  sizes={
                    step.image.includes("/desktop/")
                      ? "(max-width: 680px) 85vw, 650px"
                      : "220px"
                  }
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="story-stage" aria-label="KukuNotes product workflow">
          <AmbientGlow />
          <div className="story-stage-header">
            <span className="status-dot" />
            <span className="story-stage-label">Capture</span>
            <span className="story-counter" aria-hidden="true">
              <b>01</b> / 05
            </span>
          </div>
          <div className="story-panels">
            {steps.map((step, i) => (
              <div
                className={`story-panel ${step.image.includes("/desktop/") ? "story-panel-desktop" : "story-panel-phone"}`}
                key={step.label}
                data-story-panel={i}
                aria-hidden={i !== 0}
              >
                <div className="story-screen-layer">
                <ProductFrame
                  src={step.image}
                  alt={step.alt}
                  focus={i === 1 ? "summary" : "overview"}
                  sizes={step.image.includes("/desktop/") ? "(max-width: 1280px) 48vw, 720px" : "(max-height: 760px) 170px, 240px"}
                />
                </div>
                {i === 0 && <CaptureWaveform />}
                <p className="story-panel-caption">{step.caption}</p>
              </div>
            ))}
          </div>
          <div className="story-chapter-progress" aria-hidden="true"><span /></div>
          <div className="story-stage-footer">
            <span>Actual KukuNotes product screens</span>
            <span>
              Scroll to follow the thread <HiArrowDown aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
