// import libs
import React, { useContext } from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { useTranslation } from "react-i18next"
import { LoginProviderProps, SocialLoginProps } from "./_props"

// import components
import { Context } from "../../services/theme"
import { FirebaseContext } from "../../services"
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa"
import { SocialLogins, LoginButton, Icon } from "./_styles"

export default ({ socialLogin }: SocialLoginProps) => {
  // get firebase auth
  const { setAuthToken } = useContext(FirebaseContext)

  const { setToggleLogin } = useContext(Context)

  const loginWithProvider: (provider: LoginProviderProps) => void =
    provider => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let user = result.user
          setAuthToken(user.refreshToken)
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
      enabled: socialLogin.facebook,
    },
    {
      title: "Twitter",
      className: "twitter",
      icon: <FaTwitter />,
      cb: () => {
        let provider = new firebase.auth.TwitterAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin.twitter,
    },
    {
      title: "Google",
      className: "google",
      icon: <FaGoogle />,
      cb: () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin.google,
    },
    {
      title: "Github",
      className: "github",
      icon: <FaGithub />,
      cb: () => {
        let provider = new firebase.auth.GithubAuthProvider()
        loginWithProvider(provider)
      },
      enabled: socialLogin.github,
    },
  ]

  return (
    <SocialLogins>
      <p>{t("auth.loginSocial")}</p>
      {logins.map((login, idx) => {
        if (!login.enabled) return

        return (
          <LoginButton
            className={login.className}
            key={idx}
            onClick={() => login.cb()}
          >
            <Icon>{login.icon}</Icon>
          </LoginButton>
        )
      })}
    </SocialLogins>
  )
}
