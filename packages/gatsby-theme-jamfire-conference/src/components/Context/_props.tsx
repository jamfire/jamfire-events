import { ReactNode, Dispatch, SetStateAction } from "react"
import { NavigationProps } from "../Site/Navigation/_props"
import { GeolocationProps } from "../../services/geolocation/_props"
import { SitePageContext } from "../../gatsby/graphqlTypes"
import firebase from "firebase/app"

export interface ProviderProps {
  children: ReactNode
  pageContext: SitePageContext
}

export type InitialState = {
  darkMode: boolean
  setDarkMode?: Dispatch<SetStateAction<boolean>>
  locale?: string
  setLocale?: Dispatch<SetStateAction<string>>
  toggle: boolean
  setToggle?: Dispatch<SetStateAction<boolean>>
  toggleLogin: boolean
  setToggleLogin?: Dispatch<SetStateAction<boolean>>
  navigation: NavigationProps[]
  setNavigation?: Dispatch<SetStateAction<NavigationProps[]>>
  activeRoom: boolean
  setActiveRoom?: Dispatch<SetStateAction<boolean>>
  roomModal: boolean
  toggleRoomModal?: Dispatch<SetStateAction<boolean>>
  user?: firebase.User
  setUser?: Dispatch<SetStateAction<firebase.User>>
  chats: any
  setChats?: Dispatch<SetStateAction<any>>
  pagePath: string
  setPagePath?: Dispatch<SetStateAction<string>>
  toggleCookies: boolean
  setToggleCookies?: Dispatch<SetStateAction<boolean>>
  enableAnalytics: boolean
  setEnableAnalytics?: Dispatch<SetStateAction<boolean>>
  loaded: boolean
  setLoaded?: Dispatch<SetStateAction<boolean>>
  toggleLocale: boolean
  setToggleLocale: Dispatch<SetStateAction<boolean>>
  localesEnabled: boolean
  geolocation: GeolocationProps | null
  setGeolocation: Dispatch<SetStateAction<GeolocationProps>>
}
