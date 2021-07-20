// import libs
import React, { useContext } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { useTranslation } from "react-i18next"
import { SiteNavigationProps, NavLinkProps } from "./navigation.d"
import cx from "classnames"

// import components
import { Context } from "../../services/theme"
import Toggle from "./toggle"
import Credit from "./credit"
import Copyright from "../site-footer/copyright"

// import styles
import * as styles from "./navigation.module.scss"

export default ({ navigation, config }: SiteNavigationProps) => {
  if (!navigation) {
    return <></>
  }

  const { toggle } = useContext(Context)

  const { i18n } = useTranslation()

  const toggledClass = toggle ? "" : styles.untoggled

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <ul className={toggledClass}>
          {navigation.map((item: any, key: number) => {
            return <NavLink locale={i18n.language} link={item} key={key} />
          })}
        </ul>
      </nav>
      <Toggle />
      <Credit />
      <Copyright config={config} mobile={true} />
    </div>
  )
}

// navlink component
const NavLink = ({ locale, link }: NavLinkProps) => {
  const { activeRoom, roomModal, toggleRoomModal, setPagePath, setToggle } =
    useContext(Context)

  const path = useLocation().pathname

  // check if link is active or partially active
  const navLink = locale === DEFAULT_LOCALE ? link.to : `/${locale}${link.to}`

  let active = path === navLink ? true : false

  let partiallyActive =
    link.partiallyActive && path.indexOf(navLink) >= 0 ? true : false

  let activeClass =
    active === true || partiallyActive === true ? styles.active : ""

  const { t } = useTranslation()

  return (
    <li>
      <a
        className={cx(activeClass, link.className)}
        onClick={e => {
          setToggle(false)
          setPagePath(navLink)

          // check for active room
          if (activeRoom) {
            e.preventDefault()

            // raise the modal
            toggleRoomModal(!roomModal)
          } else {
            if (link.cb !== undefined) {
              link.cb()
            }
            navigate(navLink)
          }
        }}
      >
        {link.icon}
        <div className={styles.label}>{t(link.title)}</div>
      </a>
    </li>
  )
}
