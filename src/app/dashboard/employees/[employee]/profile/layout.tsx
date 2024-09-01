import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { employee: string };
}): Promise<Metadata> {
  return {
    title: `${params.employee}'s Profile`,
    description: "View employee profile",
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
