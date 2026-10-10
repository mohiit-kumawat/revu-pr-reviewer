"use client";

import React from "react";

interface AmbientLinesProps {
  className?: string;
  subtle?: boolean;
}

export function AmbientLines({ className = "", subtle = false }: AmbientLinesProps) {
  const intensity = subtle ? 0.65 : 1;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none -z-10 ${className}`}
      style={{ opacity: intensity }}
    >
      {/* ── 1. Warm Amber Radial Glows ── */}
      {/* Bottom Center Cradle Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1100px] h-[320px] sm:h-[450px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 100%, rgba(217, 154, 100, 0.22) 0%, rgba(184, 110, 67, 0.08) 50%, transparent 75%)",
          filter: "blur(35px)",
        }}
      />

      {/* Left Edge Flank Glow where curves emerge */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] sm:w-[480px] h-[380px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(217, 154, 100, 0.16) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* Right Edge Flank Glow where curves emerge */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[480px] h-[380px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(217, 154, 100, 0.16) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* ── 2. Flowing Curved Amber Filament Lines ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Subtle Outer Glow Filter */}
          <filter id="amberGlowFilter" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Left Wing Gradient (fades in from left, bright in middle, fades to bottom center) */}
          <linearGradient id="leftLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0.15" />
            <stop offset="25%" stopColor="#D99A64" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#F5B066" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#D99A64" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="leftLineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#D99A64" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ECC29D" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#B86E43" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0.0" />
          </linearGradient>

          {/* Right Wing Gradient (symmetrical) */}
          <linearGradient id="rightLineGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0.15" />
            <stop offset="25%" stopColor="#D99A64" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#F5B066" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#D99A64" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="rightLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#D99A64" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ECC29D" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#B86E43" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0.0" />
          </linearGradient>

          {/* Faint Whisper Gradient */}
          <linearGradient id="whisperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D99A64" stopOpacity="0.05" />
            <stop offset="40%" stopColor="#D99A64" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#D99A64" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D99A64" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* ── 3. DIFFUSE SOFT GLOW UNDERLAY ── */}
        <g opacity="0.35">
          <path
            d="M 0 280 C 180 340, 320 540, 600 580"
            stroke="#D99A64"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
            filter="url(#amberGlowFilter)"
            fill="none"
          />
          <path
            d="M 1200 280 C 1020 340, 880 540, 600 580"
            stroke="#D99A64"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
            filter="url(#amberGlowFilter)"
            fill="none"
          />
        </g>

        {/* ── 4. LEFT WING FILAMENT BUNDLE ── */}
        {/* Whisper Strand 1 (Highest) */}
        <path
          d="M 0 190 C 160 250, 280 470, 520 535"
          stroke="url(#whisperGrad)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />

        {/* Whisper Strand 2 */}
        <path
          d="M 0 230 C 170 290, 300 505, 560 555"
          stroke="url(#leftLineGrad2)"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.6"
        />

        {/* Primary Radiant Curve 1 */}
        <path
          d="M 0 270 C 180 330, 320 535, 600 575"
          stroke="url(#leftLineGrad1)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#amberGlowFilter)"
          fill="none"
        />

        {/* Primary Radiant Curve 2 */}
        <path
          d="M 0 310 C 190 370, 340 555, 640 585"
          stroke="url(#leftLineGrad1)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.85"
        />

        {/* Accent Strand 3 */}
        <path
          d="M 0 350 C 200 410, 360 570, 680 592"
          stroke="url(#leftLineGrad2)"
          strokeWidth="1.0"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.7"
        />

        {/* Lower Whisper Strand 4 */}
        <path
          d="M 0 390 C 210 450, 380 580, 720 596"
          stroke="url(#whisperGrad)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.45"
        />

        {/* ── 5. RIGHT WING FILAMENT BUNDLE ── */}
        {/* Whisper Strand 1 (Highest) */}
        <path
          d="M 1200 190 C 1040 250, 920 470, 680 535"
          stroke="url(#whisperGrad)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />

        {/* Whisper Strand 2 */}
        <path
          d="M 1200 230 C 1030 290, 900 505, 640 555"
          stroke="url(#rightLineGrad2)"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.6"
        />

        {/* Primary Radiant Curve 1 */}
        <path
          d="M 1200 270 C 1020 330, 880 535, 600 575"
          stroke="url(#rightLineGrad1)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#amberGlowFilter)"
          fill="none"
        />

        {/* Primary Radiant Curve 2 */}
        <path
          d="M 1200 310 C 1010 370, 860 555, 560 585"
          stroke="url(#rightLineGrad1)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.85"
        />

        {/* Accent Strand 3 */}
        <path
          d="M 1200 350 C 1000 410, 840 570, 520 592"
          stroke="url(#rightLineGrad2)"
          strokeWidth="1.0"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.7"
        />

        {/* Lower Whisper Strand 4 */}
        <path
          d="M 1200 390 C 990 450, 820 580, 480 596"
          stroke="url(#whisperGrad)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          fill="none"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
