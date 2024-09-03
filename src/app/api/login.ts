import { redirect } from "next/navigation";

export async function handleLogin(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
        password,
      }),
    }
  );
  if (response.ok) {
    const data = await response.json();
    // This should redirect to dashboard but I wanted to redirect you to mariam-ali profile page like in the mockup
    redirect("/dashboard/employees/mariam-ali/profile");
  } else {
    throw new Error("Login failed");
  }
}
