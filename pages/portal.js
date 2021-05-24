import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '@/layouts/Layout'

const Portal = () => {
  return (
    <Layout>
      <Container className='justify-content-center'>
        <h1 className='text-center text-success'>Portals</h1>
        <Row className='align-content-center justify-content-center mt-5'>
          <Col className='text-center'>
            <Image src='/admin-dash.svg' width={100} height={100} />

            <hr />
            <Link href='/admin'>
              <a className='text-success'>Admin</a>
            </Link>
          </Col>
          <Col className='text-center'>
            <Image src='/tenant.svg' width={100} height={100} />
            <hr />
            <Link href='/tenant'>
              <a className='text-success'>Tenant</a>
            </Link>
          </Col>
          <Col className='text-center'>
            <Image src='/owner.svg' width={100} height={100} />
            <hr />
            <Link href='/owner'>
              <a className='text-success'>Owner</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Portal
