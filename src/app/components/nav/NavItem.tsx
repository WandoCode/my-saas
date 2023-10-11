import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface PropsNavItem extends PropsWithChildren {
  href: string
  subItems?: { name: string; href: string }[]
  baseClassName?: string
}

function NavItem({
  href,
  subItems,
  baseClassName = 'nav',
  children,
}: PropsNavItem) {
  return (
    <li className={`${baseClassName}__item align`}>
      <Link href={href}>{children}</Link>

      {subItems && (
        <Image
          className={`${baseClassName}__expand-img`}
          src="/expand.svg"
          height={16}
          width={20}
          alt=" "
        />
      )}

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
