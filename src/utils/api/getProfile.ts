import { cookies } from "next/headers";
export async function getProfile() {
  "use server";
  const token =
    cookies().get("token")?.value ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODYxOTAxLCJpYXQiOjE3MjUyNjk5MDEsImp0aSI6IjQ2YTQxYTA3MTVmZjRlNWNiMDQ3ZTNlYWZiZGFlNTIyIiwidXNlcl9pZCI6MjJ9.W44leTILk3auMyj26MvyXU_qsjgqEllrlu5uEtEnIf0";
  const response = await fetch(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}
