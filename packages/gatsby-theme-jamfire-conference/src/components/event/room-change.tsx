// import libs
import React, { useContext } from "react"
import { navigate } from "gatsby"
import { useTranslation } from "react-i18next"

// import components
import { Context } from "../context"
import { Modal, ModalButton } from "../site/modal"

export default ({ config }) => {
  const { roomModal, toggleRoomModal, setActiveRoom, pagePath } =
    useContext(Context)

  const { t } = useTranslation()

  // modal is active
  return (
    <Modal
      id="room-change-modal"
      isActive={roomModal}
      title={t("event.rooms.title")}
      setIsActive={toggleRoomModal}
      config={config}
    >
      <>
        <p>{t("event.rooms.alert")}</p>
        <ModalButton
          className="confirm"
          label={t("buttons.yes")}
          onClick={() => {
            console.log("leave")
            toggleRoomModal(!roomModal)
            setActiveRoom(false)
            navigate(pagePath)
          }}
        />
        <ModalButton
          className="cancel"
          label={t("buttons.cancel")}
          onClick={() => {
            console.log("cancel")
            toggleRoomModal(!roomModal)
          }}
        />
      </>
    </Modal>
  )
}
