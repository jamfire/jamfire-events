// import libs
import React from "react"
import { ModalTitleProps } from "./modal.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"

// import styles
import * as styles from "./modal-title.module.scss"

export default ({ title, config }: ModalTitleProps) => {
  // static query for logo data
  const { graphics } = config?.frontmatter || {}

  const { logo } = graphics || {}

  return (
    <div className={styles.title}>
      {logo && (
        <GatsbyImage
          image={logo?.childImageSharp?.gatsbyImageData}
          loading="eager"
          alt={title}
        />
      )}
      <h3>{title}</h3>
    </div>
  )
}
