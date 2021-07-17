import { ReactNode } from 'react';

// theme provider props
export interface LocalesProviderProps {
  children: ReactNode
  defaultLocale: string
  pageContext: {
    locale: string
  }
}