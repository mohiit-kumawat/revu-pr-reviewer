"use client";

import Link from "next/link";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";
import { DashboardNav } from "@/features/dashboard/components/dashboard-nav";
import { SidebarUserButton } from "@/features/dashboard/components/sidebar-user-button";
import { RevuIcon } from "@/components/ui/brand-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { UserMenuUser } from "@/features/auth/components/user-menu";

type DashboardSidebarProps = {
  user: UserMenuUser;
  plan?: string;
};

export function DashboardSidebar({
  user,
  plan = "Pro",
}: DashboardSidebarProps) {
  return (
    <Sidebar collapsible="icon" className="border-r border-border/80 bg-sidebar">
      <SidebarHeader className="py-3 px-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              tooltip="revu"
              className="h-11 rounded-xl px-2 hover:bg-secondary/60 transition-colors"
            >
              <Link
                href={DASHBOARD_ROUTES.overview}
                className="flex items-center gap-2.5"
              >
                {/* Bespoke Revu Squircle Badge */}
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-card border border-[#D99A64]/40 text-[#D99A64] shadow-[0_0_12px_-2px_rgba(217,154,100,0.35)]">
                  <RevuIcon className="size-4.5" />
                </div>
                {/* Brand Text */}
                <div className="flex flex-col text-left leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-bold tracking-tight text-foreground text-base">
                    revu
                  </span>
                  <span className="truncate text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                    AI PR Reviewer
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <DashboardNav />
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarSeparator className="my-1" />
        <SidebarUserButton user={user} plan={plan} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}