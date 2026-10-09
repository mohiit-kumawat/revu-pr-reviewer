import type { SubscriptionPlan } from "@/features/dashboard/lib/types";

export type PlanDetail = {
  label: string;
  features: string[];
};

export const PLAN_DETAILS: Record<SubscriptionPlan, PlanDetail> = {
  free: {
    label: "Free",
    features: [
      "Up to 5 PR reviews per month",
      "Standard review speed",
      "Public & private repository support",
    ],
  },
  pro: {
    label: "Pro",
    features: [
      "Unlimited PR reviews",
      "Fast AI code reviews",
      "Full codebase context (Pinecone sync)",
      "Priority webhook processing",
    ],
  },
};

