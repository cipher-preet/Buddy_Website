import { brandSplit, captureFact, definitionLead, formatInr, languageNote, planFacts } from "./product-facts";
import { siteConfig } from "./site";

function yearlySavings(monthly: number, yearly: number) {
  const full = monthly * 12;
  const saved = full - yearly;
  const percent = Math.round((saved / full) * 100);
  return `Save ${formatInr(saved)} vs monthly (${percent}% off)`;
}

export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  id: "free" | "pro" | "business";
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  prices: {
    monthly: number;
    yearly: number;
  };
  formattedPrices: {
    monthly: string;
    yearly: string;
  };
  effectiveMonthly: {
    monthly: string;
    yearly: string;
  };
  savings?: string;
  limits: {
    notesRecording: string;
    meetingRecording: string;
    mindmaps: string;
    documents: string;
    goals: string;
    marketplace: string;
  };
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  languages: string[];
  ctaLabel: string;
  ctaHref: string;
  isExternal?: boolean;
};

const supportedLanguageNames = [...planFacts.languageNames];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Start capturing notes, meetings, and goals with KukuNotes.",
    prices: {
      monthly: planFacts.free.monthlyInr,
      yearly: planFacts.free.yearlyInr,
    },
    formattedPrices: {
      monthly: formatInr(planFacts.free.monthlyInr),
      yearly: formatInr(planFacts.free.yearlyInr),
    },
    effectiveMonthly: {
      monthly: formatInr(planFacts.free.monthlyInr),
      yearly: formatInr(planFacts.free.yearlyInr),
    },
    limits: {
      notesRecording: planFacts.free.notesRecording,
      meetingRecording: planFacts.free.meetingRecording,
      mindmaps: planFacts.free.mindmaps,
      documents: planFacts.free.documents,
      goals: planFacts.free.goals,
      marketplace: "Browse only",
    },
    features: [
      { text: `${planFacts.free.notesRecording} of notes recording`, included: true },
      { text: `${planFacts.free.meetingRecording} of meeting recording`, included: true },
      { text: `${planFacts.free.mindmaps} mindmaps and ${planFacts.free.documents} documents`, included: true },
      { text: `${planFacts.free.goals} goal tracking`, included: true },
      { text: "Many languages included", included: true },
      { text: "Marketplace browse only", included: true },
      { text: `${planFacts.pro.notesRecording} of notes and meeting recording`, included: false },
      { text: "Limited marketplace installs", included: false },
      { text: "Unlimited capture & full marketplace", included: false },
    ],
    languages: supportedLanguageNames,
    ctaLabel: "Start for free",
    ctaHref: siteConfig.platformUrl,
    isExternal: true,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For individuals who capture and plan every day.",
    badge: "Popular",
    isPopular: true,
    prices: {
      monthly: planFacts.pro.monthlyInr,
      yearly: planFacts.pro.yearlyInr,
    },
    formattedPrices: {
      monthly: formatInr(planFacts.pro.monthlyInr),
      yearly: formatInr(planFacts.pro.yearlyInr),
    },
    effectiveMonthly: {
      monthly: formatInr(planFacts.pro.monthlyInr),
      yearly: formatInr(planFacts.pro.yearlyInr / 12),
    },
    savings: yearlySavings(planFacts.pro.monthlyInr, planFacts.pro.yearlyInr),
    limits: {
      notesRecording: planFacts.pro.notesRecording,
      meetingRecording: planFacts.pro.meetingRecording,
      mindmaps: planFacts.pro.mindmaps,
      documents: planFacts.pro.documents,
      goals: planFacts.pro.goals,
      marketplace: "Limited",
    },
    features: [
      { text: `${planFacts.pro.notesRecording} of notes recording`, included: true, highlight: true },
      { text: `${planFacts.pro.meetingRecording} of meeting recording`, included: true, highlight: true },
      { text: `${planFacts.pro.mindmaps} mindmaps and ${planFacts.pro.documents} documents`, included: true, highlight: true },
      { text: `${planFacts.pro.goals} goal tracking`, included: true },
      { text: "Many languages included", included: true },
      { text: "Limited marketplace access", included: true, highlight: true },
      { text: "Unlimited notes & meeting recording", included: false },
      { text: "Unlimited mindmaps & documents", included: false },
      { text: "Full marketplace access", included: false },
    ],
    languages: supportedLanguageNames,
    ctaLabel: "Get KukuNotes Pro",
    ctaHref: siteConfig.platformUrl,
    isExternal: true,
  },
  {
    id: "business",
    name: "Business",
    tagline: "Unlimited capture with full marketplace access.",
    badge: "Best value",
    prices: {
      monthly: planFacts.business.monthlyInr,
      yearly: planFacts.business.yearlyInr,
    },
    formattedPrices: {
      monthly: formatInr(planFacts.business.monthlyInr),
      yearly: formatInr(planFacts.business.yearlyInr),
    },
    effectiveMonthly: {
      monthly: formatInr(planFacts.business.monthlyInr),
      yearly: formatInr(planFacts.business.yearlyInr / 12),
    },
    savings: yearlySavings(planFacts.business.monthlyInr, planFacts.business.yearlyInr),
    limits: {
      notesRecording: planFacts.business.notesRecording,
      meetingRecording: planFacts.business.meetingRecording,
      mindmaps: planFacts.business.mindmaps,
      documents: planFacts.business.documents,
      goals: planFacts.business.goals,
      marketplace: "Full access",
    },
    features: [
      { text: `${planFacts.business.notesRecording} notes recording`, included: true, highlight: true },
      { text: `${planFacts.business.meetingRecording} meeting recording`, included: true, highlight: true },
      { text: `${planFacts.business.mindmaps} mindmaps and documents`, included: true, highlight: true },
      { text: `${planFacts.business.goals} goal tracking`, included: true },
      { text: "Many languages included", included: true },
      { text: "Full marketplace access", included: true, highlight: true },
      { text: "Priority support", included: true },
      { text: "Everything in Pro included", included: true },
    ],
    languages: supportedLanguageNames,
    ctaLabel: "Upgrade to Business",
    ctaHref: siteConfig.platformUrl,
    isExternal: true,
  },
];

export type CompareCategory = {
  category: string;
  items: {
    name: string;
    description: string;
    free: string | boolean;
    pro: string | boolean;
    business: string | boolean;
  }[];
};

export const comparisonCategories: CompareCategory[] = [
  {
    category: "Capacity & Capture",
    items: [
      {
        name: "Notes Recording",
        description: "Desktop listen and note capture hours",
        free: planFacts.free.notesRecording,
        pro: planFacts.pro.notesRecording,
        business: planFacts.business.notesRecording,
      },
      {
        name: "Meeting Recording",
        description: "Extension meeting capture hours",
        free: planFacts.free.meetingRecording,
        pro: planFacts.pro.meetingRecording,
        business: planFacts.business.meetingRecording,
      },
      {
        name: "Mindmaps",
        description: "Generate structured mind maps",
        free: planFacts.free.mindmaps,
        pro: planFacts.pro.mindmaps,
        business: planFacts.business.mindmaps,
      },
      {
        name: "Documents",
        description: "Generate documentation from templates",
        free: planFacts.free.documents,
        pro: planFacts.pro.documents,
        business: planFacts.business.documents,
      },
      {
        name: "Goal Tracking",
        description: "Active goals you can track",
        free: planFacts.free.goals,
        pro: planFacts.pro.goals,
        business: planFacts.business.goals,
      },
    ],
  },
  {
    category: "Marketplace & Languages",
    items: [
      {
        name: "Marketplace",
        description: "Browse and install featured agents",
        free: "Browse only",
        pro: "Limited installs",
        business: "Full access",
      },
      {
        name: "Languages",
        description: "Many languages. Included on Free, Pro, and Business.",
        free: true,
        pro: true,
        business: true,
      },
    ],
  },
  {
    category: "Security & Support",
    items: [
      {
        name: "Opt-in Only Recording",
        description: "Microphone activates strictly when you tap Start Listening",
        free: true,
        pro: true,
        business: true,
      },
      {
        name: "Payment Security",
        description: "Encrypted payments processed through Razorpay (UPI, Cards, NetBanking)",
        free: true,
        pro: true,
        business: true,
      },
      {
        name: "Support",
        description: "Access to product help, troubleshooting, and customer team",
        free: "Standard",
        pro: "Priority",
        business: "Dedicated support",
      },
    ],
  },
];

export const pricingFaqs = [
  {
    q: "What is KukuNotes?",
    a: definitionLead,
  },
  {
    q: "Does a paid plan change how recording works?",
    a: `No. ${captureFact} ${languageNote}`,
  },
  {
    q: "Is KukuNotes the same as Kuku FM?",
    a: brandSplit,
  },
  {
    q: "Can I change or cancel my plan anytime?",
    a: "Yes. You can switch between Free, Pro, and Business anytime from inside the KukuNotes app or website. If you downgrade, your existing recordings and content always remain safe with you.",
  },
  {
    q: "How does yearly billing work?",
    a: `Yearly billing gives you 12 months of access at a substantial discount. Pro is ${formatInr(planFacts.pro.yearlyInr)} per year (${formatInr(planFacts.pro.yearlyInr / 12)}/mo), and Business is ${formatInr(planFacts.business.yearlyInr)} per year (${formatInr(planFacts.business.yearlyInr / 12)}/mo). You can choose monthly or yearly based on your preference.`,
  },
  {
    q: "Which languages are included?",
    a: languageNote,
  },
  {
    q: "What payment methods are supported?",
    a: "All payments are processed securely through Razorpay. You can pay with UPI (Google Pay, PhonePe, Paytm, etc.), credit cards, debit cards, net banking across all major banks, and digital wallets.",
  },
  {
    q: "Does KukuNotes record in the background without my consent?",
    a: "Never. KukuNotes operates on a strict opt-in model. Listening only begins when you deliberately choose to tap Start Listening, and it always binds to the specific space you selected.",
  },
  {
    q: "What is included in marketplace access?",
    a: "Free can browse agents only. Pro can install selected agents. Agents that require the Business plan are labeled Buy. The Business plan can install every marketplace agent.",
  },
];
