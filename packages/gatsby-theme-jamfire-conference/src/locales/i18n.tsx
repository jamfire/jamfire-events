// import libs
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import resources from "../locales"

// import constants
import { DEFAULT_LOCALE } from "../utils/constants"

// get active environment
const activeEnv: string =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// setup i18n
i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: DEFAULT_LOCALE,
  debug: activeEnv === "development" ? true : false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
