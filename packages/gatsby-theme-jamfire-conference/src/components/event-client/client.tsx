// import libs
import React from "react"
import loadable from "@loadable/component"
import { ClientProps } from "./client.d"

// import components
import { Router } from "@reach/router"
import { Wrapper } from "../wrappers"
import Sidebar from "../sidebar"

// route components
const Livestream = loadable(() => import("../event-livestream"))
const Schedule = loadable(() => import("../event-schedule"))
const Rooms = loadable(() => import("../event-rooms"))
const Chat = loadable(() => import("../chat"))
const QA = loadable(() => import("../event-qa"))

export default ({ config, event, basePath, locale }: ClientProps) => {
  const {
    eventSettings
  } = event.frontmatter || {}

  const {
    mainStageFeature
  } = eventSettings || {}

  return (
    <Wrapper>
      <Sidebar>
        <Router basepath={basePath} style={{ height: "100%" }}>
          {mainStageFeature === "chat" && (
            <Chat config={config} event={event} path="/main-stage" />
          )}
          {mainStageFeature === "schedule" && (
            <Schedule
              config={config}
              event={event}
              locale={locale}
              path="/main-stage"
            />
          )}
          <Rooms config={config} event={event} locale={locale} path="/rooms" />
          <Rooms
            config={config}
            event={event}
            locale={locale}
            path="/rooms/:room"
          />
          <Schedule
            config={config}
            event={event}
            locale={locale}
            path="/schedule"
          />
          <Chat config={config} event={event} path="/chat" />
          <QA config={config} event={event} path="/qa" locale={locale} />
        </Router>
      </Sidebar>
      <Livestream event={event} />
    </Wrapper>
  )
}
