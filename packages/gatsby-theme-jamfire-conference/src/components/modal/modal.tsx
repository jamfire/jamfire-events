// import libs
import React from "react"
import { ModalProps } from "./_props"

// import components
import ClickOutside from "./click-outside"
import { ModalWrapper, Modal, ModalContent } from "./_styles"
import { ModalTitle } from "."

export default ({
  children,
  config,
  id,
  title,
  isActive,
  setIsActive,
}: ModalProps) => {
  // modal is not active
  if (!isActive) {
    return <></>
  }

  // modal is active
  return (
    <ModalWrapper>
      <ClickOutside
        onClick={() => {
          setIsActive(false)
        }}
      >
        <Modal id={id}>
          <ModalTitle title={title} config={config} />
          <ModalContent>{children}</ModalContent>
        </Modal>
      </ClickOutside>
    </ModalWrapper>
  )
}
