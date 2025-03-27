import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hector Ugarte | Portfolio",
  description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
