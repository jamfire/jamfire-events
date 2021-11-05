// import libs
import React, { useContext, useEffect } from "react"
import { initialState } from "../../services/theme"
import loadable from "@loadable/component"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { localizeData } from "../../utils/localized-data"
import { DataProps } from "../../gatsby/data-props"

// import components
import { FirebaseContext } from "../../services"
import { Router } from "@reach/router"
import Layout from "../site-layout"
import { ThemeContext } from "../../services/theme"
import {
  FaHome,
  FaCalendarAlt,
  FaDoorOpen,
  FaVideo,
  FaUsers,
  FaUserFriends,
  FaQuestion,
  // FaPoll,
  FaListAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

// loadable components
const GeolocationProvider = loadable(
  () => import("../../services/geolocation/geolocation-provider")
)
const EventProvider = loadable(
  () => import("../../services/event/event-provider")
)
const Lobby = loadable(() => import("../event-lobby"))
const Client = loadable(() => import("../event-client"))
const Room = loadable(() => import("../event-room"))
const RoomChange = loadable(() => import("../event-room-change"))
const Map = loadable(() => import("../event-map"))

export default ({ data, pageContext }: DataProps) => {
  const { isLoading, profile } = useContext(FirebaseContext)

  const {
    event,
    defaultEvent,
    config,
    defaultConfig,
    cookies,
    defaultCookies,
  } = data

  const eventData = localizeData(event, defaultEvent)
  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const { locale } = pageContext

  const { title, slug, eventSettings, eventGraphics } =
    eventData?.frontmatter || {}

  const { favicon, headerLogo } = eventGraphics || {}

  const { mainStageFeature } = eventSettings || {}

  const { setNavigation } = useContext(ThemeContext)

  const basePath = `/event/${slug}/`

  const reset = () => {
    setNavigation(initialState.navigation)
  }

  const eventNav = [
    {
      title: "navigation.home",
      to: `/`,
      className: "home-link",
      icon: <FaHome />,
      partiallyActive: false,
      enabled: true,
      cb: () => {
        reset()
      },
    },
    {
      title: "navigation.allEvents",
      to: `/events/`,
      className: "all-events-link",
      icon: <FaCalendarAlt />,
      partiallyActive: false,
      enabled: eventSettings?.allEvents === true,
      cb: () => {
        reset()
      },
    },
    {
      title: "navigation.lobby",
      to: `/event/${slug}/`,
      className: "event-lobby-link",
      icon: <FaDoorOpen />,
      partiallyActive: false,
      enabled: true,
    },
    {
      title: eventSettings?.mainStageLabel || "navigation.mainStage",
      to: `${basePath}main-stage/`,
      className: "event-mainstage-link",
      icon: <FaVideo />,
      partiallyActive: false,
      enabled: eventSettings?.mainStage === true,
    },
    {
      title: eventSettings?.scheduleLabel || "navigation.schedule",
      to: `${basePath}schedule/`,
      className: "event-schedule-link",
      icon: <FaListAlt />,
      partiallyActive: false,
      enabled:
        eventSettings?.schedule === true && mainStageFeature !== "schedule",
    },
    {
      title: eventSettings?.chatLabel || "navigation.chat",
      to: `${basePath}chat/`,
      className: "event-chat-link",
      icon: <FaUserFriends />,
      partiallyActive: false,
      enabled: eventSettings?.chat === true && mainStageFeature !== "chat",
    },
    {
      title: eventSettings?.roomsLabel || "navigation.rooms",
      to: `${basePath}rooms/`,
      className: "event-rooms-link",
      icon: <FaUsers />,
      partiallyActive: true,
      enabled: eventSettings?.rooms === true,
    },
    {
      title: eventSettings?.qaLabel || "navigation.qa",
      to: `${basePath}qa/`,
      className: "event-qa-link",
      icon: <FaQuestion />,
      partiallyActive: false,
      enabled: eventSettings?.qa === true,
    },
    // {
    //   title: eventSettings.pollsLabel || "navigation.polls",
    //   to: `${basePath}polls/`,
    //   icon: <FaPoll />,
    //   partiallyActive: false,
    //   enabled: eventSettings.polls === true,
    // },
    {
      title: eventSettings?.mapLabel || "navigation.map",
      to: `${basePath}map/`,
      className: "event-map-link",
      icon: <FaMapMarkerAlt />,
      partiallyActive: false,
      enabled: eventSettings?.map === true,
    },
  ]

  const enabledLinks = eventNav.filter(item => {
    return item.enabled === true
  })

  useEffect(() => {
    setNavigation(enabledLinks)
  }, [])

  if (isLoading) {
    return <></>
  }

  const routerBasePath: string =
    locale === DEFAULT_LOCALE ? basePath : `/${locale}${basePath}`

  return (
    <EventProvider>
      <Layout
        title={title || ""}
        event={eventData}
        config={configData}
        cookies={cookiesData}
        headerLogo={headerLogo}
        favicon={favicon}
        locale={pageContext.locale}
      >
        <RoomChange config={config} />
        <GeolocationProvider
          pageContext={pageContext}
          providerEnabled={eventSettings?.map || false}
          config={config}
        >
          <Router basepath={routerBasePath}>
            <Lobby
              event={eventData}
              config={configData}
              locale={pageContext.locale}
              path="/"
            />
            <Client
              event={eventData}
              config={configData}
              locale={pageContext.locale}
              path="/:subpage"
              basePath={routerBasePath}
            />
            <Room
              event={eventData}
              config={configData}
              locale={pageContext.locale}
              user={profile}
              path="/rooms/:room"
            />
            {eventSettings?.map && (
              <Map config={config} event={event} locale={locale} path="/map" />
            )}
          </Router>
        </GeolocationProvider>
      </Layout>
    </EventProvider>
  )
}
