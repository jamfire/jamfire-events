// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { localizeData } from "../../utils/localized-data"
import { DataProps } from "../../gatsby/data-props"

// import components
import Layout from "../site-layout"
import { WideWrapper } from "../wrappers"
import { FaFireAlt } from "react-icons/fa"

// import styles
import * as styles from "./error.module.scss"

export default ({ data, pageContext }: DataProps) => {
  const { config, defaultConfig, cookies, defaultCookies } = data

  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const { t } = useTranslation()

  return (
    <Layout
      title="404"
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <WideWrapper>
        <div className={`404-page ${styles.missing}`}>
          <div className={styles.content}>
            <FaFireAlt className={styles.icon} />
            <h2>{t("error.pageNotFound")}</h2>
          </div>
        </div>
      </WideWrapper>
    </Layout>
  )
}
