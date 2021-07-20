// import libs
import React, { useContext } from "react"
import { HeaderProps } from "./header.d"

// import components
import { FirebaseContext } from "../../services"
import Avatar from "../avatar"
import Branding from "../branding"
import Topbar from "../topbar"

// import styles
import * as styles from "./header.module.scss"

export default ({ config, headerLogo, title }: HeaderProps) => {
  const { isLoading, isLoggedIn, profile } = useContext(FirebaseContext)

  return (
    <header className={styles.header}>
      <Avatar isLoading={isLoading} isLoggedIn={isLoggedIn} profile={profile} />
      <Branding config={config} headerLogo={headerLogo} title={title} />
      <Topbar isLoading={isLoading} isLoggedIn={isLoggedIn} config={config} />
    </header>
  )
}
