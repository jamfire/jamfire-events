// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// styled main
export const StyledMain = styled.main`
  grid-area: main;

  height: calc(100vh - 160px);
  overflow-y: scroll;

  ${mq("tablet_up")} {
    height: calc(100vh - 160px);
  }
`
