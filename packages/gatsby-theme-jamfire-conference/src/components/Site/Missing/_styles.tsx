// import libs
import { StyleProps } from "./_props"
import styled from "@emotion/styled"

// import components
import { FaFireAlt } from "react-icons/fa"

// styled no video
export const StyledMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

// bird icon
export const Icon = styled(FaFireAlt)<StyleProps>`
  font-size: ${props => props.fontSize}rem;
  color: ${props =>
    props.darker === "true"
      ? "var(--list-header-background-darker)"
      : "var(--list-header-background)"};
`
