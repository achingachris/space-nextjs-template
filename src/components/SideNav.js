import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const SideNav = () => {
  return (
    <div id='layoutSidenav_nav'>
      <nav
        className='sb-sidenav accordion sb-sidenav-dark'
        id='sidenavAccordion'
      >
        <div className='sb-sidenav-menu'>
          <div className='nav'>
            <div className='sb-sidenav-menu-heading'>Core</div>
            <LinkContainer to='/'>
              <Nav.Link classNameName='nav-link'>
                <div className='sb-nav-link-icon'>
                  <i className='fas fa-tachometer-alt'></i>
                </div>
                Dashboard
              </Nav.Link>
            </LinkContainer>
            <div className='sb-sidenav-menu-heading'>Interface</div>
            <Nav.Link
              className='nav-link collapsed'
              data-toggle='collapse'
              data-target='#collapseLayouts'
              aria-expanded='false'
              aria-controls='collapseLayouts'
            >
              <div className='sb-nav-link-icon'>
                <i className='fas fa-columns'></i>
              </div>
              Group Link 1
              <div className='sb-sidenav-collapse-arrow'>
                <i className='fas fa-angle-down'></i>
              </div>
            </Nav.Link>
            <div
              className='collapse'
              id='collapseLayouts'
              aria-labelledby='headingOne'
              data-parent='#sidenavAccordion'
            >
              <nav className='sb-sidenav-menu-nested nav'>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link'>Link 1</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link'>Link 2</Nav.Link>
                </LinkContainer>
              </nav>
            </div>
            <Nav.Link
              className='nav-link collapsed'
              data-toggle='collapse'
              data-target='#collapsePages'
              aria-expanded='false'
              aria-controls='collapsePages'
            >
              <div className='sb-nav-link-icon'>
                <i className='fas fa-book-open'></i>
              </div>
              Goup Link 2
              <div className='sb-sidenav-collapse-arrow'>
                <i className='fas fa-angle-down'></i>
              </div>
            </Nav.Link>
            <div
              className='collapse'
              id='collapsePages'
              aria-labelledby='headingTwo'
              data-parent='#sidenavAccordion'
            >
              <nav
                className='sb-sidenav-menu-nested nav accordion'
                id='sidenavAccordionPages'
              >
                <Nav.Link
                  className='nav-link collapsed'
                  data-toggle='collapse'
                  data-target='#pagesCollapseAuth'
                  aria-expanded='false'
                  aria-controls='pagesCollapseAuth'
                >
                  Sub Group 1
                  <div className='sb-sidenav-collapse-arrow'>
                    <i className='fas fa-angle-down'></i>
                  </div>
                </Nav.Link>
                <div
                  className='collapse'
                  id='pagesCollapseAuth'
                  aria-labelledby='headingOne'
                  data-parent='#sidenavAccordionPages'
                >
                  <nav className='sb-sidenav-menu-nested nav'>
                    <LinkContainer to='/'>
                      <Nav.Link className='nav-link'>Link 1</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                      <Nav.Link className='nav-link'>Link 2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                      <Nav.Link className='nav-link'>Link 3</Nav.Link>
                    </LinkContainer>
                  </nav>
                </div>
                <Nav.Link
                  className='nav-link collapsed'
                  data-toggle='collapse'
                  data-target='#pagesCollapseError'
                  aria-expanded='false'
                  aria-controls='pagesCollapseError'
                >
                  Sub Group 2
                  <div className='sb-sidenav-collapse-arrow'>
                    <i className='fas fa-angle-down'></i>
                  </div>
                </Nav.Link>
                <div
                  className='collapse'
                  id='pagesCollapseError'
                  aria-labelledby='headingOne'
                  data-parent='#sidenavAccordionPages'
                >
                  <nav className='sb-sidenav-menu-nested nav'>
                    <LinkContainer to='/'>
                      <Nav.Link className='nav-link'>Link 2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                      <Nav.Link className='nav-link'>Link 3</Nav.Link>
                    </LinkContainer>
                  </nav>
                </div>
              </nav>
            </div>
            <div className='sb-sidenav-menu-heading'>More Links</div>
            <LinkContainer to='/'>
              <Nav.Link className='nav-link'>
                <div className='sb-nav-link-icon'>
                  <i className='fas fa-chart-area'></i>
                </div>
                Charts
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link className='nav-link'>
                <div class='sb-nav-link-icon'>
                  <i class='fas fa-table'></i>
                </div>
                Tables
              </Nav.Link>
            </LinkContainer>
          </div>
        </div>
        <div class='sb-sidenav-footer'>
          <div class='small'>Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  )
}

export default SideNav
