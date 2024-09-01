import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/employees/mariam-ali/profile");
  return (
    <div>
      <h1>Welcome to Cyparta</h1>
    </div>
  );
}
