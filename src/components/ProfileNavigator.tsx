import Image from "next/image";

export function ProfileNavigator({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="flex gap-4 ">
      <ul className="flex flex-wrap gap-4 border-b-2 border-gray-200">
        {navigationItems.map((item) => (
          <li key={item.name}>
            <button
              className={`relative flex items-center gap-2 ${
                activeTab === item.name.toLowerCase()
                  ? "text-red-500 font-bold border-b-2 border-red-500 -mb-2"
                  : "text-gray-500 font-medium"
              }`}
              onClick={() => setActiveTab(item.name.toLowerCase())}
            >
              <Image src={item.icon} alt={item.alt} width={16} height={16} />
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
