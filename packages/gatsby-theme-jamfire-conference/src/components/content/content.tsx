// import libs
import React from "react"
import { ContentProps } from "./content.d"

// import styles
import * as styles from "./content.module.scss"

export default ({ children }: ContentProps) => {
  return <div className={styles.content}>{children}</div>
}
