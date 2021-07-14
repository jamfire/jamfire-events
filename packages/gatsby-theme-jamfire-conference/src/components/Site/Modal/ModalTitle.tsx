// import libs
import React from "react"
import { ModalTitleProps } from "./_props"

// import components
import { ModalTitle } from "./_styles"
import { GatsbyImage } from "gatsby-plugin-image"

export default ({ title, config }: ModalTitleProps) => {
  // static query for logo data
  const {
    frontmatter: {
      graphics: { logo },
    },
  } = config

  return (
    <ModalTitle>
      {logo && (
        <GatsbyImage
          image={logo.childImageSharp.gatsbyImageData}
          loading="eager"
          alt={title}
        />
      )}
      <h3>{title}</h3>
    </ModalTitle>
  )
}
