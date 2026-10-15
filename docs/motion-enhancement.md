# KukuNotes color and motion enhancement

## Audit and plan

The existing editorial hierarchy, warm canvas, real screenshots, responsive navigation, working tabs/forms, and validated content remain. This pass enhances them.

Before screenshots: `qa-artifacts/motion-before-{hero,workflow,notes,tasks,spaces,assistant,goals,cta}-{1440,375}.png`.

Findings: hero, task frames, daily cards, and final CTA repeat neutral surfaces; the existing accent is largely limited to buttons/headlines. Screenshots are static. The workflow is a short static row. Tabs already have keyboard support and a CSS transition; CTAs have hover elevation but limited pressed feedback. An IntersectionObserver supplies basic reveals. GSAP and Lenis are installed but unused in the active composition; Framer Motion remains in legacy components. The original SmoothScroll export is a no-op. No competing active scrolling loop exists.

Implementation phases:

1. Preserve the current structure and introduce coordinated blue, violet, teal, and coral accents with dark ink. Add fast, visible-by-default hero entrances and tactile micro-interactions.
2. Add one persistent, deferred scroll controller. Reuse Lenis/GSAP; install only @gsap/react. Drive Lenis exclusively from GSAP’s ticker. Use native scrolling for touch, narrow layouts, keyboard input, and reduced motion. Retain native browser history restoration and Next navigation behavior.
3. Enhance the existing workflow into five short steps and a CSS-sticky product stage on desktop, with reversible panel changes and story progress. Mobile/reduced-motion use ordinary stacked content.
4. Add distinct feature treatments: blue meeting review, coral task demo, teal Spaces, violet contextual questions, and an illustrative goal tied to task completion. Keep representative examples explicitly labeled.
5. Verify route cleanup, anchor/history behavior, scroll down/up, resizing, reduced motion, mobile menu, existing interactions, all routes, production build, accessibility, screenshots, and Lighthouse.

## Engineering constraints

Server-rendered content stays visible without the engine. Motion is an enhancement, with no opacity-zero stylesheet gating the page. No scroll-jacking, extra pin spacers, global scroll reset, cursor effects, or second continuous requestAnimationFrame loop. ScrollTrigger work is scoped and reverted through useGSAP/gsap.matchMedia; delayed callbacks are context-safe. Layout/image/disclosure changes schedule a coalesced refresh. Initial hero motion uses small CSS transforms so GSAP can load after first paint.

See the final verification section below for measured results and remaining issues.

## Implemented architecture

- `SmoothScroll` is mounted once in the root layout and persists across routes. Its children render on the server and never wait for animation code. It defers the `ScrollExperience` chunk until idle after load or first wheel intent. The chunk is not requested on touch/narrow viewports or initial reduced-motion sessions.
- `ScrollExperience` uses `useGSAP` with the root ref as scope, route-aware cleanup, and `gsap.matchMedia`. Only eligible desktop sessions create Lenis. Lenis uses `autoRaf: false`; its `raf` runs on the GSAP ticker, with ScrollTrigger synchronized from its scroll event. No second continuous RAF loop is added.
- Same-document anchors have a bounded 720 ms movement and focus handoff; CSS scroll padding is applied once. Keyboard scrolling is native. Cross-route navigation remains with Next.js. Browser history restoration remains automatic; no global scroll-to-top/reset or manual restoration override is installed.
- `ResizeObserver`, image load, font readiness and disclosure changes schedule a coalesced ScrollTrigger refresh. Explicit nested scroll areas and controls bypass smoothing. Mobile navigation locks/restores background scrolling.
- The five-step product story uses CSS sticky positioning, not ScrollTrigger pin spacers. Media-scoped, context-safe callbacks crossfade real product screens on scroll down/up, update the active step/accent and animate a decorative story rail. Mobile, reduced-motion and no-JavaScript views expose normal stacked content.
- Existing feature frames receive a few scoped transform animations. The blue meeting digest, coral task and violet goal checkboxes, and contextual-answer example clearly label representative data. Native inputs/buttons drive the examples immediately; no fake AI request or loading state is used.
- Hero entrance is fast CSS transform motion, with visible content from the first frame. Button press/hover feedback, tab switches, links and FAQ disclosure use small CSS transitions. Reduced motion disables them.
- The former IntersectionObserver Reveal no longer hides content or competes with the central controller. Framer Motion/legacy composition files stay installed but are not active in this experience.

## Color system

New tokens: violet `#7058F5`, blue `#4285FF`, teal `#18C5B5`, coral `#FF8C7E`, ink `#101629`, lavender `#F1EEFF`. The existing darker blue remains the accessible primary button color. Darker teal/coral text variants keep contrast on light surfaces.

Section treatments: blue/violet hero lighting, blue meeting review, coral task frames, teal Spaces, dark violet assistant, blue briefing/lavender goals, and a dark final CTA. Brand/logo, typography, primary content, routing, APIs, account/store destinations, plan behavior and legal substance are preserved.

## Verification

- Production build, TypeScript and ESLint pass.
- All 18 routes return 200, retain metadata/canonicals/schema and sitemap entries. Existing permanent redirect and branded 404 pass.
- 144 responsive checks across 320/375/390/768/1024/1280/1440/1920: no page-level horizontal overflow.
- Zero axe WCAG 2 A/AA and 2.1 A/AA violations on all 18 pages in desktop/reduced-motion and mobile scans. Additional full-motion desktop and real touch-emulation scans also report zero violations.
- The motion suite verifies all five phases down/up, active panel accessibility, wheel interpolation, native keyboard PageDown, anchor position/focus, back-position restoration, repeated route/back cleanup, stable wheel-listener count, demo progress, contextual answers, live preference changes, resizing, mobile menu lock/restoration, and no-JavaScript visibility.
- Native touch gestures were exercised at 375 and 768 px. Neither device requested the scroll-engine chunk. The 1440 desktop session loaded it once and enabled smoothing.
- Four-second desktop wheel profile: 226 measured frames, 17.73 ms mean interval, 18.1 ms 95th percentile, one interval over 33 ms, zero long tasks. This is a headless lab profile on the available host, not a guarantee of 60 fps on every device.
- Before screenshots at 1440/375; after screenshots at 1440/1024/768/375 cover hero, workflow, meeting notes, tasks, Spaces, assistant, goals and CTA. Original screenshots used the existing dev server; final captures use the production server.

### Lighthouse comparison

Local production lab runs on Chrome 155, using the existing Lighthouse desktop/mobile simulation. No concurrent browser tests ran during measurement. Values are actual runs; normal lab variation applies. CLS was zero on all six final runs. INP requires field data; TBT is reported as the local responsiveness measure.

| Page | Mode | Before performance | After performance | Accessibility / best practices / SEO | Final LCP | Final TBT |
| --- | --- | ---: | ---: | --- | ---: | ---: |
| Home | Desktop | 100 | 100 | 100 / 100 / 100 | 0.74 s | 0 ms |
| Pricing | Desktop | 100 | 99 | 100 / 100 / 100 | 0.71 s | 100 ms |
| Downloads | Desktop | 100 | 100 | 100 / 100 / 100 | 0.58 s | 0 ms |
| Home | Mobile | 92 | 97 | 100 / 100 / 100 | 2.57 s | 23 ms |
| Pricing | Mobile | 97 | 97 | 100 / 100 / 100 | 2.57 s | 17 ms |
| Downloads | Mobile | 97 | 97 | 100 / 100 / 100 | 2.56 s | 15 ms |

## Libraries and scope

Reused GSAP 3.15, ScrollTrigger (included with GSAP), and Lenis 1.3.26. Added only `@gsap/react` 2.1.2. No framework/backend version changes, additional scroll libraries, image generation, external demo APIs, or deployment.

Files changed in this enhancement: `app/layout.tsx`, new `app/experience.css`, `components/home/{KukuNotesLanding,Navbar,Reveal,SmoothScroll}.tsx`, new `components/motion/ScrollExperience.tsx`, new `components/marketing/{ProductStory,MeetingDigest,TaskDemo,AssistantDemo}.tsx`, package.json/lock, this document, and the motion/visual QA scripts.

## Remaining issues

- The existing pinned Next.js 16.3.0 and transitive dependencies have npm audit advisories. `npm audit --omit=dev` reports one critical affected package (Next.js) and two high affected packages (sharp and source-map-js); no advisory is attributed to the added GSAP helper. The Windows-hosted Next.js issue is confirmed in the [reviewed advisory](https://github.com/advisories/GHSA-p293-qw3h-jr36). Framework/transitive security updates remain separate from this visual enhancement and should be resolved before public deployment. No deployment was performed.
- Physical phone/GPU testing and deployed field INP are not available in this environment. Native touch emulation, keyboard checks, frame profiling and local Lighthouse are the evidence collected.
- Existing product-owner decisions on paid prices, allowances and language entitlements remain as documented in `redesign-verification.md`; this pass retains neutral copy.

## Reproduce and inspect

Run the build/start commands and isolated QA setup in `redesign-verification.md`. Additional runners: `node scripts/test-motion.cjs`, `node scripts/touch-qa.cjs`, `node scripts/motion-performance.cjs`, and `node scripts/motion-qa.cjs after`. Set `QA_URL=http://localhost:3001` for production checks. Run Lighthouse and frame profiling separately from other browser tests.

Ignored `qa-artifacts/` contains `motion-before-*`, `motion-after-*`, `motion-results.json`, `motion-interactions.json`, `motion-touch-accessibility.json`, `motion-frame-profile.json`, `motion-lighthouse-before.json`, `motion-lighthouse-after.json`, and the six final Lighthouse HTML/JSON reports.
