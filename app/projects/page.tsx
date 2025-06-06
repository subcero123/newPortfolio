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
  const [badgeOffset, setBadgeOffset] = useState(0);

  // Lista de badges de ejemplo (puedes personalizar los textos)
  const badges = [
    { text: "DEVOPS", rotation: -15 },
    { text: "FULLSTACK", rotation: -10 },
    { text: "AWS READY", rotation: -5 },
    { text: "MEAN STACK", rotation: 0 },
    { text: "LARAVEL", rotation: 5 },
    { text: "VUEJS", rotation: 10 },
    { text: "ANGULAR", rotation: 15 },
    { text: "REACT", rotation: 20 },
    { text: "NODEJS", rotation: 25 },
    { text: "PYTHON", rotation: 30 },
    { text: "DJANGO", rotation: 35 },
    { text: "SYMFONY", rotation: 40 },
  ];
  const visibleCount = 6;
  const canScrollUp = badgeOffset > 0;
  const canScrollDown = badgeOffset + visibleCount < badges.length;

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Flecha arriba */}
          <button
            onClick={() => setBadgeOffset((prev) => (prev - 1 + badges.length) % badges.length)}
            style={{
              position: "absolute",
              left: 0,
              top: "35%",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
              marginBottom: 8,
              zIndex: 4,
            }}
            aria-label="Ver anteriores"
          >
            ▲
          </button>
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
            {Array.from({ length: visibleCount }).map((_, idx) => {
              const badgeIdx = (badgeOffset + idx) % badges.length;
              const badge = badges[badgeIdx];
              return (
                <BadgeTag
                  key={badge.text + badgeIdx}
                  text={badge.text}
                  rotation={badge.rotation}
                  positionIndex={idx}
                  isSelected={selectedBadge === badgeIdx}
                  onClick={() => setSelectedBadge(badgeIdx)}
                />
              );
            })}
          </div>
          {/* Flecha abajo */}
          <button
            onClick={() => setBadgeOffset((prev) => (prev + 1) % badges.length)}
            style={{
              position: "absolute",
              left: 0,
              bottom: "35%",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2.5rem",
              cursor: "pointer",
              marginTop: 8,
              zIndex: 4,
            }}
            aria-label="Ver siguientes"
          >
            ▼
          </button>
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
