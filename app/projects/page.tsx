// app/projects/page.tsx
"use client";
import type React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useState } from "react";
import BadgeTag from "@/components/BadgeTag";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  // Estado para la chapa seleccionada
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

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
            zIndex: 1,
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
            overflow: "hidden",
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
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxHeight: "100vh",
            overflowY: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Semi-círculo de chapas centrado */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <BadgeTag text="DEVOPS" rotation={-15} positionIndex={0} isSelected={selectedBadge === 0} onClick={() => setSelectedBadge(0)} />
            <BadgeTag text="DEVOPS" rotation={-10} positionIndex={1} isSelected={selectedBadge === 1} onClick={() => setSelectedBadge(1)} />
            <BadgeTag text="DEVOPS" rotation={0} positionIndex={2} isSelected={selectedBadge === 2} onClick={() => setSelectedBadge(2)} />
            <BadgeTag text="DEVOPS" rotation={5} positionIndex={3} isSelected={selectedBadge === 3} onClick={() => setSelectedBadge(3)} />
            <BadgeTag text="DEVOPS" rotation={10} positionIndex={4} isSelected={selectedBadge === 4} onClick={() => setSelectedBadge(4)} />
            <BadgeTag text="DEVOPS" rotation={15} positionIndex={5} isSelected={selectedBadge === 5} onClick={() => setSelectedBadge(5)} />
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-black text-white text-center py-4">
          <p>&copy; 2025 Hector Yoav Ugarte Ramirez</p>
          <p style={{ fontSize: "0.8em", color: "#888" }}>
            This site is a personal project inspired by <em>Persona 5</em>. All
            rights to original elements belong to ATLUS/SEGA.
          </p>
        </div>
      </footer>
    </div>
  );
}
