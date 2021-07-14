// import libs
import React, { useContext } from "react"
import { LoginModalProps } from "./_props"
import { useTranslation } from "react-i18next"

// import components
import { Context } from "../Context"
import { Modal } from "../Site/Modal"
import { LoginWrapper } from "./_styles"
import LoginForm from "./LoginForm"
import SocialLogins from "./SocialLogins"

export default ({ config }: LoginModalProps) => {
  const {
    frontmatter: { socialLogin },
  } = config

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
      <LoginWrapper>
        <LoginForm />
        <SocialLogins socialLogin={socialLogin} />
      </LoginWrapper>
    </Modal>
  )
}
