// import libs
import { createContext } from "react"
import { InitialState } from "./event.d"

// initial state
export const initialState: InitialState = {
  activeRoom: false,
  setActiveRoom: () => null,
  roomModal: false,
  toggleRoomModal: () => true || false,
  geolocation: null,
  setGeolocation: () => null,
}

export const EventContext = createContext(initialState)

export default EventContext
