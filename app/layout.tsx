import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortaza Jabbarpour",
  description: "A Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-zinc-950 to-zinc-900">
        {children}
      </body>
    </html>
  );
}
