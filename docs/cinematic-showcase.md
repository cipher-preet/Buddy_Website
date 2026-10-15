# KukuNotes cinematic product showcase

The upgrade preserves the homepage headline, editorial layout, section order,
five-step narrative, navigation, platform availability, pricing API, and contact
flow. Changes concentrate on genuine product screenshots and their presentation.

## Changed application files

| File | Change |
| --- | --- |
| `app/cinematic.css` | Device framing, atmospheric light, focused viewports, hero entrance, platform transitions, and responsive fallbacks. |
| `app/layout.tsx` | Loads the separate showcase stylesheet after existing site styles. |
| `components/marketing/ProductShowcase.tsx` | Reusable `CinematicStage`, `AmbientGlow`, `HeroProductStage`, and decorative `CaptureWaveform`. |
| `components/marketing/ScreenshotSpotlight.tsx` | Keyboard-accessible focus controls and a full-resolution screenshot link. |
| `components/marketing/UI.tsx` | `ProductFrame` supports window labels, focused crops, aspect-preserving viewports, responsive loading, and versioned screenshots. |
| `components/marketing/ProductStory.tsx` | The same five chapters, with real screen layers, chapter labels, and visual progress. |
| `components/motion/ScrollExperience.tsx` | One coordinated story timeline, feature camera moves, and reliable native fallbacks. |
| `components/home/KukuNotesLanding.tsx` | Integrates the new presentation into existing hero and feature sections. |
| `components/marketing/PlatformSelector.tsx` | Real primary/companion screens, platform accents, and visual transitions; existing tabs and destinations retained. |
| `next.config.ts` | Allows the precise screenshot version query and image quality settings. |

## Sections improved

- Hero: desktop and Android screens on an illuminated stage, separate device
  positions, perspective, delayed mobile entrance, and a single reflection pass.
- Capture → Understand → Take action → Connect → Move forward: one sticky stage,
  focused meeting summary, actual tasks and Spaces, and the real Goal Monitor.
- Meeting notes: selectable full meeting/summary views with blue lighting.
- Task extraction: original notes and tasks phones, warm light, and staged depth;
  the existing interactive example remains explicitly labelled illustrative.
- Spaces: the authentic desktop workspace now accompanies the existing labelled
  example, with an optional focused view.
- Ask KukuNotes: actual chat screenshot with Workspace, Answer, and Context focus
  controls. The existing illustrative question example stays separately labelled.
- Daily briefings and goals: larger phone frames and distinct blue/violet light.
  The duplicate illustrative progress overlay was removed from the Goal Monitor.
- Platforms: original Android, Windows, Chrome, and web CTAs, accessible tabs,
  real screenshot transitions, and companion device framing.

## Motion architecture

The existing dynamically loaded `ScrollExperience` remains the only scroll
owner. Its desktop Lenis instance feeds the GSAP ticker and ScrollTrigger.
`kuku-product-story` is a single scrubbed timeline with five readable holds,
short overlapping transitions, camera transforms, and synchronized rail/stage
progress. Its progress runs naturally in either direction. CSS sticky supplies
the stage position without pin spacers, snapping, or scroll trapping.

Active chapter labels and accessible panel visibility follow the timeline.
Transforms and opacity supply motion; the lighting uses static radial gradients.
There are no continuous decorative loops or animated blurs. Existing feature
triggers move only a few screenshot compositions, rather than animating all text.

`gsap.matchMedia` and the existing `useGSAP` context revert timelines and triggers
on route/preference changes. Resize observers, delayed refreshes, listeners,
ticker callbacks, and Lenis instances retain their existing cleanup paths.

Below 1024px, on coarse-pointer devices, in landscape windows below 650px tall,
and with reduced motion, the story becomes a native stacked sequence. All five
screens and descriptions remain available. The no-JavaScript fallback is retained.

## Screenshot audit and privacy

All 19 existing screenshots were inspected. Six originals received deterministic
rectangular redactions for account names/email, an internal record identifier,
meeting codes, and participant names:

- `public/screenshots/desktop/spaces-tasks.png`
- `public/screenshots/desktop/ai-chat.png`
- `public/screenshots/desktop/meeting-detail.png`
- `public/screenshots/desktop/meetings.png`
- `public/screenshots/goal-monitor.jpeg`
- `public/screenshots/notes-board.jpeg`

`scripts/sanitize-product-screenshots.mjs` preserves dimensions and genuine UI
pixels outside the redactions. Original inputs are backed up only under ignored
`qa-artifacts/screenshot-originals`; they are not public assets. Screenshot URLs
are versioned to avoid previously optimized copies. Focus controls disclose that
identifying details are hidden. No replacement interface or AI response is generated.

No higher-resolution desktop originals were found in this website or the local
branding directory. Available desktop screens are 1024px wide, so 2×/retina
captures would improve close-ups on large displays. A genuine Chrome extension
popup/capture screenshot is also absent; the Chrome view uses the real meeting
summary, labelled as a KukuNotes workspace screen. Some supplied mobile screens
retain the application's older Buddy wording; refreshed product captures would
improve branding consistency without reconstructing their UI.

## Performance and verification

No dependency was added. Hero imagery is eager; other screenshots remain lazy,
responsive `next/image` assets with explicit aspect ratios and asynchronous
decoding. Quality 90 is allowed for product screens to preserve UI text; ordinary
images retain the default quality. Focus viewports have stable dimensions.
Full-resolution inspection remains available when a dense screenshot is difficult
to read at a small display size.

Before captures are saved as `qa-artifacts/motion-before-*.png`. After compositions
and individual chapter/platform states are saved as `qa-artifacts/cinematic-*.png`.
These local review artifacts are ignored by Git.

Validation commands (against a running production preview via `QA_URL`):

```powershell
npm.cmd run build
node scripts/cinematic-qa.cjs
node scripts/test-motion.cjs
node scripts/interaction-qa.cjs
node scripts/motion-performance.cjs
node scripts/pricing-qa.cjs
```

The scripts use the repository's existing `.qa-tools` Playwright/axe installation.
`cinematic-qa.cjs` covers 375, 768, 1024, 1440, and 1920px; all five chapter holds
in both directions; screenshot focus; all four platform CTAs; reduced motion;
large touchscreens; short landscape windows; and browser runtime errors.
`test-motion.cjs` covers scroll/navigation cleanup and no-JavaScript behavior.
`interaction-qa.cjs` covers all 18 routes, contact validation, billing selection,
platform/Spaces/FAQ interactions, and accessibility. Pricing has its own
production-server integration checks with controlled backend responses.

Verified results:

- Production build and TypeScript: passed.
- All requested widths: no horizontal overflow.
- Five chapter holds in both directions: one clearly visible screen at each hold.
- Screenshot focus, all four platform destinations, reduced motion, large touch
  devices, short landscape windows, route cleanup, and no-JavaScript behavior:
  passed with zero browser runtime errors.
- Existing 18-route interaction suite: passed, including zero axe accessibility
  violations on every route at mobile width.
- Pricing integration suite: passed, including annual/monthly presentation,
  malformed responses, outage/retry, and homepage loading.
- Four-second local desktop scroll profile: 239 frames, mean 16.75ms, p95 17.8ms,
  one frame above 33ms, and zero recorded long tasks. This is a local headless
  Chromium measurement, not a guarantee for every device or network.
