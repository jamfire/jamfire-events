// import libs
import React from "react"
import { LoaderProps } from "./_props"

// import components
import { StyledLoader, Icon } from "./_styles"

export default ({ fontSize }: LoaderProps) => {
  return (
    <StyledLoader>
      <Icon fontSize={fontSize ? fontSize : 4} aria-hidden="true" />
    </StyledLoader>
  )
}
