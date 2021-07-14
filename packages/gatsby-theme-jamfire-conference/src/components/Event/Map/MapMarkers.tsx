// import libs
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { divIcon } from "leaflet"
import _ from "lodash"
import { CoordinatesDataProps, CoordinatesDataItemProps } from "./_props"
import { checkIsClient } from "../../../utils/check-is-client"

// import components
import { Marker } from "react-leaflet"
import { IconWrapper, IconBackground } from "./_styles"

// parse location data
const parseLocations = (data: [CoordinatesDataItemProps]) => {
  const items = _.groupBy(data, "key")
  return Object.entries(items)
}

// calculate size factor
const sizeFactor = (size: number) => {
  return Math.ceil(size / 10) * 10
}

// map markers
export default ({ data }: CoordinatesDataProps) => {
  const locations = parseLocations(data)

  const isClient = checkIsClient()

  if (!isClient) {
    return <></>
  }

  return (
    <>
      {locations.map(location => {
        const size = sizeFactor(location[1].length)

        // users icon component
        const IconMarkup = renderToStaticMarkup(
          <IconWrapper size={size}>
            <IconBackground />
          </IconWrapper>
        )

        // user marker component
        const IconMarker = divIcon({
          html: IconMarkup,
        })

        return (
          <Marker
            key={location[0]}
            position={[location[1][0].lat, location[1][0].lon]}
            icon={IconMarker}
          />
        )
      })}
    </>
  )
}
