"use client";
import { useState } from "react";
import { PasswordInput } from "@/components/PasswordInput";
import { useRouter } from "next/navigation";

type Result = {
  success: boolean;
  error?: string;
};

export function LoginForm({
  action,
}: {
  action: (formData: FormData) => Promise<Result>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError("");
    try {
      const result = await action(formData);
      if (result.success) {
        // This should redirect to dashboard but I wanted to redirect you to mariam-ali profile page like in the mockup
        router.push("/dashboard/employees/mariam-ali/profile");
      } else {
        setError(result.error || "Invalid email or password");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className=" flex w-full max-w-md gap-8 flex-col items-center justify-center border border-gray-200 rounded-lg p-6 sm:p-10"
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmit(new FormData(e.currentTarget));
      }}
    >
      <label htmlFor="email" className="block text-left w-full">
        Email Address
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-2 px-4 rounded-md border-2 border-gray-300 mt-2"
          aria-label="Email Address"
          required
          disabled={isLoading}
        />
      </label>

      <label htmlFor="password" className="block text-left w-full">
        Password
        <PasswordInput id="password" name="password" disabled={isLoading} />
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-[85%] mt-8 p-2 px-4 rounded-md bg-[#262626] hover:bg-black text-white disabled:bg-gray-400 flex items-center justify-center"
        aria-label="Login"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <LoadingIcon />
            Logging in...
          </div>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
}

const LoadingIcon = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
