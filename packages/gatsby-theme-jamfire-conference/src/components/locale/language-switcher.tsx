// import libs
import React, { useContext } from "react"

// import components
import { Context } from "../context"
import { LanguageSwitcher, Switcher } from "./_styles"

export default () => {
  const { locale, toggleLocale, setToggleLocale, localesEnabled } =
    useContext(Context)

  if (!localesEnabled) {
    return <></>
  }

  return (
    <LanguageSwitcher id="language-switcher">
      <Switcher onClick={() => setToggleLocale(!toggleLocale)}>
        {locale}
      </Switcher>
    </LanguageSwitcher>
  )
}
