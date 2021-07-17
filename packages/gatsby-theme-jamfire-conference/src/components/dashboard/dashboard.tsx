// import libs
import React, { useContext } from "react"
import { localizeData } from "../../utils/localized-data"
import loadable from "@loadable/component"
import { useTranslation } from "react-i18next"
import { DataProps } from "../../gatsby/data-props"

// import components
import { FirebaseContext } from "../../services"
import PrivateRoute from "../private-route"
import Layout from "../site/layout"
import { StyledDashboard } from "./_styles"

// loadable components
const Welcome = loadable(() => import("./welcome"))

export default ({ data, pageContext }: DataProps) => {
  const { isLoading, isLoggedIn, profile } = useContext(FirebaseContext)

  const { t } = useTranslation()

  const { config, defaultConfig, cookies, defaultCookies } = data

  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  return (
    <PrivateRoute>
      <Layout
        title={t("dashboard.title")}
        locale={pageContext.locale}
        config={configData}
        cookies={cookiesData}
        useHeaderTitle={true}
      >
        <StyledDashboard>
          <Welcome
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            profile={profile}
          />
        </StyledDashboard>
      </Layout>
    </PrivateRoute>
  )
}
