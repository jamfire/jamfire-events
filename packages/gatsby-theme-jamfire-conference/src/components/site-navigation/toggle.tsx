// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

// import components
import { ThemeContext } from "../../services/theme"
import { Twirl as Hamburger } from "hamburger-react"

// import styles
import * as styles from "./toggle.module.scss"

export default () => {
  const { toggle, setToggle, darkMode } = useContext(ThemeContext)

  const toggleColor: string = darkMode ? "#aaa" : "#333"

  const { t } = useTranslation()

  return (
    <div className={styles.toggle}>
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
    </div>
  )
}
