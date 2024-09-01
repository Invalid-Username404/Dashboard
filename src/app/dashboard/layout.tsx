import { DashboardSideBar } from "@/components/DashboardSideBar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Cyparta",
  description: "Manage your Cyparta account and view employee information",
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const adminPhoto = "/mariam-ali.png";

  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-5 gap-4 lg:gap-8">
      <header className="lg:hidden mb-4">
        <Image
          src="/cyparta-logo.svg"
          alt="Cyparta Logo"
          width={150}
          height={50}
          priority
        />
      </header>
      <nav className="lg:basis-1/4 py-2">
        <DashboardSideBar />
      </nav>
      <main className="lg:basis-3/4 flex flex-col">
        <div className="mt-2 flex items-center justify-end">
          <button
            className="bg-gray-100 mr-4 rounded-lg p-2"
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
