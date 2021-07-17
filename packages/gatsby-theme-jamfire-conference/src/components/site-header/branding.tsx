// import libs
import React from "react"
import { configProps } from "./_props"

// import components
import { Link } from "gatsby"
import { Branding } from "./_styles"
import { GatsbyImage } from "gatsby-plugin-image"

export default ({ config, headerLogo, title }: configProps) => {
  // determine logo to display
  let configLogo = null

  if (
    config.frontmatter.graphics.logo &&
    config.frontmatter.graphics.logo.childImageSharp
  ) {
    configLogo = config.frontmatter.graphics.logo
  }

  if (headerLogo && headerLogo.childImageSharp) {
    configLogo = headerLogo
  }

  return (
    <Branding role="banner">
      <h1>
        <Link to="/">
          {configLogo && (
            <GatsbyImage
              image={configLogo.childImageSharp.gatsbyImageData}
              loading="eager"
              alt={config.frontmatter.title}
            />
          )}
          {!configLogo && (
            <span>
              {title && <>{title}</>}
              {!title && <>{config.frontmatter.title}</>}
            </span>
          )}
        </Link>
      </h1>
    </Branding>
  )
}
