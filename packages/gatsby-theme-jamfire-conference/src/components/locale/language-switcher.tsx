// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

// import components
import { ThemeContext } from "../../services/theme"

// import styles
import * as styles from "./language-switcher.module.scss"

export default () => {
  const { toggleLocale, setToggleLocale, localesEnabled } =
    useContext(ThemeContext)

  const { i18n } = useTranslation()

  if (!localesEnabled) {
    return <></>
  }

  return (
    <div className={styles.languageSwitcher} id="language-switcher">
      <div
        className={styles.switcher}
        onClick={() => setToggleLocale(!toggleLocale)}
      >
        {i18n.language.toUpperCase()}
      </div>
    </div>
  )
}
