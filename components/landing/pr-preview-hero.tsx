"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Terminal,
  Check,
} from "@phosphor-icons/react";

export function PrPreviewHero() {
  return (
    <section className="pb-16 sm:pb-24 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative">
        {/* Ambient atmospheric glow behind the card */}
        <div className="absolute inset-x-8 -top-8 -bottom-8 bg-[radial-gradient(ellipse_at_center,rgba(217,154,100,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

        {/* Main Window Card with golden border glow */}
        <div className="rounded-2xl border border-border/90 bg-card shadow-[0_0_50px_-12px_rgba(217,154,100,0.28)] overflow-hidden transition-all hover:border-[#D99A64]/50 hover:shadow-[0_0_70px_-10px_rgba(217,154,100,0.38)]">
          {/* Top Window Bar with macOS dots */}
          <div className="bg-secondary/60 border-b border-border px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* macOS Dots */}
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/80" />
                <span className="size-2.5 rounded-full bg-amber-500/80" />
                <span className="size-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* PR Status & Title */}
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-medium bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <CheckCircle className="size-3" weight="fill" />
                  Open
                </span>
                <span className="font-medium text-foreground truncate max-w-[280px] sm:max-w-md">
                  feat(auth): add webhook signature validation #42
                </span>
              </div>
            </div>

            {/* Branch info */}
            <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-[11px]">
              <span>feat/webhook-security</span>
              <ArrowRight className="size-3" />
              <span>main</span>
            </div>
          </div>

          {/* Diff & Review Container */}
          <div className="p-4 sm:p-5 space-y-4 bg-card">
            {/* Diff Window */}
            <div className="rounded-xl border border-border overflow-hidden bg-background">
              {/* File header */}
              <div className="bg-secondary/40 border-b border-border px-3.5 py-2 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Terminal className="size-3.5 text-[#D99A64]" />
                  <span className="text-foreground font-medium">
                    app/api/webhooks/route.ts
                  </span>
                </div>
                <span className="text-[11px]">+2 -1</span>
              </div>

              {/* Diff Lines */}
              <div className="font-mono text-xs overflow-x-auto divide-y divide-border/20 py-1">
                <div className="px-4 py-1 text-muted-foreground/60 bg-muted/20 text-[11px]">
                  00 -24,4 +24,5 @@ export async function POST(req: Request) &#123;
                </div>
                <div className="px-4 py-1 text-muted-foreground flex items-center gap-3">
                  <span className="w-5 text-right select-none opacity-40 text-[10px]">
                    24
                  </span>
                  <span>
                    &nbsp;&nbsp;const signature = req.headers.get(&quot;x-hub-signature-256&quot;);
                  </span>
                </div>
                {/* Removed Line */}
                <div className="px-4 py-1 bg-red-500/10 text-red-500 dark:text-red-400 flex items-center gap-3 border-l-2 border-red-500">
                  <span className="w-5 text-right select-none opacity-60 text-[10px]">
                    25
                  </span>
                  <span>
                    - const isValid = signature === expectedSig;
                  </span>
                </div>
                {/* Added Line */}
                <div className="px-4 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 border-l-2 border-emerald-500">
                  <span className="w-5 text-right select-none opacity-60 text-[10px]">
                    26
                  </span>
                  <span>
                    + const isValid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
                  </span>
                </div>
              </div>
            </div>

            {/* Inline Bot Review Comment */}
            <div className="rounded-xl border border-[#D99A64]/30 bg-[#D99A64]/5 p-4 text-xs">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-[#D99A64] text-[#191A19] font-bold text-[11px]">
                    r
                  </div>
                  <span className="font-bold text-foreground">revu bot</span>
                  <Badge className="bg-[#D99A64]/20 text-[#D99A64] border-[#D99A64]/30 text-[10px] px-1.5 py-0 h-4 font-medium">
                    AI Review
                  </Badge>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  reviewed line 25
                </span>
              </div>

              <p className="text-foreground/90 leading-relaxed">
                <strong className="text-foreground font-semibold">
                  Security Note (CWE-208):
                </strong>{" "}
                Direct string equality (
                <code className="font-mono text-[#D99A64] font-medium">===</code>
                ) is susceptible to timing attacks that leak signature byte
                comparison times. Using{" "}
                <code className="font-mono bg-secondary px-1 py-0.5 rounded border border-border">
                  crypto.timingSafeEqual
                </code>{" "}
                prevents side-channel reconstruction.
              </p>

              <div className="mt-3.5 pt-2.5 border-t border-[#D99A64]/20 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#D99A64]" weight="bold" />
                  Verified against project crypto guidelines
                </span>
                <span className="font-mono text-[10px] bg-secondary px-2.5 py-1 rounded-md border border-border text-foreground font-medium">
                  Suggested Fix
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

