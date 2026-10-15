# KukuNotes launch redesign — 15 October 2026

## Direction

“Conversations become progress.” The page moves through capture, understanding, action, organization, and progress. The supplied folded K icon remains the brand source: deep navy, blue, violet, and a restrained warm highlight. Sora and Source Sans 3 remain locally hosted. No replacement logo, stock customer endorsements, invented usage statistics, or generated product UI were added.

The homepage now opens with a large real desktop workspace and a separate Android device on a navy stage. Mobile gets a dedicated Android composition. The walkthrough changes real screens as the visitor scrolls forward or backward; smaller screens use chapter buttons. Feature scenes alternate a broad meeting interface, a task detail, an interactive workspace gallery, a contextual assistant, and briefing/progress views. Existing routes retain their purpose and content, with shared typography, mastheads, frames, buttons, pricing styling, and footer treatments.

## Audit and reference comparison

The starting checkout already contained substantial uncommitted work. That work, the existing Next.js 16.3 stack, backend pricing connection, contact email handoff, metadata, and route destinations were retained. This pass is separate from the earlier audit and verification documents in this folder. `baseline-*` captures were taken before this pass's implementation, against the existing local preview.

The fragile geometry was concentrated in `cinematic.css`: desktop aspect ratios replaced with portrait/square ratios, `object-fit: cover`, image zoom transforms, rotated hero layers, fixed phone offsets, and minimum desktop widths in constrained secondary-page containers. This pass removes that inactive stylesheet from the root import and routes visible product imagery through `ProductScreen`, using actual image dimensions and explicit crop assets. `ProductFrame` remains as a compatibility adapter for secondary pages. The new landing entry is `LaunchLanding`; previous landing/demo components remain dormant rather than deleting prior working-copy changes.

The five references were opened and captured in Chrome at 1440 × 1000. The observations below are design judgments based on those captures and the public pages, not claims about their implementation.

| Reference | What works | Application to KukuNotes |
| --- | --- | --- |
| [Granola](https://www.granola.ai/) | A concrete meeting workflow, readable product context, and a calm editorial voice | Explain what happens during and after a conversation using actual screens |
| [Linear](https://linear.app/) | Precise typography, low-noise surfaces, and a substantial application presentation | Make the workspace large; keep alignment and spacing disciplined |
| [Raycast](https://www.raycast.com/) | A recognizable brand atmosphere and a decisive first viewport | Use lighting from the K icon and a short entrance; keep product content visible |
| [Fireflies](https://fireflies.ai/) | Clear meeting-product positioning and direct conversion paths | Keep capture, summaries, and tasks discoverable; retain real destinations |
| [tl;dv](https://tldv.io/) | Explicit meeting-to-knowledge storytelling and platform communication | Connect capture to useful work and present each available platform clearly |

The starting KukuNotes presentation had authentic imagery, but it was small, repeatedly framed, and sometimes cropped by CSS. The new distinction is the relationship between conversations and progress, with the supplied application screens carrying the story. Reference layouts and assets were not copied into the site.

## Assets and components

- `docs/screenshot-manifest.json` catalogs every supplied screenshot, existing screen dimensions, platform, use, quality, and visible-data considerations.
- Nine supplied screens are optimized to WebP at original resolution. Four explicit detail crops are produced from genuine screenshots. Original files outside the repository are untouched.
- Two older Android references remain reference-only: one is superseded by the home screen with the K logo, and one contains a visible API error. The working supplied web assistant screen is used for marketing.
- The supplied ICO's embedded 256 px PNG was inspected and matches the existing folded K branding. Existing logo and favicon artwork are preserved.
- `ProductScreen` uses intrinsic dimensions, natural-height images, and genuine screen masks. Portrait mobile alternatives get phone frames; no fake hardware notch is added.
- `ConversationFilm` uses a scoped scroll listener active only while the story is visible. The existing Lenis/GSAP shell remains the single desktop scroll engine. No new dependencies or competing scroll engines were introduced.
- `WorkspaceExplorer` and `PlatformSelector` retain keyboard-accessible tab behavior. Platform CTAs retain their existing official destinations.
- Home pricing is now a concise link to the dedicated pricing page. The live catalog, billing controls, API handling, and comparison remain on `/pricing`.
- Legal documents retain their existing text and accessible layouts. Contact retains its existing email-client workflow.

## Verification

Completed checks for this pass:

- Production build and TypeScript check.
- ESLint.
- All 18 important routes: HTTP 200, one H1, canonical/description metadata and valid structured data. Existing redirect, 404, robots, and sitemap checks pass.
- All 18 routes at 320, 375, 390, 768, 1024, 1280, 1440, and 1920 px: no horizontal document overflow or distorted product images detected.
- Zero automated WCAG A/AA axe violations on desktop and mobile across the 18 routes.
- Navigation opening, Escape/focus return, route changes, platform destinations and keyboard controls, workspace tabs, FAQ keyboard behavior, native contact constraints/email handoff, and legal deep links.
- Walkthrough chapters advance and reverse under native/reduced-motion and Lenis-enabled scrolling. Five frames remain inside their stage labels at a 1440 × 650 viewport. A live reduced-motion change cleans up smooth scrolling.
- Existing pricing regression: server rendering without JavaScript, catalog ordering/filtering, fresh amounts, annual billing, keyboard controls, outage/retry/loading, unavailable billing, malformed/duplicate/empty/non-JSON responses, mobile geometry, and no browser runtime errors. The loading check was updated to use the dedicated pricing retry flow after removing the homepage catalog widget.

Visual captures were inspected for the hero, meeting scene, workspace, assistant, briefing/progress composition, pricing, and mobile walkthrough. The mindmap is an overview of relationships; the workspace gallery also provides a full-resolution inspection link. Source screenshots retain their original product content, including the original edge clipping within the captured application.

This is a local implementation. No public deployment, login, paid transaction, account change, or outgoing message was performed. Automated accessibility checks do not replace a manual assistive-technology audit. Historical Lighthouse scores in other documents do not describe this redesign.

## Reproduce and inspect

```powershell
npm.cmd run build
npm.cmd run lint
node scripts/test-json-ld.js
node scripts/launch-qa.cjs
node scripts/launch-motion-qa.cjs
node scripts/interaction-qa.cjs
node scripts/pricing-qa.cjs
```

Browser checks use the existing ignored `.qa-tools` Playwright/axe installation and installed Chrome. `QA_URL` selects the preview server. No production dependencies were added. Old cinematic/motion scripts refer to the previous landing's DOM; the launch suites cover the new composition.

Artifacts are intentionally ignored in `qa-artifacts/`: before captures in `baseline-*`, final page/section captures and JSON reports in `launch/`, and competitor captures in `references/`. The source manifest and this report are reviewable project files.
