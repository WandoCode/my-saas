'use client'

import Image from 'next/image'
import { NavItem } from '.'
import clsx from 'clsx'
import { useState } from 'react'

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
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null)

  const toggleMenu = () => {
    setMenuIsOpen((isOpen) => {
      if (!isOpen) {
        closeAllSubmenus()
        desactiveScroll()
      } else activeScroll()
      return !isOpen
    })
  }

  const activeScroll = () => {
    document.body.classList.remove('no-scroll-mobile')
  }

  const desactiveScroll = () => {
    document.body.classList.add('no-scroll-mobile')
  }

  const onToggleSubmenu = (i: number) => {
    if (i === submenuOpen) closeAllSubmenus()
    else setSubmenuOpen(i)
  }

  const closeAllSubmenus = () => setSubmenuOpen(null)

  return (
    <nav
      className={clsx(baseClassName, className, { 'menu-open': menuIsOpen })}
      aria-label="Main menu"
    >
      <button
        className="button button--transparent only-mobile"
        onClick={toggleMenu}
        aria-label={menuIsOpen ? 'Close main menu' : 'Open main menu'}
        aria-expanded={menuIsOpen}
        aria-haspopup="menu"
      >
        <Image
          src="/burger.svg"
          width={25}
          height={25}
          alt="burger menu icon"
        />
        <span className="visually-hidden">
          {menuIsOpen ? 'Close main menu' : 'Open main menu'}
        </span>
      </button>
      <ul className={`${baseClassName}__list align`}>
        {navLinks.map((link, i) => (
          <NavItem
            key={link.name}
            href={link.href}
            subItems={link.subItems}
            baseClassName={baseClassName}
            submenuIsOpen={submenuOpen === i}
            toggleSubmenu={() => onToggleSubmenu(i)}
          >
            {link.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export { Nav }
