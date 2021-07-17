// import styles
import styled from "@emotion/styled"

// import components
import { FaFireAlt } from "react-icons/fa"

// styled no video
export const StyledMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .content {
    text-align: center;
  }
`

// missing icon
export const MissingIcon = styled(FaFireAlt)`
  font-size: ${props => props.fontSize}rem;
  color: var(--list-header-background);
  margin-bottom: 1rem;
`
