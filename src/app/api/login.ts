import { redirect } from "next/navigation";

export async function handleLogin(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
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

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return {
        success: false,
        error: data.error || "Invalid email or password",
      };
    }
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
}
