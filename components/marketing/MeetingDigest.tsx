import {
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export function MeetingDigest() {
  return (
    <div className="meeting-digest">
      <div className="digest-conversation">
        <p className="eyebrow">A sample conversation</p>
        <blockquote>
          “Let’s focus this release on onboarding.{" "}
          <strong>I’ll share the prototype before planning.</strong>”
        </blockquote>
      </div>
      <div className="digest-connector" aria-hidden="true">
        <span />
        <HiArrowRight />
      </div>
      <div className="digest-result">
        <p className="eyebrow">A clearer next step</p>
        <p>
          <HiOutlineDocumentText aria-hidden="true" />
          <span>
            <strong>Decision</strong> Focus on the onboarding experience.
          </span>
        </p>
        <p>
          <HiOutlineCheckCircle aria-hidden="true" />
          <span>
            <strong>Action</strong> Share the prototype before planning.
          </span>
        </p>
        <span className="digest-note">
          Illustrative example · Review AI output before acting.
        </span>
      </div>
    </div>
  );
}
