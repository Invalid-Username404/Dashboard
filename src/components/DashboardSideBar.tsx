import { DashboardItems } from "./DashboardItems";
import Image from "next/image";

export function DashboardSideBar() {
  // TODO: get admin from database
  const admin = "mariam-ali";
  return (
    <aside className="border border-gray-200 rounded-3xl flex flex-col  gap-8 h-[90vh] my-[5vh] py-4 lg:py-6">
      <div className="flex mx-auto justify-center lg:justify-start">
        <Image
          src="/cyparta-logo.svg"
          alt="Cyparta Logo"
          width={150}
          height={50}
          priority
        />
      </div>
      <nav className=" flex-grow overflow-y-auto">
        <DashboardItems admin={admin} />
      </nav>
    </aside>
  );
}
