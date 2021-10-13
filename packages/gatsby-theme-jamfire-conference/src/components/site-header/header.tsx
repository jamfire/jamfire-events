// import libs
import React, { useContext } from "react"
import { HeaderProps } from "./header.d"
import loadable from "@loadable/component"

// import components
import { FirebaseContext } from "../../services"
import Avatar from "../avatar"
import Branding from "../branding"
import Topbar from "../topbar"

// loadable components
const Tracker = loadable(() => import("../event-tracker"))

// import styles
import * as styles from "./header.module.scss"

export default ({ config, event, headerLogo, title, locale }: HeaderProps) => {
  const { isLoading, isLoggedIn, profile } = useContext(FirebaseContext)

  return (
    <header className={styles.header}>
      <Avatar isLoading={isLoading} isLoggedIn={isLoggedIn} profile={profile} />
      <Branding config={config} headerLogo={headerLogo} title={title} />
      <Topbar isLoading={isLoading} isLoggedIn={isLoggedIn} config={config} />
      {event && <Tracker event={event} locale={locale} />}
    </header>
  )
}
