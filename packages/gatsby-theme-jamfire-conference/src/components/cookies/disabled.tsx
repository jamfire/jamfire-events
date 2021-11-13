// import libs
import React from "react"
import { useTranslation } from "react-i18next"

// import styles
import * as styles from "./disabled.module.scss"

export default () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Cookies must be enabled to use this site.</p>
    </div>
  )
}
