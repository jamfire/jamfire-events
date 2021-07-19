// import libs
import React from "react"
import { MissingProps } from "./missing.d"

// import components
import { FaFireAlt } from "react-icons/fa"

// import styles
import * as styles from "./missing.module.scss"

export default ({ fontSize = 8, darker = "false" }: MissingProps) => {

  const color = darker === "true"
    ? "var(--list-header-background-darker)"
    : "var(--list-header-background)"
    
  return (
    <div className={styles.missing}>
      <FaFireAlt 
        style={{
          color: color,
          fontSize: `${fontSize}rem`
        }}
      />
    </div>
  )
}
