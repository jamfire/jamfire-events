// import libs
import { Dispatch, SetStateAction } from "react"
import { MarkdownRemark } from "../../gatsby/graphql-types"
import firebase from "firebase/app"

export type InitialState = {
  geolocation: GeolocationProps | null
  geolocationEnabled: boolean
  modal: boolean
}

export type GeolocationModalProps = {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  enableGeolocation: (enable: boolean) => void
  config: MarkdownRemark
}

export type GeolocationProps = {
  created_at: firebase.firestore.Timestamp
  slug: string
  lat: string
  lon: string
}
