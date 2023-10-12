import { reactNodeToString } from '@/app/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { SubItem, Submenu } from './Submenu'

interface PropsNavItem extends PropsWithChildren {
  href: string
  submenuIsOpen: boolean
  subItems?: SubItem[]
  baseClassName?: string
  toggleSubmenu: () => void
  closeSubmenus: () => void
}

function NavItem({
  href,
  subItems,
  baseClassName = 'nav',
  submenuIsOpen = false,
  toggleSubmenu,
  closeSubmenus,
  children,
}: PropsNavItem) {
  const showSubmenu = () => {
    if (!submenuIsOpen) toggleSubmenu()
  }

  const expandIcon = (
    <>
      {subItems && (
        <Image
          className={`${baseClassName}__expand-img`}
          src="/expand.svg"
          height={16}
          width={20}
          alt=" "
          aria-hidden={true}
        />
      )}
    </>
  )

  return (
    <li
      className={clsx(`${baseClassName}__item align`, {
        'submenu-open': submenuIsOpen,
      })}
    >
      <Link
        href={href}
        className={clsx('align', { 'only-desktop': subItems })}
        onFocus={showSubmenu}
      >
        {children}
        {expandIcon}
      </Link>

      {subItems && (
        <button
          className={`${baseClassName}__item-button only-mobile align`}
          onClick={toggleSubmenu}
          id={reactNodeToString(children) + '-button'}
          aria-controls={reactNodeToString(children) + '-menu'}
          aria-expanded={submenuIsOpen}
        >
          {children}
          {expandIcon}
        </button>
      )}

      {subItems && (
        <Submenu
          baseClassName={baseClassName}
          subItems={subItems}
          submenuName={reactNodeToString(children)}
          closeSubmenus={closeSubmenus}
        />
      )}
    </li>
  )
}

export { NavItem }
