// import libs
import React from "react"
import { MissingProps } from "./_props"

// import components
import { StyledMissing, Icon } from "./_styles"

export default ({ fontSize, darker = "false" }: MissingProps) => {
  return (
    <StyledMissing>
      <Icon fontSize={fontSize ? fontSize : 8} darker={darker} />
    </StyledMissing>
  )
}
