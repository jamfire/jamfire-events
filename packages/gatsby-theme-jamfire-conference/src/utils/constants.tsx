// default locale
export const DEFAULT_LOCALE = process.env.GATSBY_DEFAULT_LOCALE || "en"

// locales
export const LOCALES = process.env.GATSBY_LOCALES
  ? process.env.GATSBY_LOCALES.split(",")
  : ["en"]

// locales enabled
export const LOCALES_ENABLED = LOCALES.length > 1 ? true : false

// environment
export const ENVIRONMENT =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// deepl supported locales
export const DEEPL_LOCALES = [
  "BG",
  "CS",
  "DA",
  "DE",
  "EL",
  "EN-GB",
  "EN-US",
  "EN",
  "ES",
  "ET",
  "FI",
  "FR",
  "HU",
  "IT",
  "JA",
  "LT",
  "LV",
  "NL",
  "PL",
  "PT-PT",
  "PT-BR",
  "PT",
  "RO",
  "RU",
  "SK",
  "SL",
  "SV",
  "ZH",
]
