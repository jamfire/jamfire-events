// import libs
import React, { useContext } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { useTranslation } from "react-i18next"
import { LoginProviderProps, SocialLoginProps } from "./social-logins.d"
import cx from "classnames"

// import components
import { ThemeContext } from "../../services/theme"
import { FirebaseContext } from "../../services"
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa"

// import styles
import * as styles from "./social-logins.module.scss"

export default ({ socialLogin }: SocialLoginProps) => {
  // get firebase auth
  const { setAuthToken } = useContext(FirebaseContext)

  const { setToggleLogin } = useContext(ThemeContext)

  const loginWithProvider: (provider: LoginProviderProps) => void =
    provider => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let user = result.user
          setAuthToken(user?.refreshToken || null)
          setToggleLogin(false)
        })
        .catch(error => {
          console.log(error)
          setAuthToken(null)
        })
    }

  const { t } = useTranslation()

  // enabled logins
  const logins = [
    {
      title: "Facebook",
      className: "facebook",
      icon: <FaFacebookF />,
      cb: () => {
        let provider = new firebase.auth.FacebookAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin?.facebook,
    },
    {
      title: "Twitter",
      className: "twitter",
      icon: <FaTwitter />,
      cb: () => {
        let provider = new firebase.auth.TwitterAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin?.twitter,
    },
    {
      title: "Google",
      className: "google",
      icon: <FaGoogle />,
      cb: () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin?.google,
    },
    {
      title: "Github",
      className: "github",
      icon: <FaGithub />,
      cb: () => {
        let provider = new firebase.auth.GithubAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin?.github,
    },
  ]

  return (
    <div className={styles.socialLogins}>
      <p>{t("auth.loginSocial")}</p>
      {logins.map((login, idx) => {
        if (!login.enabled) return

        return (
          <button
            className={cx(styles.loginButton, `${login.className}`)}
            key={idx}
            onClick={() => login.cb()}
          >
            <div className={styles.icon}>{login.icon}</div>
          </button>
        )
      })}
    </div>
  )
}
