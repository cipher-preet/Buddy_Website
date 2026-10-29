# Design

The marketing site is a light product page. The page is a cool gray desk (`#f7f8fa`). Type is near-black (`#10141c`). The only saturated color is the blue action (`#0b5fff`), used for primary buttons, links, and the listening state. Recording red (`#e11d48`) is only the live dot.

Display type is Schibsted Grotesk. Body type is Source Sans 3. Headlines are tight, around `-0.04em`, and balanced. Buttons are pills. Product frames use a 16px radius and a soft offset shadow. The footer is the same ink as the headlines (`#10141c`).

The home hero is a two-column opening: the locked headline and the recording explanation on the left, an illustrated sample meeting on the right. That sample is labeled as a sample. It plays one loop: listening, transcript lines, summary, task, calendar item. Below that, a three-step sequence and a two-room contrast (a bot joins, or it does not). Later sections use real product screenshots.

Motion is CSS only. It turns off for `prefers-reduced-motion` and for the existing `html.lite` flag. Text does not start hidden.

Inner pages keep their titles, descriptions, H1s, and FAQ text. They share the same bar, type, blue actions, and footer.
