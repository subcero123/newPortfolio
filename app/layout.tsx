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
      <style>
        {`
          @font-face {
            font-family: 'p5hatty';
            src: url('/fonts/p5hatty.ttf') format('truetype');
          }

          @font-face {
          font-family: 'Persona5MenuFont';
          src: url('/fonts/Persona5MenuFontPrototype-Regular.ttf') format('truetype');
          }

        `}
      </style>
      <body>{children}</body>
    </html>
  );
}
