// import libs
import { ButtonProps } from "./_props"

// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// cookie notice component
export const CookieNotice = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  padding: 2rem;
  background: var(--content-background);
  display: grid;
  z-index: 100;

  ${mq("tablet_up")} {
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
  }
`

// content component
export const CookieContent = styled.div``

// cookie title notice
export const CookieNoticeTitle = styled.p`
  margin-bottom: 1.666rem;
  font-weight: 600;
  font-size: 1.55185rem;
  font-family: "Work Sans", sans-serif;
  line-height: 1.1;
`

// buttons component
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// button component
export const Button = styled.button<ButtonProps>`
  margin: 0.5rem;
  border: 1px solid var(--logo-background);
  outline: 0;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  background: ${props =>
    props.primary ? "var(--logo-background)" : "var(--background-color)"};
  color: ${props =>
    props.primary ? "var(--logo-color)" : "var(--logo-background)"};

  &:hover {
    background: var(--logo-hover);
    color: var(--logo-color);
  }
`

// styled inner component
export const Inner = styled.div`
  background: var(--content-background);
  width: 90vw;
  border-radius: 4px;
  min-height: 60vh;
  display: grid;
  grid-template-rows: 1fr 80px;
  margin: -2rem;

  ${mq("tablet_up")} {
    width: 80vw;
  }

  ${mq("tablet_side")} {
    width: 55vw;
  }
`

// footer component
export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-color);
`

// content component
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`

// cookies list component
export const CookiesList = styled.div`
  ul {
    list-style: none;
    border-right: 1px solid var(--border-color);
    margin: 0;
    padding: 0;
    height: 100%;

    li {
      margin-bottom: 0;
      border-bottom: 1px solid var(--border-color);

      button {
        border: 0;
        border-right: 3px solid transparent;
        outline: 0;
        cursor: pointer;
        width: 100%;
        padding: 0.5rem 1rem;
        background: none;
        cursor: pointer;
        text-align: left;
        color: var(--text-color);

        &:hover {
          color: var(--logo-background);
        }

        &.active {
          border-right: 3px solid var(--logo-background);
        }
      }
    }
  }
`

// content component
export const Content = styled.div`
  padding: 1rem;
  overflow-y: scroll;

  h3 {
    margin-bottom: 0;
  }
`

// content header component
export const ContentHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 52px;
  grid-gap: 1rem;
  padding-bottom: 1rem;
`
