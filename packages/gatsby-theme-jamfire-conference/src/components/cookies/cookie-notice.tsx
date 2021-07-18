// import libs
import React, { useEffect, useState, useContext } from "react"
import { jamfireSet, jamfireGet } from "../../services"
import { useTranslation } from "react-i18next"
import { CookieNoticeProps } from "./cookies"
import cx from "classnames"

// import components
import { Context } from "../../services/theme"
import Markdown from "../markdown"

// import styles
import * as styles from "./cookie-notice.module.scss"

export default ({ cookies, config }: CookieNoticeProps) => {
  const { setToggleCookies } = useContext(Context)

  const [isLoading, setIsLoading] = useState(true)
  const [showConsent, setShowConsent] = useState(true)

  const { t } = useTranslation()

  // determine whether to show cookie notice
  useEffect(() => {
    let cookiesAccepted =
      jamfireGet("cookiesAccepted") === "true" ? "true" : "false"

    if (cookiesAccepted === "true") {
      setIsLoading(false)
      setShowConsent(false)
    } else {
      setIsLoading(false)
      setShowConsent(true)
    }
  }, [])

  // set consent
  const cookiesAccepted = () => {
    jamfireSet("cookiesAccepted", "true")
    setShowConsent(false)
  }

  // cookies still being parsed
  if (isLoading) {
    return <></>
  }

  // user has already accepted cookies
  if (!showConsent) {
    return <></>
  }

  // user has not accepted cookies
  return (
    <div
      className={styles.notice}
      role="region"
      id="cookie-notice"
      aria-label={t("regions.cookiesNotice")}
    >
      <CookieNotification cookies={cookies} config={config} />
      <div className={styles.buttons}>
        <button
          className={cx(styles.button, styles.primary, 'manage-cookies')}
          onClick={() => setToggleCookies(true)}
        >
          {t("cookies.manage")}
        </button>
        <button 
          className={cx(styles.button, "accept-cookies")}
          onClick={cookiesAccepted}
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  )
}

const CookieNotification = ({ cookies, config }: CookieNoticeProps) => (
  <div className={styles.content}>
    <p className={styles.title}>{config.frontmatter?.title}</p>
    <Markdown
      content={cookies.frontmatter?.cookieNotification?.content}
    />
  </div>
)
