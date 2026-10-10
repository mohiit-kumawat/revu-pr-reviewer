import React from "react";
import type { Metadata } from "next";
import { AuthCard } from "@/features/auth/components/auth-card";

export const metadata: Metadata = {
  title: "Sign in — revu",
  description:
    "Sign in to revu with your GitHub account to enable automated, context-aware pull request reviews.",
  icons: {
    icon: "/icons/sign-in.svg",
    shortcut: "/icons/sign-in.svg",
  },
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackUrl } = await searchParams;

  return <AuthCard callbackUrl={callbackUrl} />;
}
