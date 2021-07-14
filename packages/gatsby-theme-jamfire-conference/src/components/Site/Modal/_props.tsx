// import libs
import { ReactElement, Dispatch, SetStateAction } from "react"
import { MarkdownRemark } from "../../../gatsby/graphqlTypes"

// click outside props
export type ClickOutsideProps = {
  children: ReactElement
  onClick: () => void
}

export type ModalProps = {
  id: string
  children?: ReactElement
  title: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  config: MarkdownRemark
}

export type ModalTitleProps = {
  title: string
  config: MarkdownRemark
}
