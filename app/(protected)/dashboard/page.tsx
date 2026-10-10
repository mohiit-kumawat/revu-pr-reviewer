import React from "react";
import type { Metadata } from "next";
import { requireAuth } from "@/features/auth/actions";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { getDashboardOverviewData } from "@/features/dashboard/server/get-dashboard-data";
import { OverviewHero } from "@/features/dashboard/components/overview/overview-hero";
import { StatCards } from "@/features/dashboard/components/overview/stat-cards";
import { RecentPrsCard } from "@/features/dashboard/components/overview/recent-prs-card";
import { GithubStatusWidget } from "@/features/dashboard/components/overview/github-status-widget";
import { SyncedReposWidget } from "@/features/dashboard/components/overview/synced-repos-widget";
import { QuickStartGuide } from "@/features/dashboard/components/overview/quick-start-guide";

export const metadata: Metadata = {
  title: "Dashboard Overview · revu",
  description: "Monitor AI pull request reviews, repositories, and codebase vector context.",
};

export default async function DashboardPage() {
  const session = await requireAuth();
  const data = await getDashboardOverviewData(session.user.id);

  const isConnected = !!data.installation?.connected;
  const hasRepos = data.stats.totalRepos > 0;
  const hasPrs = data.stats.totalPrs > 0;

  return (
    <>
      <DashboardHeader
        title="Overview"
        description="Workspace activity, review health, and codebase context."
      >
        {/* Header Right Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-medium bg-secondary/60 border border-border/60">
          <span
            className={`size-1.5 rounded-full ${
              isConnected ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          <span className="text-muted-foreground">
            {isConnected ? `@${data.installation?.accountLogin}` : "GitHub Not Linked"}
          </span>
        </div>
      </DashboardHeader>

      <main className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
        {/* 1. Welcome Hero Banner */}
        <OverviewHero
          userName={session.user.name}
          accountLogin={data.installation?.accountLogin}
          isConnected={isConnected}
        />

        {/* 2. Key Metrics Row (4 KPI Cards) */}
        <StatCards stats={data.stats} plan={data.user?.plan || "Pro"} />

        {/* 3. Main Dashboard Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols): Recent PRs & Quick Start */}
          <div className="lg:col-span-8 space-y-6">
            <RecentPrsCard
              recentPrs={data.recentPrs}
              isConnected={isConnected}
            />

            <QuickStartGuide
              hasInstallation={isConnected}
              hasRepos={hasRepos}
              hasPrs={hasPrs}
            />
          </div>

          {/* Right Column (4 cols): GitHub Status & Codebase Sync Widgets */}
          <div className="lg:col-span-4 space-y-6">
            <GithubStatusWidget installation={data.installation} />
            <SyncedReposWidget syncedRepos={data.syncedRepos} />
          </div>
        </div>
      </main>
    </>
  );
}