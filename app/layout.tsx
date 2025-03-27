import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hector Ugarte | Portfolio",
  description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Hector Ugarte",
    "Hector Yoav Ugarte Ramirez",
    "portfolio",
    "fullstack developer",
  ],
  authors: [{ name: "Hector Yoav Ugarte Ramirez" }],
  openGraph: {
    title: "Hector Ugarte | Portfolio",
    description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
    url: "https://subcero123.github.io/my-portfolio/",
    siteName: "Hector Ugarte Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector Ugarte | Portfolio",
    description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
  },
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
