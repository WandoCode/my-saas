'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren, useId, useState } from 'react'

interface PropsNavItem extends PropsWithChildren {
  href: string
  subItems?: { name: string; href: string }[]
}

function NavItem({ href, subItems, children }: PropsNavItem) {
  const [isHover, setIsHover] = useState<boolean>(false)

  const toggleHover = () => {
    setIsHover((a) => !a)
  }

  return (
    <li
      className={clsx('nav__item align', { 'nav__item--active': isHover })}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Link href={href}>{children}</Link>

      {subItems && (
        <Image
          className={clsx('nav__expand-img', {
            'nav__expand-img--active': isHover,
          })}
          src="/expand.svg"
          height={16}
          width={16}
          alt=" "
        />
      )}

      {subItems && (
        <ul
          className={clsx('nav__submenu', { 'nav__submenu--active': isHover })}
        >
          {subItems.map((subItem) => (
            <li key={useId()} className="nav__subitem">
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export { NavItem }
