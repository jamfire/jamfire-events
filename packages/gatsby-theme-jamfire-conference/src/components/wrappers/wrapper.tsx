// import libs
import React from "react"
import { WrapperProps } from "./_props"

// import components
import { Wrapper } from "./_styles"

export default ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>
}
