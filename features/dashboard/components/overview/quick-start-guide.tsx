"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  ArrowRight,
} from "@phosphor-icons/react";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface QuickStartGuideProps {
  hasInstallation: boolean;
  hasRepos: boolean;
  hasPrs: boolean;
}

export function QuickStartGuide({
  hasInstallation,
  hasRepos,
  hasPrs,
}: QuickStartGuideProps) {
  const steps = [
    {
      num: NumberCircleOne,
      title: "Connect GitHub App",
      desc: "Authorize the revu app to install on your personal or organization account.",
      done: hasInstallation,
      href: DASHBOARD_ROUTES.github,
      action: "Manage App",
    },
    {
      num: NumberCircleTwo,
      title: "Select Repositories",
      desc: "Choose which repositories to index into the Pinecone semantic code graph.",
      done: hasRepos,
      href: DASHBOARD_ROUTES.repos,
      action: "Configure Repos",
    },
    {
      num: NumberCircleThree,
      title: "Open a Pull Request",
      desc: "Open or synchronize a PR on GitHub. revu will post an intelligent, context-aware code review.",
      done: hasPrs,
      href: DASHBOARD_ROUTES.pullRequest,
      action: "View Reviews",
    },
  ];

  return (
    <div className="rounded-2xl border border-border/80 bg-card/90 p-5 sm:p-6 backdrop-blur-md shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            Quick Start Checklist
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Everything you need to automate your code reviews
          </p>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#D99A64]/10 text-[#D99A64] border border-[#D99A64]/20">
          {[hasInstallation, hasRepos, hasPrs].filter(Boolean).length}/3 Completed
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-4">
        {steps.map((step, index) => {
          const Icon = step.num;
          return (
            <div
              key={index}
              className={`p-3.5 rounded-xl border transition-all ${
                step.done
                  ? "bg-secondary/40 border-border/60"
                  : "bg-secondary/20 border-border/40 hover:border-[#D99A64]/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  {step.done ? (
                    <CheckCircle
                      className="size-4 text-emerald-500"
                      weight="bold"
                    />
                  ) : (
                    <Icon className="size-4 text-[#D99A64]" weight="bold" />
                  )}
                  <span
                    className={`text-xs font-semibold ${
                      step.done ? "text-foreground line-through opacity-80" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
                {step.desc}
              </p>

              <Link
                href={step.href}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#D99A64] hover:underline"
              >
                <span>{step.action}</span>
                <ArrowRight className="size-3" weight="bold" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

