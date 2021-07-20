// import libs
import React, { useContext } from "react"
import { DashboardModalProps } from "./dashboard-modal.d"
import { useTranslation } from "react-i18next"

// import components
import { FirebaseContext } from "../../services/firebase"
import { ThemeContext } from "../../services/theme"
import { Modal } from "../modal"

// import styles
import * as styles from "./dashboard-modal.module.scss"

export default ({ config }: DashboardModalProps) => {
  const { toggleDashboard, setToggleDashboard, setToggleCookies } =
    useContext(ThemeContext)

  const { isLoading, isLoggedIn, profile, logout } = useContext(FirebaseContext)

  const { t } = useTranslation()

  if (isLoading || !isLoggedIn || !profile) {
    return null
  }

  return (
    <Modal
      id="login-modal"
      config={config}
      title={t("dashboard.title")}
      isActive={toggleDashboard}
      setIsActive={setToggleDashboard}
    >
      <div className={styles.grid}>
        <div className={styles.profile}>
          <div className={styles.profileHeader}>
            <img
              src={profile?.photoURL || ""}
              alt={profile?.displayName || ""}
            />
            <div className={styles.details}>
              <div className={styles.displayName}>{profile.displayName}</div>
              <div className={styles.email}>{profile.email}</div>
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <ul>
            <li>
              <button onClick={() => logout()}>{t("auth.logout")}</button>
            </li>
            <li>
              <button
                onClick={() => {
                  setToggleDashboard(false)
                  setToggleCookies(true)
                }}
              >
                {t("dashboard.cookies")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}
