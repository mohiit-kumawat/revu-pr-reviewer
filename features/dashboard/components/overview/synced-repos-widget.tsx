"use client";

import React from "react";
import Link from "next/link";
import { GitBranch, ArrowRight, FolderSimple } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

interface SyncedRepoItem {
  id: string;
  repoFullName: string;
  branch: string;
  status: string;
  chunkCount: number;
  syncedAt: Date | null;
}

interface SyncedReposWidgetProps {
  syncedRepos: SyncedRepoItem[];
}

export function SyncedReposWidget({ syncedRepos }: SyncedReposWidgetProps) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card/90 p-5 backdrop-blur-md shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <GitBranch className="size-4.5 text-[#D99A64]" weight="bold" />
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            Codebase Sync
          </h3>
        </div>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="h-6 px-1.5 text-[11px] text-muted-foreground hover:text-foreground"
        >
          <Link href={DASHBOARD_ROUTES.repos}>Manage</Link>
        </Button>
      </div>

      <div className="py-3">
        {syncedRepos.length > 0 ? (
          <div className="space-y-2.5">
            {syncedRepos.map((repo) => (
              <div
                key={repo.id}
                className="p-2.5 rounded-xl bg-secondary/30 border border-border/40 flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 truncate">
                    <FolderSimple className="size-3.5 text-muted-foreground shrink-0" />
                    <span className="font-mono text-xs font-medium text-foreground truncate">
                      {repo.repoFullName}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    branch: <span className="font-mono">{repo.branch}</span> •{" "}
                    {repo.chunkCount} vectors
                  </div>
                </div>

                <span className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="size-1 rounded-full bg-emerald-500" />
                  Synced
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center">
            <p className="text-xs text-muted-foreground">
              No synced repositories yet.
            </p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-2.5 h-7 text-xs rounded-lg"
            >
              <Link href={DASHBOARD_ROUTES.repos}>Select Repositories</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

