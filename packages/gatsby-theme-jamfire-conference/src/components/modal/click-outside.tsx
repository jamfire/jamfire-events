// import libs
import React, { useRef, useEffect, cloneElement } from "react"
import { ClickOutsideProps } from "./modal.d"

// detect outside click
export default ({ children, onClick }: ClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref?.current) {
      return
    }

    const handleClickOutside = (e: MouseEvent) => {
      const element = e.target as HTMLDivElement

      if (ref.current && !ref.current.contains(element)) {
        onClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClick, ref])

  return <div id="click-outside">{cloneElement(children, { ref })}</div>
}
