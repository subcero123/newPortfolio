import type React from "react"
import styles from "./PersonaButton.module.css"

interface PersonaButtonProps {
  text: string
  onClick: () => void
}

const PersonaButton: React.FC<PersonaButtonProps> = ({ text, onClick }) => {
  return (
    <div className={`${styles.personaButtonContainer} bounce-hover mt-20`} onClick={onClick}>
      <div className={styles.personaButton}>
        <span className={styles.personaButtonText}>{text}</span>
      </div>
    </div>
  )
}

export default PersonaButton

