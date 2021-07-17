// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// wrapper component
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--border-color);
  overflow-y: scroll;
  height: 100%;
  grid-template-areas:
    "content"
    "sidebar";

  ${mq("tablet_side")} {
    grid-template-areas: "sidebar content";
    grid-template-columns: var(--sidebar-width) 1fr;
  }
`

// wide wrapper component
export const WideWrapper = styled.div`
  height: calc(100vh - 160px);
  overflow-y: scroll;
  padding: 1rem;
  position: relative;

  ${mq("tablet_up")} {
    height: calc(100vh - 80px);
    padding: 2rem;
  }
`
