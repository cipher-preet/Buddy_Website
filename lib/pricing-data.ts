import { siteConfig } from "./site";

export type BillingCycle = "monthly" | "quarterly";

export type PricingPlan = {
  id: "free" | "pro" | "business";
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  prices: {
    monthly: number;
    quarterly: number;
  };
  formattedPrices: {
    monthly: string;
    quarterly: string;
  };
  effectiveMonthly: {
    monthly: string;
    quarterly: string;
  };
  savings?: string;
  limits: {
    spaces: string;
    recording: string;
    notes: string;
    tasks: string;
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

export const CORE_LANGUAGES = ["English", "Hindi"];

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
    tagline: "Start capturing conversations and experiencing KukuNotes.",
    prices: {
      monthly: 0,
      quarterly: 0,
    },
    formattedPrices: {
      monthly: "₹0",
      quarterly: "₹0",
    },
    effectiveMonthly: {
      monthly: "₹0",
      quarterly: "₹0",
    },
    limits: {
      spaces: "5 spaces",
      recording: "2 hours",
      notes: "100 notes",
      tasks: "100 tasks",
    },
    features: [
      { text: "Create up to 5 focused spaces", included: true },
      { text: "2 hours of meeting recording", included: true },
      { text: "Up to 100 notes & 100 tasks", included: true },
      { text: "Hindi & English AI listening", included: true },
      { text: "AI notes & action item extraction", included: true },
      { text: "iOS & Android mobile apps", included: true },
      { text: "Daily briefing view", included: false },
      { text: "Goal monitor across spaces", included: false },
      { text: "11 Indian languages pack", included: false },
      { text: "Team shared workspaces", included: false },
    ],
    languages: CORE_LANGUAGES,
    ctaLabel: "Start for free",
    ctaHref: siteConfig.platformUrl,
    isExternal: true,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For individuals and leaders who capture and plan every day.",
    badge: "Popular",
    isPopular: true,
    prices: {
      monthly: 299,
      quarterly: 699,
    },
    formattedPrices: {
      monthly: "₹299",
      quarterly: "₹699",
    },
    effectiveMonthly: {
      monthly: "₹299",
      quarterly: "₹233",
    },
    savings: "Save ₹198 vs monthly (22% off)",
    limits: {
      spaces: "Unlimited",
      recording: "100 hours",
      notes: "Unlimited",
      tasks: "Unlimited",
    },
    features: [
      { text: "Unlimited dedicated spaces", included: true, highlight: true },
      { text: "100 hours of meeting recording", included: true, highlight: true },
      { text: "Unlimited notes & task extraction", included: true },
      { text: "Hindi & English AI listening", included: true },
      { text: "Daily briefing with priorities & time blocks", included: true, highlight: true },
      { text: "Goal monitor tracking space outcomes", included: true, highlight: true },
      { text: "Deep note evidence & confidence scores", included: true },
      { text: "iOS & Android mobile apps", included: true },
      { text: "11 Indian languages pack", included: false },
      { text: "Team shared workspaces", included: false },
    ],
    languages: CORE_LANGUAGES,
    ctaLabel: "Get KukuNotes Pro",
    ctaHref: siteConfig.platformUrl,
    isExternal: true,
  },
  {
    id: "business",
    name: "Business",
    tagline: "For teams, founders, and multilingual organizations.",
    badge: "Best value",
    prices: {
      monthly: 699,
      quarterly: 1799,
    },
    formattedPrices: {
      monthly: "₹699",
      quarterly: "₹1,799",
    },
    effectiveMonthly: {
      monthly: "₹699",
      quarterly: "₹599",
    },
    savings: "Save ₹298 vs monthly (14% off)",
    limits: {
      spaces: "Unlimited",
      recording: "Unlimited",
      notes: "Unlimited",
      tasks: "Unlimited",
    },
    features: [
      { text: "Everything in Pro included", included: true },
      { text: "Unlimited meeting recording hours", included: true, highlight: true },
      { text: "11 Indian languages full pack", included: true, highlight: true },
      { text: "Team shared workspaces & memory", included: true, highlight: true },
      { text: "Selective note & task handoffs", included: true },
      { text: "Daily briefing & goal monitor", included: true },
      { text: "Centralized meeting actions & owners", included: true },
      { text: "Priority transcription & AI speed", included: true },
      { text: "Enterprise security & access control", included: true },
      { text: "Dedicated priority support", included: true },
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
        name: "Dedicated Spaces",
        description: "Organize work, personal plans, and projects in isolated contexts",
        free: "5 spaces",
        pro: "Unlimited",
        business: "Unlimited",
      },
      {
        name: "Meeting Recording",
        description: "Opt-in conversation listening and background transcription",
        free: "2 hours",
        pro: "100 hours",
        business: "Unlimited",
      },
      {
        name: "AI Notes Extracted",
        description: "Structured summaries, takeaways, and searchable records",
        free: "Up to 100",
        pro: "Unlimited",
        business: "Unlimited",
      },
      {
        name: "Task & Action Extraction",
        description: "Commitments automatically parsed with priority and status",
        free: "Up to 100",
        pro: "Unlimited",
        business: "Unlimited",
      },
    ],
  },
  {
    category: "Intelligence & Planning",
    items: [
      {
        name: "Daily Briefing",
        description: "Morning overview of focus time, top priorities, and scheduled calls",
        free: false,
        pro: true,
        business: true,
      },
      {
        name: "Goal Monitor",
        description: "Track outcomes, milestones, and space momentum over time",
        free: false,
        pro: true,
        business: true,
      },
      {
        name: "Ask KukuNotes Chat",
        description: "Query past meetings and spaces with contextual AI retrieval",
        free: "Standard",
        pro: "Priority",
        business: "Instant",
      },
      {
        name: "Confidence & Evidence",
        description: "Source timestamps and exact transcript verification for notes",
        free: "Basic",
        pro: true,
        business: true,
      },
    ],
  },
  {
    category: "Languages & Regional Support",
    items: [
      {
        name: "Core Languages",
        description: "High-accuracy listening, transcription, and note generation in English & Hindi",
        free: true,
        pro: true,
        business: true,
      },
      {
        name: "11 Indian Languages Pack",
        description: "Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia",
        free: false,
        pro: false,
        business: true,
      },
      {
        name: "Cross-Language Translation",
        description: "Listen in native regional languages and produce clear English notes",
        free: false,
        pro: "Hindi/Eng",
        business: "All 11 languages",
      },
    ],
  },
  {
    category: "Team & Security",
    items: [
      {
        name: "Team Workspaces",
        description: "Collaborative project spaces with shared context across colleagues",
        free: false,
        pro: false,
        business: true,
      },
      {
        name: "Selective Space Sharing",
        description: "Export or share only the specific tasks and notes you approve",
        free: "Basic",
        pro: true,
        business: true,
      },
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
    a: "Yes. You can switch between Free, Pro, and Business anytime from inside the KukuNotes app or website. If you downgrade, your existing spaces, notes, and recordings always remain safe with you.",
  },
  {
    q: "How does quarterly billing work?",
    a: "Quarterly billing gives you 3 months of access at a substantial discount. Pro is ₹699 for 3 months (saving ₹198 compared to paying monthly), and Business is ₹1,799 for 3 months (saving ₹298). You can choose monthly or quarterly based on your preference.",
  },
  {
    q: "Which languages are included in the Business plan?",
    a: "Business unlocks 11 Indian languages: English, Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, and Odia. KukuNotes listens natively in these languages and produces organized summaries and action tasks.",
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
    q: "What is a KukuNotes Space and how do limits apply?",
    a: "A space is a dedicated container for a specific project, client, meeting series, or life area. On the Free plan you can create up to 5 spaces; on Pro and Business, you can create unlimited spaces.",
  },
];
