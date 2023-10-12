'use client'

import Image from 'next/image'
import { NavItem } from '.'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { navLinks } from '@/app/config'
import { activeScroll, desactiveScroll } from '@/app/utils'

interface PropsNav {
  baseClassName?: string
  className?: string
}

function Nav({ baseClassName = 'nav', className }: PropsNav) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [])

  const handleKeyboard = (e: KeyboardEvent) => {
    const keyDown = e.key

    if (keyDown === 'Escape') closeAllSubmenus()
  }

  const toggleMenu = () => {
    setMobileMenuIsOpen((isOpen) => {
      if (!isOpen) {
        closeAllSubmenus()
        desactiveScroll()
      } else activeScroll()

      return !isOpen
    })
  }

  const onToggleSubmenu = (i: number) => {
    if (i === submenuOpen) closeAllSubmenus()
    else setSubmenuOpen(i)
  }

  const closeAllSubmenus = () => setSubmenuOpen(null)

  return (
    <nav
      className={clsx(baseClassName, className, {
        'menu-open': mobileMenuIsOpen,
      })}
      aria-label="Main menu"
    >
      <button
        className="button button--transparent only-mobile"
        onClick={toggleMenu}
        aria-label={mobileMenuIsOpen ? 'Close main menu' : 'Open main menu'}
        aria-expanded={mobileMenuIsOpen}
        aria-haspopup="menu"
      >
        <Image
          src="/burger.svg"
          width={25}
          height={25}
          alt="burger menu icon"
        />

        <span className="visually-hidden">
          {mobileMenuIsOpen ? 'Close main menu' : 'Open main menu'}
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
