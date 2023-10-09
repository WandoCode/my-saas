import Image from 'next/image'
import { Nav } from '.'

function Header() {
  return (
    <header className="header">
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
      <div className="header__empty-container">
        {/* A utiliser pour center la nav sur la page avec un justify-content dans le header */}
      </div>
    </header>
  )
}

export { Header }
