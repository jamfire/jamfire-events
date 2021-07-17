// import libs
import React from "react"
import { ButtonProps } from "./_props"

// import styles
import * as styles from "./button.module.scss"

export default ({ url, children }: ButtonProps) => {
  return <a href={url} className={`button ${styles.button}`}>{children}</a>
}
