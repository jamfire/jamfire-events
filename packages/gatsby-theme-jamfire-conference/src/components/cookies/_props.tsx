import { MarkdownRemark } from "../../gatsby/graphql-types"

export type CookieNoticeProps = {
  config: MarkdownRemark
  cookies: MarkdownRemark
}

export type ManageCookiesProps = {
  config: MarkdownRemark
  cookies: MarkdownRemark
}

export type ButtonProps = {
  primary?: boolean
}

export type CookieProps = {
  title: string
  content: string
  enabled?: boolean
}
