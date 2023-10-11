'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react'

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

  const handleBlur = (e: React.FocusEvent) => {
    const nextTarget = e.relatedTarget

    if (!itemRef.current?.contains(nextTarget)) setFocused(false)
  }

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
      </Link>

      <button
        className={`${baseClassName}__item-button only-mobile align`}
        onClick={toggleSubmenu}
        id={children?.toLocaleString().toLowerCase() + '-button'}
        aria-controls={children?.toLocaleString().toLowerCase() + '-menu'}
        aria-expanded={submenuIsOpen}
      >
        {children}
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
      </button>

      {subItems && (
        <ul
          className={`${baseClassName}__submenu`}
          id={children?.toLocaleString().toLowerCase() + '-menu'}
          aria-labelledby={children?.toLocaleString().toLowerCase() + '-menu'}
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
