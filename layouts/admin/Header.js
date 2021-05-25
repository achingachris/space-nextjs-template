import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Link href='/admin'>Admin</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Actions' id='basic-nav-dropdown'>
                <NavDropdown.Item>
                  <Link href='/admin/tenant'>Tenants</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href='/admin/owners'>Owners</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href='/admin/units'>Units</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href='/admin/accounts'>Accounts</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
