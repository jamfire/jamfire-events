// import styles
import styled from "@emotion/styled"

// import components
import { FaFireAlt } from "react-icons/fa"

// styled no video
export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

// bird icon
export const Icon = styled(FaFireAlt)`
  font-size: ${props => props.fontSize}rem;
  color: var(--list-header-background);
`
