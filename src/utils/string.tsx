import { ReactNode } from 'react'

const reactNodeToString = (children?: ReactNode) => {
  if (children) {
    const temp = children?.toLocaleString().toLowerCase()
    return temp.split(' ').join('')
  }
}

export { reactNodeToString }
