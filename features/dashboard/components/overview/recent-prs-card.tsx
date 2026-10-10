"use client";

import React from "react";
import Link from "next/link";
import {
  GitPullRequest,
  CheckCircle,
  Clock,
  ArrowRight,
  GitCommit,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface PullRequestItem {
  id: string;
  repoFullName: string;
  prNumber: number;
  title: string;
  authorLogin: string | null;
  baseBranch: string;
  status: string;
  reviewedAt: Date | null;
  createdAt: Date;
}

interface RecentPrsCardProps {
  recentPrs: PullRequestItem[];
  isConnected: boolean;
}

function StatusBadge({ status }: { status: string }) {
  if (status === "reviewed") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <CheckCircle className="size-3" weight="bold" />
        <span>Reviewed</span>
      </span>
    );
  }

  if (status === "processing") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
        <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>Reviewing…</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary text-muted-foreground border border-border">
      <Clock className="size-3" weight="bold" />
      <span>Pending</span>
    </span>
  );
}

export function RecentPrsCard({ recentPrs, isConnected }: RecentPrsCardProps) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card/90 p-5 sm:p-6 backdrop-blur-md shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-secondary text-[#D99A64]">
            <GitPullRequest className="size-4 text-[#D99A64]" weight="bold" />
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-foreground">
              Recent Pull Requests
            </h2>
            <p className="text-[11px] text-muted-foreground">
              Automated reviews on your connected repositories
            </p>
          </div>
        </div>

        <Button
          asChild
          variant="ghost"
          size="sm"
          className="h-7 text-xs text-muted-foreground hover:text-foreground"
        >
          <Link
            href={DASHBOARD_ROUTES.pullRequest}
            className="flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="size-3" />
          </Link>
        </Button>
      </div>

      {/* Content */}
      <div className="py-2">
        {recentPrs.length > 0 ? (
          <div className="divide-y divide-border/50">
            {recentPrs.map((pr) => (
              <div
                key={pr.id}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-secondary/20 px-2 rounded-lg transition-colors group"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={pr.status} />
                    <span className="text-xs font-mono font-medium text-muted-foreground">
                      {pr.repoFullName} #{pr.prNumber}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-[#D99A64] transition-colors">
                    {pr.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span>by @{pr.authorLogin || "unknown"}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-[10px]">
                      <GitCommit className="size-3" />
                      base: {pr.baseBranch}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-center shrink-0">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs rounded-lg hover:border-[#D99A64]/40"
                  >
                    <Link href={DASHBOARD_ROUTES.pullRequest}>
                      Review Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center px-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D99A64]/10 border border-[#D99A64]/20 text-[#D99A64] mb-3 shadow-xs">
              <GitPullRequest className="size-6 text-[#D99A64]" weight="bold" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              No pull requests reviewed yet
            </h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-sm leading-relaxed">
              {isConnected
                ? "Open or synchronize a Pull Request on any connected GitHub repository. revu will automatically trigger and post an in-depth code review."
                : "Install the GitHub App to allow revu to detect and review pull requests on your repositories."}
            </p>
            <Button
              asChild
              size="sm"
              className="mt-4 h-8 px-4 text-xs rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 shadow-xs"
            >
              <Link
                href={
                  isConnected
                    ? DASHBOARD_ROUTES.repos
                    : DASHBOARD_ROUTES.github
                }
              >
                {isConnected ? "Check Repositories" : "Connect GitHub App"}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

