// import libs
import React from "react"
import { ListProps, ListItemProps } from "./list.d"

// import styles
import * as styles from "./list.module.scss"

export const List = ({ children }: ListProps) => {
  return <ul className={styles.list} tabIndex={0}>{children}</ul>
}

export const ListItem = ({ children }: ListItemProps) => {
  return <li className={styles.item}>{children}</li>
}
