// import libs
import React from "react"
import loadable from "@loadable/component"
import { DEFAULT_LOCALE } from "./src/utils/constants"

// import fonts
require("typeface-work-sans")
require("typeface-quattrocento-sans")

// cookies provider
const CookiesProvider = loadable(() =>
  import("react-cookie/lib/CookiesProvider")
)

// firebase provider
const FirebaseProvider = loadable(() =>
  import("./src/services/firebase/firebase-provider")
)

// locales provider
const LocalesProvider = loadable(() =>
  import("./src/services/locales/locales-provider")
)

// app provider
const ThemeProvider = loadable(() =>
  import("./src/services/theme/theme-provider")
)

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
