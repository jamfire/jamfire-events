// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// styled home component
export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  ${mq("tablet_up")} {
    height: calc(100vh - 160px);
  }
`

// welcome component
export const Welcome = styled.div`
  padding: 1rem;

  ${mq("tablet_up")} {
    padding: 2rem;
  }
`
