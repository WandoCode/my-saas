import Link from 'next/link'

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href={'#'}>Workers</Link>{' '}
        </li>
        <li className="nav__item">
          <Link href={'#'}>Hospitals</Link>{' '}
        </li>
        <li className="nav__item">
          <Link href={'#'}>The App</Link>{' '}
        </li>
        <li className="nav__item">
          <Link href={'#'}>About us</Link>{' '}
        </li>
        <li className="nav__item">
          <Link href={'#'}>FAQ</Link>{' '}
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
