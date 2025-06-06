// app/projects/page.tsx
"use client";
import type React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useState } from "react";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggleExpand = (id: number | null) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <main style={{ position: "relative", minHeight: "100vh" }}>
        <div className="bg-cover bg-center w-full z-0">
          <Header onMenuClick={handleToggleExpand} />
        </div>
        {/* og-image como fondo fill y centrado */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/og-image.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.65,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* repeating_pattern encima de og-image, pero debajo del contenido */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/repeating_pattern.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* header-bg.webp siempre encima */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "10vh",
            zIndex: 10,
            pointerEvents: "none",
            overflow: "hidden"
          }}
        >
          <Image
            src="/header-bg.webp"
            alt="Imagen de encabezado"
            width={1920}
            height={200}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority
          />
        </div>
        {/* Contenido del main */}
        <div style={{ position: "relative", zIndex: 3, width: "100%" }}>
          {/* Tu contenido aquí */}
        </div>
      </main>
      <footer>
        <div className="bg-black text-white text-center py-4">
          <p>&copy; 2025 Hector Yoav Ugarte Ramirez</p>
        </div>
      </footer>
    </div>
  );
}
