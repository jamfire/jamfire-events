// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// StyledLayout component
export const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header     header"
    "main       main"
    "navigation navigation";
  grid-template-columns: 60px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  max-height: 100vh;
  max-height: -webkit-fill-available;
  width: 100vw;

  ${mq("tablet_up")} {
    grid-template-areas:
      "header header"
      "navigation main"
      "navigation footer";
    grid-template-columns: 100px 1fr;
    grid-template-rows: 80px 1fr 80px;
  }
`
