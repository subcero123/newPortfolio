import React from "react";

interface BadgeTagProps {
  text: string;
  rotation?: number;
  style?: React.CSSProperties;
  isSelected?: boolean;
  onClick?: () => void;
  positionIndex?: number;
}

// Define posiciones personalizadas para cada badge
const badgePositions = [
  { translateX: 70, top: 0 },
  { translateX: 40, top: 20 },
  { translateX: 0, top: 40 },
  { translateX: -50, top: 60 },
  { translateX: -90, top: 80 },
  { translateX: -140, top: 110 },
];

const BadgeTag: React.FC<BadgeTagProps> = ({ text, rotation = 0, style, isSelected = false, onClick, positionIndex = 0 }) => {
  const pos = badgePositions[positionIndex] || { translateX: 0, top: 0 };
  
  // Añadir un pequeño delay escalonado para efecto visual más natural
  const animationDelay = positionIndex * 0.03;

  return (
    <div
      onClick={onClick}
      style={{
        display: "inline-block",
        padding: "3rem 3rem",
        borderRadius: "4.5rem",
        maxWidth: "300px",
        background: isSelected ? "white" : "#6CFF0D",
        color: isSelected ? "#222" : "#222",
        fontWeight: "bolder",
        fontSize: "2rem",
        // Animar directamente hacia la nueva posición
        transform: `
          rotate(${rotation}deg)
          scaleY(${isSelected ? 1.3 : 1})
          scaleX(${isSelected ? 1.3 : 1})
          translateX(${pos.translateX + (isSelected ? 0 : 0)}px)
        `,
        position: "relative",
        top: pos.top,
        cursor: "pointer",
        // Transición suave para todas las propiedades incluyendo posición
        transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: `${animationDelay}s`,
        WebkitMaskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskComposite: "exclude",
        WebkitMaskComposite: "destination-out",
        lineHeight: "1",
        textShadow: "0 0 2px #222",
        ...style,
        transformOrigin: "left center", // Importante: el origen de la transformación es la izquierda
      }}
    >
      {/* Orificio a la izquierda, transparente */}
      <span
        style={{
          position: "absolute",
          left: "1.2rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1.1rem",
          height: "1.1rem",
          background: "transparent",
          borderRadius: "50%",
          display: "inline-block",
          pointerEvents: "none",
        }}
      />
      {text}
    </div>
  );
};

export default BadgeTag;
