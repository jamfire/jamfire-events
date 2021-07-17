// import libs
import React, { useContext } from "react"
import { useTranslation } from 'react-i18next'

// import components
import { Context } from "../../services/theme"
import { LanguageSwitcher, Switcher } from "./_styles"

export default () => {
  const { toggleLocale, setToggleLocale, localesEnabled } =
    useContext(Context)

  const { i18n } = useTranslation();

  if (!localesEnabled) {
    return <></>
  }

  return (
    <LanguageSwitcher id="language-switcher">
      <Switcher onClick={() => setToggleLocale(!toggleLocale)}>
        {i18n.language.toUpperCase()}
      </Switcher>
    </LanguageSwitcher>
  )
}
