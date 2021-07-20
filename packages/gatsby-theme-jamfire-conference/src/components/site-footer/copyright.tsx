// import libs
import React from "react"
import { CopyrightProps } from "./footer.d"
import cx from "classnames"

// import styles
import * as styles from "./copyright.module.scss"

export default ({ config, mobile = false }: CopyrightProps) => {
  if (!config) {
    return <></>
  }

  const mobileStyles = mobile ? styles.mobile : ""

  return (
    <div className={cx(styles.copyright, mobileStyles)}>
      &copy; {new Date().getFullYear()} {config?.frontmatter?.title}.
    </div>
  )
}
