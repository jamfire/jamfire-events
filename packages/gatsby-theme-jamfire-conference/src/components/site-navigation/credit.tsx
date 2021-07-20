// import libs
import React from "react"
import { useTranslation } from "react-i18next"

// import components
import { FaGithub } from "react-icons/fa"

// import styles
import * as styles from "./credit.module.scss"

export default () => {
  const { t } = useTranslation()

  return (
    <div className={styles.credit}>
      <a
        href="https://github.com/jamfire/jamfire"
        title={t("credit.get")}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}
