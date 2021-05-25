import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import SideNav from './SideNav'

const Admin = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container-fluid'>
        <Row>
          <Col md={3} lg={2}>
            <SideNav />
          </Col>
          <Col md={9} lg={10}>
            <main className='ms-sm-auto px-md-4'>
              <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                {children}
              </div>
            </main>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Admin
