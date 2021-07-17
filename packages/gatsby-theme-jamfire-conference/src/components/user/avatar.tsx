// import libs
import React, { useContext } from "react"
import { initialState } from "../../services/theme"
import { useTranslation } from "react-i18next"
import { ProfileProps } from "./_props"

// import components
import { FaUser } from "react-icons/fa"
import { Context } from "../../services/theme"
import { StyledAvatar, Avatar } from "./_styles"
import { Link } from "gatsby"

export default ({ isLoggedIn, isLoading, profile }: ProfileProps) => {
  const { t } = useTranslation()

  const { photoURL, displayName } = profile || {}

  const { setToggleLogin, setToggleDashboard, setNavigation } = useContext(Context)

  if (isLoading) {
    return (
      <StyledAvatar role="region" aria-label={t("regions.dashboard")}>
        <Avatar id="avatar" />
      </StyledAvatar>
    )
  }

  if (!isLoggedIn) {
    return (
      <StyledAvatar role="region" aria-label={t("regions.dashboard")}>
        <Avatar
          id="avatar"
          className="cursor"
          onClick={() => setToggleLogin(true)}
        >
          <FaUser />
        </Avatar>
      </StyledAvatar>
    )
  }

  return (
    <StyledAvatar 
      role="region" 
      aria-label={t("regions.dashboard")}
      onClick={() => setToggleDashboard(true)}  
    >
      <Avatar>
        <img
          role="img"
          aria-label={t("regions.avatarImage")}
          src={photoURL}
          alt={displayName}
          height="40"
          width="40"
        />
      </Avatar>
    </StyledAvatar>
  )
}
