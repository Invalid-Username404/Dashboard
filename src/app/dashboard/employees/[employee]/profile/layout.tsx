import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { employee: string };
}): Promise<Metadata> {
  return {
    title: `${
      params.employee.replace("-", " ").charAt(0).toUpperCase() +
      params.employee.replace("-", " ").slice(1)
    } - Cyparta`,
    description: `${
      params.employee.replace("-", " ").charAt(0).toUpperCase() +
      params.employee.replace("-", " ").slice(1)
    } Cyparta profile`,
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
