// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { RoomsSearchProps } from "./rooms-search.d"

// import components
import * as styles from "./rooms-search.module.scss"

export default ({ setRoomName }: RoomsSearchProps) => {
  const { t } = useTranslation()

  return (
    <input
      className={styles.search}
      type="text"
      placeholder={t("form.placeholderSearch")}
      onChange={e => setRoomName(e.target.value)}
    />
  )
}
