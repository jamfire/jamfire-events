// import libs
import React from "react"
import { BrandingProps } from "./branding.d"

// import components
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// import styles
import * as styles from "./branding.module.scss"

export default ({ config, headerLogo, title }: BrandingProps) => {
  // determine logo to display
  let configLogo = null

  if (
    config?.frontmatter?.graphics?.logo &&
    config.frontmatter.graphics.logo.childImageSharp
  ) {
    configLogo = config.frontmatter.graphics.logo
  }

  if (headerLogo && headerLogo.childImageSharp) {
    configLogo = headerLogo
  }

  return (
    <div className={styles.branding} role="banner">
      <h1>
        <Link to="/">
          {configLogo && (
            <GatsbyImage
              image={configLogo?.childImageSharp?.gatsbyImageData}
              loading="eager"
              alt={config?.frontmatter?.title || ""}
            />
          )}
          {!configLogo && (
            <span>
              {title && <>{title}</>}
              {!title && <>{config?.frontmatter?.title}</>}
            </span>
          )}
        </Link>
      </h1>
    </div>
  )
}
