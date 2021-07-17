// import libs
import React from "react"
import { HelmetProvider } from "react-helmet-async"
import loadable from "@loadable/component"
import i18n from "./src/locales/i18n"
import { I18nextProvider } from "react-i18next"

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

// app provider
const Provider = loadable(() => 
  import("./src/components/context/provider")
)

// wrap root element
export const wrapRootElement = ({ element }) => {
  return (
    <CookiesProvider>
      <FirebaseProvider>
        <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
      </FirebaseProvider>
    </CookiesProvider>
  )
}

// wrap page element
export const wrapPageElement = ({ element, props: { pageContext } }) => {
  return (
    <Provider pageContext={pageContext}>
      <HelmetProvider>{element}</HelmetProvider>
    </Provider>
  )
}
