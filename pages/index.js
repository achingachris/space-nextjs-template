import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Layout from '@/layouts/Layout'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <h1 className='text-center text-muted'>Our Assets</h1>
      <Container>
        <Row className='justify-content-center text-center align-content-center'>
          <Col lg={6} md={6} className='m-3'>
            <Card>
              <a href='#'>
                <Image
                  class='card-img-top'
                  src='/rental.jpg'
                  width={700}
                  height={400}
                  alt=''
                />
              </a>
              <Card.Body>
                <Card.Title>Residential Appartments</Card.Title>
              </Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6} md={6} className='m-3'>
            <Card>
              <a href='#'>
                <Image
                  class='card-img-top'
                  src='/furnish.jpg'
                  width={700}
                  height={400}
                  alt=''
                />
              </a>
              <Card.Body>
                <Card.Title>Furnished Rooms</Card.Title>
              </Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
