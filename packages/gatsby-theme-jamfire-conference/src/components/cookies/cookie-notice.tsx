// import libs
import React, { useEffect, useState, useContext } from "react"
import { jamfireSet, jamfireGet } from "../../services"
import { useTranslation } from "react-i18next"
import { CookieNoticeProps } from "./_props"

// import components
import { Context } from "../context"
import Markdown from "../markdown"
import {
  CookieNotice,
  CookieNoticeTitle,
  CookieContent,
  Buttons,
  Button,
} from "./_styles"

export default ({ cookies, config }: CookieNoticeProps) => {
  const { setToggleCookies } = useContext(Context)

  const [isLoading, setIsLoading] = useState(true)
  const [showConsent, setShowConsent] = useState(true)

  const { t } = useTranslation()

  // static query for logo data
  const {
    frontmatter: { cookieNotification },
  } = cookies

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
    <CookieNotice
      role="region"
      id="cookie-notice"
      aria-label={t("regions.cookiesNotice")}
    >
      <CookieNotification cookies={cookies} config={config} />
      <Buttons>
        <Button
          className="manage-cookies"
          primary={true}
          onClick={() => setToggleCookies(true)}
        >
          {t("cookies.manage")}
        </Button>
        <Button className="accept-cookies" onClick={cookiesAccepted}>
          {t("cookies.accept")}
        </Button>
      </Buttons>
    </CookieNotice>
  )
}

const CookieNotification = ({ cookies, config }) => (
  <CookieContent>
    <CookieNoticeTitle>{config.frontmatter.title}</CookieNoticeTitle>
    <Markdown
      className="cookie-notice-content"
      content={cookies.frontmatter.cookieNotification.content}
    />
  </CookieContent>
)
