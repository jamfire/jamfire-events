// import libs
import React from "react"
import { DEFAULT_LOCALE } from "./src/utils/constants"

// import components
import CookiesProvider from "react-cookie/lib/CookiesProvider"
import FirebaseProvider from "./src/services/firebase/firebase-provider"
import LocalesProvider from "./src/services/locales/locales-provider"
import ThemeProvider from "./src/services/theme/theme-provider"

// import fonts
require("typeface-work-sans")
require("typeface-quattrocento-sans")

// wrap root element
export const wrapRootElement = ({ element }) => {
  return (
    <CookiesProvider>
      <FirebaseProvider>{element}</FirebaseProvider>
    </CookiesProvider>
  )
}

// wrap page element
export const wrapPageElement = ({ element, props: { pageContext } }) => {
  return (
    <LocalesProvider defaultLocale={DEFAULT_LOCALE} pageContext={pageContext}>
      <ThemeProvider pageContext={pageContext}>{element}</ThemeProvider>
    </LocalesProvider>
  )
}

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  const styleHeadComponents = headComponents.filter(
    component => component.type === "style"
  )
  const nonStyleHeadComponents = headComponents.filter(
    component => component.type !== "style"
  )
  replaceHeadComponents([nonStyleHeadComponents, styleHeadComponents])
}
