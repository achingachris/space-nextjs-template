import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import Header from '../components/Header'

const Tenant = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Property Name' path='home/property/name' />
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
                  <Card.Title>Property Accounts</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Text here
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant='primary'>
                        Units: 20
                      </ListGroup.Item>
                      <ListGroup.Item variant='success'>
                        Revenue: Ksh.12.3M (PM)
                      </ListGroup.Item>
                      <ListGroup.Item variant='warning'>
                        Repairs: Ksh. 132,233
                      </ListGroup.Item>
                      <ListGroup.Item variant='info'>
                        WiFi: Ksh. 5500 per unit
                      </ListGroup.Item>
                      <ListGroup.Item variant='success'>
                        Status: Good
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Link href='#'>Generate Report</Card.Link>
                  <Card.Link href='#'>Send Message to Tenants</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Users</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Units: 20</ListGroup.Item>
                      <ListGroup.Item>Owner: John Doe</ListGroup.Item>
                      <ListGroup.Item>Locaion: NBI, 909 - Waiyaki</ListGroup.Item>
                      <ListGroup.Item>Tenants: 19</ListGroup.Item>
                      <ListGroup.Item>Status: Good</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Link href='#'>Sned Message to Owner</Card.Link>
                  <Card.Link href='#'>Update Charges</Card.Link>
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
