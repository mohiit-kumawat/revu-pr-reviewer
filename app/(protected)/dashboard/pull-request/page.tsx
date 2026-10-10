import React from "react";
import type { Metadata } from "next";
import { requireAuth } from "@/features/auth/actions";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { PullRequestList } from "@/features/dashboard/components/pull-requests/pull-request-list";
import { prisma } from "@/lib/db";
import { getInstallationStatus } from "@/features/github/server/installation";

export const metadata: Metadata = {
  title: "Pull Requests · revu Dashboard",
  description: "View and manage AI code reviews across your pull requests.",
};

export default async function DashboardPullRequestsPage() {
  const session = await requireAuth();
  const installation = await getInstallationStatus(session.user.id);

  let pullRequests: any[] = [];

  if (installation.connected) {
    const dbInstallation = await prisma.githubInstallation.findUnique({
      where: { userId: session.user.id },
      select: { installationId: true },
    });

    if (dbInstallation) {
      pullRequests = await prisma.pullRequest.findMany({
        where: { installationId: dbInstallation.installationId },
        orderBy: { createdAt: "desc" },
      });
    }
  }

  return (
    <>
      <DashboardHeader
        title="Pull Requests"
        description="Monitor automated AI code reviews and diff analyses on your pull requests."
      />
      <PullRequestList
        pullRequests={pullRequests}
        isConnected={installation.connected}
      />
    </>
  );
}

