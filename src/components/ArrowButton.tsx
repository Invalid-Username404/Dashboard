"use client";
import Image from "next/image";

type ArrowButtonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

export function ArrowButton({
  isOpen,
  setIsOpen,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
}: ArrowButtonProps) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`flex items-center justify-center w-6 h-6 rounded-full hover:scale-110 transition-all duration-300 focus:outline-none text-gray-700 ${
        isOpen ? "rotate-90 " : ""
      }`}
      onClick={handleClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      <Image
        className="transition-transform dark:invert"
        src="/arrow-right.svg"
        alt={isOpen ? "Collapse" : "Expand"}
        width={10}
        height={10}
      />
    </button>
  );
}
