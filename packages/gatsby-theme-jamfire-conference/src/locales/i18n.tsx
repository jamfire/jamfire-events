// import libs
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"

// import constants
import { DEFAULT_LOCALE } from "../utils/constants"

// get active environment
const activeEnv: string =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// setup i18n
i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./i18n/${language}.json`)
        .then((resources) => {
          callback(null, resources)
        })
        .catch(error => {
          callback(error, null)
        })
    })
  )
  .use(initReactI18next).init({
    initImmediate: false,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    debug: activeEnv === "development" ? true : false,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
