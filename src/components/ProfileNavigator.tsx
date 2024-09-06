import Image from "next/image";

export function ProfileNavigator({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="flex gap-4">
      <ul className="flex flex-wrap gap-4 border-b-2 border-gray-200 dark:border-gray-700">
        {navigationItems.map((item) => (
          <li key={item.name}>
            <button
              className={`relative flex items-center gap-2 ${
                activeTab === item.name.toLowerCase()
                  ? "text-red-500 dark:text-red-400 font-bold border-b-2 border-red-500 dark:border-red-400 -mb-2"
                  : "text-gray-500 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(item.name.toLowerCase())}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={16}
                height={16}
                className="dark:invert"
              />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navigationItems = [
  {
    name: "Personal Information",
    icon: "/user.svg",
    alt: "user",
  },
  {
    name: "Professional Information",
    icon: "/briefcase.svg",
    alt: "briefcase",
  },
  {
    name: "Documents",
    icon: "/document.svg",
    alt: "document",
  },
  {
    name: "Account Access",
    icon: "/lock.svg",
    alt: "lock",
  },
];
