import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Menu = () => {
  return (
    <Nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
      <LinkContainer to='/'>
          <Navbar.Brand>Template</Navbar.Brand>
        </LinkContainer>
    </Nav>
  )
}

export default Menu
