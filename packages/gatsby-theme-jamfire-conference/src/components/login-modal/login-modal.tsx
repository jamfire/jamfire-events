// import libs
import React, { useContext } from "react"
import { LoginModalProps } from "./login-modal.d"
import { useTranslation } from "react-i18next"

// import components
import { Context } from "../../services/theme"
import { Modal } from "../modal"
import LoginForm from "../login-form"
import SocialLogins from "../social-logins"

// import styles
import * as styles from "./login-modal.module.scss"

export default ({ config }: LoginModalProps) => {
  const {
    frontmatter
  } = config || {}

  const {
    socialLogin
  } = frontmatter || {}

  const { toggleLogin, setToggleLogin } = useContext(Context)

  const { t } = useTranslation()

  return (
    <Modal
      id="login-modal"
      config={config}
      title={t("auth.login")}
      isActive={toggleLogin}
      setIsActive={setToggleLogin}
    >
      <div className={styles.wrapper}>
        <LoginForm />
        <SocialLogins socialLogin={socialLogin} />
      </div>
    </Modal>
  )
}
