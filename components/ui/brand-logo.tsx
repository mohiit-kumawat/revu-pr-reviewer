"use client";

import React from "react";
import Link from "next/link";

interface RevuIconProps {
  className?: string;
}

/**
 * Bespoke Revu SVG Logo Mark:
 * Represents Git PR branching (source branch, target trunk)
 * intertwined with an AI Code Intelligence sparkle.
 */
export function RevuIcon({ className = "size-5" }: RevuIconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="revuBrandAmberGrad"
          x1="6"
          y1="6"
          x2="30"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4B37D" />
          <stop offset="1" stopColor="#D99A64" />
        </linearGradient>
      </defs>

      {/* Main Trunk Line (Base commit to target commit) */}
      <path
        d="M12 14.5V23.5"
        stroke="url(#revuBrandAmberGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Branching Path (PR branch curving out from trunk) */}
      <path
        d="M12 21C12 17.5 24 18 24 14.5"
        stroke="url(#revuBrandAmberGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Trunk Base Node */}
      <circle
        cx="12"
        cy="25"
        r="3"
        className="fill-background stroke-[#D99A64]"
        strokeWidth="2"
      />

      {/* Trunk Top Node */}
      <circle
        cx="12"
        cy="11"
        r="3"
        className="fill-background stroke-[#D99A64]"
        strokeWidth="2"
      />

      {/* PR Feature Branch Head Node (Glowing Amber) */}
      <circle cx="24" cy="11" r="3" fill="#D99A64" />

      {/* AI Intelligence Sparkle (Code Analysis in between branches) */}
      <path
        d="M18 13.5L18.8 15.7L21 16.5L18.8 17.3L18 19.5L17.2 17.3L15 16.5L17.2 15.7L18 13.5Z"
        fill="#F4B37D"
      />
    </svg>
  );
}

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "vertical";
  showTag?: boolean;
  tagText?: string;
  glow?: boolean;
  href?: string;
}

export function BrandLogo({
  className = "",
  size = "md",
  layout = "horizontal",
  showTag = false,
  tagText = "PR Reviewer",
  glow = true,
  href,
}: BrandLogoProps) {
  const badgeSizes = {
    sm: "size-7 rounded-lg",
    md: "size-9 rounded-xl",
    lg: "size-12 rounded-xl",
    xl: "size-16 rounded-2xl",
  };

  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-7",
    xl: "size-9",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  const glowStyles = glow
    ? "shadow-[0_0_20px_-3px_rgba(217,154,100,0.35)] dark:shadow-[0_0_25px_-4px_rgba(217,154,100,0.4)]"
    : "";

  const content = (
    <div
      className={`group flex items-center ${
        layout === "vertical" ? "flex-col gap-3 text-center" : "gap-3"
      } ${className}`}
    >
      {/* Icon Badge */}
      <div
        className={`flex ${badgeSizes[size]} items-center justify-center bg-card border border-[#D99A64]/35 text-[#D99A64] ${glowStyles} group-hover:border-[#D99A64]/60 group-hover:shadow-[0_0_30px_-3px_rgba(217,154,100,0.5)] transition-all`}
      >
        <RevuIcon className={iconSizes[size]} />
      </div>

      {/* Brand Name & Tag */}
      <div
        className={`flex ${
          layout === "vertical"
            ? "flex-col items-center gap-1"
            : "items-center gap-2"
        }`}
      >
        <span
          className={`font-bold ${textSizes[size]} tracking-tight text-foreground group-hover:text-[#D99A64] transition-colors`}
        >
          revu
        </span>
        {showTag && (
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
            {tagText}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-hidden">
        {content}
      </Link>
    );
  }

  return content;
}

