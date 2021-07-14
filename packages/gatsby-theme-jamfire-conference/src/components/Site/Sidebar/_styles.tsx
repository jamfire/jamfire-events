// import styles
import styled from "@emotion/styled"
import mq from "../../../utils/media"

// sidebar component
export const Sidebar = styled.div`
  grid-area: sidebar;

  ${mq("tablet_up")} {
    border-top: 1px solid var(--border-color);
    height: calc(100vh - 160px);
    overflow-y: scroll;
  }

  ${mq("tablet_side")} {
    border-top: none;
    border-right: 1px solid var(--border-color);
  }
`
