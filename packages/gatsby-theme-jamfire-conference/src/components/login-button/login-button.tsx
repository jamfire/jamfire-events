// import libs
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { LoginButtonProps } from "./login-button.d"

// import components
import { FirebaseContext } from "../../services"
import { Context } from "../../services/theme"

// import styles
import * as styles from "./login-button.module.scss"

export default ({ isLoading, isLoggedIn }: LoginButtonProps) => {
  const { setToggleLogin } = useContext(Context)

  const { logout } = useContext(FirebaseContext)

  const { t } = useTranslation()

  if (isLoading) {
    return <div className={styles.loginButton} />
  }

  return (
    <div className={styles.loginButton}>
      {isLoggedIn ? (
        <button
          role="button"
          aria-label={t("auth.logout")}
          className={styles.logout}
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
          className={styles.login}
          onClick={() => {
            setToggleLogin(true)
          }}
        >
          {t("auth.login")}
        </button>
      )}
    </div>
  )
}
