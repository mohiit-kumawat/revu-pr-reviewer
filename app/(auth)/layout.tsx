import React from "react";
import { requireUnAuth } from "@/features/auth/actions";
import { AuthNavbar } from "@/features/auth/components/auth-navbar";
import { AuthAmbientGlow } from "@/features/auth/components/auth-ambient-glow";
import { AuthFooter } from "@/features/auth/components/auth-footer";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUnAuth();

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-background text-foreground overflow-x-hidden selection:bg-[#D99A64]/30 transition-colors">
      {/* Background Ambient Glow & Waves */}
      <AuthAmbientGlow />

      {/* Top Navbar */}
      <AuthNavbar />

      {/* Centered Auth Viewport */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        {children}
      </main>

      {/* Bottom Auth Footer */}
      <AuthFooter />
    </div>
  );
}