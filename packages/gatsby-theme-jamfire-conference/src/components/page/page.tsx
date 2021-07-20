// import libs
import React from "react"
import { localizeData } from "../../utils/localized-data"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { DataProps } from "../../gatsby/data-props"
import { useTranslation } from "react-i18next"

// import components
import Layout from "../site-layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../missing"

// import styles
import * as styles from "./page.module.scss"

// page component
export default ({ data, pageContext }: DataProps) => {
  const { page, defaultPage, config, defaultConfig, cookies, defaultCookies } =
    data

  const { t } = useTranslation()

  const pageData = localizeData(page, defaultPage)
  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const { frontmatter, html } = pageData || {}

  const { title, pageGraphics } = frontmatter || {}

  const backgroundImage: IGatsbyImageData =
    pageGraphics?.featuredImage &&
    pageGraphics?.featuredImage.childImageSharp !== null
      ? pageGraphics?.featuredImage?.childImageSharp?.gatsbyImageData
      : null

  return (
    <Layout
      title={title || ""}
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <div className={styles.page}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html || "" }} />
        </div>

        <div
          className={styles.featuredImage}
          role="img"
          aria-label={t("regions.featuredImage")}
        >
          {backgroundImage && (
            <GatsbyImage
              className={styles.gatsbyImageWrapper}
              image={backgroundImage}
              alt=""
            />
          )}
          {!backgroundImage && <Missing />}
        </div>
      </div>
    </Layout>
  )
}
