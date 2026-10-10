"use client";

import React from "react";
import Link from "next/link";
import {
  GithubLogo,
  CheckCircle,
  XCircle,
  Gear,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface GithubStatusWidgetProps {
  installation: {
    connected: boolean;
    accountLogin: string | null;
    accountType: string | null;
    installedAt: string | null;
    installationId: number;
  } | null;
}

export function GithubStatusWidget({ installation }: GithubStatusWidgetProps) {
  const isConnected = !!installation?.connected;

  return (
    <div className="rounded-2xl border border-border/80 bg-card/90 p-5 backdrop-blur-md shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <GithubLogo className="size-4.5 text-foreground" weight="bold" />
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            GitHub Integration
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`size-2 rounded-full ${
              isConnected
                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                : "bg-amber-500"
            }`}
          />
          <span className="text-[11px] font-medium text-muted-foreground">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>

      <div className="py-3.5 space-y-3">
        {isConnected ? (
          <>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/30 border border-border/50 text-xs">
              <span className="text-muted-foreground">Target Account:</span>
              <span className="font-semibold text-foreground font-mono">
                @{installation?.accountLogin}
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-[11px]">
                <CheckCircle className="size-3.5 text-emerald-500" weight="bold" />
                <span>Webhooks Active (PR Events)</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <CheckCircle className="size-3.5 text-emerald-500" weight="bold" />
                <span>Line Comment Permissions</span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full h-8 text-xs rounded-xl border-border hover:border-[#D99A64]/50"
            >
              <Link
                href={DASHBOARD_ROUTES.github}
                className="flex items-center justify-center gap-1.5"
              >
                <Gear className="size-3.5" />
                <span>Manage GitHub App</span>
              </Link>
            </Button>
          </>
        ) : (
          <>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Install the revu GitHub App to authorize repository access and
              allow automatic AI PR reviews.
            </p>
            <Button
              asChild
              size="sm"
              className="w-full h-8.5 text-xs rounded-xl bg-[#D99A64] text-[#191A19] hover:bg-[#c88d59] font-semibold shadow-xs"
            >
              <Link
                href={DASHBOARD_ROUTES.github}
                className="flex items-center justify-center gap-1.5"
              >
                <span>Install GitHub App</span>
                <ArrowSquareOut className="size-3.5" weight="bold" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

