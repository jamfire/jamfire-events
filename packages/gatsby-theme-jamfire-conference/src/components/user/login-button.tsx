// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { UserProps } from "./_props"

// import components
import { FirebaseContext } from "../../services"
import { Context } from "../context"
import { StyledUser } from "./_styles"

export default ({ isLoading, isLoggedIn }: UserProps) => {
  const { setToggleLogin } = useContext(Context)

  const { logout } = useContext(FirebaseContext)

  const { t } = useTranslation()

  if (isLoading) {
    return <StyledUser />
  }

  return (
    <StyledUser>
      {isLoggedIn ? (
        <button
          role="button"
          aria-label={t("auth.logout")}
          className="logout"
          onClick={() => {
            logout()
          }}
        >
          {t("auth.logout")}
        </button>
      ) : (
        <button
          role="button"
          aria-label={t("auth.login")}
          className="login"
          onClick={() => {
            setToggleLogin(true)
          }}
        >
          {t("auth.login")}
        </button>
      )}
    </StyledUser>
  )
}
