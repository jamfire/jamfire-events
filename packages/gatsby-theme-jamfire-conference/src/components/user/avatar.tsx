// import libs
import React, { useContext } from "react"
import { initialState } from "../../services/theme"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { useTranslation } from "react-i18next"
import { ProfileProps } from "./_props"

// import components
import { FaUser } from "react-icons/fa"
import { Context } from "../../services/theme"
import { StyledAvatar, Avatar } from "./_styles"
import { Link } from "gatsby"

export default ({ isLoggedIn, isLoading, profile }: ProfileProps) => {
  const { t, i18n } = useTranslation()

  const { photoURL, displayName } = profile || {}

  const { setToggleLogin, setNavigation } = useContext(Context)

  const dashboardUrl: string =
    DEFAULT_LOCALE === i18n.language 
      ? `/dashboard/` 
      : `/${i18n.language}/dashboard/`

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
    <StyledAvatar role="region" aria-label={t("regions.dashboard")}>
      <Link
        id="avatar"
        to={dashboardUrl}
        onClick={() => {
          setNavigation(initialState.navigation)
        }}
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
      </Link>
    </StyledAvatar>
  )
}
