// import libs
import React, { useContext } from "react"
import { DEFAULT_LOCALE, LOCALES } from "../../utils/constants"
import { useTranslation } from "react-i18next"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import localesList from "../../locales/locales"
import { LocaleModalProps } from "./_props"

// import components
import { Context } from "../Context"
import { Modal } from "../Site/Modal"
import { LocalWrapper, Language, Code, Label } from "./_styles"

export default ({ config }: LocaleModalProps) => {
  const { t } = useTranslation()

  const location = useLocation()

  const { locale, toggleLocale, setToggleLocale, setLocale, localesEnabled } =
    useContext(Context)

  let locales = LOCALES.filter(locale => locale !== locale)

  // locales not enabled
  if (!DEFAULT_LOCALE || !locales || !locale || !localesEnabled) {
    return <></>
  }

  // set locale
  const setSiteLocale: (newLocale: string) => void = (newLocale: string) => {
    const basePath = `${location.pathname.replace(`/${locale}`, "")}/`.replace(
      "//",
      "/"
    )

    const path: string =
      newLocale === DEFAULT_LOCALE
        ? basePath
        : `/${newLocale}${basePath}/`.replace("//", "/")

    setLocale(locale)
    setToggleLocale(!toggleLocale)
    return navigate(path)
  }

  return (
    <Modal
      id="locale-modal"
      title={t("locale.selectorTitle")}
      isActive={toggleLocale}
      setIsActive={setToggleLocale}
      config={config}
    >
      <LocalWrapper>
        {LOCALES.map(locale => {
          return (
            <Language
              onClick={() => {
                setSiteLocale(locale)
              }}
              key={locale}
              className={
                locale === locale
                  ? `${locale}-locale active`
                  : `${locale}-locale inactive`
              }
            >
              <Code className="code">{locale}</Code>
              <Label className="label">
                <div className="language">{localesList[locale]}</div>
                <div className="localized">{t(`locale.codes.${locale}`)}</div>
              </Label>
            </Language>
          )
        })}
      </LocalWrapper>
    </Modal>
  )
}
