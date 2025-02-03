import type React from "react"
import styles from "./PersonaContainer.module.css"

interface PersonaContainerProps {
  children: React.ReactNode
}

const PersonaContainer: React.FC<PersonaContainerProps> = ({ children }) => {
  return (
    <div className={styles.personaContainer}>
      <div className={styles.personaContainerInner}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default PersonaContainer

