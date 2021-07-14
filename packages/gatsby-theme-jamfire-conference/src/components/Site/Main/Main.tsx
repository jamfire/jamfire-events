// import libs
import React from "react"
import { MainProps } from "./_props"

// import components
import { StyledMain } from "./_styles"

export default ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>
}
