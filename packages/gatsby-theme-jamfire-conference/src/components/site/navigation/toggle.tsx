// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

// import components
import { Context } from "../../../services/theme"
import { Toggle } from "./_styles"
import { Twirl as Hamburger } from "hamburger-react"

export default () => {
  const { toggle, setToggle, darkMode } = useContext(Context)

  const toggleColor: string = darkMode ? "#aaa" : "#333"

  const { t } = useTranslation()

  return (
    <Toggle>
      <Hamburger
        color={toggleColor}
        easing="ease-out"
        label={t("navigation.toggleMenu")}
        hideOutline={true}
        direction="left"
        duration={0.2}
        size={29}
        toggled={toggle}
        toggle={() => setToggle(!toggle)}
      />
    </Toggle>
  )
}
