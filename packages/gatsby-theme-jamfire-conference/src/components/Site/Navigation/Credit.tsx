// import libs
import React from "react"
import { useTranslation } from "react-i18next"

// import components
import { Credit } from "./_styles"
import { FaGithub } from "react-icons/fa"

export default () => {
  const { t } = useTranslation()

  return (
    <Credit>
      <a
        href="https://github.com/jamfire/gatsby-theme-jamfire-conference"
        title={t("credit.get")}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </Credit>
  )
}
