// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

export const StyledChat = styled("div")`
  height: auto;

  ${mq("tablet_up")} {
    display: grid;
    grid-template-rows: 1fr 60px;
  }
`

export const NotLoggedIn = styled.div`
  padding: 1rem;

  ${mq("tablet_up")} {
    padding: 2rem;
    height: calc(100vh - 220px);
    overflow-y: scroll;
  }
`

export const Container = styled("div")`
  &#chat-messages {
    display: flex;
    align-items: flex-end;
  }

  height: 100%;
  padding-bottom: 60px;

  ${mq("tablet_up")} {
    height: calc(100vh - 220px);
    overflow-y: scroll;
    padding-bottom: 0;
  }
`

export const Inner = styled.div`
  padding: 1rem;
`

export const StyledMessages = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 1rem;
  height: 100%;
  overflow-y: scroll;
`

export const StyledMessage = styled.li`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-areas:
    "message avatar"
    "name    name";
  grid-gap: 0.5rem 1rem;
  padding: 0.5rem 1rem 0 1rem;
  margin-bottom: 0;

  &.me {
    grid-template-columns: 40px 1fr;
    grid-template-areas:
      "avatar message"
      "name   name";
  }

  &.first {
    // margin-bottom: -0.5rem;
    margin-top: 0.5rem;
  }
`

export const Text = styled.div`
  grid-area: message;

  span {
    display: inline-block;
    background: var(--content-background);
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
  }

  &.me {
    span {
      float: right;
      text-align: right;
      background: var(--logo-background);
      color: var(--logo-color);
    }
  }
`

export const Name = styled.div`
  grid-area: name;
  font-size: 0.5rem;
  font-style: italic;
  text-align: right;

  &.me {
    text-align: left;
  }
`

export const Avatar = styled.div`
  grid-area: avatar;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;

  img {
    background: var(--placeholder-color);
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-bottom: 0;
  }
`

export const StyledSend = styled.div`
  background: var(--list-header-background);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  position: fixed;
  width: 100%;
  bottom: 80px;

  &.login {
    background: var(--logo-background);
    color: var(--logo-color);
    cursor: pointer;
    justify-content: flex-start;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .label {
    }

    .icon {
      margin-left: 5px;
    }

    .icons {
      text-align: right;
    }
  }

  ${mq("tablet_up")} {
    position: relative;
    width: auto;
    bottom: auto;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 60px;
  width: 100%;
  margin-bottom: 0;
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.25rem 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: var(--background);
`

export const Button = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: var(--logo-background);
  color: var(--logo-color);
  cursor: pointer;

  &:disabled {
    background: var(--disabled-button-background);
    color: var(--disabled-button-color);
  }
`
