// import libs
import { MarkdownRemark, File } from "../../gatsby/graphql-types"

export interface BrandingProps {
  config?: MarkdownRemark
  headerLogo?: File
  title: string | null
}
