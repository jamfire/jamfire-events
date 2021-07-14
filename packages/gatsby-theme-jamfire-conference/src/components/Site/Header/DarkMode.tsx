// import libs
import React, { useContext } from "react"
import { DarkModeProps } from "./_props"

// import components
import { Context } from "../../Context"
import Switch from "react-switch"
import { Container, Icon } from "./_styles"
import { FaSun, FaMoon } from "react-icons/fa"

// Sun component
const Sun = () => (
  <Icon>
    <FaSun className="sun" />
  </Icon>
)

// Moon component
const Moon = () => (
  <Icon>
    <FaMoon className="moon" />
  </Icon>
)

export default ({ config }: DarkModeProps) => {
  // static query for logo data
  let {
    frontmatter: {
      colors: { darkModeOffColor, darkModeOnColor },
    },
  } = config

  if (!darkModeOnColor) {
    darkModeOffColor = "#ff0050"
  }

  if (!darkModeOffColor) {
    darkModeOffColor = "#ff0050"
  }

  const { darkMode, setDarkMode } = useContext(Context)

  const onColor: string = darkMode ? darkModeOnColor : darkModeOnColor
  const offColor: string = darkMode ? darkModeOffColor : darkModeOffColor

  return (
    <Container>
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
    </Container>
  )
}
