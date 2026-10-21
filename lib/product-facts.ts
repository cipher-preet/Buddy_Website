/**
 * Confirmed plan prices, free-tier limits, and language entitlement.
 * Owner confirmed these prices and free-tier limits on 16 Oct 2026.
 * Owner confirmed the languages in `supportedLanguages` are included on
 * every plan: Free, Pro, and Business. Assamese is not published.
 * Older marketing prices and free-tier quotas are not used.
 */

export function formatInr(amount: number) {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₹${formatted}`;
}

/**
 * Included on Free, Pro, and Business. Assamese is intentionally absent.
 * `hi` is the Hindi name of the language. `native` is the language's own script.
 */
export const supportedLanguages = [
  { en: "English", hi: "अंग्रेज़ी", code: "en" },
  { en: "Hindi", hi: "हिंदी", native: "हिंदी", code: "hi" },
  { en: "Bengali", hi: "बंगाली", native: "বাংলা", code: "bn" },
  { en: "Tamil", hi: "तमिल", native: "தமிழ்", code: "ta" },
  { en: "Telugu", hi: "तेलुगु", native: "తెలుగు", code: "te" },
  { en: "Kannada", hi: "कन्नड़", native: "ಕನ್ನಡ", code: "kn" },
  { en: "Malayalam", hi: "मलयालम", native: "മലയാളം", code: "ml" },
  { en: "Marathi", hi: "मराठी", native: "मराठी", code: "mr" },
  { en: "Gujarati", hi: "गुजराती", native: "ગુજરાતી", code: "gu" },
  { en: "Punjabi", hi: "पंजाबी", native: "ਪੰਜਾਬੀ", code: "pa" },
  { en: "Odia", hi: "ओड़िया", native: "ଓଡ଼ିଆ", code: "or" },
] as const;

export const planFacts = {
  currency: "INR",
  payments: "Razorpay (UPI, cards, and NetBanking)",
  /** Included on Free, Pro, and Business. */
  languageNames: supportedLanguages.map((language) => language.en),
  languageCodes: supportedLanguages.map((language) => language.code),
  free: {
    monthlyInr: 0,
    yearlyInr: 0,
    notesRecording: "2 hours",
    meetingRecording: "10 hours",
    mindmaps: "10",
    documents: "10",
    goals: "2",
    marketplace: "Browse only",
  },
  pro: {
    monthlyInr: 499,
    yearlyInr: 3600,
    notesRecording: "100 hours",
    meetingRecording: "100 hours",
    mindmaps: "200",
    documents: "200",
    goals: "50",
    marketplace: "Limited",
  },
  business: {
    monthlyInr: 999,
    yearlyInr: 7200,
    notesRecording: "Unlimited",
    meetingRecording: "Unlimited",
    mindmaps: "Unlimited",
    documents: "Unlimited",
    goals: "Unlimited",
    marketplace: "Full access",
  },
} as const;

const { free, pro, business } = planFacts;

function andList(items: readonly string[], conjunction = "and") {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
}

function languageLabel(language: (typeof supportedLanguages)[number]) {
  return "native" in language ? `${language.en} (${language.native})` : language.en;
}

export const priceCopy = {
  freeHours: `Free includes ${free.notesRecording} of notes recording and ${free.meetingRecording} of meeting recording`,
  freeDetail: `Free includes ${free.notesRecording} of notes recording, ${free.meetingRecording} of meeting recording, ${free.mindmaps} mindmaps, ${free.documents} documents, and ${free.goals} goals`,
  pro: `Pro is ${formatInr(pro.monthlyInr)}/month (${formatInr(pro.yearlyInr)}/year)`,
  business: `Business is ${formatInr(business.monthlyInr)}/month (${formatInr(business.yearlyInr)}/year)`,
  summary: `Free includes ${free.notesRecording} of notes recording and ${free.meetingRecording} of meeting recording. Pro is ${formatInr(pro.monthlyInr)}/month (${formatInr(pro.yearlyInr)}/year). Business is ${formatInr(business.monthlyInr)}/month (${formatInr(business.yearlyInr)}/year).`,
} as const;

const everyPlanLanguages = `Every plan includes ${andList(planFacts.languageNames)}. Free, Pro, and Business all include that list.`;

/** Hinglish is mixed Hindi and English, not a twelfth named language and not Assamese. */
const hinglishNote = "Hinglish, mixed Hindi and English in the same recording, is also supported.";

export const languageNote = `${everyPlanLanguages} ${hinglishNote}`;

export const languageNoteWithScript = `Every plan includes ${andList(supportedLanguages.map(languageLabel))}. Free, Pro, and Business all include that list. ${hinglishNote}`;

export const languageNoteHi = `Free, Pro और Business — हर प्लान में ${andList(supportedLanguages.map((language) => language.hi), "और")} शामिल हैं।`;

/** Two-sentence definition used near the top of the main pages. */
export const whatIsKukuNotes =
  "KukuNotes is a private AI note taker and meeting recorder for Android, Windows, Chrome, and the web.";

/**
 * Owner confirmed 21 Oct 2026. This is the Android app only.
 * Windows and Chrome still capture meeting audio from the device or browser tab.
 */
export const androidRecordingFact =
  "The KukuNotes Android app records meetings and in-person conversations. It does not record phone calls. From those recordings it creates tasks, notes, calendar events, and reminders.";

export const captureFact =
  `You tap Start Listening to record through your device. Listening is opt-in, and KukuNotes never joins Zoom, Google Meet, or Teams as a bot. ${androidRecordingFact}`;

/**
 * Competitor facts checked 21 Oct 2026.
 * Granola has an Android app (1 July 2026) that only records in-person conversations.
 * Fathom's iPhone app launched 20 Oct 2026; per Fathom's help page it is iPhone-only at launch, cannot record phone calls, and needs internet.
 * Keep these neutral. Do not claim either product has no mobile app.
 */
export const granolaComparison =
  "Both are bot-free. Granola runs on Mac, Windows, iPhone, and Android. Granola has had an Android app since 1 July 2026; on Android it only records in-person conversations. KukuNotes records meetings and in-person conversations on Android and does not record phone calls. KukuNotes also supports Hindi and Hinglish and creates tasks, notes, calendar events, and reminders.";

export const fathomComparison =
  "Fathom records Zoom, Google Meet, and Microsoft Teams calls (with a bot, or a bot-free beta on Mac). On 20 October 2026 Fathom launched an iPhone app that records in-person meetings without a bot. Per Fathom's help page, that app is iPhone-only at launch, cannot record phone calls, and needs an internet connection. KukuNotes records meetings and in-person conversations on Android and does not record phone calls.";

export const brandSplit =
  "KukuNotes is not Kuku FM or Kuku TV. It is a separate product for notes, meetings, and tasks.";

export const definitionLead = `${whatIsKukuNotes} ${captureFact}`;

export const definitionFacts = `${languageNote} ${brandSplit}`;

/** Prices a structured-data Offer list must use. Yearly amounts are the billed totals. */
export function confirmedOfferPrices() {
  return [
    { name: "KukuNotes Free", price: planFacts.free.monthlyInr, unitText: "MONTH" },
    { name: "KukuNotes Pro Monthly", price: planFacts.pro.monthlyInr, unitText: "MONTH" },
    { name: "KukuNotes Pro Yearly", price: planFacts.pro.yearlyInr, unitText: "YEAR" },
    { name: "KukuNotes Business Monthly", price: planFacts.business.monthlyInr, unitText: "MONTH" },
    { name: "KukuNotes Business Yearly", price: planFacts.business.yearlyInr, unitText: "YEAR" },
  ] as const;
}
