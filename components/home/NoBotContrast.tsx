const people = ["You", "Priya", "Alex"];

export function NoBotContrast() {
  return (
    <section className="nobot band" id="no-bot" aria-labelledby="nobot-title">
      <div className="nobot-copy">
        <h2 id="nobot-title">No bot in your call.</h2>
        <p>
          Other tools add a notetaker that joins Zoom, Google Meet, or Teams. KukuNotes never does that. You tap Start Listening and the audio comes from your own device.
        </p>
        <p>
          The Android app does not record phone or dialer calls. It records meetings and in-person conversations when you ask it to.
        </p>
      </div>
      <div className="nobot-stage" aria-hidden="true">
        <article className="nobot-card nobot-card-bot">
          <header>A bot joins</header>
          <ul>
            {people.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li className="nobot-intruder">Notetaker bot</li>
          </ul>
          <p>An extra participant enters the room.</p>
        </article>
        <article className="nobot-card nobot-card-you">
          <header>KukuNotes stays out</header>
          <ul>
            {people.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li className="nobot-device">Recording on this device</li>
          </ul>
          <p>Same people. Nothing new joins.</p>
        </article>
      </div>
    </section>
  );
}
