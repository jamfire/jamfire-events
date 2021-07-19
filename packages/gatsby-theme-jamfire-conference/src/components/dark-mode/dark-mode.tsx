// import libs
import React, { useContext } from "react"
import { DarkModeProps } from "./dark-mode.d"

// import components
import { Context } from "../../services/theme"
import Switch from "react-switch"
import { FaSun, FaMoon } from "react-icons/fa"

// import styles
import * as styles from "./dark-mode.module.scss"

// Sun component
const Sun = () => (
  <div className={styles.icon}>
    <FaSun className={styles.sun} />
  </div>
)

// Moon component
const Moon = () => (
  <div className={styles.icon}>
    <FaMoon className={styles.moon} />
  </div>
)

export default ({ config }: DarkModeProps) => {

  const {
    frontmatter
  } = config || {}

  const {
    colors
  } = frontmatter || {}

  const {
    darkModeOffColor,
    darkModeOnColor
  } = colors || {}

  const offColor = darkModeOffColor || "#ff0050"
  const onColor = darkModeOnColor || "#ff0050"

  const { darkMode, setDarkMode } = useContext(Context)

  return (
    <div className={styles.container}>
      <Switch
        className="dark-mode"
        aria-label="Dark Mode"
        handleDiameter={22}
        onChange={checked => setDarkMode(checked)}
        checked={darkMode}
        offColor={offColor}
        onColor={onColor}
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={<Sun />}
        checkedIcon={<Moon />}
      />
    </div>
  )
}
