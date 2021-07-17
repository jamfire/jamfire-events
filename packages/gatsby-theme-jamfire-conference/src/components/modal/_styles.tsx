// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// modal wrapper component
export const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  // backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
`

// modal component
export const Modal = styled.div`
  height: auto;
  border-radius: 4px;
  background: var(--background);
  color: var(--text-color);
`

// modal title
export const ModalTitle = styled.header`
  background: var(--logo-background);
  color: var(--logo-color);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  .gatsby-image-wrapper {
    display: none;

    ${mq("tablet_up")} {
      display: block;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    color: var(--logo-color);
    height: 100%;
    margin: 0;
  }
`

// modal content
export const ModalContent = styled.div`
  padding: 2rem;
`

// styled button
export const Button = styled.button`
  border: 0;
  outline: 0;
  background: var(--button-background);
  margin-right: 5px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-color);

  &:hover {
    background: var(--button-background-hover);
    color: var(--button-text-hover);
  }
`
