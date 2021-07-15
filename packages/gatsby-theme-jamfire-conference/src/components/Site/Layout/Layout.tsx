// import libs
import React, { useContext } from "react"
import loadable from "@loadable/component"
import { LayoutProps } from "./_props"
import "../../../gatsby/fragments"

// import components
import { Context } from "../../Context"
import { StyledLayout } from "./_styles"
import GlobalStyles from "../GlobalStyles"
import Seo from "../Seo"
import Header from "../Header"
import Navigation from "../Navigation"
import Footer from "../Footer"

// loadable components
const LoginModal = loadable(() => import("../../User/LoginModal"))
const Main = loadable(() => import("../Main"))
const CookieNotice = loadable(() => import("../../Cookies/CookieNotice"))
const ManageCookies = loadable(() => import("../../Cookies/ManageCookies"))
const LocaleModal = loadable(() => import("../../Locale/LocaleModal"))

export default ({
  children,
  title = null,
  config,
  cookies,
  event = null,
  headerLogo = null,
  favicon = null,
  useHeaderTitle = false,
  locale,
}: LayoutProps) => {
  const {
    navigation,
    loaded,
  } = useContext(Context)

  if (!loaded) {
    return <></>
  }

  return (
    <StyledLayout id="layout">
      <Seo activeTitle={title} activeFavicon={favicon} config={config} />
      <GlobalStyles config={config} />
      <Header
        config={config}
        headerLogo={headerLogo}
        title={useHeaderTitle ? title : null}
        locale={locale}
      />
      <Navigation navigation={navigation} config={config} />
      <Main>{children}</Main>
      <Footer config={config} event={event} />
      <LoginModal config={config} />
      <LocaleModal config={config} />
      <CookieNotice cookies={cookies} config={config} />
      <ManageCookies cookies={cookies} config={config} />
    </StyledLayout>
  )
}
