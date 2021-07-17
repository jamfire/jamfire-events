// import libs
import React from "react"
import loadable from "@loadable/component"
import { ClientProps } from "./_props"

// import components
import { Router } from "@reach/router"
import { Wrapper } from "../site/wrappers"
import Sidebar from "../site/sidebar"

// route components
const Livestream = loadable(() => import("./livestream"))
const Schedule = loadable(() => import("./schedule"))
const Rooms = loadable(() => import("./rooms"))
const Chat = loadable(() => import("../chat"))
const QA = loadable(() => import("./qa"))

export default ({ config, event, basePath, locale }: ClientProps) => {
  const {
    frontmatter: {
      eventSettings: { mainStageFeature },
    },
  } = event

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
          <QA config={config} event={event} path="/qa" />
        </Router>
      </Sidebar>
      <Livestream event={event} />
    </Wrapper>
  )
}
