import { ReactNode, Dispatch, SetStateAction } from "react"
import { GeolocationProps } from "../geolocation/geolocation"

export interface ProviderProps {
  children: ReactNode
}

export interface InitialState {
  activeRoom: boolean
  setActiveRoom: Dispatch<SetStateAction<boolean>>
  roomModal: boolean
  toggleRoomModal: Dispatch<SetStateAction<boolean>>
  geolocation: null | GeolocationProps
  setGeolocation: Dispatch<SetStateAction<null | GeolocationProps>>
}
