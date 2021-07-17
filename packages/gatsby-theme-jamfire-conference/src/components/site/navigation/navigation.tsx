// import libs
import React, { useContext } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { DEFAULT_LOCALE } from "../../../utils/constants"
import { useTranslation } from "react-i18next"
import { SiteNavigationProps, NavLinkProps } from "./_props"

// import components
import { Context } from "../../../services/theme"
import { StyledNavigation, Nav } from "./_styles"
import Toggle from "./toggle"
import Credit from "./credit"
import Copyright from "../footer/copyright"

export default ({ navigation, config }: SiteNavigationProps) => {
  if (!navigation) {
    return <></>
  }

  const { toggle, locale } = useContext(Context)

  return (
    <StyledNavigation>
      <Nav>
        <ul className={toggle ? "toggled" : "untoggled"}>
          {navigation.map((item: any, key: number) => {
            return <NavLink locale={locale} link={item} key={key} />
          })}
        </ul>
      </Nav>
      <Toggle />
      <Credit />
      <Copyright config={config} mobile={true} />
    </StyledNavigation>
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
    active === true || partiallyActive === true ? "active" : "inactive"

  const { t } = useTranslation()

  return (
    <li>
      <a
        className={`${activeClass} ${link.className}`}
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
        <div className="label">{t(link.title)}</div>
      </a>
    </li>
  )
}
