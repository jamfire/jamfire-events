// import libs
import React from "react"
import MarkdownIt from "markdown-it"
import { MarkdownContentProps } from "./markdown.d"

export default ({ content, className }: MarkdownContentProps) => {

  if (content === null || content === undefined) {
    return null
  }

  const md = new MarkdownIt()

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  )
}
