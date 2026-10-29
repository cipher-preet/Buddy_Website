const steps = [
  {
    title: "Tap Start Listening",
    copy: "Recording starts only when you choose. The microphone is off until then. Nothing joins the call.",
    scene: "listen" as const,
  },
  {
    title: "Watch the transcript",
    copy: "Words appear as people talk, in Hindi, English, or Hinglish. You stay in the conversation.",
    scene: "transcript" as const,
  },
  {
    title: "Leave with the work",
    copy: "A summary, tasks, notes, and reminders are waiting in the right Space when you stop.",
    scene: "done" as const,
  },
];

export function HowItWorks() {
  return (
    <section className="how band" id="how" aria-labelledby="how-title">
      <div className="how-intro">
        <h2 id="how-title">Three steps. Then the meeting is written down.</h2>
        <p>
          KukuNotes stays on your device. You start it, you talk, and you get notes you can act on.
        </p>
      </div>
      <ol className="how-steps">
        <li className="how-progress" aria-hidden="true" />
        {steps.map((step, index) => (
          <li key={step.title} className={`how-step how-step-${index + 1}`}>
            <div className={`how-scene how-scene-${step.scene}`} aria-hidden="true">
              {step.scene === "listen" ? (
                <span className="how-pill">
                  <i /> Start Listening
                </span>
              ) : null}
              {step.scene === "transcript" ? (
                <span className="how-lines">
                  <i />
                  <i />
                  <i />
                </span>
              ) : null}
              {step.scene === "done" ? (
                <span className="how-chips">
                  <b>Summary</b>
                  <b>Task</b>
                  <b>Thu 10:00</b>
                </span>
              ) : null}
            </div>
            <h3>
              <span>{index + 1}</span>
              {step.title}
            </h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
