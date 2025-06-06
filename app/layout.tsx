import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hector Yoav Ugarte Ramírez Portfolio",
  description: "Hector Yoav Ugarte Ramírez - Fullstack developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Hector Ugarte",
    "Hector Yoav Ugarte Ramírez",
    "Hector Ugarte Portfolio",
    "Hector Ugarte Site",
    "Hector Ugarte Web",
    "Hector Ugarte Developer",
    "Hector Ugarte Fullstack",
    "Hector Yoav Portfolio",
    "Fullstack developer",
    "React developer",
    "Angular developer",
    "TypeScript developer",
    "Frontend",
    "Backend",
    "Portfolio developer",
    "Web developer",
    "HALY Web agency",
    "HALY",
    "Desarrollador Fullstack",
    "Desarrollador React",
    "Desarrollador Angular",
    "Desarrollador Puebla",
    "Desarrollador México",
    "Desarrollador Frontend",
    "Desarrollador Backend",
  ],

  authors: [{ name: "Hector Yoav Ugarte Ramirez" }],
  openGraph: {
    title: "Hector Yoav Ugarte Ramírez Portfolio",
    description: "Hector Yoav Ugarte Ramírez - Fullstack developer",
    url: "https://hectorugarte.site/",
    siteName: "Hector Ugarte Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hectorugarte.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hector Ugarte Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector Yoav Ugarte Ramírez Portfolio",
    description: "Hector Yoav Ugarte Ramírez - Fullstack developer",
    images: ["https://hectorugarte.site/og-image.png"],
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
