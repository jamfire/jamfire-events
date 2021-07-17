// import libs
import React from "react"
import { ButtonProps } from "./_props"

// import components
import { Button } from "./_styles"

export default ({ url, children }: ButtonProps) => {
  return <Button href={url}>{children}</Button>
}
