import Image from "next/image";
import { PasswordInput } from "@/components/PasswordInput";
import { handleLogin } from "@/app/api/login";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen p-4 sm:p-8">
      <Image
        src="/cyparta-logo.svg"
        alt="Cyparta Logo"
        width={200}
        height={200}
      />
      <form
        className="flex w-full max-w-md gap-8 flex-col items-center justify-center border border-gray-200 rounded-lg p-6 sm:p-10"
        action={handleLogin}
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
          />
        </label>

        <label htmlFor="password" className="block text-left w-full">
          Password
          <PasswordInput id="password" name="password" />
        </label>

        <button
          type="submit"
          className="w-full sm:w-[85%] mt-8 p-2 px-4 rounded-md bg-[#262626] hover:bg-black text-white"
          aria-label="Login"
        >
          Login
        </button>
      </form>
    </div>
  );
}
