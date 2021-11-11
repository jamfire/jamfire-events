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
  pageData,
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
   * pageData metadata
   */

  if (pageData) {
    meta.push({
      name: "og:url",
      content: `${baseUrl}/event/${pageData.frontmatter?.slug}`,
    })
    meta.push({ name: "og:type", content: `website` })
    meta.push({
      name: "og:title",
      content: `${pageData.frontmatter?.title} | ${frontmatter?.title}`,
    })
  }

  if (pageData?.frontmatter?.eventGraphics?.lobbyImage) {
    const { eventGraphics } = pageData?.frontmatter || {}

    const {
      socialGraphic: {
        childImageSharp: { gatsbyImageData },
      },
    } = pageData.frontmatter.eventGraphics || {}

    if (gatsbyImageData) {
      meta.push({
        name: "og:image",
        content: `${baseUrl}${gatsbyImageData.images.fallback.src}`,
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
