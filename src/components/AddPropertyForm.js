import { Form, Button } from 'react-bootstrap'

const AddPropertyForm = () => {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Property Name</Form.Label>
        <Form.Control type='text' placeholder='Enter Property Name' />
        <Form.Label>Owner</Form.Label>
        <Form.Control type='text' placeholder='Enter Property Owner' />
        <Form.Label>Location</Form.Label>
        <Form.Control type='text' placeholder='Enter Property Location' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default AddPropertyForm
