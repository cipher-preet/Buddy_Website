/**
 * CSS-only hero sequence: recording, live transcript, summary, then tasks
 * and a calendar item. The window is decorative. The caption is the
 * accessible description. Content is a labeled sample, not a customer.
 */
export function MeetingStage() {
  return (
    <figure className="stage">
      <div className="stage-window" aria-hidden="true">
        <div className="stage-chrome">
          <span className="stage-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="stage-title">Sample meeting · Product sync</span>
          <span className="stage-live">
            <span className="stage-dot" />
            Listening
          </span>
        </div>

        <div className="stage-wave" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <span key={index} style={{ animationDelay: `${index * 70}ms` }} />
          ))}
        </div>

        <ol className="stage-lines">
          <li className="stage-line stage-line-1">
            <span>Aarav</span>
            Let’s ship the Hindi summary this week.
          </li>
          <li className="stage-line stage-line-2">
            <span>Meera</span>
            I’ll send the pricing page tomorrow.
          </li>
          <li className="stage-line stage-line-3">
            <span>Aarav</span>
            Put a follow-up on the calendar for Thursday.
          </li>
        </ol>

        <div className="stage-summary">
          <p>Summary</p>
          <strong>Ship the Hindi summary. Send the pricing page tomorrow.</strong>
        </div>

        <ul className="stage-out">
          <li className="stage-task">
            <span>Task</span>
            Send pricing page
            <em>Tomorrow</em>
          </li>
          <li className="stage-event">
            <span>Calendar</span>
            Follow-up
            <em>Thu 10:00</em>
          </li>
        </ul>
      </div>
      <figcaption>
        Illustrated sample. A meeting is recorded, transcribed, summarized, then turned into a task and a calendar item. Not a customer recording.
      </figcaption>
    </figure>
  );
}
