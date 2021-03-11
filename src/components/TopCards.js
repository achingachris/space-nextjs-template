import { Card } from 'react-bootstrap'

const TopCards = () => {
  return (
    <div className='row mb-3'>
      <div className='col-xl-3 col-md-6'>
        <Card border='primary'>
          <Card.Header>Properties</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='primary'>
          <Card.Header>Landlord</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='primary'>
          <Card.Header>Units</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-xl-3 col-md-6'>
        <Card border='primary'>
          <Card.Header>Accounts</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TopCards
