import { MarkdownRemark } from "../../gatsby/graphqlTypes"

export type CookieNoticeProps = {
  config: MarkdownRemark
  cookies: MarkdownRemark
}

export type ButtonProps = {
  primary?: boolean
}
