'use client'

import Link from 'next/link'
import { FocusEvent, useRef } from 'react'

export interface SubItem {
  name: string
  href: string
}

interface SubmenuProps {
  baseClassName: string
  submenuName?: string
  subItems: SubItem[]
  closeSubmenus: () => void
}
function Submenu({
  baseClassName,
  submenuName,
  subItems,
  closeSubmenus,
}: SubmenuProps) {
  const submenuRef = useRef<HTMLUListElement>(null)

  const handleBlur = (e: FocusEvent) => {
    const nextTarget = e.relatedTarget
    if (!submenuRef.current?.contains(nextTarget)) closeSubmenus()
  }

  return (
    <ul
      ref={submenuRef}
      className={`${baseClassName}__submenu`}
      id={submenuName + '-menu'}
      aria-labelledby={submenuName + '-menu'}
    >
      {subItems.map((subItem) => (
        <li key={subItem.name} className={`${baseClassName}__subitem`}>
          <Link onBlur={handleBlur} href={subItem.href}>
            {subItem.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { Submenu }
