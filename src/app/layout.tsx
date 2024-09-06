import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/contexts/ThemeContext";

const cairo = Cairo({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Cyparta Dashboard",
    template: "%s | Cyparta Dashboard",
  },
  description: "Manage your Cyparta account and view employee information",
  keywords: ["Dashboard", "Cyparta", "Employee Management"],
  authors: [{ name: "Mohamed Ibrahim" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cyparta.com",
    siteName: "Cyparta Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cyparta",
    creator: "@cyparta",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${cairo.className} bg-white dark:bg-black`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
