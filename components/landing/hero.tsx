"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { AmbientLines } from "./ambient-lines";
import {
  GithubLogo,
  ArrowRight,
  Sparkle,
  Lightning,
  Brain,
  LockSimple,
} from "@phosphor-icons/react";

export function LandingHero() {
  const { data: session } = authClient.useSession();

  return (
    <section className="relative pt-14 pb-14 sm:pt-20 sm:pb-20 text-center overflow-hidden">
      {/* Flowing glowing amber lines background matching reference */}
      <AmbientLines />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10 animate-fade-in-up">
        {/* Top badge pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs text-muted-foreground shadow-xs mb-7 backdrop-blur-xs">
          <Sparkle className="size-3.5 text-[#D99A64]" weight="fill" />
          <span className="text-foreground/90 font-medium">
            Context-Aware AI Code Reviewer
          </span>
          <span className="text-border">&bull;</span>
          <span>GitHub Native</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.14]">
          Intelligent PR reviews <br />
          with{" "}
          <span className="text-[#D99A64] font-serif italic font-normal">
            full codebase
          </span>{" "}
          context
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <strong className="text-foreground font-semibold">revu</strong>{" "}
          understands your entire repository to catch logic bugs, security
          vulnerabilities, and subtle regressions directly in your pull requests.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-11 px-6 bg-[#D99A64] text-[#191A19] hover:bg-[#c88d59] font-semibold text-sm rounded-lg shadow-[0_0_25px_-3px_rgba(217,154,100,0.45)] hover:shadow-[0_0_35px_-2px_rgba(217,154,100,0.65)] transition-all hover:translate-y-[-1px]"
          >
            <Link
              href={session?.user ? "/dashboard" : "/sign-in"}
              className="flex items-center justify-center gap-2"
            >
              <GithubLogo className="size-4.5" weight="bold" />
              <span>
                {session?.user ? "Go to Dashboard" : "Connect with GitHub"}
              </span>
              <ArrowRight className="size-3.5" weight="bold" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-11 px-5 border-border bg-card/60 hover:bg-card text-foreground font-medium text-sm rounded-lg transition-colors"
          >
            <a href="#preview" className="flex items-center justify-center gap-2">
              <span>View Sample Review</span>
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Lightning className="size-3.5 text-[#D99A64]" weight="fill" />
            Sub-30s reviews
          </span>
          <span className="text-border">&bull;</span>
          <span className="inline-flex items-center gap-1.5">
            <Brain className="size-3.5 text-[#D99A64]" weight="fill" />
            Pinecone vector RAG
          </span>
          <span className="text-border">&bull;</span>
          <span className="inline-flex items-center gap-1.5">
            <LockSimple className="size-3.5 text-[#D99A64]" weight="fill" />
            Zero private code retention
          </span>
        </div>
      </div>
    </section>
  );
}
