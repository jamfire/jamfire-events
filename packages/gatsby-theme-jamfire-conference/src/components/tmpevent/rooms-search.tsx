// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { RoomsSearchProps } from "./_props"

// import components
import { RoomSearchInput } from "./_styles"

export default ({ setRoomName }: RoomsSearchProps) => {
  const { t } = useTranslation()

  return (
    <RoomSearchInput
      type="text"
      placeholder={t("form.placeholderSearch")}
      onChange={e => setRoomName(e.target.value)}
    />
  )
}
