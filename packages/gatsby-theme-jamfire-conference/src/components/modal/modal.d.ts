// import libs
import { ReactElement, Dispatch, SetStateAction } from "react"
import { MarkdownRemark } from "../../gatsby/graphql-types"

// click outside props
export interface ClickOutsideProps {
  onClick: () => void
  children: ReactElement
}

export interface ModalProps {
  id: string
  children?: ReactElement
  title: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  config: MarkdownRemark | undefined
}

export interface ModalTitleProps {
  title: string
  config: MarkdownRemark | undefined
}

export interface ModalButtonProps {
  label: string
  className: string
  onClick: () => void
}
