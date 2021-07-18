// import libs
import React, { useEffect } from "react"
import { useMap } from "react-leaflet"
import { checkIsClient } from "../../utils/check-is-client"
import { BoundsProps } from "./event-map"

// set map bounds
export default ({ bounds }: BoundsProps) => {

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
