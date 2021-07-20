import {
  MarkdownRemark,
  MarkdownRemarkFrontmatterEventSchedule,
} from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

export interface ScheduleProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  locale: string
}

export interface ScheduleItemProps {
  item: MarkdownRemarkFrontmatterEventSchedule
  locale: string
}
