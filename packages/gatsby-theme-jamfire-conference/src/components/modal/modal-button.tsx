// import libs
import React from "react"
import cx from "classnames"
import { ModalButtonProps } from "./modal.d"

// import styles
import * as styles from "./modal-button.module.scss"

export default ({ label, onClick, className }: ModalButtonProps) => {
  return (
    <button className={cx(styles.button, className)} onClick={onClick}>
      {label}
    </button>
  )
}
