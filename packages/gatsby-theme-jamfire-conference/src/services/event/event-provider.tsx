// import libs
import React, { useState } from "react"
import { ProviderProps } from "./event.d"
import { GeolocationProps } from "../geolocation/geolocation"

// import components
import { EventContext, initialState } from "./event-context"

export default ({ children }: ProviderProps) => {
  // state
  const [activeRoom, setActiveRoom] = useState(initialState.activeRoom)
  const [roomModal, toggleRoomModal] = useState(initialState.roomModal)
  const [geolocation, setGeolocation] = useState<null | GeolocationProps>(null)

  return (
    <EventContext.Provider
      value={{
        activeRoom,
        setActiveRoom,
        roomModal,
        toggleRoomModal,
        geolocation,
        setGeolocation,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}
