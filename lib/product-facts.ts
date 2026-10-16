/**
 * Single module for plan prices, free-tier limits, and language lists.
 *
 * TODO(owner): these facts conflict inside the repo. Do not treat either set as
 * confirmed. Public pages must not quote a price, a free-tier quota, or a
 * plan-by-plan language rule until you delete the set that is wrong and
 * remove this TODO. The pricing page still RENDERS `unconfirmedPricingPageDisplay`
 * because that is the table already on screen; rendering it is not a decision
 * that those numbers are correct.
 *
 * Set A — `unconfirmedPricingPageDisplay`
 * What /pricing cards, the comparison limits, the yearly FAQ, and (before this
 * change) the homepage price FAQ show:
 * - Free: ₹0, 2 hours notes, 10 hours meetings, 10 mindmaps, 10 documents, 2 goals
 * - Pro: ₹499/month, ₹3,600/year
 * - Business: ₹999/month, ₹7,200/year
 * - Language names on that page (11, counting English and Hindi): English, Hindi,
 *   Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia.
 *   No Assamese.
 * - That same page disagrees about entitlement: feature bullets, comparison, and
 *   FAQ say every plan includes those languages; the plan-card chips and the
 *   "Business plan unlocks" section say Free/Pro are English and Hindi only.
 *
 * Set B — `unconfirmedMarketingCopy` (NOT rendered)
 * What /pricing meta tags, homepage JSON-LD Offers, llms.txt, llms-full.txt,
 * the about facts, topic pages, and the Hindi page used to state:
 * - Free: 5 Spaces, 5 hours/month
 * - Pro: ₹799/month or ₹1,870/quarter
 * - Business: ₹1,999/month or ₹4,678/quarter
 * - English, Hindi, and Hinglish on every plan; a Business-only pack described
 *   as 11 languages, sometimes including Assamese and sometimes counting Hindi
 *   inside the 11.
 */

export const PLAN_FACTS_TODO =
  "TODO(owner): choose one plan-fact set in lib/product-facts.ts, delete the other, then quote it from the pricing page, FAQs, JSON-LD, and llms.txt together.";

export const agreedProductFacts = {
  planNames: ["Free", "Pro", "Business"] as const,
  currency: "INR",
  payments: "Razorpay (UPI, cards, and NetBanking)",
  /** Both descriptions agree these are supported. Neither side says they are missing. */
  languagesSupported: ["English", "Hindi", "Hinglish"] as const,
  /**
   * Regional names that appear in both set A and set B. Assamese appears only
   * in set B, so it is not listed here.
   */
  regionalLanguagesNamedOnBothLists: [
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
  limitsSentence: "See the pricing page for current prices and recording limits.",
  languagesSentence:
    "English, Hindi, and Hinglish are supported. Additional Indian languages are listed on the pricing page. This site does not yet agree on which plans include them.",
} as const;

/** Native-script labels for languages both fact sets name. */
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

/**
 * Numbers the pricing page already shows. Not confirmed. See PLAN_FACTS_TODO.
 * The pricing page also contradicts itself on language entitlement; that UI is
 * left as-is so this module does not pick a side.
 */
export const unconfirmedPricingPageDisplay = {
  free: {
    monthlyInr: 0,
    yearlyInr: 0,
    notesRecording: "2 hours",
    meetingRecording: "10 hours",
    mindmaps: "10",
    documents: "10",
    goals: "2",
  },
  pro: {
    monthlyInr: 499,
    yearlyInr: 3600,
    monthlyLabel: "₹499",
    yearlyLabel: "₹3,600",
    effectiveMonthlyYearlyLabel: "₹300",
  },
  business: {
    monthlyInr: 999,
    yearlyInr: 7200,
    monthlyLabel: "₹999",
    yearlyLabel: "₹7,200",
    effectiveMonthlyYearlyLabel: "₹600",
  },
  /** English + Hindi + 9 regional names. Assamese is not in this list. */
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
} as const;

/**
 * The other description. Kept so the owner can compare. Do not render these
 * strings on pages, in meta tags, in JSON-LD, or in llms.txt.
 */
export const unconfirmedMarketingCopy = {
  free: {
    spaces: 5,
    recording: "5 hours/month",
  },
  pro: {
    monthlyInr: 799,
    quarterlyInr: 1870,
    monthlyLabel: "₹799/month",
    quarterlyLabel: "₹1,870/quarter",
  },
  business: {
    monthlyInr: 1999,
    quarterlyInr: 4678,
    monthlyLabel: "₹1,999/month",
    quarterlyLabel: "₹4,678/quarter",
  },
  /** Includes Assamese and counts Hindi inside the pack. Not confirmed. */
  businessLanguageNames: [
    "Hindi",
    "Marathi",
    "Gujarati",
    "Tamil",
    "Telugu",
    "Kannada",
    "Bengali",
    "Punjabi",
    "Malayalam",
    "Odia",
    "Assamese",
  ] as const,
} as const;
