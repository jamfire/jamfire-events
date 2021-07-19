// import libs
import React from "react"
import { MainProps } from "./main.d"

// import styles
import * as styles from "./main.module.scss"

export default ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>
}
