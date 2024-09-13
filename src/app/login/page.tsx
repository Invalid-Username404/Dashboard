import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";
import { handleLogin } from "@/utils/api/login";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="bg-primary flex flex-col items-center justify-evenly h-screen p-4 sm:p-8">
      <p className="text-orange-600  text-2xl font-bold">
        You can use the following credentials:
        <br />
        <span className="text-red-600  text-xl font-bold">
          user: test@task.com <br /> password: 123456
        </span>
      </p>
      <Image
        src="/cyparta-logo.svg"
        alt="Cyparta Logo"
        width={200}
        height={200}
        className="dark:invert"
      />
      <LoginForm action={handleLogin} />
    </div>
  );
}
