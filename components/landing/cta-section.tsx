"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { AmbientLines } from "./ambient-lines";
import { GithubLogo, ArrowRight } from "@phosphor-icons/react";

export function CtaSection() {
  const { data: session } = authClient.useSession();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 text-center border-t border-border/50">
      {/* Ambient background curves & central radiant glow */}
      <AmbientLines subtle />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(217,154,100,0.14)_0%,rgba(184,110,67,0.05)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs text-muted-foreground shadow-xs mb-6 backdrop-blur-xs">
          READY TO IMPROVE YOUR CODE REVIEWS?
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.16]">
          Connect your GitHub <br />
          and get started{" "}
          <span className="text-[#D99A64] font-serif italic font-normal">
            in seconds.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Join developers who ship safer, cleaner, and better code with{" "}
          <strong className="text-foreground font-semibold">revu</strong>.
        </p>

        {/* Buttons */}
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
      </div>
    </section>
  );
}

