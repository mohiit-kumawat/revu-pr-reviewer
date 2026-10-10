"use client";

import React from "react";
import { GithubLogo } from "@phosphor-icons/react";

export function SocialProof() {
  return (
    <section className="py-8 sm:py-12 border-t border-b border-border/50 text-center">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by developers building real products
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-muted-foreground/80">
          {/* GitHub */}
          <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
            <GithubLogo className="size-5" weight="fill" />
            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              GitHub
            </span>
          </div>

          {/* Vercel */}
          <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
            <svg
              className="size-4 fill-current text-foreground/90"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              Vercel
            </span>
          </div>

          {/* Next.js */}
          <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
            <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-background font-black text-[11px]">
              N
            </span>
            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              Next.js
            </span>
          </div>

          {/* TypeScript */}
          <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
            <span className="flex size-5 items-center justify-center rounded bg-blue-600/90 text-white font-bold text-[10px]">
              TS
            </span>
            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              TypeScript
            </span>
          </div>

          {/* Node.js */}
          <div className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default">
            <span className="flex size-5 items-center justify-center rounded bg-emerald-600/90 text-white font-bold text-[10px]">
              JS
            </span>
            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

