// import libs
import React, { useContext, useState, useEffect } from "react"
import { jamfireSet, jamfireGet } from "../../services"
import { useTranslation } from "react-i18next"
import { ManageCookiesProps } from "./cookies"
import cx from "classnames"

// import components
import { ThemeContext } from "../../services/theme"
import Switch from "react-switch"
import { Modal } from "../modal"

// import styles
import * as styles from "./manage-cookies.module.scss"
import * as noticeStyles from "./cookie-notice.module.scss"

export default ({ cookies, config }: ManageCookiesProps) => {
  // context
  const { toggleCookies, setToggleCookies, setEnableAnalytics } =
    useContext(ThemeContext)

  // state
  const [isLoading, setIsLoading] = useState(true)
  const [currentCookie, setCurrentCookie] = useState("necessaryCookies")
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  // translation
  const { t } = useTranslation()

  // get cookie information
  const { frontmatter } = cookies || {}

  const { necessaryCookies, analyticsCookies } = frontmatter || {}

  // set state on load
  useEffect(() => {
    let analyticsEnabled = jamfireGet("analyticsEnabled")

    if (analyticsEnabled === null) {
      analyticsEnabled = analyticsCookies?.enabled ? "true" : "false"
    }

    setAnalyticsEnabled(analyticsEnabled === "true" ? true : false) // component state
    setIsLoading(false)
  }, [])

  // active class name
  const activeClass = (cookieName: string) => {
    if (cookieName === currentCookie) {
      return `${cookieName} active`
    }
    return `${cookieName} inactive`
  }

  // cookie toggles
  const cookieToggles = {
    analyticsCookies: {
      value: analyticsEnabled,
      setCookie: (value: boolean) => {
        setAnalyticsEnabled(!value)
      },
    },
  }

  // confirm choices
  const confirmChoices = () => {
    jamfireSet("analyticsEnabled", analyticsEnabled ? "true" : "false")
    setEnableAnalytics(analyticsEnabled)
    setToggleCookies(false)
  }

  if (isLoading) {
    return <></>
  }

  let cookieData = {
    title: "",
    content: "",
    enabled: true,
  }

  if (currentCookie === "necessaryCookies") {
    cookieData = JSON.parse(JSON.stringify(necessaryCookies))
    cookieData.enabled = true
  }

  if (currentCookie === "analyticsCookies") {
    cookieData = JSON.parse(JSON.stringify(analyticsCookies))
  }

  return (
    <Modal
      id="manage-cookies"
      title={t("cookies.preferences")}
      isActive={toggleCookies}
      setIsActive={setToggleCookies}
      config={config}
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.list}>
            <ul>
              <li>
                <button
                  className={activeClass("necessaryCookies")}
                  onClick={() => setCurrentCookie("necessaryCookies")}
                >
                  {necessaryCookies?.title}
                </button>
              </li>
              <li>
                <button
                  className={activeClass("analyticsCookies")}
                  onClick={() => setCurrentCookie("analyticsCookies")}
                >
                  {analyticsCookies?.title}
                </button>
              </li>
            </ul>
          </div>
          <div className={cx(styles.content, "manage-cookies-content")}>
            <header className={styles.header}>
              <h3>{cookieData.title}</h3>
              {currentCookie === "analyticsCookies" && (
                <Switch
                  className={`${currentCookie}-input`}
                  checked={analyticsEnabled}
                  onChange={nextValue => setAnalyticsEnabled(nextValue)}
                  height={22}
                  width={46}
                />
              )}
              {currentCookie === "necessaryCookies" && (
                <Switch
                  className={`${currentCookie}-input`}
                  checked={currentCookie === "necessaryCookies"}
                  onChange={() => {}}
                  disabled
                  height={22}
                  width={46}
                />
              )}
            </header>
            <div
              dangerouslySetInnerHTML={{
                __html: cookieData.content,
              }}
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <button
            className={cx(noticeStyles.button, noticeStyles.primary)}
            onClick={() => confirmChoices()}
          >
            {t("cookies.confirm")}
          </button>
        </footer>
      </div>
    </Modal>
  )
}
