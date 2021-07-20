// import libs
import React, { useContext, useState, useEffect } from "react"
import { jamfireSet, jamfireGet } from "../../services"
import { checkIsClient } from "../../utils/check-is-client"
import { GeolocationProviderProps } from "./geolocation"
import firebase from "firebase/app"

// import components
import { EventContext } from "../event"
import { GeolocationContext, initialState } from "./"
import { FirebaseContext } from "../"
import GeolocationModal from "./geolocation-modal"

export default ({
  children,
  config,
  pageContext,
  providerEnabled,
}: GeolocationProviderProps) => {
  // provider not enabled, return only the children
  if (!providerEnabled) {
    return <>{children}</>
  }

  const { geolocation, setGeolocation } = useContext(EventContext)

  // state
  const [geolocationEnabled, setGeolocationEnabled] = useState(
    initialState.geolocationEnabled
  )
  const [modal, toggleModal] = useState(initialState.modal)

  // is client
  const isClient = checkIsClient()

  // firestore && user information
  const { firestore, isLoading } = useContext(FirebaseContext)

  const geolocationSetting = `enableGeolocation-${pageContext.slug}`

  useEffect(() => {
    const geoEnabled = jamfireGet(geolocationSetting)
    if (geoEnabled == null) {
      toggleModal(true)
    } else {
      setGeolocationEnabled(geoEnabled === "true" ? true : false)
    }
  }, [])

  useEffect(() => {
    if (isClient && !isLoading && geolocation === null && geolocationEnabled) {
      let url = "https://weatherapi-com.p.rapidapi.com/ip.json?q=auto:ip"

      let headers = new Headers()
      headers.append("x-rapidapi-key", `${process.env.GATSBY_RAPID_API_KEY}`)
      headers.append("x-rapidapi-host", "weatherapi-com.p.rapidapi.com")

      fetch(url, { method: "GET", headers: headers })
        .then(res => res.json())
        .then(response => {
          const geolocationData = {
            created_at: firebase.firestore.Timestamp.now(),
            slug: pageContext.slug,
            lat: response.lat,
            lon: response.lon,
            key: response.geoname_id,
          }

          setGeolocation(geolocationData)

          firestore
            ?.collection("geolocation")
            .add(geolocationData)
            .then(docRef => {
              console.log("Document written with ID: ", docRef.id)
            })
            .catch(error => {
              console.log("Error adding document: ", error)
            })
        })
        .catch(error => {
          console.log(error)
          setGeolocation(null)
        })
    }
  }, [geolocationEnabled])

  // enable geolocation
  const enableGeolocation: (enable: boolean) => void = enable => {
    setGeolocationEnabled(enable)
    jamfireSet(geolocationSetting, enable ? "true" : "false")
    toggleModal(false)
  }

  return (
    <GeolocationContext.Provider
      value={{
        geolocation,
        geolocationEnabled,
        modal,
      }}
    >
      <GeolocationModal
        config={config}
        isActive={modal}
        setIsActive={toggleModal}
        enableGeolocation={enableGeolocation}
      />
      {children}
    </GeolocationContext.Provider>
  )
}
