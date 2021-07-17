// import libs
import React from "react"
import { CopyrightProps } from "./_props"

// import components
import { Copyright } from "./_styles"

export default ({ config, mobile = false }: CopyrightProps) => {
  if (!config) {
    return <></>
  }

  return (
    <Copyright mobile={mobile}>
      &copy; {new Date().getFullYear()} {config.frontmatter.title}.
    </Copyright>
  )
}
