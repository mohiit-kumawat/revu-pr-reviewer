"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";

type DashboardHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * Enhanced sticky top bar for dashboard routes.
 * Includes sidebar toggle, title, breadcrumbs, theme switcher, and optional actions.
 */
export function DashboardHeader({
  title,
  description,
  children,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between border-b border-border/80 bg-background/85 px-4 backdrop-blur-md transition-colors">
      {/* Left Section: Sidebar Trigger & Page Title */}
      <div className="flex items-center gap-2.5 min-w-0">
        <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
        <Separator orientation="vertical" className="h-4 bg-border" />
        <div className="flex min-w-0 flex-col">
          <h1 className="truncate text-sm font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          {description ? (
            <p className="truncate text-xs text-muted-foreground hidden sm:block">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* Right Section: Actions & Theme Mode Toggle */}
      <div className="flex items-center gap-2.5">
        {children}
        <ModeToggle />
      </div>
    </header>
  );
}