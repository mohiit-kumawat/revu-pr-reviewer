"use client";

import React from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { GithubSignInForm } from "./github-sign-in-form";

interface AuthCardProps {
  callbackUrl?: string;
}

export function AuthCard({ callbackUrl }: AuthCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative Outer Amber Aura */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#D99A64]/20 via-[#D99A64]/5 to-transparent blur-xl -z-10 opacity-70"
        aria-hidden="true"
      />

      {/* Main Glass Card */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#D99A64]/60 before:to-transparent">
        {/* Header Section with Brand Logo */}
        <div className="flex flex-col items-center text-center mb-6">
          <BrandLogo size="lg" layout="vertical" glow />

          <h1 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Welcome to revu
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
            Sign in with GitHub to start context-aware AI reviews on your pull requests.
          </p>
        </div>

        {/* GitHub OAuth Form */}
        <div className="space-y-4">
          <GithubSignInForm callbackUrl={callbackUrl} />

          <p className="text-[11px] text-center text-muted-foreground leading-normal px-2">
            By continuing, you connect your GitHub account to revu. We only
            request standard permissions to review PRs on your repositories.
          </p>
        </div>

        {/* Security & Developer Trust Badges */}
        <div className="mt-6">
        </div>
      </div>
    </div>
  );
}

