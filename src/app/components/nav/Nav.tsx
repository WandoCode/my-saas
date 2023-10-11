import Image from 'next/image'
import { NavItem } from '.'
import clsx from 'clsx'

interface PropsNav {
  baseClassName?: string
  className?: string
}

const navLinks = [
  {
    name: 'Workers',
    href: '#',
    subItems: [
      { name: 'Submenu 1', href: '#' },
      { name: 'Submenu 2', href: '#' },
    ],
  },
  {
    name: 'Hospitals',
    href: '#',
    subItems: [
      { name: 'Our solution', href: '#' },
      { name: 'Submenu 2', href: '#' },
    ],
  },
  {
    name: 'The App',
    href: '#',
    subItems: [
      { name: 'Download', href: '#' },
      { name: 'Discover', href: '#' },
    ],
  },
  { name: 'About us', href: '#' },
  {
    name: 'FAQ',
    href: '#',
    subItems: [
      { name: 'Workers', href: '#' },
      { name: 'Hospitals', href: '#' },
    ],
  },
]

function Nav({ baseClassName = 'nav', className }: PropsNav) {
  return (
    <nav className={clsx(baseClassName, className)}>
      <button className="button button--transparent only-mobile">
        <Image
          src="/burger.svg"
          width={25}
          height={25}
          alt="burger menu icon"
        />
      </button>
      <ul className={`${baseClassName}__list align`}>
        {navLinks.map((link) => (
          <NavItem
            key={link.name}
            href={link.href}
            subItems={link.subItems}
            baseClassName={baseClassName}
          >
            {link.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export { Nav }
