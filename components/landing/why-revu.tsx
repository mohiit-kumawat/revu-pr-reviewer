"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ShieldWarning } from "@phosphor-icons/react";

export function WhyRevu() {
  return (
    <section id="why-revu" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#D99A64]">
              WHY REVU
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.18]">
              Go beyond the diff. <br />
              <span className="text-[#D99A64] font-serif italic font-normal">
                See the bigger picture.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A small change can impact multiple parts of your codebase.{" "}
              <strong className="text-foreground font-semibold">revu</strong>{" "}
              analyzes the full context, traces relevant code paths, and gives
              you clear, actionable feedback.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="h-11 px-6 bg-[#D99A64] text-[#191A19] hover:bg-[#c88d59] font-semibold text-sm rounded-lg shadow-sm"
              >
                <a href="#preview" className="flex items-center gap-2">
                  <span>See how it works</span>
                  <ArrowRight className="size-4" weight="bold" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Codebase Dependency Tree Graph */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center p-4 sm:p-8">
            {/* Atmospheric Amber Glow behind graph */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,154,100,0.2)_0%,rgba(184,110,67,0.06)_50%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

            {/* Top Root Node: Changed file with glowing border */}
            <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-[#D99A64]/40 bg-card p-3.5 shadow-[0_0_25px_-5px_rgba(217,154,100,0.3)] transition-all hover:border-[#D99A64]/70 hover:shadow-[0_0_35px_-3px_rgba(217,154,100,0.4)]">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#D99A64]/15 text-[#D99A64] shadow-[0_0_12px_rgba(217,154,100,0.3)]">
                  <FileText className="size-5" weight="fill" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-foreground">
                    auth.service.ts
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Changed file
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting SVG Curves from root to 3 children with glowing filter */}
            <div className="w-full max-w-[520px] h-16 relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 520 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="branchGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="treeGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFE0B8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#D99A64" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#B86E43" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Branch to left */}
                <path
                  d="M260 0 C 260 35, 90 25, 90 64"
                  stroke="url(#treeGlow)"
                  strokeWidth="2"
                  filter="url(#branchGlow)"
                  strokeDasharray="4 4"
                />
                {/* Branch to center */}
                <path
                  d="M260 0 C 260 30, 260 30, 260 64"
                  stroke="url(#treeGlow)"
                  strokeWidth="2"
                  filter="url(#branchGlow)"
                />
                {/* Branch to right */}
                <path
                  d="M260 0 C 260 35, 430 25, 430 64"
                  stroke="url(#treeGlow)"
                  strokeWidth="2"
                  filter="url(#branchGlow)"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* 3 Child Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-[540px] relative z-10">
              {/* Child 1 */}
              <div className="rounded-lg border border-border bg-card p-3 shadow-md hover:border-[#D99A64]/50 hover:shadow-[0_0_15px_-3px_rgba(217,154,100,0.25)] transition-all">
                <div className="flex items-center gap-2.5">
                  <FileText className="size-4 text-[#D99A64] shrink-0" />
                  <span className="font-mono text-xs text-foreground/90 truncate">
                    api/middleware.ts
                  </span>
                </div>
              </div>

              {/* Child 2 */}
              <div className="rounded-lg border border-border bg-card p-3 shadow-md hover:border-[#D99A64]/50 hover:shadow-[0_0_15px_-3px_rgba(217,154,100,0.25)] transition-all">
                <div className="flex items-center gap-2.5">
                  <FileText className="size-4 text-[#D99A64] shrink-0" />
                  <span className="font-mono text-xs text-foreground/90 truncate">
                    user.controller.ts
                  </span>
                </div>
              </div>

              {/* Child 3 */}
              <div className="rounded-lg border border-border bg-card p-3 shadow-md hover:border-[#D99A64]/50 hover:shadow-[0_0_15px_-3px_rgba(217,154,100,0.25)] transition-all">
                <div className="flex items-center gap-2.5">
                  <FileText className="size-4 text-[#D99A64] shrink-0" />
                  <span className="font-mono text-xs text-foreground/90 truncate">
                    db/queries.ts
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Vertical line with glow to Alert card */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#D99A64] to-[#D99A64]/40 shadow-[0_0_8px_rgba(217,154,100,0.6)]" />

            {/* Bottom Issue Card: Potential authorization issue */}
            <div className="relative z-10 w-full max-w-[340px] rounded-xl border border-[#D99A64]/45 bg-card p-4 shadow-[0_0_30px_-5px_rgba(217,154,100,0.3)] transition-all hover:border-[#D99A64]/70 hover:shadow-[0_0_40px_-3px_rgba(217,154,100,0.4)]">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#D99A64]/20 text-[#D99A64] shadow-[0_0_12px_rgba(217,154,100,0.35)]">
                  <ShieldWarning className="size-5" weight="fill" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">
                    Potential authorization issue
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Found across 3 related files
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

