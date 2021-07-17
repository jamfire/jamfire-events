import { ReactNode, Dispatch, SetStateAction } from "react"
import { NavigationProps } from "../../components/site-navigation/_props"
import { SitePageContext } from "../../gatsby/graphql-types"
import firebase from "firebase/app"

export interface ProviderProps {
  children: ReactNode
  pageContext: SitePageContext
}

export type InitialState = {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  toggleLogin: boolean
  setToggleLogin: Dispatch<SetStateAction<boolean>>
  toggleDashboard: boolean,
  setToggleDashboard: Dispatch<SetStateAction<boolean>>
  navigation: NavigationProps[]
  setNavigation: Dispatch<SetStateAction<NavigationProps[]>>
  activeRoom: boolean
  setActiveRoom: Dispatch<SetStateAction<boolean>>
  roomModal: boolean
  toggleRoomModal: Dispatch<SetStateAction<boolean>>
  user: firebase.User | null
  setUser: Dispatch<SetStateAction<firebase.User | null>>
  chats: any
  setChats: Dispatch<SetStateAction<any>>
  pagePath: string
  setPagePath: Dispatch<SetStateAction<string>>
  toggleCookies: boolean
  setToggleCookies: Dispatch<SetStateAction<boolean>>
  enableAnalytics: boolean
  setEnableAnalytics: Dispatch<SetStateAction<boolean>>
  toggleLocale: boolean
  setToggleLocale: Dispatch<SetStateAction<boolean>>
  localesEnabled: boolean
}
