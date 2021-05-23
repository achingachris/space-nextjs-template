import Layout from '@/layouts/Layout'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1 className='text-center text-muted'>Our Assets</h1>
        <Row className='justify-content-center text-center align-content-center'>
          <Col md={4} className='m-3'>
            <Card>Buidings</Card>
          </Col>
          <Col md={4} className='m-3'>
            <Card>residential units</Card>
          </Col>
          <Col md={4} className='m-3'>
            <Card>self service online system</Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
