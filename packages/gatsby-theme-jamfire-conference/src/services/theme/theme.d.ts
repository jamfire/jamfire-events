import { ReactNode, Dispatch, SetStateAction } from "react"
import { NavigationProps } from "../../components/site-navigation/navigation"
import { SitePageContext } from "../../gatsby/graphql-types"
import { GeolocationProps } from "../geolocation/geolocation"
import firebase from "firebase/app"

export interface ProviderProps {
  children: ReactNode
  pageContext: SitePageContext
}

export interface InitialState {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  toggleLogin: boolean
  setToggleLogin: Dispatch<SetStateAction<boolean>>
  toggleDashboard: boolean
  setToggleDashboard: Dispatch<SetStateAction<boolean>>
  navigation: NavigationProps[]
  setNavigation: Dispatch<SetStateAction<NavigationProps[]>>
  user: firebase.User | null
  setUser: Dispatch<SetStateAction<firebase.User | null>>
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
