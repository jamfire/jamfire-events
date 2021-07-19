import { MarkdownRemark } from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

export interface RoomsProps extends RouteComponentProps {
    config: MarkdownRemark
    event: MarkdownRemark
    locale: string
}


// room item props
export interface RoomItemProps {
    room: any
    event: MarkdownRemark
    locale: string
}