# Product

<!-- impeccable:product-schema 1 -->

Product facts below are taken from the repository and the owner's redesign brief. No interview tool was available in this session, so unmarked items are confirmed by those sources. Nothing here is a visual decision.

## Platform

web

## Users

People in India who sit in meetings, classes, and in-person conversations and need the outcome written down. Students, founders, sales and client-facing teams, and anyone working in Hindi, English, or Hinglish. First-time visitors of the marketing site must understand the product without already knowing the name.

## Product Purpose

KukuNotes records a meeting or conversation only after the person taps Start Listening, then turns that audio into a transcript, summary, tasks, notes, calendar events, and reminders. Spaces keep each project, class, client, or life area separate. A daily briefing brings together priorities, the calendar, and focus time.

## Positioning

Private, opt-in meeting recording with no bot joining Zoom, Google Meet, or Teams. Capture happens on the person's own device. The Android app does not record phone or dialer calls.

## Operating Context

Platforms: Android (Google Play), Windows (Microsoft Store), Chrome extension, and the web app at platform.kukunotes.com. Payments in INR via Razorpay (UPI, cards, NetBanking). KukuNotes is not Kuku FM or Kuku TV.

## Capabilities and Constraints

- Opt-in only. The microphone is on only while Start Listening is active.
- No meeting bot.
- Android does not record phone or dialer calls. Do not claim phone-call recording.
- Languages on every plan (Free, Pro, Business): English, Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia, plus Hinglish. Assamese is not published.
- Free: 2 hours notes recording and 10 hours meeting recording. Pro: ₹499/month (₹3,600/year). Business: ₹999/month (₹7,200/year).
- Do not invent customer logos, testimonials, user counts, ratings, or benchmarks.
- Marketing routes, titles, meta descriptions, H1s, canonicals, sitemap, robots, FAQ text, and llms.txt generation stay intact.

## Brand Commitments

Name: KukuNotes. Owner: Preet Kumar reviews and merges. The redesign should sit beside Otter and tl;dv in craft: a clear product site, not a copy of their assets or sentences.

## Evidence on Hand

Real product screenshots in `public/screenshots/`. Confirmed prices and language lists in `lib/product-facts.ts`. FAQ and page copy in `lib/home-data.ts`, `lib/seo-pages.ts`, `lib/destination-pages.ts`, and `lib/llms-copy.ts`. No verified customer logos or testimonials are in the repo.

## Product Principles

- Lead with meeting recording.
- Say what happens next: transcript, summary, tasks, notes, reminders.
- Privacy is a feature: opt-in, no bot, no dialer recording.
- Only publish facts the repo or the owner already confirmed.
- A first-time visitor should know what it is, who it is for, and what to tap.

## Accessibility & Inclusion

Marketing pages must respect prefers-reduced-motion, stay readable on a phone, and keep FAQ answers in the HTML.
