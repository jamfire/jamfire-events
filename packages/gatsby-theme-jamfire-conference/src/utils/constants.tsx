// default locale
export const DEFAULT_LOCALE = process.env.GATSBY_DEFAULT_LOCALE || "en"

// locales
export const LOCALES = process.env.GATSBY_LOCALES
  ? process.env.GATSBY_LOCALES.split(",")
  : ["en"]

// locales enabled
export const LOCALES_ENABLED = LOCALES.length > 1 ? true : false
