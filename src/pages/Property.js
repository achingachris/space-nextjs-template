import { Container, Row, Col, Image, Card } from 'react-bootstrap'
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href='#'>Card Link</Card.Link>
                  <Card.Link href='#'>Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href='#'>Card Link</Card.Link>
                  <Card.Link href='#'>Another Link</Card.Link>
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
