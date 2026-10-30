# Design

The marketing site is a light product page. The page is a cool gray desk (`#f7f8fa`). Type is near-black (`#10141c`). The only saturated color is the blue action (`#0b5fff`), used for primary buttons, links, and the listening state. Recording red (`#e11d48`) is only the live dot.

Display type is Schibsted Grotesk. Body type is Source Sans 3. Headlines are tight, around `-0.04em`, and balanced. Buttons are pills. Product frames use a 16px radius and a soft offset shadow. The footer is the same ink as the headlines (`#10141c`).

The home page is illustration-led. The hero is a two-column opening: the locked headline and the recording explanation on the left, and a custom scene on the right (people at a table, a phone, a laptop). That scene is labeled as a sample. It plays one loop: listening, transcript bubbles in English, Hindi, and Hinglish, a summary, then tasks, a reminder, and a calendar item. Feature tabs swap illustrated scenes. A no-bot panel, language chips, comparison, and a blue pricing band follow. The home page does not use app screenshots.

Motion uses Framer Motion for the hero phases, tab changes, and scroll reveals, plus small CSS waves. It turns off for `prefers-reduced-motion` and for the existing `html.lite` flag. Text does not start hidden.

Inner pages keep their titles, descriptions, H1s, and FAQ text. They share the same bar, type, blue actions, and footer.
