// import libs
import React, { useState, useEffect } from "react"
import { getSrc } from "gatsby-plugin-image"
import { SeoProps } from "./seo.d"
import { DEFAULT_LOCALE } from "../../utils/constants"

// import components
import { Helmet } from "react-helmet"

export default ({
  config,
  activeTitle,
  activeFavicon = null,
  locale = DEFAULT_LOCALE,
  event,
}: SeoProps) => {
  if (!activeTitle || config === null) {
    return <></>
  }

  // get page data
  const { frontmatter } = config || {}
  const { graphics } = frontmatter || {}
  const { favicon } = graphics || {}

  // change favicon
  const [faviconSrc, setFaviconSrc] = useState("")

  useEffect(() => {
    // favicon processing
    let seoFavicon = null
    if (favicon !== null) {
      seoFavicon = favicon
    }
    if (activeFavicon !== null) {
      seoFavicon = activeFavicon
    }
    if (seoFavicon !== null) {
      const src = getSrc(seoFavicon)
      setFaviconSrc(src || "")
    }
  }, [activeFavicon])

  // baseurl
  const baseUrl = frontmatter?.siteUrl

  // metadata
  let meta = []

  /**
   * page metadata
   */

  /**
   * event metadata
   */

  if (event) {
    meta.push({
      name: "og:url",
      content: `${baseUrl}/event/${event.frontmatter?.slug}`,
    })
    meta.push({ name: "og:type", content: `website` })
    meta.push({
      name: "og:title",
      content: `${event.frontmatter?.title} | ${frontmatter?.title}`,
    })
  }

  if (
    event &&
    event.frontmatter &&
    event.frontmatter.eventGraphics &&
    event.frontmatter.eventGraphics.lobbyImage
  ) {
    const { eventGraphics } = event.frontmatter

    // @ts-expect-error
    if (eventGraphics?.socialGraphic) {
      // @ts-expect-error
      meta.push({
        name: "og:image",
        content: `${baseUrl}${eventGraphics.socialGraphic.childImageSharp.gatsbyImageData.images.fallback.src}`,
      })
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={activeTitle}
      titleTemplate={`%s | ${config?.frontmatter?.title}`}
      meta={meta.concat(meta)}
    >
      {faviconSrc !== null && (
        <link
          rel="icon"
          type="image/png"
          href={faviconSrc || ""}
          sizes="16x16"
        />
      )}
    </Helmet>
  )
}
