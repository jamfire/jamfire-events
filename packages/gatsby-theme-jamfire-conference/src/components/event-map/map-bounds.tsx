// import libs
import React, { useEffect } from "react"
import { useMap } from "react-leaflet"
import { checkIsClient } from "../../utils/check-is-client"

// set map bounds
export default ({ bounds }) => {

  const isClient = checkIsClient()

  if (!isClient) {
    return <></>
  }

  const map = useMap()

  useEffect(() => {
    map.fitBounds(bounds, { padding: [10, 10] })
  }, [bounds])

  return <></>
}
