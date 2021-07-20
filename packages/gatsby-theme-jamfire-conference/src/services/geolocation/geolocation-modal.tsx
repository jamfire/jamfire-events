// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { GeolocationModalProps } from "./geolocation"

// import components
import { Modal, ModalButton } from "../../components/modal"

export default ({
  isActive,
  config,
  setIsActive,
  enableGeolocation,
}: GeolocationModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      id="geolocation-modal"
      title={t("geolocation.title")}
      isActive={isActive}
      setIsActive={setIsActive}
      config={config}
    >
      <>
        <p>{t("geolocation.content")}</p>
        <ModalButton
          className="enable"
          label={t("geolocation.enable")}
          onClick={() => enableGeolocation(true)}
        />
        <ModalButton
          className="deny"
          label={t("geolocation.deny")}
          onClick={() => enableGeolocation(false)}
        />
      </>
    </Modal>
  )
}
