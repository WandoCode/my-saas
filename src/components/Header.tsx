'use client'

import Image from 'next/image'
import { Button, Nav } from '.'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { linksTo } from '../app/content'

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
      <div className="header__side-container">
        <Link href={linksTo.facilitiesHomepage}>
          <Image
            className="header__logo"
            src="/Logo.svg"
            height={403}
            width={1537}
            alt="Logo Fleximed"
          />
        </Link>
      </div>

      <Nav />

      <div className="header__side-container only-desktop">
        <Button variant="primary" href={linksTo.freelancerHomepage}>
          Freelancers
        </Button>
      </div>
    </header>
  )
}

export { Header }
