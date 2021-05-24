import Header from './Header'
import SideNav from './SideNav'
import { Row, Col } from 'react-bootstrap'

const Admin = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container-fluid'>
        <Row>
          <Col md={3} lg={2}>
            <SideNav />
          </Col>
          <Col md={9} lg={10} className='ms-sm-auto px-md-4'>
            {children}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Admin
