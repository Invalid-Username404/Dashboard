"use client";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme, isLoading } = useTheme();
  function handleThemeToggle() {
    toggleTheme();
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  }

  if (isLoading) {
    return (
      <div className="p-2 mx-4 rounded-full bg-light-secondary dark:text-white flex items-center gap-2">
        <div className="animate-spin rounded-full  border-t-2 border-b-2 border-gray-900"></div>
        Theme
      </div>
    );
  } else {
    return (
      <button
        onClick={handleThemeToggle}
        className="p-2 mx-4 rounded-full bg-light-secondary dark:text-white flex items-center gap-2"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? "☀️" : <MoonSVG />} Theme
      </button>
    );
  }
}
const MoonSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
