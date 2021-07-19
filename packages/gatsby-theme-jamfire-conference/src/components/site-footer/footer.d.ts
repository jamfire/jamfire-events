// import livs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// footer props
export type FooterProps = {
  config: MarkdownRemark
  event: MarkdownRemark | null
}

// copyright props
export type CopyrightProps = {
  config: MarkdownRemark
  mobile?: boolean
}

// copyright style props
export type CopyrightStyleProps = {
  mobile: boolean
}