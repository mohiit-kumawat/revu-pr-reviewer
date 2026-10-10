"use client";

import React from "react";
import {
  GitBranch,
  GithubLogo,
  XLogo,
  LinkedinLogo,
  ArrowUp,
} from "@phosphor-icons/react";

export function LandingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/70 bg-background transition-colors py-4 sm:py-5">
      {/* Subtle top amber glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D99A64]/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand that smoothly scrolls to top */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer focus:outline-hidden"
            title="Scroll to top"
            aria-label="revu, scroll to top"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-card border border-[#D99A64]/30 text-[#D99A64] shadow-[0_0_10px_-2px_rgba(217,154,100,0.3)] group-hover:border-[#D99A64]/60 group-hover:shadow-[0_0_15px_rgba(217,154,100,0.4)] transition-all">
              <GitBranch className="size-3.5 text-[#D99A64]" weight="bold" />
            </div>
            <span className="font-bold text-base tracking-tight text-foreground group-hover:text-[#D99A64] transition-colors">
              revu
            </span>
          </button>

          <span className="text-border">&bull;</span>
          <span className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Center: Essential Navigation Links */}
        <nav className="flex items-center gap-5 text-xs text-muted-foreground font-medium">
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

        {/* Right: Creative Interactive Profile Capsule & Back to top indicator */}
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full border border-border/80 bg-card shadow-xs">
            {/* Pulsing golden dot */}
            <span className="relative flex size-2 ml-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D99A64] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#D99A64]" />
            </span>
            <span className="text-[11px] font-medium text-muted-foreground pr-1">
              Connect
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/mohiit-kumawat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub: mohiit-kumawat"
                className="flex size-6 items-center justify-center rounded-full bg-secondary hover:bg-[#D99A64]/20 hover:text-[#D99A64] text-muted-foreground transition-all"
              >
                <GithubLogo className="size-3.5" weight="fill" />
              </a>

              <a
                href="https://x.com/mohiitkumawat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                title="X: @mohiitkumawat"
                className="flex size-6 items-center justify-center rounded-full bg-secondary hover:bg-[#D99A64]/20 hover:text-[#D99A64] text-muted-foreground transition-all"
              >
                <XLogo className="size-3.5" weight="bold" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohiit-kumawat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn: mohiit-kumawat"
                className="flex size-6 items-center justify-center rounded-full bg-secondary hover:bg-[#D99A64]/20 hover:text-[#D99A64] text-muted-foreground transition-all"
              >
                <LinkedinLogo className="size-3.5" weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick back to top arrow button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="flex size-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-[#D99A64]/40 transition-colors"
          >
            <ArrowUp className="size-3.5" weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
