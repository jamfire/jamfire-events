// import libs
import React, { useContext } from "react"
import { HeaderProps } from "./_props"

// import components
import { FirebaseContext } from "../../../services"
import { StyledHeader } from "./_styles"
import Avatar from "../../User/Avatar"
import Branding from "./Branding"
import Topbar from "./Topbar"

export default ({ config, headerLogo, title }: HeaderProps) => {
  const { isLoading, isLoggedIn, profile } = useContext(FirebaseContext)

  return (
    <StyledHeader>
      <Avatar isLoading={isLoading} isLoggedIn={isLoggedIn} profile={profile} />
      <Branding config={config} headerLogo={headerLogo} title={title} />
      <Topbar isLoading={isLoading} isLoggedIn={isLoggedIn} config={config} />
    </StyledHeader>
  )
}
