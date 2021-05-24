import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link active' aria-current='page'>
                Home
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/appartments'>
              <a className='nav-link' aria-current='page'>
                Appartments
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/services'>
              <a className='nav-link' aria-current='page'>
                Services
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/faq'>
              <a className='nav-link' aria-current='page'>
                FAQ
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/portal'>
              <a className='nav-link' aria-current='page'>
                Portal
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </Container>
  )
}

export default Header
