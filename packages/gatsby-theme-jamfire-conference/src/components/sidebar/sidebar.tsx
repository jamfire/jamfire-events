// import libs
import React from "react"
import { SidebarProps } from "./sidebar.d"

// import styles
import * as styles from "./sidebar.module.scss"

export default ({ children }: SidebarProps) => {
  return <aside className={styles.sidebar}>{children}</aside>
}
