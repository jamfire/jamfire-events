// import libs
import React, { useEffect } from "react"
import { useMap } from "react-leaflet"

// set map bounds
export default ({ bounds }) => {
  const map = useMap()

  useEffect(() => {
    map.fitBounds(bounds, { padding: [10, 10] })
  }, [bounds])

  return <></>
}
