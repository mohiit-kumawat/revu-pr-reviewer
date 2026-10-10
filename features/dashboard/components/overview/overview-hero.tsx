"use client";

import React from "react";
import Link from "next/link";
import { GitPullRequest, GitBranch, Sparkle, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface OverviewHeroProps {
  userName?: string | null;
  accountLogin?: string | null;
  isConnected: boolean;
}

export function OverviewHero({
  userName,
  accountLogin,
  isConnected,
}: OverviewHeroProps) {
  const displayName = userName?.split(" ")[0] || accountLogin || "Developer";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-6 sm:p-8 backdrop-blur-md shadow-xs before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#D99A64]/60 before:to-transparent">
      {/* Background Subtle Amber Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-3xl opacity-20 dark:opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(217,154,100,0.8) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Greeting & Description */}
        <div className="space-y-2 max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-[#D99A64]/10 text-[#D99A64] border border-[#D99A64]/30">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D99A64] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#D99A64]" />
            </span>
            <span>AI Review Engine Active</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-[11px] text-muted-foreground">GitHub Native</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Welcome back, <span className="text-[#D99A64]">{displayName}</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {isConnected
              ? `Connected to GitHub as @${accountLogin}. revu is actively analyzing pull requests and generating context-aware reviews in real time.`
              : "Connect your GitHub account to enable automated pull request analysis with full codebase context."}
          </p>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="h-9.5 px-4 rounded-xl bg-foreground text-background font-semibold text-xs hover:bg-foreground/90 shadow-xs hover:shadow-[0_0_20px_-3px_rgba(217,154,100,0.4)] transition-all cursor-pointer"
          >
            <Link
              href={
                isConnected
                  ? DASHBOARD_ROUTES.pullRequest
                  : DASHBOARD_ROUTES.github
              }
              className="flex items-center gap-2"
            >
              {isConnected ? (
                <>
                  <GitPullRequest className="size-4" weight="bold" />
                  <span>View Pull Requests</span>
                </>
              ) : (
                <>
                  <Sparkle className="size-4 text-[#D99A64]" weight="bold" />
                  <span>Connect GitHub App</span>
                </>
              )}
              <ArrowRight className="size-3.5" weight="bold" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-9.5 px-3.5 rounded-xl text-xs font-medium border-border/80 hover:border-[#D99A64]/50 hover:bg-secondary/60 transition-all cursor-pointer"
          >
            <Link
              href={DASHBOARD_ROUTES.repos}
              className="flex items-center gap-2"
            >
              <GitBranch className="size-4 text-[#D99A64]" weight="bold" />
              <span>Repositories</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

