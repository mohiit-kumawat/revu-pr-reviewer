import { prisma } from "@/lib/db";

export type DashboardOverviewData = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    plan: string;
  } | null;
  installation: {
    connected: boolean;
    accountLogin: string | null;
    accountType: string | null;
    installedAt: string | null;
    installationId: number;
  } | null;
  stats: {
    totalRepos: number;
    totalPrs: number;
    reviewedPrs: number;
    pendingPrs: number;
    syncedChunks: number;
  };
  recentPrs: Array<{
    id: string;
    repoFullName: string;
    prNumber: number;
    title: string;
    authorLogin: string | null;
    baseBranch: string;
    status: string;
    reviewedAt: Date | null;
    createdAt: Date;
  }>;
  syncedRepos: Array<{
    id: string;
    repoFullName: string;
    branch: string;
    status: string;
    chunkCount: number;
    syncedAt: Date | null;
  }>;
};

export async function getDashboardOverviewData(
  userId: string
): Promise<DashboardOverviewData> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      plan: true,
    },
  });

  const installation = await prisma.githubInstallation.findUnique({
    where: { userId },
  });

  if (!installation) {
    return {
      user,
      installation: null,
      stats: {
        totalRepos: 0,
        totalPrs: 0,
        reviewedPrs: 0,
        pendingPrs: 0,
        syncedChunks: 0,
      },
      recentPrs: [],
      syncedRepos: [],
    };
  }

  const [
    totalPrs,
    reviewedPrs,
    pendingPrs,
    recentPrs,
    syncedRepos,
    repoCount,
    chunksAgg,
  ] = await Promise.all([
    prisma.pullRequest.count({
      where: { installationId: installation.installationId },
    }),
    prisma.pullRequest.count({
      where: {
        installationId: installation.installationId,
        status: "reviewed",
      },
    }),
    prisma.pullRequest.count({
      where: {
        installationId: installation.installationId,
        status: { in: ["pending", "processing"] },
      },
    }),
    prisma.pullRequest.findMany({
      where: { installationId: installation.installationId },
      orderBy: { createdAt: "desc" },
      take: 6,
      select: {
        id: true,
        repoFullName: true,
        prNumber: true,
        title: true,
        authorLogin: true,
        baseBranch: true,
        status: true,
        reviewedAt: true,
        createdAt: true,
      },
    }),
    prisma.repoSync.findMany({
      where: { installationId: installation.installationId },
      orderBy: { updatedAt: "desc" },
      take: 5,
      select: {
        id: true,
        repoFullName: true,
        branch: true,
        status: true,
        chunkCount: true,
        syncedAt: true,
      },
    }),
    prisma.repoSync.count({
      where: { installationId: installation.installationId },
    }),
    prisma.repoSync.aggregate({
      where: { installationId: installation.installationId },
      _sum: { chunkCount: true },
    }),
  ]);

  return {
    user,
    installation: {
      connected: true,
      accountLogin: installation.accountLogin,
      accountType: installation.accountType,
      installedAt: installation.createdAt.toISOString(),
      installationId: installation.installationId,
    },
    stats: {
      totalRepos: repoCount,
      totalPrs,
      reviewedPrs,
      pendingPrs,
      syncedChunks: chunksAgg._sum.chunkCount ?? 0,
    },
    recentPrs,
    syncedRepos,
  };
}

