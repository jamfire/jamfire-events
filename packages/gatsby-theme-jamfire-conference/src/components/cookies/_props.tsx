import { MarkdownRemark } from "../../gatsby/graphql-types"

export type CookieNoticeProps = {
  config: MarkdownRemark
  cookies: MarkdownRemark
}

export type ButtonProps = {
  primary?: boolean
}
