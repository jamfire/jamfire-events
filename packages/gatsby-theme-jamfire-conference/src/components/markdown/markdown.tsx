// import libs
import React from "react"
import MarkdownIt from "markdown-it"
import { MarkdownContentProps } from "./_props"

export default ({ content, className }: MarkdownContentProps) => {
  const md = new MarkdownIt()

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  )
}
