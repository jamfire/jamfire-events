// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { WelcomeProps } from "./_props"

// import components
import Loader from "../site/loader"
import { Context } from "../../services/theme"
import { Welcome } from "./_styles"

export default ({ isLoading, isLoggedIn, profile }: WelcomeProps) => {
  const { setToggleCookies } = useContext(Context)

  const { t } = useTranslation()

  if (isLoading) {
    return <Loader />
  }

  if (!isLoggedIn || !profile) {
    return <Loader />
  }

  return (
    <Welcome>
      <h1>{t("dashboard.title")}</h1>
      <p>
        {t("dashboard.hello")} {profile.displayName}.
      </p>

      <ul>
        <li>
          <a href="#" onClick={() => setToggleCookies(true)}>
            {t("dashboard.cookies")}
          </a>
        </li>
      </ul>
    </Welcome>
  )
}
