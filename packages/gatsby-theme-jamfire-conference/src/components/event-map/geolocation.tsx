// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import Switch from "react-switch"

// import components
import { GeolocationContext } from "../../services/geolocation"

// import styles
import * as styles from "./geolocation.module.scss"

export default () => {
  const { t } = useTranslation()

  const { geolocationEnabled, enableGeolocation } =
    useContext(GeolocationContext)

  return (
    <div className={styles.geolocation}>
      <div className={styles.geolocationHelp}>
        <Switch
          className={styles.geolocationSwitch}
          checked={geolocationEnabled}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={nextValue => enableGeolocation(nextValue)}
          offColor={"#aaa"}
          onColor={"#08BD2C"}
          height={22}
          width={36}
        />
        {t("geolocation.title")}
      </div>
    </div>
  )
}
