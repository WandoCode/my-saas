'use client'
import { reactNodeToString } from '@/app/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FocusEvent, PropsWithChildren, useMemo, useRef, useState } from 'react'

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
  const itemRef = useRef<HTMLLIElement>(null)
  const [focused, setFocused] = useState<boolean>(false)

  const showSubmenu = () => setFocused(true)

  const handleBlur = (e: FocusEvent) => {
    const nextTarget = e.relatedTarget

    if (!itemRef.current?.contains(nextTarget)) setFocused(false)
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
      ref={itemRef}
      className={clsx(`${baseClassName}__item align`, {
        'submenu-open': submenuIsOpen,
        'menu-focused': focused,
      })}
      onFocus={showSubmenu}
      onBlur={handleBlur}
    >
      <Link href={href} className="only-desktop align" tabIndex={0}>
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
          className={`${baseClassName}__submenu`}
          id={reactNodeToString(children) + '-menu'}
          aria-labelledby={reactNodeToString(children) + '-menu'}
        >
          {subItems.map((subItem) => (
            <li key={subItem.name} className={`${baseClassName}__subitem`}>
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export { NavItem }
