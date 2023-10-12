import { ReactNode } from 'react'

const reactNodeToString = (children?: ReactNode) => {
  if (children) return children?.toLocaleString().toLowerCase()
}

export { reactNodeToString }
