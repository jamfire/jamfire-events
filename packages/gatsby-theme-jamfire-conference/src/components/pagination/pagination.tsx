// import libs
import React from "react"
import { PaginationProps, PageItemProps } from "./pagination.d"

// import components
import { Link } from "gatsby"

// import styles
import * as styles from "./pagination.module.scss"

export default ({ currentPage, numPages, locale, path }: PaginationProps) => {
  let pages: PageItemProps[] = []
  for (let i = 0; i < numPages; i++) {
    pages.push({
      pageNumber: i + 1,
      currentPage: currentPage,
      path: `/${locale}${path}${i !== 1 ? `` : `${i + 1}/`}`,
    })
  }

  if (numPages <= 1) {
    return <></>
  }

  return (
    <div className={styles.pagination}>
      <ul>
        {pages.map(page => {
          const { pageNumber, currentPage, path } = page

          return (
            <li key={pageNumber}>
              <Link to={path} activeClassName={`active`}>
                {pageNumber}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
