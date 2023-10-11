import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface PropsNavItem extends PropsWithChildren {
  href: string
  subItems?: { name: string; href: string }[]
  className?: string
}

function NavItem({
  href,
  subItems,
  className = 'nav',
  children,
}: PropsNavItem) {
  return (
    <li className={`${className}__item align`}>
      <Link href={href}>{children}</Link>

      {subItems && (
        <Image
          className={`${className}__expand-img`}
          src="/expand.svg"
          height={16}
          width={20}
          alt=" "
        />
      )}

      {subItems && (
        <ul className={`${className}__submenu`}>
          {subItems.map((subItem) => (
            <li key={subItem.name} className={`${className}__subitem`}>
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export { NavItem }
