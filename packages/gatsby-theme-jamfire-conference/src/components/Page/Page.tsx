// import libs
import React from "react"
import { localizeData } from "../../utils/localizedData"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { DataProps } from "../../gatsby/dataProps"
import { useTranslation } from "react-i18next"

// import components
import Layout from "../Site/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../Site/Missing"
import { StyledHome, Content, FeaturedImage } from "./_styles"

// page component
export default ({ data, pageContext }: DataProps) => {
  const { page, defaultPage, config, defaultConfig, cookies, defaultCookies } =
    data

  const { t } = useTranslation()

  const pageData = localizeData(page, defaultPage)
  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const {
    frontmatter: {
      title,
      pageGraphics: { featuredImage },
    },
    html,
  } = pageData

  const backgroundImage: IGatsbyImageData =
    featuredImage && featuredImage.childImageSharp !== null
      ? featuredImage.childImageSharp.gatsbyImageData
      : null

  return (
    <Layout
      title={title}
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <StyledHome>
        <Content>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Content>

        <FeaturedImage role="img" aria-label={t("regions.featuredImage")}>
          {backgroundImage && <GatsbyImage image={backgroundImage} alt="" />}
          {!backgroundImage && <Missing />}
        </FeaturedImage>
      </StyledHome>
    </Layout>
  )
}
