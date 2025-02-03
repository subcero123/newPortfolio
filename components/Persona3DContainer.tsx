"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import styles from "./Persona3DContainer.module.css"

interface Persona3DContainerProps {
  title: string
  description: string
  isLeft?: boolean
  className?: string
}

const Persona3DContainer: React.FC<Persona3DContainerProps> = ({
  title,
  description,
  isLeft = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`${styles.container3D} ${isLeft ? styles.leftAlign : ""} ${className}`} onClick={toggleExpand}>
      <div className={`${styles.face3D} ${isExpanded ? styles.expanded : ""}`}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          <div className={styles.expandIcon}>
            {isExpanded ? (
              <ChevronUp color="white" strokeWidth={4} size={36} className={styles.chevronIcon} />
            ) : (
              <ChevronDown color="white" strokeWidth={4} size={36} className={styles.chevronIcon} />
            )}
          </div>
        </div>
        <div className={`${styles.description} ${isExpanded ? styles.visible : ""}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Persona3DContainer

