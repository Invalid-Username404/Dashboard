import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
  return (
    <div>
      <h1>Welcome to Cyparta</h1>
    </div>
  );
}
