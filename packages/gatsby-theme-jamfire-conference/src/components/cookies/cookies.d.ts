import { MarkdownRemark } from "../../gatsby/graphql-types"

export type CookieNoticeProps = {
  config: MarkdownRemark | undefined
  cookies: MarkdownRemark | undefined
}

export type ManageCookiesProps = {
  config: MarkdownRemark | undefined
  cookies: MarkdownRemark | undefined
}

export type ButtonProps = {
  primary?: boolean
}

export type CookieProps = {
  title: string
  content: string
  enabled?: boolean
}
