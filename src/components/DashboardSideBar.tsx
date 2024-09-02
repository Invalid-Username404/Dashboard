"use client";

import { DashboardItems } from "./DashboardItems";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function DashboardSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  // TODO: get admin from database
  const admin = "mariam-ali";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <aside
      ref={sidebarRef}
      className="md:border md:border-gray-200 md:rounded-3xl md:flex md:flex-col md:gap-8 md:h-[90vh] md:my-[5vh] md:py-6 md:sticky md:top-0"
    >
      <div className="flex items-center justify-between p-4 md:p-0 md:mx-auto md:justify-center sticky top-0 bg-white z-10">
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src={isOpen ? "/close.svg" : "/menu.svg"}
            alt={isOpen ? "close" : "menu"}
            width={24}
            height={24}
          />
        </button>
        <Image
          src="/cyparta-logo.svg"
          alt="Cyparta Logo"
          width={150}
          height={50}
          priority
        />
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block rounded-lg md:flex-grow md:overflow-y-auto absolute top-20 left-0  bg-white shadow-md rounded-bl-lg w-1/2 max-w-xs md:static md:shadow-none md:w-full md:max-w-none`}
      >
        <div className="p-4 md:p-0">
          <DashboardItems admin={admin} />
        </div>
      </nav>
    </aside>
  );
}
