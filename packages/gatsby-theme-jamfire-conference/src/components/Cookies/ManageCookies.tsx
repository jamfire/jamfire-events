// import libs
import React, { useContext, useState, useEffect } from "react"
import { jamfireSet, jamfireGet } from "../../services"
import { useTranslation } from "react-i18next"

// import components
import { Context } from "../Context"
import Switch from "react-switch"
import { Modal } from "../Site/Modal"
import {
  Inner,
  Grid,
  CookiesList,
  Content,
  ContentHeader,
  Footer,
  Button,
} from "./_styles"

export default ({ cookies, config }) => {
  // context
  const { toggleCookies, setToggleCookies, setEnableAnalytics } =
    useContext(Context)

  // state
  const [isLoading, setIsLoading] = useState(true)
  const [currentCookie, setCurrentCookie] = useState("necessaryCookies")
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  // translation
  const { t } = useTranslation()

  // set state on load
  useEffect(() => {
    let analyticsEnabled = jamfireGet("analyticsEnabled")
    setAnalyticsEnabled(analyticsEnabled === "true" ? true : false) // component state
    setEnableAnalytics(analyticsEnabled === "true" ? true : false) // provider context
    setIsLoading(false)
  }, [])

  // get cookie information
  const {
    frontmatter: { necessaryCookies, analyticsCookies },
  } = cookies

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

  // handle cookie change
  const handleCookie = (nextValue: boolean) => {
    cookieToggles[currentCookie].setCookie(!nextValue)
  }

  if (isLoading) {
    return <></>
  }

  return (
    <Modal
      id="manage-cookies"
      title={t("cookies.preferences")}
      isActive={toggleCookies}
      setIsActive={setToggleCookies}
      config={config}
    >
      <Inner>
        <Grid>
          <CookiesList>
            <ul>
              <li>
                <button
                  className={activeClass("necessaryCookies")}
                  onClick={() => setCurrentCookie("necessaryCookies")}
                >
                  {necessaryCookies.title}
                </button>
              </li>
              <li>
                <button
                  className={activeClass("analyticsCookies")}
                  onClick={() => setCurrentCookie("analyticsCookies")}
                >
                  {analyticsCookies.title}
                </button>
              </li>
            </ul>
          </CookiesList>
          <Content className="manage-cookies-content">
            <ContentHeader>
              <h3>{cookies.frontmatter[currentCookie].title}</h3>
              {currentCookie !== "necessaryCookies" && (
                <Switch
                  className={`${currentCookie}-input`}
                  checked={cookieToggles[currentCookie].value}
                  onChange={handleCookie}
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
            </ContentHeader>
            <div
              dangerouslySetInnerHTML={{
                __html: cookies.frontmatter[currentCookie].content,
              }}
            />
          </Content>
        </Grid>
        <Footer>
          <Button primary={true} onClick={() => confirmChoices()}>
            {t("cookies.confirm")}
          </Button>
        </Footer>
      </Inner>
    </Modal>
  )
}
