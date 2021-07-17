// import libs
import * as React from "react"
import { createContext } from "react"
import { LOCALES } from "../../utils/constants"
import { InitialState } from "./_props"

// import components
import { FaHome, FaCalendarAlt } from "react-icons/fa"

// initial state
export const initialState: InitialState = {
  darkMode: false,
  setDarkMode: () => true || false,
  toggle: false,
  setToggle: () => true || false,
  user: null,
  setUser: () => null,
  toggleLogin: false,
  setToggleLogin: () => true || false,
  navigation: [
    {
      title: "navigation.home",
      to: "/",
      className: "home-link",
      icon: <FaHome />,
      partiallyActive: false,
      translate: true,
    },
    {
      title: "navigation.allEvents",
      to: "/events/",
      className: "all-events-link",
      icon: <FaCalendarAlt />,
      partiallyActive: true,
      translate: true,
    },
  ],
  setNavigation: () => {},
  activeRoom: false,
  setActiveRoom: () => null,
  roomModal: false,
  toggleRoomModal: () => true || false,
  chats: [],
  setChats: () => {},
  pagePath: "/",
  setPagePath: () => null,
  toggleCookies: false,
  setToggleCookies: () => true || false,
  enableAnalytics: false,
  setEnableAnalytics: () => true || false,
  toggleLocale: false,
  setToggleLocale: () => true || false,
  localesEnabled: LOCALES.length > 1 ? true : false,
}

export const ThemeContext = createContext(initialState)

export default ThemeContext
