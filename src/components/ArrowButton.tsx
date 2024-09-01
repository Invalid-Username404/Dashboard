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
      className={`flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ${
        isOpen ? "rotate-90 " : ""
      }`}
      onClick={handleClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      <Image
        className="transition-transform"
        src="/arrow-right.svg"
        alt={isOpen ? "Collapse" : "Expand"}
        width={10}
        height={10}
      />
    </button>
  );
}
