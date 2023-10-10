'use client'

import Image from 'next/image'
import { Nav } from '.'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

function Header() {
  const [isTop, setIsTop] = useState<boolean>(true)

  const handleScroll = () => {
    if (window.scrollY < 100) setIsTop(true)
    else if (window.scrollY >= 100 && isTop) setIsTop(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx('header', { 'header--scroll': !isTop })}>
      <div className="header__logo-container">
        <Image
          className="header__logo"
          src="/Logo.svg"
          height={403}
          width={1537}
          alt="Logo Fleximed"
        />
      </div>
      <Nav></Nav>
      <div className="header__empty-container"></div>
    </header>
  )
}

export { Header }