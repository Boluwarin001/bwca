import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/ThemeProvider";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/providers/SidebarProvider";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>

      <SanityLive />
    </ClerkProvider>
  );
}