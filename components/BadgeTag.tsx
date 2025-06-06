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
  { translateX: -120, top: 80 },
  { translateX: -230, top: 110 },
];

const BadgeTag: React.FC<BadgeTagProps> = ({ text, rotation = 0, style, isSelected = false, onClick, positionIndex = 0 }) => {
  const pos = badgePositions[positionIndex] || { translateX: 0, top: 0 };
  return (
    <div
      onClick={onClick}
      style={{
        display: "inline-block",
        padding: "3.5rem 6.3rem",
        borderRadius: "4rem",
        background: isSelected ? "white" : "green",
        color: isSelected ? "#222" : "#222",
        fontWeight: "bolder",
        fontSize: "2rem",
        transform: `rotate(${rotation}deg) scale(${isSelected ? 1.2 : 1}) translateX(${pos.translateX}px)`,
        position: "relative",
        top: pos.top,
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
        WebkitMaskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskComposite: "exclude",
        WebkitMaskComposite: "destination-out",
        ...style,
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
          border: "2px solid #888",
          boxShadow: "0 0 2px #222",
          display: "inline-block",
          pointerEvents: "none",
        }}
      />
      {text}
    </div>
  );
};

export default BadgeTag;
