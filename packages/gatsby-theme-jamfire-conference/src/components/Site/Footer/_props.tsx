// import livs
import { MarkdownRemark } from "../../../gatsby/graphqlTypes"

// footer props
export type FooterProps = {
  config: MarkdownRemark
  event?: MarkdownRemark
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
