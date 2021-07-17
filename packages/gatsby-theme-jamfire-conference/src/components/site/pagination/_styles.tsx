// import styles
import styled from "@emotion/styled"
import mq from "../../../utils/media"

// styled pagination
export const Pagination = styled.div`
  padding: 0 1rem;

  ${mq("tablet_up")} {
    padding: 0 2rem;
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-block;

      a {
        display: block;
        padding: 0.25rem 0;
        text-align: center;
        min-width: 2rem;
        background: var(--background);
        margin: 0 0 0 0.5rem;
        border-radius: 4px;

        &:hover {
          text-decoration: none;
          background: var(--logo-background);
          color: var(--logo-color);
        }

        &.active {
          background: var(--logo-background);
          color: var(--logo-color);

          &:hover {
            background: var(--logo-hover);
          }
        }
      }
    }
  }
`
