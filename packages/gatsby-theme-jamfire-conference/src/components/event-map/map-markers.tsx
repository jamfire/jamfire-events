// import libs
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { divIcon } from "leaflet"
import _ from "lodash"
import { CoordinatesDataItemProps } from "./event-map.d"
import { checkIsClient } from "../../utils/check-is-client"
import firebase from "firebase/app"

// import components
import { Marker } from "react-leaflet"

// import styles
import * as styles from "./map-markers.module.scss"

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
export default ({ data }: firebase.firestore.DocumentData) => {
  const locations = parseLocations(data)

  const isClient = checkIsClient()

  if (!isClient) {
    return null
  }

  return (
    <>
      {locations.map(location => {
        const size = sizeFactor(location[1].length)
        const iconSize = Math.ceil(16 * (size / 100) + 16)

        // users icon component
        const IconMarkup = renderToStaticMarkup(
          <div
            className={styles.iconWrapper}
            style={{
              height: `${iconSize}px`,
              width: `${iconSize}px`,
            }}
          >
            <div className={styles.iconBackground} />
          </div>
        )

        // user marker component
        const IconMarker = divIcon({
          html: IconMarkup,
          className: styles.leafletDivIcon,
          iconSize: [iconSize, iconSize],
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
