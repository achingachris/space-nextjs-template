import { Card } from 'react-bootstrap'

const TopCards = () => {
  return (
    <div className='row mb-3'>
      <div className='col-xl-3 col-md-6'>
        <Card border='success'>
          <Card.Header>Properties</Card.Header>
          <Card.Body>
            <Card.Title>2 properties</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='primary'>
          <Card.Header>Landlord</Card.Header>
          <Card.Body>
            <Card.Title>2 Landlords</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='secondary'>
          <Card.Header>Units</Card.Header>
          <Card.Body>
            <Card.Title>100 Units</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='warning'>
          <Card.Header>Accounts</Card.Header>
          <Card.Body>
            <Card.Title>$9839</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TopCards
