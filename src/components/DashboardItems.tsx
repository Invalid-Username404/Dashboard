"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { ArrowButton } from "./ArrowButton";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export type NavbarItem = {
  icon: string;
  name: string;
  url: string;
  items?: NavbarItem[];
};

export function DashboardItems({ admin }: { admin: string }) {
  const currentPath = usePathname();
  const employee = useParams().employee;
  const [openedItems, setOpenedItems] = useState<number[]>([]);

  const toggleItem = useCallback((index: number) => {
    setOpenedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }, []);

  const replaceDynamicSegment = useCallback(
    (url: string) => {
      const employeeStr = Array.isArray(employee) ? employee[0] : employee;
      return url.replace(":employee", employeeStr || admin);
    },
    [employee, admin]
  );

  return (
    <ul className="flex flex-col gap-1 md:gap-4 relative" role="menu">
      {items.map((item, index) => (
        <li className="flex flex-col w-full" key={item.name} role="none">
          <div
            className={`flex p-2 md:p-5 text-xs md:text-base font-semibold items-center gap-1 md:gap-4 w-full rounded-r-full border-r-red-50 border-l-4 ${
              currentPath === item.url
                ? "bg-[#f9eaeb] border-[#EE232F]"
                : "border-transparent"
            }`}
          >
            <Link
              className="flex items-center gap-1 md:gap-4 w-full ml-1 md:ml-4"
              href={replaceDynamicSegment(item.url)}
              role="menuitem"
              aria-current={currentPath === item.url ? "page" : undefined}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={14}
                height={14}
                aria-hidden="true"
              />
              <span>{item.name}</span>
            </Link>
            {item.items && (
              <ArrowButton
                isOpen={openedItems.includes(index)}
                setIsOpen={() => toggleItem(index)}
                aria-expanded={openedItems.includes(index)}
                aria-controls={`submenu-${index}`}
              />
            )}
          </div>
          {item.items && openedItems.includes(index) && (
            <ul
              className="ml-8  md:ml-20 mt-1 md:mt-3 text-xs md:text-base font-semibold"
              id={`submenu-${index}`}
              role="menu"
            >
              {item.items.map((childItem) => (
                <li
                  key={childItem.name}
                  className="flex mb-2 items-center gap-1 md:gap-4 py-1 md:py-2"
                  role="none"
                >
                  <Link
                    href={replaceDynamicSegment(childItem.url)}
                    className={`${
                      currentPath.split("/").pop() ===
                      childItem.url.split("/").pop()
                        ? "text-[#EE232F]"
                        : "text-black"
                    } flex items-center gap-1 md:gap-4`}
                    role="menuitem"
                    aria-current={
                      currentPath === childItem.url ? "page" : undefined
                    }
                  >
                    <Image
                      src={childItem.icon}
                      alt={childItem.name}
                      width={12}
                      height={12}
                      aria-hidden="true"
                    />
                    <span>{childItem.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

const items: NavbarItem[] = [
  {
    name: "Dashboard",
    icon: "/dashboard.svg",
    url: "/dashboard",
  },
  {
    name: "Employees",
    icon: "/employees.svg",
    url: "/dashboard/employees",
    items: [
      {
        name: "Profile",
        icon: "/profile.svg",
        url: `/dashboard/employees/:employee/profile`,
      },
      {
        name: "Attendance",
        icon: "/attendance.svg",
        url: "/dashboard/employees/:employee/attendance",
      },
      {
        name: "Tasks",
        icon: "/tasks.svg",
        url: "/dashboard/employees/:employee/tasks",
      },
    ],
  },
  {
    name: "Payroll",
    icon: "/payroll.svg",
    url: "/dashboard/payroll",
  },
  {
    name: "Holidays",
    icon: "/holidays.svg",
    url: "/dashboard/holidays",
    items: [],
  },
  {
    name: "Advanced Payment",
    icon: "/advanced-payment.svg",
    url: "/dashboard/advanced-payment",
  },
];
