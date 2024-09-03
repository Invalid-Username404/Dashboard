"use client";
import { useState } from "react";
import Image from "next/image";
interface PasswordInputProps {
  id: string;
  name: string;
  disabled?: boolean;
}

export function PasswordInput({ id, name, disabled }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="********"
        className="w-full p-2 px-4 mt-2 rounded-md border-2 border-gray-300 pr-10" // Add padding to the right for the button
        id={id}
        name={name}
        disabled={disabled}
      />
      <button
        className="absolute right-2 top-[60%] transform -translate-y-1/2" // Center the button vertically
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        <Image
          className="h-full"
          src={showPassword ? "/eye.svg" : "/eye-slash.svg"}
          alt={showPassword ? "eye" : "eye-slash"}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
