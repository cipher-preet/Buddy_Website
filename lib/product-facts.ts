/**
 * Confirmed plan prices and free-tier limits.
 * Owner confirmed these prices and free-tier limits on 16 Oct 2026.
 * Older marketing prices and free-tier quotas are not used.
 *
 * TODO(owner): LANGUAGE_PLAN_RULE — which plans include the Indian languages
 * in `languageNames` is still unconfirmed. Do not claim that every plan
 * includes them, and do not claim that only Business includes them.
 * Do not publish Assamese.
 */

export const LANGUAGE_PLAN_RULE_TODO =
  "TODO(owner): which plans include the Indian languages in languageNames is unconfirmed. Do not claim every plan, and do not claim Business only. Do not publish Assamese.";

export function formatInr(amount: number) {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₹${formatted}`;
}

export const planFacts = {
  currency: "INR",
  payments: "Razorpay (UPI, cards, and NetBanking)",
  languagesSupported: ["English", "Hindi", "Hinglish"] as const,
  /**
   * Names listed for KukuNotes. This is not a statement of which plan
   * includes them. Assamese is intentionally absent.
   */
  languageNames: [
    "English",
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "Odia",
  ] as const,
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

/** Regional names from `languageNames`, with native script. No Assamese. */
export const regionalLanguageScript = [
  { en: "Bengali", native: "বাংলা" },
  { en: "Tamil", native: "தமிழ்" },
  { en: "Telugu", native: "తెలుగు" },
  { en: "Kannada", native: "ಕನ್ನಡ" },
  { en: "Malayalam", native: "മലയാളം" },
  { en: "Marathi", native: "मराठी" },
  { en: "Gujarati", native: "ગુજરાતી" },
  { en: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { en: "Odia", native: "ଓଡ଼ିଆ" },
] as const;

const { free, pro, business } = planFacts;

function andList(items: readonly string[]) {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export const priceCopy = {
  freeHours: `Free includes ${free.notesRecording} of notes recording and ${free.meetingRecording} of meeting recording`,
  freeDetail: `Free includes ${free.notesRecording} of notes recording, ${free.meetingRecording} of meeting recording, ${free.mindmaps} mindmaps, ${free.documents} documents, and ${free.goals} goals`,
  pro: `Pro is ${formatInr(pro.monthlyInr)}/month (${formatInr(pro.yearlyInr)}/year)`,
  business: `Business is ${formatInr(business.monthlyInr)}/month (${formatInr(business.yearlyInr)}/year)`,
  summary: `Free includes ${free.notesRecording} of notes recording and ${free.meetingRecording} of meeting recording. Pro is ${formatInr(pro.monthlyInr)}/month (${formatInr(pro.yearlyInr)}/year). Business is ${formatInr(business.monthlyInr)}/month (${formatInr(business.yearlyInr)}/year).`,
} as const;

/** Does not say whether every plan or only Business includes the wider list. */
export const languageNote = `English, Hindi, and Hinglish are supported. KukuNotes also names ${andList(regionalLanguageScript.map((language) => language.en))}. Which plans include those languages is not confirmed.`;

export const languageNoteWithScript = `Hindi (हिंदी) works in the same recording as English, including Hinglish. KukuNotes also names ${andList(regionalLanguageScript.map((language) => `${language.en} (${language.native})`))}. Which plans include those languages is not confirmed.`;

/** Prices a structured-data Offer list must use. Yearly amounts are the billed totals. */
export function confirmedOfferPrices() {
  return [
    { name: "KukuNotes Free", price: planFacts.free.monthlyInr },
    { name: "KukuNotes Pro Monthly", price: planFacts.pro.monthlyInr },
    { name: "KukuNotes Pro Yearly", price: planFacts.pro.yearlyInr },
    { name: "KukuNotes Business Monthly", price: planFacts.business.monthlyInr },
    { name: "KukuNotes Business Yearly", price: planFacts.business.yearlyInr },
  ] as const;
}
