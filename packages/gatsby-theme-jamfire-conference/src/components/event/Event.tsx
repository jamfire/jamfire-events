// import libs
import React, { useContext, useEffect } from "react"
import { initialState } from "../../services/theme"
import loadable from "@loadable/component"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { localizeData } from "../../utils/localized-data"
import { DataProps } from "../../gatsby/data-props"
import { checkIsClient } from "../../utils/check-is-client"

// import components
import { FirebaseContext } from "../../services"
import { Router } from "@reach/router"
import Layout from "../site-layout"
import { Context } from "../../services/theme"
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

const isClient = checkIsClient()

// loadable components
const GeolocationProvider = loadable(
  () => import("../../services/geolocation/geolocation-provider")
)
const Lobby = loadable(() => import("./lobby"))
const Client = loadable(() => import("./client"))
const Room = loadable(() => import("./room"))
const RoomChange = loadable(() => import("./room-change"))
const Map = isClient ? loadable(() => import("../event-map/map")) : null

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

  // check against label keys
  const localizedLabel: (label: string) => boolean = label => {
    let localize = true

    if (event && typeof event?.frontmatter?.eventSettings !== undefined) {
      let localizedLabel = event.frontmatter.eventSettings[label] || null

      if (localizedLabel) {
        localize = false
      }
    }

    return localize
  }

  const {
    frontmatter: {
      title,
      slug,
      eventSettings,
      eventGraphics: { favicon, headerLogo },
    },
  } = eventData

  const { mainStageFeature } = eventSettings

  const { setNavigation } = useContext(Context)

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
      enabled: eventSettings.allEvents === true,
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
      title: localizedLabel("mainStageLabel")
        ? "navigation.mainStage"
        : eventSettings.mainStageLabel,
      to: `${basePath}main-stage/`,
      className: "event-mainstage-link",
      icon: <FaVideo />,
      partiallyActive: false,
      enabled: eventSettings.mainStage === true,
    },
    {
      title: localizedLabel("scheduleLabel")
        ? "navigation.schedule"
        : eventSettings.scheduleLabel,
      to: `${basePath}schedule/`,
      className: "event-schedule-link",
      icon: <FaListAlt />,
      partiallyActive: false,
      enabled:
        eventSettings.schedule === true && mainStageFeature !== "schedule",
    },
    {
      title: localizedLabel("chatLabel")
        ? "navigation.chat"
        : eventSettings.chatLabel,
      to: `${basePath}chat/`,
      className: "event-chat-link",
      icon: <FaUserFriends />,
      partiallyActive: false,
      enabled: eventSettings.chat === true && mainStageFeature !== "chat",
    },
    {
      title: localizedLabel("roomsLabel")
        ? "navigation.rooms"
        : eventSettings.roomsLabel,
      to: `${basePath}rooms/`,
      className: "event-rooms-link",
      icon: <FaUsers />,
      partiallyActive: true,
      enabled: eventSettings.rooms === true,
    },
    {
      title: localizedLabel("qaLabel")
        ? "navigation.qa"
        : eventSettings.qaLabel,
      to: `${basePath}qa/`,
      className: "event-qa-link",
      icon: <FaQuestion />,
      partiallyActive: false,
      enabled: eventSettings.qa === true,
    },
    // {
    //   title: localizedLabel("pollsLabel") ? "navigation.polls" : eventSettings.pollsLabel,
    //   to: `${basePath}polls/`,
    //   icon: <FaPoll />,
    //   partiallyActive: false,
    //   enabled: eventSettings.polls === true,
    // },
    {
      title: localizedLabel("mapLabel")
        ? "navigation.map"
        : eventSettings.mapLabel,
      to: `${basePath}map/`,
      className: "event-map-link",
      icon: <FaMapMarkerAlt />,
      partiallyActive: false,
      enabled: eventSettings.map === true,
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
    <Layout
      title={title}
      event={eventData}
      config={configData}
      cookies={cookiesData}
      headerLogo={headerLogo || null}
      favicon={favicon || null}
      locale={pageContext.locale}
    >
      <RoomChange config={config} />
      <GeolocationProvider
        pageContext={pageContext}
        providerEnabled={eventSettings.map}
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
          {eventSettings.map && (
            <Map
              config={config}
              event={event}
              locale={locale}
              path="/map"
              user={profile}
            />
          )}
        </Router>
      </GeolocationProvider>
    </Layout>
  )
}
