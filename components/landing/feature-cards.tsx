"use client";

import React from "react";
import { Lightning, Brain, LockSimple } from "@phosphor-icons/react";

const FEATURES = [
  {
    icon: <Lightning className="size-5 text-[#D99A64]" weight="fill" />,
    title: "Fast & Reliable",
    description: "Get comprehensive reviews in under 30 seconds.",
  },
  {
    icon: <Brain className="size-5 text-[#D99A64]" weight="fill" />,
    title: "Context-Aware",
    description: "Understands your entire codebase with vector RAG.",
  },
  {
    icon: <LockSimple className="size-5 text-[#D99A64]" weight="fill" />,
    title: "Privacy First",
    description: "Zero private code retention. Your code stays yours.",
  },
];

export function FeatureCards() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[#D99A64]/40 hover:translate-y-[-2px]"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-secondary border border-border mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

