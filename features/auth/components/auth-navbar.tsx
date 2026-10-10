"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function AuthNavbar() {
  return (
    <header className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg border border-border/60 bg-card/60 backdrop-blur-md hover:border-[#D99A64]/50 hover:bg-card transition-all group"
      >
        <ArrowLeft
          className="size-3.5 text-muted-foreground group-hover:text-[#D99A64] group-hover:-translate-x-0.5 transition-all"
          weight="bold"
        />
        <span>Back to revu</span>
      </Link>

      {/* Theme Mode Toggle */}
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </header>
  );
}

