import Link from 'next/link'
import { NavItem } from '.'
import { useId } from 'react'

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

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list align">
        {navLinks.map((link) => (
          <NavItem key={useId()} href={link.href} subItems={link.subItems}>
            {link.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export { Nav }