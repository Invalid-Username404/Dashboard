import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { employee: string };
}): Promise<Metadata> {
  const employeeName = params.employee
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: `${employeeName} - Cyparta`,
    description: `${employeeName} Cyparta profile`,
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
