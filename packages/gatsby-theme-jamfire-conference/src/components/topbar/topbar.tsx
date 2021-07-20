// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { TopbarProps } from "./topbar.d"

// import components
import LoginButton from "../login-button"
import LanguageSwitcher from "../locale/language-switcher"
import DarkMode from "../dark-mode"

// import styles
import * as styles from "./topbar.module.scss"

export default ({ isLoading, isLoggedIn, config }: TopbarProps) => {
  const { t } = useTranslation()

  return (
    <div
      className={styles.topbar}
      role="region"
      aria-label={t("regions.topbar")}
    >
      <LoginButton
        aria-label={t("regions.login")}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
      />
      <LanguageSwitcher aria-label={t("regions.localeSwitcher")} />
      <DarkMode config={config} />
    </div>
  )
}
