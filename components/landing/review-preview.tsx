"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Warning, LockSimple, Lightning, CheckCircle } from "@phosphor-icons/react";

type ReviewCategory = "Security" | "Bug" | "Performance" | "Best Practices";

const CATEGORY_ITEMS: Record<
  ReviewCategory,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    time: string;
    badge: string;
  }
> = {
  Security: {
    title: "Possible SQL injection vulnerability",
    description:
      "User input is directly concatenated into the raw query. Consider using parameterized queries or Prisma ORM client bindings.",
    icon: <LockSimple className="size-4 text-[#D99A64]" weight="fill" />,
    time: "reviewed 2m ago",
    badge: "PR Review",
  },
  Bug: {
    title: "Unhandled null pointer exception",
    description:
      "Optional parameter `session.user.id` may be undefined on anonymous routes. Add early guard check or default fallback.",
    icon: <Warning className="size-4 text-red-400" weight="fill" />,
    time: "reviewed 4m ago",
    badge: "PR Review",
  },
  Performance: {
    title: "N+1 query detected in loop",
    description:
      "Database fetch inside the map iterator causes redundant round-trips. Batch fetch with `$in` array query instead.",
    icon: <Lightning className="size-4 text-amber-400" weight="fill" />,
    time: "reviewed 5m ago",
    badge: "PR Review",
  },
  "Best Practices": {
    title: "Use timing-safe buffer comparison",
    description:
      "Secret HMAC token comparisons must be evaluated in constant time to prevent side-channel timing analysis.",
    icon: <CheckCircle className="size-4 text-emerald-400" weight="fill" />,
    time: "reviewed 8m ago",
    badge: "PR Review",
  },
};

export function ReviewPreview() {
  const [activeTab, setActiveTab] = useState<ReviewCategory>("Security");
  const current = CATEGORY_ITEMS[activeTab];

  return (
    <section id="preview" className="py-20 sm:py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#D99A64]">
              PREVIEW
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.18]">
              What your pull request <br />
              review looks like
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Actionable line-by-line feedback delivered straight to your GitHub
              PR thread.
            </p>
          </div>

          {/* Right Column: Interactive Review Card */}
          <div className="lg:col-span-7 relative">
            {/* Atmospheric amber glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,154,100,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

            <div className="rounded-2xl border border-border/90 bg-card p-5 sm:p-6 shadow-[0_0_50px_-12px_rgba(217,154,100,0.22)] transition-all hover:border-[#D99A64]/50 hover:shadow-[0_0_70px_-10px_rgba(217,154,100,0.32)]">
              {/* Category Pills Header */}
              <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-border/60">
                {(["Security", "Bug", "Performance", "Best Practices"] as ReviewCategory[]).map(
                  (category) => {
                    const isActive = activeTab === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          isActive
                            ? "bg-[#D99A64] text-[#191A19] shadow-[0_0_15px_-2px_rgba(217,154,100,0.45)] font-semibold"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Review Comment Body */}
              <div className="rounded-xl border border-border bg-background p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-6 items-center justify-center rounded-full bg-[#D99A64] text-[#191A19] font-bold text-[11px]">
                      r
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-foreground">
                      revu bot
                    </span>
                    <Badge className="bg-secondary text-muted-foreground border-border text-[10px] px-1.5 py-0 font-normal">
                      {current.badge}
                    </Badge>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    {current.time}
                  </span>
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                    {current.icon}
                    <span>{current.title}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs border-border bg-secondary hover:bg-secondary/80 font-medium"
                  >
                    Suggested Fix
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

