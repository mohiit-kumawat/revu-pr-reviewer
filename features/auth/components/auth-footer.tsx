"use client";

import React from "react";
import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

export function AuthFooter() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mohiit-kumawat",
      icon: GithubLogo,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohiit-kumawat/",
      icon: LinkedinLogo,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/mohiitkumawat",
      icon: XLogo,
    },
  ];

  return (
    <footer className="relative z-10 w-full max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-[#D99A64]/70" />
        <span>Secured via GitHub OAuth • 256-bit encryption</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[11px] text-muted-foreground/80">
          Built for developers by
        </span>
        <div className="flex items-center gap-1 bg-card/60 border border-border/60 rounded-full px-2 py-0.5 backdrop-blur-xs">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="p-1 rounded-full text-muted-foreground hover:text-[#D99A64] hover:bg-[#D99A64]/10 transition-colors"
                aria-label={item.name}
              >
                <Icon className="size-3.5" weight="bold" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

