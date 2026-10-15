# KukuNotes marketing redesign

## Plan

Audit → shared design system → homepage → pricing/downloads → use cases/solutions/platforms → about/contact/legal → responsive and interaction verification → production checks.

## Baseline

- Clean working tree; Next.js 16.3, React 19, TypeScript, Tailwind 4, Framer Motion, GSAP, Lenis.
- 8,946 lines of CSS with competing design systems. Multiple large client marketing components and scroll wrappers.
- Real desktop screenshots: meetings, meeting detail, Spaces/tasks, AI chat, calendar. Mobile: notes, listening, tasks, daily briefing, goals, calendar, sharing.
- Fonts: Sora and Source Sans 3. Preserve and self-host the already available font binaries.
- No product backend, billing config, contact API, or authenticated product source.
- Contact uses mailto:ps1535146@gmail.com, also listed on official stores. Preserve destination and make email-client handoff explicit; never claim delivery.
- Existing smoke script parses JSON-LD on five routes without assertions; it passed against the existing localhost:3000 server.

## Routes and preserved destinations

18 marketing paths: `/`, `/use-cases`, `/get-kukunotes`, `/pricing`, `/contact`, `/about`, `/ai-note-taker`, `/ai-meeting-recorder`, `/hindi-speech-to-text`, `/ai-personal-assistant`, `/ai-lecture-notes`, `/chrome-extension`, `/platform`, `/windows`, `/android`, `/privacy`, `/terms`, `/delete-account`.

Five topics use static params on app/[slug]. No additional marketing routes. Preserve `/get-buddy` permanent redirect, branded 404, sitemap.xml, robots.txt, manifest.webmanifest, opengraph-image, icons, llms.txt and llms-full.txt.

- Login/signup/workspace entry: https://platform.kukunotes.com (no dedicated signup URL configured).
- Android: https://play.google.com/store/apps/details?id=com.aiassistantapp
- Windows: https://apps.microsoft.com/detail/9NCZSN8SMPQ1?hl=en-us&gl=IN&ocid=pdpshare
- Chrome: https://chromewebstore.google.com/detail/hjnhifmajfnlpalfgkfdjpllbobcpahl?utm_source=item-share-cb
- Support/deletion: mailto:ps1535146@gmail.com; original deletion subject/body retained.

## Accuracy decisions

No authoritative billing source exists here. Pro conflicts: ₹799 vs ₹499; Business: ₹1,999 vs ₹999. Quarterly vs yearly billing, 5 monthly hours vs 2 note/10 meeting hours, and language entitlements also conflict. These appear in UI, metadata, JSON-LD and llms files. Remove unverified numbers consistently. Retain Free/Pro/Business and workspace actions; monthly/yearly selection changes billing context, with paid amounts and quantitative allowances referring to current in-app terms until approved configuration is supplied. No invented savings or checkout URLs.

Remove unverifiable ratings, download sizes, minimum OS/browser versions, offline recording, global shortcuts, automatic calendar capture, export integrations, support SLAs, and unlimited promises. Retain core capabilities evidenced by screenshots and official listings: user-started capture, notes, tasks, Spaces, contextual questions, daily briefing, goals, cross-device review. Exact language availability and plan access need owner confirmation. No native iOS/macOS download configured; show Android, Windows, Chrome, web only. Preserve legal substance.

## Public verification, 14 October 2026

- Google Play resolves as KukuNotes: AI Meeting Notes, describing notes/tasks/Spaces and the configured support email: https://play.google.com/store/apps/details?id=com.aiassistantapp
- Official Chrome listing is indexed as KukuNotes Meeting Recorder; describes Google Meet, Zoom and Teams, notes/tasks: https://chromewebstore.google.com/detail/kukunotes-meeting-recorde/hjnhifmajfnlpalfgkfdjpllbobcpahl
- Follow-up direct HTTP verification succeeded for all four configured outbound URLs: Google Play, Microsoft Store, Chrome Web Store, and platform.kukunotes.com all returned 200 with matching KukuNotes titles. Microsoft Store canonicalized its ID to lowercase; Chrome redirected to its named listing. Existing link destinations were retained.
- No login, billing mutation, or product-source changes attempted. The public web workspace entry does not establish paid pricing or plan entitlements.
- Benchmarks reviewed: https://linear.app, https://raycast.com, https://notion.com, https://granola.ai. Apply concise outcome-led copy, product depth, clear actions and varied editorial rhythms without copying their artwork or layouts.

## Verification

Baseline/final checks and owner decisions are recorded in redesign-verification.md. The browser connector exposed no browser; dedicated local Playwright, axe, and Lighthouse tooling was installed under ignored .qa-tools without changing production dependencies. Screenshots and machine-readable reports are under ignored qa-artifacts.
