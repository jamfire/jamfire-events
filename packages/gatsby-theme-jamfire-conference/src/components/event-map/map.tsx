// import libs
import React, { useContext, useState, useEffect } from "react"
import { MapProps } from "./event-map.d"
import { MapContainer, TileLayer } from "react-leaflet"
import { LatLngBounds } from "leaflet"
import { useTranslation } from "react-i18next"
import { useFirestoreQuery } from "../../services"
import { checkIsClient } from "../../utils/check-is-client"
import { SetBoundsProps, DataProps } from "./event-map"
import firebase from "firebase/app"
import "firebase/firestore"

// import components
import { FirebaseContext } from "../../services"
import { ThemeContext } from "../../services/theme"
import MapBounds from "./map-bounds"
import MapMarkers from "./map-markers"
import Seo from "../seo"
import Loader from "../loader"

// import css
import "leaflet/dist/leaflet.css"
import * as styles from "./map.module.scss"

export default ({ config, event, locale }: MapProps) => {
  const { frontmatter } = event || {}

  const { title, slug } = frontmatter || {}

  const isClient = checkIsClient()

  const { darkMode } = useContext(ThemeContext)

  const [bounds, setBounds]: SetBoundsProps = useState(
    new LatLngBounds([0, 0], [0, 0])
  )
  const [loaded, setLoaded] = useState(false)

  const { firestore } = useContext(FirebaseContext)

  const [data, isLoading] = useFirestoreQuery(
    firestore
      ?.collection("geolocation")
      .where("slug", "==", slug)
      .orderBy("created_at", "desc")
      .limit(500) as firebase.firestore.DocumentData
  )

  useEffect(() => {
    if (!isLoading) {
      setLoaded(true)
    }
  }, [isLoading])

  const { t } = useTranslation()

  useEffect(() => {
    let locations = JSON.parse(JSON.stringify(data))

    let coords: [number, number][] = []

    locations.forEach((location: DataProps) => {
      const lat: number = parseFloat(location?.lat)
      const lon: number = parseFloat(location?.lon)
      coords.push([lat, lon])
    })

    const newBounds = new LatLngBounds(coords)

    setBounds(newBounds)
  }, [data])

  // if loading or an error display the loader
  if (!loaded) {
    return (
      <div className={styles.wrapper}>
        <Loader />
      </div>
    )
  }

  if (isClient && bounds !== null) {
    return (
      <div className={styles.wrapper}>
        <Seo
          config={config}
          activeTitle={`${t("navigation.map")} | ${title}`}
          locale={locale}
        />
        <MapContainer
          className={styles.leafletContainer}
          center={[0, 0]}
          zoom={3}
          attributionControl={false}
          zoomControl={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          dragging={false}
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
        </MapContainer>
      </div>
    )
  }

  return null
}
