import { siteConfig } from "./site";

export type BillingCycle = "monthly" | "yearly";
export type PlanCode = "free" | "pro" | "business";
export type PlanLimits = {
  notesRecordingHours: number;
  meetingRecordingHours: number;
  mindmaps: number;
  documents: number;
  goals: number;
  marketplaceAccess: "none" | "limited" | "full";
};
export type PricingPlan = {
  code: PlanCode;
  name: string;
  description: string;
  /** Backend amounts are in paise (100 paise = 1 INR). */
  amount: number;
  yearlyAmount: number;
  currency: string;
  interval: "forever" | BillingCycle;
  limits: PlanLimits;
  languages: string[];
  features: string[];
  isActive: boolean;
  sortOrder: number;
};

export const billingLabels = { monthly: "Monthly", yearly: "Yearly" } as const;

// Prices, descriptions, features, and allowances come from the Node API.
export const planPresentation = {
  free: { tagline: "Find your flow.", ctaLabel: "Start for free" },
  pro: { tagline: "Keep your momentum.", ctaLabel: "Choose Pro" },
  business: { tagline: "Make space for more.", ctaLabel: "Choose Business" },
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isAmount(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}

function isLimit(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && (value === -1 || value >= 0);
}

/** Validate the backend envelope before displaying any billing information. */
export function parsePlanCatalog(payload: unknown): PricingPlan[] {
  if (
    !isRecord(payload) || payload.success !== true ||
    !isRecord(payload.data) || !Array.isArray(payload.data.plans)
  ) {
    throw new Error("Invalid plan catalog response.");
  }

  const codes = new Set<string>();
  const plans: PricingPlan[] = [];
  for (const entry of payload.data.plans) {
    if (isRecord(entry) && entry.isActive === false) continue;
    if (!isRecord(entry) || !isRecord(entry.limits)) {
      throw new Error("Invalid plan details.");
    }
    const { code, name, description, amount, yearlyAmount, currency, interval, limits,
      languages, features, isActive, sortOrder } = entry;
    if (
      (code !== "free" && code !== "pro" && code !== "business") ||
      typeof name !== "string" || !name.trim() || typeof description !== "string" ||
      !isAmount(amount) || !isAmount(yearlyAmount) ||
      typeof currency !== "string" || !/^[A-Z]{3}$/.test(currency) ||
      (interval !== "forever" && interval !== "monthly" && interval !== "yearly") ||
      !isLimit(limits.notesRecordingHours) || !isLimit(limits.meetingRecordingHours) ||
      !isLimit(limits.mindmaps) || !isLimit(limits.documents) || !isLimit(limits.goals) ||
      (limits.marketplaceAccess !== "none" && limits.marketplaceAccess !== "limited" && limits.marketplaceAccess !== "full") ||
      !isStringList(languages) || !isStringList(features) || isActive !== true ||
      typeof sortOrder !== "number" || !Number.isFinite(sortOrder) || codes.has(code)
    ) {
      throw new Error("Invalid plan details.");
    }
    codes.add(code);
    plans.push({
      code, name, description, amount, yearlyAmount, currency, interval,
      limits: {
        notesRecordingHours: limits.notesRecordingHours,
        meetingRecordingHours: limits.meetingRecordingHours,
        mindmaps: limits.mindmaps,
        documents: limits.documents,
        goals: limits.goals,
        marketplaceAccess: limits.marketplaceAccess,
      },
      languages, features, isActive, sortOrder,
    });
  }
  if (!plans.length) throw new Error("No active plans are available.");
  return plans.sort((a, b) => a.sortOrder - b.sortOrder);
}

export function formatPlanAmount(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount / 100);
}

export function planAmount(plan: PricingPlan, billing: BillingCycle): number | null {
  if (plan.interval === "forever") return plan.amount;
  const amount = billing === "yearly" ? plan.yearlyAmount : plan.amount;
  // Zero on a paid plan means this billing cycle is unavailable.
  return amount > 0 ? amount : null;
}

export function formatPlanLimit(value: number, unit = "") {
  if (value === -1) return "Unlimited";
  return `${new Intl.NumberFormat("en-IN").format(value)}${unit ? ` ${unit}` : ""}`;
}

export const planWorkspaceUrl = siteConfig.platformUrl;

export const pricingFaqs = [
  {
    q: "Can I start for free?",
    a: "Yes. Open the KukuNotes workspace to get started with the Free plan. The plan cards and comparison above show the current features and recording allowances.",
  },
  {
    q: "Where can I see the current Pro and Business prices?",
    a: "The prices above come from the current KukuNotes plan catalog. Switch between Monthly and Yearly to compare billing options, then open your workspace to choose a plan.",
  },
  {
    q: "How is yearly pricing shown?",
    a: "When Yearly is selected, the main price shows the monthly equivalent. The total billed annually appears underneath. Yearly billing charges that full annual amount once a year.",
  },
  {
    q: "Does selecting monthly or yearly start a subscription?",
    a: "No. The selector only changes the prices you are viewing. Review and confirm your subscription in your workspace before purchasing.",
  },
  {
    q: "How do I manage an existing subscription?",
    a: "Sign in to the account you use for KukuNotes and open your plan settings. For billing questions or help finding your subscription, contact the team using the contact page.",
  },
  {
    q: "Which languages are included?",
    a: "The comparison above lists the languages included with each plan, using the current plan catalog. Check your workspace for the language options available in your app.",
  },
];
