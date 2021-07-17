// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { localizeData } from "../../../utils/localized-data"

// import components
import Layout from "../layout"
import { WideWrapper } from "../wrappers"
import { StyledMissing, MissingIcon } from "./_styles"

export default ({ data, pageContext }) => {
  const { config, defaultConfig, cookies, defaultCookies } = data

  const configData = localizeData(config[0], defaultConfig[0])
  const cookiesData = localizeData(cookies[0], defaultCookies[0])

  const { t } = useTranslation()

  return (
    <Layout
      title="404"
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <WideWrapper>
        <StyledMissing>
          <div className="content">
            <MissingIcon fontSize={8} />
            <h2>{t("error.pageNotFound")}</h2>
          </div>
        </StyledMissing>
      </WideWrapper>
    </Layout>
  )
}
