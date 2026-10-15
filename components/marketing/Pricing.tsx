"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { HiCheck, HiArrowUpRight } from "react-icons/hi2";
import {
  billingLabels,
  formatPlanAmount,
  formatPlanLimit,
  parsePlanCatalog,
  planAmount,
  planPresentation,
  planWorkspaceUrl,
  type BillingCycle,
  type PricingPlan,
} from "@/lib/pricing-data";

type PricingProps = {
  compact?: boolean;
  showComparison?: boolean;
  // undefined loads in the browser; null displays a failed server request.
  initialPlans?: PricingPlan[] | null;
};

export function Pricing({
  compact = false,
  showComparison = false,
  initialPlans,
}: PricingProps) {
  const PlanHeading = compact ? "h3" : "h2";
  const billingId = useId();
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [plans, setPlans] = useState<PricingPlan[]>(initialPlans ?? []);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    initialPlans === undefined ? "loading" : initialPlans === null ? "error" : "ready",
  );
  const [requestKey, setRequestKey] = useState(0);

  useEffect(() => {
    if (initialPlans !== undefined && requestKey === 0) return;
    const controller = new AbortController();
    async function loadPlans() {
      try {
        const response = await fetch("/api/plans", {
          cache: "no-store",
          signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15_000)]),
        });
        if (!response.ok) throw new Error("Unable to load plans.");
        const catalog = parsePlanCatalog(await response.json());
        if (!controller.signal.aborted) {
          setPlans(catalog);
          setStatus("ready");
        }
      } catch {
        if (!controller.signal.aborted) setStatus("error");
      }
    }
    void loadPlans();
    return () => controller.abort();
  }, [initialPlans, requestKey]);

  return (
    <div className="pricing-content">
      {!compact && (
        <>
          <fieldset className="billing-toggle" disabled={status !== "ready"}>
            <legend className="sr-only">Choose a billing interval</legend>
            {(["monthly", "yearly"] as const).map((cycle) => (
              <label className={billing === cycle ? "is-active" : ""} key={cycle}>
                <input
                  type="radio"
                  name={billingId}
                  value={cycle}
                  checked={billing === cycle}
                  onChange={() => setBilling(cycle)}
                />
                {billingLabels[cycle]}
              </label>
            ))}
          </fieldset>
          <p className="billing-context" role="status">
            Viewing {billing} billing · {billing === "yearly" ? "Monthly equivalent, billed annually" : "Prices are billed monthly"}
          </p>
        </>
      )}
      {status === "loading" && (
        <div className="pricing-loading" role="status" aria-live="polite">
          <p>Loading current plans…</p>
          <div className="pricing-grid" aria-hidden="true">
            {["free", "pro", "business"].map((code) => (
              <div className="pricing-card pricing-skeleton" key={code}>
                <div /><div /><div />
              </div>
            ))}
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="pricing-error">
          <p role="alert">Plan details are temporarily unavailable. Please try again.</p>
          <div className="pricing-error-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setStatus("loading");
                setRequestKey((key) => key + 1);
              }}
            >
              Try again
            </button>
            <a className="button button-secondary" href={planWorkspaceUrl}>
              View plans in your workspace <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
      {status === "ready" && (
        <>
          <div className="pricing-grid">
            {plans.map((plan) => {
              const presentation = planPresentation[plan.code];
              const amount = planAmount(plan, billing);
              const forever = plan.interval === "forever";
              const monthlyAmount = amount !== null && !forever && billing === "yearly"
                ? amount / 12
                : amount;
              const ctaLabel = amount === null ? "View available plans" : presentation.ctaLabel;
              return (
                <article
                  key={plan.code}
                  className={`pricing-card ${plan.code === "pro" ? "pricing-featured" : ""}`}
                >
                  <div className="pricing-card-top">
                    <p className="eyebrow">{plan.name}</p>
                    {plan.code === "pro" && <span className="plan-badge">For your everyday</span>}
                  </div>
                  <PlanHeading>{presentation.tagline}</PlanHeading>
                  <p>{plan.description}</p>
                  <div className="price-display">
                    <div className="price-amount">
                      <strong className={monthlyAmount === null ? "price-neutral" : undefined}>
                        {monthlyAmount === null ? "Unavailable" : formatPlanAmount(monthlyAmount, plan.currency)}
                      </strong>
                      {!forever && monthlyAmount !== null && (
                        <span className="price-cadence">/month</span>
                      )}
                    </div>
                    <span className="price-billing">
                      {forever ? "Free forever" : amount === null
                        ? `${billingLabels[billing]} billing is not available`
                        : billing === "yearly"
                          ? `${formatPlanAmount(amount, plan.currency)} billed annually`
                          : "Billed monthly"}
                    </span>
                  </div>
                  <a
                    className={`button ${plan.code === "pro" ? "button-primary" : "button-secondary"}`}
                    href={planWorkspaceUrl}
                    aria-label={`${ctaLabel}${!compact && !forever ? ` — explore ${billing} billing` : ""}`}
                  >
                    {ctaLabel}
                    <HiArrowUpRight aria-hidden="true" />
                  </a>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={`${index}-${feature}`}>
                        <HiCheck aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="pricing-note">
            Prices, features, and allowances reflect the current plan catalog.
            Review and confirm your subscription in your workspace.
          </p>
          {showComparison && <PlanComparison plans={plans} billing={billing} />}
        </>
      )}
    </div>
  );
}

function PlanComparison({ plans, billing }: { plans: PricingPlan[]; billing: BillingCycle }) {
  const rows: { name: string; value: (plan: PricingPlan) => string }[] = [
    {
      name: `${billingLabels[billing]} price`,
      value: (plan) => {
        const amount = planAmount(plan, billing);
        if (amount === null) return "Unavailable";
        const cadence = plan.interval === "forever" ? "forever" : billing === "yearly" ? "/ year" : "/ month";
        return `${formatPlanAmount(amount, plan.currency)} ${cadence}`;
      },
    },
    { name: "Notes recording", value: (plan) => formatPlanLimit(plan.limits.notesRecordingHours, "hours") },
    { name: "Meeting recording", value: (plan) => formatPlanLimit(plan.limits.meetingRecordingHours, "hours") },
    { name: "Mindmaps", value: (plan) => formatPlanLimit(plan.limits.mindmaps) },
    { name: "Documents", value: (plan) => formatPlanLimit(plan.limits.documents) },
    { name: "Goals", value: (plan) => formatPlanLimit(plan.limits.goals) },
    {
      name: "Marketplace",
      value: (plan) => ({ none: "Browse only", limited: "Limited access", full: "Full access" })[plan.limits.marketplaceAccess],
    },
    {
      name: "Included languages",
      value: (plan) => plan.languages.length ? `${plan.languages.length}: ${plan.languages.join(", ")}` : "No languages listed",
    },
  ];
  return (
    <section className="section comparison-section" aria-labelledby="comparison-title">
      <div className="section-heading">
        <p className="eyebrow">Choose with clarity</p>
        <h2 id="comparison-title">Your plan, on your terms.</h2>
        <p>Compare the current features and allowances for each plan.</p>
      </div>
      <div className="table-scroll" role="region" aria-label="Plan comparison, scroll horizontally on small screens" tabIndex={0}>
        <table>
          <caption className="sr-only">Current KukuNotes plan prices, features, and allowances</caption>
          <thead>
            <tr>
              <th scope="col">Plan details</th>
              {plans.map((plan) => <th scope="col" key={plan.code}>{plan.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row">{row.name}</th>
                {plans.map((plan) => <td key={plan.code}>{row.value(plan)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparison-help">
        Need help choosing? <Link href="/contact">Talk to the KukuNotes team →</Link>
      </p>
    </section>
  );
}
