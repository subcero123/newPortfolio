import React from "react";
import { useEffect } from "react";

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
  { translateX: 15, top: -10 },
  { translateX: -15, top: 15 },
  { translateX: -30, top: 50 },
  { translateX: -80, top: 80 },
  { translateX: -140, top: 110 },
];

const bounceKeyframes = `
  @keyframes bounceScale {
    0% {
      transform: scale(1) translateX(0);
    }
    50% {
      transform: scale(1.34) translateX(0);
    }
    100% {
      transform: scale(1.3) translateX(0);
    }
  }
`;

const BadgeTag: React.FC<BadgeTagProps> = ({
  text,
  rotation = 0,
  style,
  isSelected = false,
  onClick,
  positionIndex = 0,
}) => {
  const pos = badgePositions[positionIndex] || { translateX: 0, top: 0 };

  // Añadir un pequeño delay escalonado para efecto visual más natural
  const animationDelay = positionIndex * 0.03;
  const animName = `bounceScale-${positionIndex}`;

  useEffect(() => {
    const existing = document.getElementById("badge-animation-style");
    if (existing) return;

    const styleTag = document.createElement("style");
    styleTag.id = "badge-animation-style";
    document.head.appendChild(styleTag);
  }, []);

  useEffect(() => {
    if (isSelected) {
      const uniqueAnimName = `bounceScale-${positionIndex}`;
      const styleSheets = document.styleSheets;
      let targetSheet = null;
      
      for (let i = 0; i < styleSheets.length; i++) {
        try {
          if (styleSheets[i].cssRules) {
            targetSheet = styleSheets[i];
            break;
          }
        } catch (e) {
          continue;
        }
      }
      
      if (targetSheet) {
        const rotateStr = `rotate(${rotation}deg)`;
        const translateStr = `translateX(${pos.translateX}px)`;

        const keyframes = `
          @keyframes ${uniqueAnimName} {
            0% {
              transform: ${rotateStr} ${translateStr} scale(1);
            }
            50% {
              transform: ${rotateStr} ${translateStr} scale(1.34);
            }
            100% {
              transform: ${rotateStr} ${translateStr} scale(1.3);
            }
          }
        `;

        try {
          targetSheet.insertRule(keyframes, targetSheet.cssRules.length);
        } catch (e) {
          // Rule might already exist
        }
      }
    }
  }, [isSelected, positionIndex, rotation, pos.translateX]);

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
        animation: isSelected ? `${animName} 0.35s ease forwards` : undefined,
        transform: `rotate(${rotation}deg) translateX(${pos.translateX}px)`,

        position: "relative",
        top: pos.top,
        cursor: "pointer",
    
        transformOrigin: "left top", // Scale desde la esquina derecha inferior
        transitionDelay: `${animationDelay}s`,
        WebkitMaskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskImage: `radial-gradient(circle at 1.8rem center, transparent 0.55rem, black 0.55rem)`,
        maskComposite: "exclude",
        WebkitMaskComposite: "destination-out",
        lineHeight: "1",
        textShadow: "0 0 2px #222",
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
          display: "inline-block",
          pointerEvents: "none",
        }}
      />
      {text}
    </div>
  );
};

export default BadgeTag;
