import { DashboardSideBar } from "@/components/DashboardSideBar";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Dashboard | Cyparta",
  description: "Manage your Cyparta account and view employee information",
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const adminPhoto = "/mariam-ali.png";

  return (
    <div className="flex flex-col md:flex-row md:px-5 md:gap-8">
      <nav className="sticky top-0 z-10  md:basis-1/4 md:py-2">
        <DashboardSideBar />
      </nav>
      <main className="px-4 md:px-0 md:basis-3/4 flex flex-col">
        <div className="mt-2 flex items-center justify-end">
          <ThemeToggle />
          <button
            className="bg-gray-100 mr-4 rounded-md p-2"
            aria-label="Notifications"
          >
            <Image src="/notification.svg" alt="" width={24} height={24} />
          </button>
          <Image
            className="rounded-full"
            src={adminPhoto}
            alt="Admin profile picture"
            width={40}
            height={40}
          />
        </div>
        <div className="mt-4">{children}</div>
      </main>
    </div>
  );
}
