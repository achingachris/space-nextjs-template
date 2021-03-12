import { Form, Button } from 'react-bootstrap'

const AddTenantForm = () => {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='Enter First Name' />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='text' placeholder='Enter Last Name' />
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='tel' placeholder='Enter Phone Number' />
      </Form.Group>
      <Form.Group controlId='exampleForm.SelectCustom'>
        <Form.Label>Appartment</Form.Label>
        <Form.Control as='select' custom>
          <option>Waiyaki 1</option>
          <option>Waiyaki 2</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='exampleForm.SelectCustom'>
        <Form.Label>Unit</Form.Label>
        <Form.Control as='select' custom>
          <option>WAY001</option>
          <option>WAY003</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check In Now' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default AddTenantForm
