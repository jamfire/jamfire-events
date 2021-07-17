// import libs
import React from "react"
import loadable from "@loadable/component"
import { FooterProps } from "./_props"

// import components
import { StyledFooter, TrackerWrapper } from "./_styles"
import Copyright from "./copyright"

// loadable components
const Tracker = loadable(() => import("../../event/tracker"))

export const Footer = ({ config, event }: FooterProps) => {
  return (
    <StyledFooter>
      {event && (
        <TrackerWrapper>
          <Tracker event={event} />
        </TrackerWrapper>
      )}
      <Copyright config={config} />
    </StyledFooter>
  )
}

export default Footer
