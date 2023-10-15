'use client'

import Image from 'next/image'
import { NavItem } from '.'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { navLinks } from '@/content'
import { activeScroll, desactiveScroll } from '@/app/utils'

interface PropsNav {
  baseClassName?: string
  className?: string
}

function Nav({ baseClassName = 'nav', className }: PropsNav) {
  const navRef = useRef<HTMLElement>(null)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKeyboard)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleClick = (e: MouseEvent) => {
    const target = e.target as Node
    if (!navRef.current?.contains(target)) closeSubmenus()
  }

  const handleKeyboard = (e: KeyboardEvent) => {
    const keyDown = e.key

    if (keyDown === 'Escape') closeSubmenus()
  }

  const toggleMenu = () => {
    setMobileMenuIsOpen((isOpen) => {
      if (!isOpen) {
        closeSubmenus()
        desactiveScroll()
      } else activeScroll()

      return !isOpen
    })
  }

  const onToggleSubmenu = (i: number) => {
    if (i === submenuOpen) closeSubmenus()
    else setSubmenuOpen(i)
  }

  const closeSubmenus = () => setSubmenuOpen(null)

  return (
    <nav
      ref={navRef}
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
            closeSubmenus={closeSubmenus}
          >
            {link.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export { Nav }
