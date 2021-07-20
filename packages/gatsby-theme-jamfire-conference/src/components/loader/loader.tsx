// import libs
import React from "react"
import { LoaderProps } from "./loader.d"

// import components
import { FaFireAlt } from "react-icons/fa"

// import styles
import * as styles from "./loader.module.scss"

export default ({ fontSize }: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <FaFireAlt
        className={styles.icon}
        style={{ fontSize: fontSize ? fontSize : 4 }}
        aria-hidden="true"
      />
    </div>
  )
}
