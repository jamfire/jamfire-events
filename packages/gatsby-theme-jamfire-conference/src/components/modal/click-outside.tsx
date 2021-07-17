// import libs
import React, { useRef, useEffect, cloneElement } from "react"
import { ClickOutsideProps } from "./_props"

// detect outside click
export default ({ children, onClick }: ClickOutsideProps) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref?.current) {
      return
    }

    const handleClickOutside = (e: any) => {
      if (onClick && !ref.current.contains(e.target)) {
        onClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClick])

  return <div id="click-outside">{cloneElement(children, { ref })}</div>
}
