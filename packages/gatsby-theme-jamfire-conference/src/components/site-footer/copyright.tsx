// import libs
import React, { useContext } from "react"
import { CopyrightProps } from "./footer.d"
import cx from "classnames"
import { useTranslation } from "react-i18next"

// import components
import { ThemeContext } from "../../services/theme"

// import styles
import * as styles from "./copyright.module.scss"

export default ({ config, mobile = false }: CopyrightProps) => {
  if (!config) {
    return <></>
  }

  const mobileStyles = mobile ? styles.mobile : ""

  const { t } = useTranslation()

  const { setToggleCookies } = useContext(ThemeContext)

  return (
    <div className={cx(styles.copyright, mobileStyles)}>
      <ul>
        <li>
          &copy; {new Date().getFullYear()} {config?.frontmatter?.title}
        </li>
        <li>|</li>
        <li>
          <button
            className={styles.cookies}
            onClick={() => setToggleCookies(true)}
          >
            {t("cookies.preferences")}
          </button>
        </li>
      </ul>
    </div>
  )
}
