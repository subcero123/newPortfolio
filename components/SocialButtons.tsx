import type React from "react"
import { Linkedin, Github, AtSign } from "lucide-react"
import styles from "./SocialButtons.module.css"

const SocialButtons: React.FC = () => {
  return (
    <div className={`${styles.socialButtonsContainer} relative -top-4 bounce-hover`}>
      <div className={styles.socialButtons}>
        <a
          href="https://www.linkedin.com/in/hector-ugarte-ramirez-875693280/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Linkedin size={32} fill="currentColor" />
        </a>
        <a
          href="https://github.com/subcero123"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Github size={32} fill="currentColor" />
        </a>
        <a href="mailto:hector_ugarter@hotmail.com" className={`${styles.socialIcon} bounce-hover`}>
          <AtSign size={32} />
        </a>
      </div>
    </div>
  )
}

export default SocialButtons

