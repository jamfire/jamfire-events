// import libs
import { MarkdownRemark, File, Maybe } from "../../gatsby/graphql-types"

export interface BrandingProps {
  config?: MarkdownRemark
  headerLogo?: Maybe<File>
  title: string | null
}
