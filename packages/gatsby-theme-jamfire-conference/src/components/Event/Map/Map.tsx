// import libs
import React, { useContext, useState, useEffect } from "react"
import { ClientProps } from "../_props"
import { MapContainer, TileLayer } from "react-leaflet"
import { useTranslation } from "react-i18next"
import { useFirestoreQuery } from "../../../services"
import { checkIsClient } from "../../../utils/check-is-client"

// import components
import { FirebaseContext } from "../../../services"
import { Context } from "../../Context"
import { MapWrapper } from "./_styles"
import MapBounds from "./MapBounds"
import MapMarkers from "./MapMarkers"
import Seo from "../../Site/Seo"
import Loader from "../../Site/Loader"

// import css
import "leaflet/dist/leaflet.css"

export default ({ config, event, locale, user }: ClientProps) => {
  const {
    frontmatter: { title, slug },
  } = event

  const isClient = checkIsClient()

  const { darkMode } = useContext(Context)

  const [bounds, setBounds] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const { firestore } = useContext(FirebaseContext)

  const [data, isLoading, error] = useFirestoreQuery(
    firestore
      .collection("geolocation")
      .where("slug", "==", slug)
      .orderBy("created_at", "desc")
      .limit(1000)
  )

  useEffect(() => {
    if (!isLoading) {
      setLoaded(true)
    }
  }, [isLoading])

  const { t } = useTranslation()

  useEffect(() => {
    let locations = []

    if (data.length > 0) {
      data.length > 0 &&
        data.forEach(location => {
          locations.push([location.lat, location.lon])
        })

      setBounds(locations)
    }
  }, [data])

  // if loading or an error display the loader
  if (!loaded) {
    return (
      <MapWrapper>
        <Loader />
      </MapWrapper>
    )
  }

  if (isClient && bounds !== null) {
    return (
      <MapWrapper>
        <Seo
          config={config}
          activeTitle={`${t("navigation.map")} | ${title}`}
        />
        <MapContainer
          center={[0, 0]}
          zoom={3}
          attributionControl={false}
          // zoomControl={false}
          // doubleClickZoom={false}
          // scrollWheelZoom={false}
          // dragging={false}
          animate={true}
          easeLinearity={0.35}
        >
          {!darkMode && (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
          )}
          {darkMode && (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
          )}
          <MapBounds bounds={bounds} />
          <MapMarkers data={data} />
          {/* {data.map((location, idx: number) => {

              return(
                <Marker 
                  key={idx}
                  position={[ location.lat, location.lon]} 
                  icon={UserMarker}
                />
              )
            })} */}
        </MapContainer>
      </MapWrapper>
    )
  }

  return null
}
