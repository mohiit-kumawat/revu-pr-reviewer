"use client";

import React from "react";

/**
 * Ambient background lighting for the Auth flow.
 * Blends radial amber spotlight with subtle curved wave lines,
 * perfectly matching the dark (Graphite) and light (Warm Ivory) landing page aesthetic.
 */
export function AuthAmbientGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Central Ambient Radial Glow Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full blur-[120px] transition-all opacity-40 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217, 154, 100, 0.45) 0%, rgba(217, 154, 100, 0.1) 45%, transparent 75%)",
        }}
      />

      {/* Secondary Top Accent Radial Glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-25 dark:opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217, 154, 100, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Subtle flowing SVG amber lines in the background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 dark:opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="authLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0" />
            <stop offset="35%" stopColor="#D99A64" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#F4B37D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0" />
          </linearGradient>
          <filter id="authLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M -100 650 C 350 550, 750 780, 1540 600"
          stroke="url(#authLineGrad)"
          strokeWidth="1.2"
          filter="url(#authLineGlow)"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -80 720 C 400 620, 850 820, 1540 680"
          stroke="url(#authLineGrad)"
          strokeWidth="0.8"
          strokeOpacity="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

