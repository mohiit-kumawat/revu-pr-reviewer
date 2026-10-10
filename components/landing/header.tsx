"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserMenuWithSession } from "@/features/auth/components/user-menu";
import { GitBranch, ArrowRight } from "@phosphor-icons/react";

export function LandingHeader() {
  const { data: session } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Left: Brand Logo (Scrolls to top) */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-hidden"
          aria-label="Scroll to top"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-card border border-border text-[#D99A64] shadow-xs group-hover:border-[#D99A64]/60 group-hover:shadow-[0_0_15px_-3px_rgba(217,154,100,0.3)] transition-all">
            <GitBranch className="size-4 text-[#D99A64]" weight="bold" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-[#D99A64] transition-colors">
            revu
          </span>
        </button>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-foreground/75">
          <a href="#why-revu" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#preview" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="https://github.com/apps/revu-pr-reviewer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/apps/revu-pr-reviewer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub App
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          {session?.user ? (
            <div className="flex items-center gap-2.5">
              <Button
                asChild
                size="sm"
                className="h-8.5 px-3.5 bg-[#D99A64] text-[#191A19] hover:bg-[#c88d59] font-semibold text-xs rounded-lg shadow-xs"
              >
                <Link href="/dashboard" className="flex items-center gap-1.5">
                  <span>Dashboard</span>
                  <ArrowRight className="size-3" weight="bold" />
                </Link>
              </Button>
              <UserMenuWithSession variant="compact" />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-8.5 px-3 text-xs text-foreground/80 hover:text-foreground"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="h-8.5 px-3.5 bg-[#D99A64] text-[#191A19] hover:bg-[#c88d59] font-semibold text-xs rounded-lg shadow-xs"
              >
                <Link href="/sign-in">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
