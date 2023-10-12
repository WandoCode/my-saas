'use client'

import { reactNodeToString } from '@/app/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FocusEvent, PropsWithChildren, useRef } from 'react'

interface PropsNavItem extends PropsWithChildren {
  href: string
  submenuIsOpen: boolean
  subItems?: { name: string; href: string }[]
  baseClassName?: string
  toggleSubmenu: () => void
}

function NavItem({
  href,
  subItems,
  baseClassName = 'nav',
  submenuIsOpen = false,
  toggleSubmenu,
  children,
}: PropsNavItem) {
  const submenuRef = useRef<HTMLUListElement>(null)

  const showSubmenu = () => {
    if (!submenuIsOpen) toggleSubmenu()
  }

  const handleBlur = (e: FocusEvent) => {
    const nextTarget = e.relatedTarget
    if (!submenuRef.current?.contains(nextTarget)) toggleSubmenu()
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
      <Link href={href} className="only-desktop align" onFocus={showSubmenu}>
        {children}
        {expandIcon}
      </Link>

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

      {subItems && (
        <ul
          ref={submenuRef}
          className={`${baseClassName}__submenu`}
          id={reactNodeToString(children) + '-menu'}
          aria-labelledby={reactNodeToString(children) + '-menu'}
        >
          {subItems.map((subItem) => (
            <li key={subItem.name} className={`${baseClassName}__subitem`}>
              <Link onBlur={handleBlur} href={subItem.href}>
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export { NavItem }
