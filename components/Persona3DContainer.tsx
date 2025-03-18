"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import styles from "./Persona3DContainer.module.css"

interface Persona3DContainerProps {
  title: string
  description: string
  isLeft?: boolean
  className?: string;
  children?: React.ReactNode;
}

interface Persona3DContainerProps {
  id: number;
  title: string;
  description: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  children?: React.ReactNode;
  isLeft?: boolean;
  className?: string;
}

const Persona3DContainer: React.FC<Persona3DContainerProps> = ({
  title,
  description,
  isExpanded,
  onToggleExpand,
  children,
  isLeft = false,
  className = "",
}) => {
  return (
    <div
      className={`${styles.container3D} ${isLeft ? styles.leftAlign : ""} ${className}`}
      style={{
      display: isExpanded || !isExpanded ? "block" : "none",
      position: isExpanded ? "fixed" : "relative",
      zIndex: isExpanded ? 10 : "auto",
      top: isExpanded ? "50%" : "auto",
      left: isExpanded ? "50%" : "auto",
      transform: isExpanded ? "translate(-50%, -50%)" : "none",
      width: "85%",
      transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      onClick={onToggleExpand}
    >
      <div className={`${styles.face3D} ${isExpanded ? styles.expanded : ""}`}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          <div className={styles.expandIcon}>
            {isExpanded ? (
              <ChevronUp
                color="white"
                strokeWidth={4}
                size={36}
                className={styles.chevronIcon}
              />
            ) : (
              <ChevronDown
                color="white"
                strokeWidth={4}
                size={36}
                className={styles.chevronIcon}
              />
            )}
          </div>
        </div>
        {isExpanded && (
          <div>
            <p>{description}</p>
            {children && <div className={styles.childrenContainer}>{children}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Persona3DContainer;