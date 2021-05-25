import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Actions' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/admin/tenants'>
                  Tenants
                </NavDropdown.Item>
                <NavDropdown.Item href='/admin/owners'>Owners</NavDropdown.Item>
                <NavDropdown.Item href='/admin/units'>Units</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/admin/accounts'>
                  Accounts
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
