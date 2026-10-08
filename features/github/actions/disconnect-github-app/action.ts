"use server";

import { requireAuth } from "@/features/auth/actions";
import { deleteInstallation } from "@/features/github/server/installation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

export async function disconnectGithubApp() {
  const session = await requireAuth();

  await deleteInstallation(session.user.id);

  revalidatePath(DASHBOARD_ROUTES.github);
  redirect(DASHBOARD_ROUTES.github);
}
