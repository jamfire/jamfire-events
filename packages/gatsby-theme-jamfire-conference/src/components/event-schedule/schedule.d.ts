import { 
    MarkdownRemark,
    MarkdownRemarkFrontmatterEventSchedule
} from "../../gatsby/graphql-types"

export interface ScheduleProps {
    config: MarkdownRemark
    event: MarkdownRemark
    locale: string
}

export interface ScheduleItemProps {
    item: MarkdownRemarkFrontmatterEventSchedule
    locale: string
}