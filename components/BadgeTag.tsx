import React from "react";
import { useEffect } from "react";
import styles from "./BadgeTag.module.css";

interface BadgeTagProps {
  text: string;
  rotation?: number;
  style?: React.CSSProperties;
  isSelected?: boolean;
  onClick?: () => void;
  positionIndex?: number;
}

// Define posiciones personalizadas para cada badge según viewport
const badgePositions = {
  // Desktop 1440px+
  desktop: [
    { translateX: 70, top: 0 },
    { translateX: 15, top: -10 },
    { translateX: -15, top: 15 },
    { translateX: -30, top: 50 },
    { translateX: -80, top: 80 },
    { translateX: -140, top: 110 },
  ],
  // Laptop Normal 1024px-1439px
  laptop: [
    { translateX: 60, top: 0 },
    { translateX: 12, top: -8 },
    { translateX: -12, top: 12 },
    { translateX: -25, top: 40 },
    { translateX: -65, top: 65 },
    { translateX: -115, top: 90 },
  ],
  // Tablet Landscape 768px-1023px
  tabletLandscape: [
    { translateX: 50, top: -30},
    { translateX: 10, top: 0 },
    { translateX: -10, top: 20 },
    { translateX: -20, top: 40 },
    { translateX: -50, top: 80 },
    { translateX: -90, top: 110 },
  ],
  // Tablet Portrait 576px-767px
  tabletPortrait: [
    { translateX: 40, top: 0 },
    { translateX: 8, top: -5 },
    { translateX: -8, top: 8 },
    { translateX: -15, top: 25 },
    { translateX: -40, top: 40 },
    { translateX: -70, top: 55 },
  ],
  // Mobile Small hasta 575px
  mobile: [
    { translateX: 30, top: 0 },
    { translateX: 6, top: -4 },
    { translateX: -6, top: 6 },
    { translateX: -12, top: 20 },
    { translateX: -30, top: 30 },
    { translateX: -50, top: 40 },
  ],
};

// Función para obtener el viewport actual
const getViewportType = () => {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width <= 575) return "mobile";
  if (width <= 767) return "tabletPortrait";
  if (width <= 1023) return "tabletLandscape";
  if (width <= 1439) return "laptop";
  return "desktop";
};

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
  const viewportType = getViewportType();
  const positions = badgePositions[viewportType as keyof typeof badgePositions];
  const pos = positions[positionIndex] || { translateX: 0, top: 0 };

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
      className={`${styles.badge} ${isSelected ? styles.selected : styles.unselected}`}
      style={{
        animation: isSelected ? `${animName} 0.35s ease forwards` : undefined,
        transform: `rotate(${rotation}deg) translateX(${pos.translateX}px)`,
        top: pos.top,
        transitionDelay: `${animationDelay}s`,
        ...style,
      }}
    >
      {/* Orificio a la izquierda, transparente */}
      <span className={styles.badgeHole} />
      {text}
    </div>
  );
};

export default BadgeTag;
