// pagination props
export interface PaginationProps {
  currentPage: number
  numPages: number
  locale: string
  path: string
}

// page item props
export interface PageItemProps {
  pageNumber: number
  currentPage: number
  path: string
}
