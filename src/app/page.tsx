import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
  return (
    <div>
      <h1>Welcome to Cyparta</h1>
    </div>
  );
}
