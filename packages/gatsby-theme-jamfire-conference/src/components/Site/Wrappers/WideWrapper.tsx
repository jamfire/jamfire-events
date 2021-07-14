// import libs
import React from "react"
import { WrapperProps } from "./_props"

// import components
import { WideWrapper } from "./_styles"

export default ({ children }: WrapperProps) => {
  return <WideWrapper>{children}</WideWrapper>
}
