// import libs
import React, { useContext, useState, useEffect } from "react"
import loadable from "@loadable/component"
import { useTranslation } from "react-i18next"
import { LayoutProps } from "./layout.d"
import cx from "classnames"
import "../../gatsby/fragments"
import color from "tinycolor2"

// import components
import { ThemeContext } from "../../services/theme"
import Seo from "../seo"
import Header from "../site-header"
import Navigation from "../site-navigation"
import Footer from "../site-footer"

// import styles
import * as theme from "../../services/theme/theme.module.scss"
import * as styles from "./layout.module.scss"

// loadable components
const LoginModal = loadable(() => import("../login-modal/login-modal"))
const Main = loadable(() => import("../site-main"))
const CookieNotice = loadable(() => import("../cookies/cookie-notice"))
const ManageCookies = loadable(() => import("../cookies/manage-cookies"))
const LocaleModal = loadable(() => import("../locale/locale-modal"))
const DashboardModal = loadable(() => import("../dashboard-modal"))

export default ({
  children,
  title = null,
  config,
  cookies,
  event,
  headerLogo,
  favicon = null,
  useHeaderTitle = false,
  locale,
}: LayoutProps) => {
  const { navigation, darkMode } = useContext(ThemeContext)

  const { ready, i18n } = useTranslation()

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(ready)
  }, [ready])

  if (!loaded) {
    return null
  }

  const { colors } = config?.frontmatter || {}

  const { primaryColor, primaryColorHover } = colors || {}

  const themeClass = darkMode ? theme.dark : theme.light

  return (
    <div className={cx(themeClass, styles.layout, "site-layout")} id="layout">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --primary-color: ${primaryColor};
          --accent-color: ${primaryColorHover};
          --accent-hover: ${color(`${primaryColorHover}`).spin(3)}
        }
      `,
        }}
      />
      <Seo
        activeTitle={title || ""}
        activeFavicon={favicon}
        config={config}
        locale={i18n.language}
        event={event}
      />
      <Header
        config={config}
        headerLogo={headerLogo}
        title={useHeaderTitle ? title : null}
        locale={locale}
        event={event}
      />
      <Navigation navigation={navigation} config={config} />
      <Main>{children}</Main>
      <Footer config={config} event={event} />
      <LoginModal config={config} />
      <LocaleModal config={config} />
      <CookieNotice cookies={cookies} config={config} />
      <ManageCookies cookies={cookies} config={config} />
      <DashboardModal config={config} />
    </div>
  )
}
