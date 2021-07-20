// import livs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// footer props
export type FooterProps = {
  config: MarkdownRemark | undefined
  event: MarkdownRemark | undefined
}

// copyright props
export type CopyrightProps = {
  config: MarkdownRemark | undefined
  mobile?: boolean
}

// copyright style props
export type CopyrightStyleProps = {
  mobile: boolean
}
