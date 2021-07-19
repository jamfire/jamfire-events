// import libs
import React from "react"
import loadable from "@loadable/component"
import { FooterProps } from "./footer.d"

// import components
import Copyright from "./copyright"

// import styles
import * as styles from "./footer.module.scss"

// loadable components
const Tracker = loadable(() => import("../event/tracker"))

export const Footer = ({ config, event }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {event && (
        <div className={styles.tracker}>
          <Tracker event={event} />
        </div>
      )}
      <Copyright config={config} />
    </footer>
  )
}

export default Footer
