import { siteConfig } from "./site";

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

export const ALL_INDIAN_LANGUAGES = [
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
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Start capturing notes, meetings, and goals with KukuNotes.",
    prices: {
      monthly: 0,
      yearly: 0,
    },
    formattedPrices: {
      monthly: "₹0",
      yearly: "₹0",
    },
    effectiveMonthly: {
      monthly: "₹0",
      yearly: "₹0",
    },
    limits: {
      notesRecording: "2 hours",
      meetingRecording: "10 hours",
      mindmaps: "10",
      documents: "10",
      goals: "2",
      marketplace: "Browse only",
    },
    features: [
      { text: "2 hours of notes recording", included: true },
      { text: "10 hours of meeting recording", included: true },
      { text: "10 mindmaps and 10 documents", included: true },
      { text: "2 goal tracking", included: true },
      { text: "11 Indian languages", included: true },
      { text: "Marketplace browse only", included: true },
      { text: "100 hours of notes & meeting recording", included: false },
      { text: "Limited marketplace installs", included: false },
      { text: "Unlimited capture & full marketplace", included: false },
    ],
    languages: ALL_INDIAN_LANGUAGES,
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
      monthly: 499,
      yearly: 3600,
    },
    formattedPrices: {
      monthly: "₹499",
      yearly: "₹3,600",
    },
    effectiveMonthly: {
      monthly: "₹499",
      yearly: "₹300",
    },
    savings: "Save ₹2,388 vs monthly (40% off)",
    limits: {
      notesRecording: "100 hours",
      meetingRecording: "100 hours",
      mindmaps: "200",
      documents: "200",
      goals: "50",
      marketplace: "Limited",
    },
    features: [
      { text: "100 hours of notes recording", included: true, highlight: true },
      { text: "100 hours of meeting recording", included: true, highlight: true },
      { text: "200 mindmaps and 200 documents", included: true, highlight: true },
      { text: "50 goal tracking", included: true },
      { text: "11 Indian languages", included: true },
      { text: "Limited marketplace access", included: true, highlight: true },
      { text: "Unlimited notes & meeting recording", included: false },
      { text: "Unlimited mindmaps & documents", included: false },
      { text: "Full marketplace access", included: false },
    ],
    languages: ALL_INDIAN_LANGUAGES,
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
      monthly: 999,
      yearly: 7200,
    },
    formattedPrices: {
      monthly: "₹999",
      yearly: "₹7,200",
    },
    effectiveMonthly: {
      monthly: "₹999",
      yearly: "₹600",
    },
    savings: "Save ₹4,788 vs monthly (40% off)",
    limits: {
      notesRecording: "Unlimited",
      meetingRecording: "Unlimited",
      mindmaps: "Unlimited",
      documents: "Unlimited",
      goals: "Unlimited",
      marketplace: "Full access",
    },
    features: [
      { text: "Unlimited notes recording", included: true, highlight: true },
      { text: "Unlimited meeting recording", included: true, highlight: true },
      { text: "Unlimited mindmaps and documents", included: true, highlight: true },
      { text: "Unlimited goal tracking", included: true },
      { text: "11 Indian languages", included: true },
      { text: "Full marketplace access", included: true, highlight: true },
      { text: "Priority support", included: true },
      { text: "Everything in Pro included", included: true },
    ],
    languages: ALL_INDIAN_LANGUAGES,
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
        free: "2 hours",
        pro: "100 hours",
        business: "Unlimited",
      },
      {
        name: "Meeting Recording",
        description: "Extension meeting capture hours",
        free: "10 hours",
        pro: "100 hours",
        business: "Unlimited",
      },
      {
        name: "Mindmaps",
        description: "Generate structured mind maps",
        free: "10",
        pro: "200",
        business: "Unlimited",
      },
      {
        name: "Documents",
        description: "Generate documentation from templates",
        free: "10",
        pro: "200",
        business: "Unlimited",
      },
      {
        name: "Goal Tracking",
        description: "Active goals you can track",
        free: "2",
        pro: "50",
        business: "Unlimited",
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
        name: "11 Indian Languages",
        description: "English, Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia",
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
    q: "Can I change or cancel my plan anytime?",
    a: "Yes. You can switch between Free, Pro, and Business anytime from inside the KukuNotes app or website. If you downgrade, your existing recordings and content always remain safe with you.",
  },
  {
    q: "How does yearly billing work?",
    a: "Yearly billing gives you 12 months of access at a substantial discount. Pro is ₹3,600 per year (₹300/mo), and Business is ₹7,200 per year (₹600/mo). You can choose monthly or yearly based on your preference.",
  },
  {
    q: "Which languages are included?",
    a: "All plans include 11 Indian languages: English, Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, and Odia.",
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
    a: "Free can browse agents only. Pro can install selected agents, while Business-only agents are labeled Buy. Business unlocks install access for every marketplace agent.",
  },
];
