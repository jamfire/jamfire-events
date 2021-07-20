// import libs
import React from "react"
import { WrapperProps } from "./wrappers.d"

// import styles
import * as styles from "./wide-wrapper.module.scss"

export default ({ children }: WrapperProps) => {
  return <div className={styles.wideWrapper}>{children}</div>
}
