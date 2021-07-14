// import libs
import { createContext } from "react"
import { InitialState } from "./_props"

// initial state
export const initialState: InitialState = {
  geolocationEnabled: false,
  modal: false,
}

export const GeolocationContext = createContext(initialState)

export default GeolocationContext
