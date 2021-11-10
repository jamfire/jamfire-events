// import libs
import React, { useState, useEffect } from "react"
import { getSrc } from "gatsby-plugin-image"
import { SeoProps } from "./seo.d"
import { DEFAULT_LOCALE } from "../../utils/constants"

// import components
import { Helmet } from "react-helmet-async"

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

  const { frontmatter } = config || {}

  const { graphics } = frontmatter || {}

  const { favicon } = graphics || {}

  const [faviconSrc, setFaviconSrc] = useState("")

  // baseurl
  const baseUrl = frontmatter?.siteUrl

  // opengraph
  let ogUrl = null
  let ogType = "article"
  let ogTitle = null
  let ogDesc = null
  let ogImage = null

  // opengraph url
  if (event) {
    console.log()
    ogUrl = `${baseUrl}/event/${event.frontmatter?.slug}`
    ogType = `website`
    ogTitle = `${event.frontmatter?.title} | ${frontmatter?.title}`
  }

  // opengraph image
  if (
    event &&
    event.frontmatter &&
    event.frontmatter.eventGraphics &&
    event.frontmatter.eventGraphics.lobbyImage
  ) {
    const { eventGraphics } = event.frontmatter

    if (eventGraphics?.socialGraphic) {
      ogImage =
        `${baseUrl}${eventGraphics.socialGraphic.childImageSharp.gatsbyImageData.images.fallback.src}` ||
        null
    }
  }

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

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
    >
      <title>
        {activeTitle} | {config?.frontmatter?.title}
      </title>
      <meta
        name="title"
        content={`${activeTitle} | ${config?.frontmatter?.title}`}
        data-react-helmet="true"
      />
      <meta
        name="description"
        content={config?.frontmatter?.description || ""}
        data-react-helmet="true"
      />
      {faviconSrc !== null && (
        <link
          rel="icon"
          type="image/png"
          href={faviconSrc || ""}
          sizes="16x16"
        />
      )}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDesc && <meta property="og:description" content={ogDesc} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  )
}
