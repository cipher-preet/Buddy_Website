import { SiteLayout } from "@/components/marketing/SiteLayout";
import { PageHero, FAQ, FinalCTA } from "@/components/marketing/UI";
import { Pricing } from "@/components/marketing/Pricing";
import { pricingFaqs, type PricingPlan } from "@/lib/pricing-data";
import { getPlans } from "@/lib/plans-api";
import { connection } from "next/server";

export default async function PricingPage() {
  await connection();
  let plans: PricingPlan[] | null = null;
  try {
    plans = await getPlans();
  } catch (error) {
    console.error("Unable to load pricing page plans:", error);
  }
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Plans for your next chapter"
        title={
          <>
            Start with a conversation.
            <br />
            <span className="accent-text">Make room for progress.</span>
          </>
        }
        description="Start free, compare current prices and features, and choose the plan that fits your work."
      />
      <section className="container pricing-section" aria-label="KukuNotes plans">
        <Pricing initialPlans={plans} showComparison />
      </section>
      <FAQ items={pricingFaqs} />
      <FinalCTA />
    </SiteLayout>
  );
}
