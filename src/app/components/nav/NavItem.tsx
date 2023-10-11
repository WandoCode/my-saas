import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren, useState } from 'react'

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
  return (
    <li
      className={clsx(`${baseClassName}__item align`, {
        'submenu-open': submenuIsOpen,
      })}
    >
      <Link href={href} className="only-desktop align">
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
        <ul className={`${baseClassName}__submenu`}>
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
