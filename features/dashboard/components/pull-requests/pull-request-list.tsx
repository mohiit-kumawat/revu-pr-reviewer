"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GitPullRequest,
  CheckCircle,
  Clock,
  GitCommit,
  User,
  CaretDown,
  CaretUp,
  ArrowSquareOut,
  Sparkle,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

export interface PullRequestItem {
  id: string;
  repoFullName: string;
  prNumber: number;
  title: string;
  authorLogin: string | null;
  baseBranch: string;
  status: string;
  reviewComment: string | null;
  reviewedAt: Date | null;
  createdAt: Date;
}

interface PullRequestListProps {
  pullRequests: PullRequestItem[];
  isConnected: boolean;
}

export function PullRequestList({
  pullRequests,
  isConnected,
}: PullRequestListProps) {
  const [filter, setFilter] = useState<"all" | "reviewed" | "pending">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredPrs = pullRequests.filter((pr) => {
    if (filter === "reviewed") return pr.status === "reviewed";
    if (filter === "pending")
      return pr.status === "pending" || pr.status === "processing";
    return true;
  });

  return (
    <div className="p-4 sm:p-6 space-y-4 max-w-6xl mx-auto">
      {/* Top Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary/40 border border-border/50 w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              filter === "all"
                ? "bg-card text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All PRs ({pullRequests.length})
          </button>
          <button
            onClick={() => setFilter("reviewed")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              filter === "reviewed"
                ? "bg-card text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reviewed ({pullRequests.filter((p) => p.status === "reviewed").length})
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              filter === "pending"
                ? "bg-card text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pending / In Progress (
            {
              pullRequests.filter(
                (p) => p.status === "pending" || p.status === "processing"
              ).length
            }
            )
          </button>
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-8 text-xs rounded-xl"
        >
          <Link href={DASHBOARD_ROUTES.repos}>Manage Repositories</Link>
        </Button>
      </div>

      {/* List / Cards */}
      {filteredPrs.length > 0 ? (
        <div className="space-y-3">
          {filteredPrs.map((pr) => {
            const isExpanded = expandedId === pr.id;

            return (
              <div
                key={pr.id}
                className="rounded-xl border border-border/80 bg-card/90 overflow-hidden shadow-xs transition-all hover:border-[#D99A64]/40"
              >
                {/* PR Main Row */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {pr.status === "reviewed" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <CheckCircle className="size-3" weight="bold" />
                          <span>Reviewed</span>
                        </span>
                      ) : pr.status === "processing" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span>Reviewing…</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary text-muted-foreground border border-border">
                          <Clock className="size-3" weight="bold" />
                          <span>Pending</span>
                        </span>
                      )}

                      <span className="font-mono text-xs font-semibold text-muted-foreground">
                        {pr.repoFullName} #{pr.prNumber}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {pr.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1">
                        <User className="size-3" />
                        @{pr.authorLogin || "developer"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <GitCommit className="size-3" />
                        base: {pr.baseBranch}
                      </span>
                      {pr.reviewedAt && (
                        <>
                          <span>•</span>
                          <span>
                            Reviewed{" "}
                            {new Date(pr.reviewedAt).toLocaleDateString()}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {pr.reviewComment ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : pr.id)
                        }
                        className="h-8 text-xs rounded-xl flex items-center gap-1 hover:border-[#D99A64]/50"
                      >
                        <Sparkle className="size-3.5 text-[#D99A64]" weight="bold" />
                        <span>{isExpanded ? "Hide Review" : "Read AI Review"}</span>
                        {isExpanded ? (
                          <CaretUp className="size-3" />
                        ) : (
                          <CaretDown className="size-3" />
                        )}
                      </Button>
                    ) : null}

                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs rounded-xl"
                    >
                      <a
                        href={`https://github.com/${pr.repoFullName}/pull/${pr.prNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ArrowSquareOut className="size-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Expandable Review Output */}
                {isExpanded && pr.reviewComment && (
                  <div className="border-t border-border/60 bg-secondary/20 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#D99A64]">
                      <Sparkle className="size-4" weight="bold" />
                      <span>revu AI Review Analysis</span>
                    </div>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-xs leading-relaxed bg-background/80 p-4 rounded-xl border border-border/60 overflow-x-auto whitespace-pre-wrap font-sans text-foreground/90">
                      {pr.reviewComment}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl border border-dashed border-border p-8 bg-card/40">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D99A64]/10 border border-[#D99A64]/20 text-[#D99A64] mx-auto mb-3 shadow-xs">
            <GitPullRequest className="size-6 text-[#D99A64]" weight="bold" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">
            No pull requests found
          </h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            {isConnected
              ? "Open a pull request on any connected repository to trigger automated review comments from revu."
              : "Install the revu GitHub App to connect your repositories and start receiving instant AI reviews."}
          </p>
          <Button
            asChild
            size="sm"
            className="mt-4 h-8 px-4 text-xs rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 shadow-xs"
          >
            <Link
              href={
                isConnected ? DASHBOARD_ROUTES.repos : DASHBOARD_ROUTES.github
              }
            >
              {isConnected ? "Select Repositories" : "Connect GitHub App"}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

