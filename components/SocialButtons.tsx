import type React from "react"
import { Linkedin, Github, AtSign } from "lucide-react"
import styles from "./SocialButtons.module.css"

const SocialButtons: React.FC = () => {
  return (
    <div className={`${styles.socialButtonsContainer} relative -top-4 bounce-hover`}>
      <div className={styles.socialButtons}>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Linkedin size={32} fill="currentColor" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} bounce-hover`}
        >
          <Github size={32} fill="currentColor" />
        </a>
        <a href="mailto:tu@email.com" className={`${styles.socialIcon} bounce-hover`}>
          <AtSign size={32} />
        </a>
      </div>
    </div>
  )
}

export default SocialButtons

