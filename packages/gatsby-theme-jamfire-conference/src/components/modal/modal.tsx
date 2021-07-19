// import libs
import React from "react"
import { ModalProps } from "./modal.d"

// import components
import ClickOutside from "./click-outside"
import ModalTitle from "./modal-title"

// import styles
import * as styles from "./modal.module.scss"

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
    <div className={styles.wrapper}>
      <ClickOutside
        onClick={() => {
          setIsActive(false)
        }}
      >
        <div className={styles.modal} id={id}>
          <ModalTitle title={title} config={config} />
          <div className={styles.content}>{children}</div>
        </div>
      </ClickOutside>
    </div>
  )
}
