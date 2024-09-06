import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";
import { handleLogin } from "@/utils/api/login";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="bg-primary flex flex-col items-center justify-evenly h-screen p-4 sm:p-8">
      <Image
        src="/cyparta-logo.svg"
        alt="Cyparta Logo"
        width={200}
        height={200}
      />
      <LoginForm action={handleLogin} />
    </div>
  );
}
