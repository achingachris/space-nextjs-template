import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import Header from '../components/Header'

const Tenant = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Tenant-UserName' path='home/tenant/user-name' />
        <Container className='mb-5'>
          <Row>
            <Col xs={6} md={4}>
              <Image src='https://via.placeholder.com/150' roundedCircle />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Tenat User Name</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Accounts and Payments
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant="danger">Monthly Rent: Ksh. 50,000 (Not Paid)</ListGroup.Item>
                      <ListGroup.Item variant="success">Water Bill: Ksh.2300 (Paid)</ListGroup.Item>
                      <ListGroup.Item variant="warning">Security: Ksh.1500</ListGroup.Item>
                      <ListGroup.Item variant="info">WiFi: Ksh. 5500</ListGroup.Item>
                      <ListGroup.Item variant="primary">Repairs: Ksh. 00</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Link href='#'>Send Accounts Report</Card.Link>
                  <Card.Link href='#'>Send Message/Email</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Tenat User Name</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Unit Status
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant="success">Total Amount Paid: Ksh. 560,234</ListGroup.Item>
                      <ListGroup.Item variant="danger">Total Arrears: Ksh. 54,000</ListGroup.Item>
                      <ListGroup.Item variant="warning">Expense Track: Ksh. 78,000</ListGroup.Item>
                      <ListGroup.Item variant="info">Account Balance: Ksh.20,093</ListGroup.Item>
                      <ListGroup.Item variant="primary">Status: Good</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Link href='#'>Add Expense</Card.Link>
                  <Card.Link href='#'>Request Payment</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  )
}

export default Tenant
