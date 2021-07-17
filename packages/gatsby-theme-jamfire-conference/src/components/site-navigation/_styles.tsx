// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// navigation component
export const StyledNavigation = styled.div`
  grid-area: navigation;
  background: var(--background);
  border-top: 1px solid var(--border-color);

  display: grid;
  grid-template-columns: 0 1fr 80px;
  grid-template-areas: "main-nav copyright toggle";

  ${mq("tablet_up")} {
    border-top: 0;
    border-right: 1px solid var(--border-color);
    margin-right: -1px;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    text-align: center;
    grid-template-columns: 1fr 0 80px;
  }
`

// styled nav component
export const Nav = styled.nav`
  grid-area: main-nav;

  width: 100%;
  height: 80px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--background);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    position: absolute;
    bottom: 79px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    z-index: 9000;

    &.untoggled {
      display: none;
    }

    li {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
      flex: 1;
      text-align: center;
      cursor: pointer;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--nav-anchor-color);
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        height: 80px;
        box-sizing: border-box;
        transition: all 85ms ease-out;

        &.active,
        &:hover {
          color: var(--anchor-active);
          // border-top: 3px solid var(--anchor-active);
        }
      }

      .label {
        margin-top: 4px;
        font-size: 10px;
        text-transform: uppercase;
        display: block;
      }
    }
  }

  ${mq("tablet_up")} {
    ul {
      width: 100%;
      display: block;
      height: auto;
      margin-top: 1rem;
      border-top: 0;
      position: relative;
      bottom: auto;
      top: auto;
      border-bottom: 0;
      z-index: auto;

      &.untoggled {
        display: block;
      }

      li {
        margin: 0;

        a {
          border-right: 3px solid transparent;
          border-left: 3px solid transparent;
          border-top: none;
          bordor-bottom: none;
          height: auto;
          padding: 0.5rem 0.25rem;
          margin: 2px 0;

          &.active,
          &:hover {
            color: var(--nav-anchor-active);
            border-right: 3px solid var(--anchor-active);
            border-top: 0;
          }
        }
      }
    }
  }
`

// toggle component
export const Toggle = styled.div`
  grid-area: toggle;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);

  ${mq("tablet_up")} {
    display: none;
  }
`

// styled credit component
export const Credit = styled.div`
  display: none;

  ${mq("tablet_up")} {
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--content-background);
      color: var(--nav-anchor-color);
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }
`
