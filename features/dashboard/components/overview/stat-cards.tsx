"use client";

import React from "react";
import Link from "next/link";
import {
  GitBranch,
  GitPullRequest,
  Lightning,
  ShieldCheck,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface StatCardsProps {
  stats: {
    totalRepos: number;
    totalPrs: number;
    reviewedPrs: number;
    pendingPrs: number;
    syncedChunks: number;
  };
  plan?: string;
}

export function StatCards({ stats, plan = "Pro" }: StatCardsProps) {
  const cards = [
    {
      title: "Connected Repositories",
      value: stats.totalRepos,
      subtext: "Active in workspace",
      icon: GitBranch,
      href: DASHBOARD_ROUTES.repos,
      accent: "text-[#D99A64]",
    },
    {
      title: "Pull Requests Reviewed",
      value: stats.reviewedPrs,
      subtext:
        stats.pendingPrs > 0
          ? `${stats.pendingPrs} pending review`
          : "All caught up",
      icon: GitPullRequest,
      href: DASHBOARD_ROUTES.pullRequest,
      accent: "text-emerald-500 dark:text-emerald-400",
    },
    {
      title: "Context Vector Chunks",
      value:
        stats.syncedChunks > 0
          ? `${stats.syncedChunks.toLocaleString()}`
          : "Ready",
      subtext: "Pinecone semantic RAG",
      icon: Lightning,
      href: DASHBOARD_ROUTES.repos,
      accent: "text-amber-500",
    },
    {
      title: "Reviewer Tier",
      value: `${plan.toUpperCase()}`,
      subtext: "Unlimited AI PR reviews",
      icon: ShieldCheck,
      href: DASHBOARD_ROUTES.settings,
      accent: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <Link
            key={i}
            href={card.href}
            className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/80 p-5 backdrop-blur-xs hover:border-[#D99A64]/50 hover:bg-card transition-all duration-200 shadow-xs hover:shadow-[0_4px_20px_-4px_rgba(217,154,100,0.15)]"
          >
            {/* Top row: Icon and Mini External Link */}
            <div className="flex items-center justify-between mb-3">
              <div
                className={`flex size-9 items-center justify-center rounded-lg bg-secondary/60 border border-border/40 ${card.accent} shadow-xs group-hover:scale-105 transition-transform`}
              >
                <Icon className="size-4.5" weight="bold" />
              </div>
              <ArrowUpRight className="size-3.5 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-[#D99A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            {/* Value & Title */}
            <div className="space-y-1">
              <div className="text-2xl font-bold tracking-tight text-foreground">
                {card.value}
              </div>
              <div className="text-xs font-medium text-muted-foreground">
                {card.title}
              </div>
            </div>

            {/* Subtext */}
            <div className="mt-3 pt-2.5 border-t border-border/40 text-[11px] text-muted-foreground/80 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#D99A64]/60" />
              <span>{card.subtext}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

