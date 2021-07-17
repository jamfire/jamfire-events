// import libs
import React from "react"
import { LivestreamProps } from "./_props"

// import components
import { FeaturedImage, Content, LivestreamWrapper } from "./_styles"
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../missing"

export default ({ event }: LivestreamProps) => {
  const {
    frontmatter: {
      eventGraphics: { lobbyImage },
      eventInformation: { livestreamUrl },
    },
  } = event || {}

  // livestreamUrl and lobbyImage both missing
  if (!livestreamUrl && !lobbyImage) return <Missing />

  // no livestream url but lobbyImage exists
  if (!livestreamUrl && lobbyImage) {
    return (
      <FeaturedImage>
        <GatsbyImage
          image={lobbyImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      </FeaturedImage>
    )
  }

  return (
    <Content id="livestream">
      <LivestreamWrapper>
        <iframe
          src={livestreamUrl}
          allowFullScreen
          frameBorder="0"
          title={"Livestream"}
        />
      </LivestreamWrapper>
    </Content>
  )
}
