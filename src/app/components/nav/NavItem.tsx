import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface PropsNavItem extends PropsWithChildren {
  href: string
  subItems?: { name: string; href: string }[]
}

function NavItem({ href, subItems, children }: PropsNavItem) {
  return (
    <li className="nav__item align">
      <Link href={href}>{children}</Link>

      {subItems && (
        <Image
          className="nav__expand-img--active"
          src="/expand.svg"
          height={16}
          width={20}
          alt=" "
        />
      )}

      {subItems && (
        <ul className="nav__submenu">
          {subItems.map((subItem) => (
            <li key={subItem.name} className="nav__subitem">
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export { NavItem }
