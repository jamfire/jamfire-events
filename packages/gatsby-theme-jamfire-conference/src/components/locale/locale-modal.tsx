// import libs
import React, { useContext } from "react"
import { DEFAULT_LOCALE, LOCALES } from "../../utils/constants"
import { useTranslation } from "react-i18next"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { localesList } from "../../services/locales/locales"
import { LocaleModalProps } from "./locale.d"
import cx from "classnames"

// import components
import { Context } from "../../services/theme"
import { Modal } from "../modal"

// import styles
import * as styles from "./locale-modal.module.scss"

export default ({ config }: LocaleModalProps) => {
  const { t, i18n } = useTranslation()

  const location = useLocation()

  const { toggleLocale, setToggleLocale, localesEnabled } =
    useContext(Context)

  let locales = LOCALES.filter(locale => locale !== i18n.language)

  // locales not enabled
  if (!DEFAULT_LOCALE || !locales || !i18n.language || !localesEnabled) {
    return <></>
  }

  // set locale
  const setSiteLocale: (newLocale: string) => void = (newLocale: string) => {
    const basePath = `${location.pathname.replace(`/${i18n.language}`, "")}/`.replace(
      "//",
      "/"
    )

    const path: string =
      newLocale === DEFAULT_LOCALE
        ? basePath
        : `/${newLocale}${basePath}/`.replace("//", "/")

    i18n.changeLanguage(newLocale)
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
      <div className={styles.wrapper}>
        {LOCALES.map(locale => {

          const activeClass = locale === i18n.language
            ? styles.active
            : ""

          return (
            <div
              className={cx(styles.language, activeClass)}
              onClick={() => {
                setSiteLocale(locale)
              }}
              key={locale}
            >
              <div className={styles.code}>{locale}</div>
              <div className={styles.label}>
                <div>{localesList[locale]}</div>
                <div className={styles.localized}>{t(`locale.codes.${locale}`)}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Modal>
  )
}
