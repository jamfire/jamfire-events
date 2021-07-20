// import libs
import { Dispatch, SetStateAction } from "react"
import { MarkdownRemark } from "../../gatsby/graphql-types"
import firebase from "firebase/app"
import { SitePageContext } from "./graphql-types"

export interface InitialState {
  geolocation?: GeolocationProps | null
  geolocationEnabled: boolean
  modal: boolean
}

export interface GeolocationProviderProps {
  children: React.ReactNode
  config: MarkdownRemark
  pageContext: SitePageContext
  providerEnabled?: boolean
}

export interface GeolocationModalProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  enableGeolocation: (enable: boolean) => void
  config: MarkdownRemark
}

export interface GeolocationProps {
  created_at: firebase.firestore.Timestamp
  slug: string
  lat: string
  lon: string
}
