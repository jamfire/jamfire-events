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
}: SeoProps) => {
  if (!activeTitle || config === null) {
    return <></>
  }

  const { frontmatter } = config || {}

  const { graphics } = frontmatter || {}

  const { favicon } = graphics || {}

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
    </Helmet>
  )
}
