// import libs
import React from "react"
import { FooterProps } from "./footer.d"

// import components
import Copyright from "./copyright"

// import styles
import * as styles from "./footer.module.scss"

export const Footer = ({ config }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <Copyright config={config} />
    </footer>
  )
}

export default Footer
