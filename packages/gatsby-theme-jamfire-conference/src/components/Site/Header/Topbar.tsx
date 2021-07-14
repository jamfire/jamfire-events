// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { TopbarProps } from "./_props"

// import components
import { Topbar } from "./_styles"
import LoginButton from "../../User/LoginButton"
import LanguageSwitcher from "../../Locale/LanguageSwitcher"
import DarkMode from "./DarkMode"

export default ({ isLoading, isLoggedIn, config }: TopbarProps) => {
  const { t } = useTranslation()

  return (
    <Topbar role="region" aria-label={t("regions.topbar")}>
      <LoginButton
        aria-label={t("regions.login")}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
      />
      <LanguageSwitcher aria-label={t("regions.localeSwitcher")} />
      <DarkMode config={config} />
    </Topbar>
  )
}
