import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../components/Header'
import properties from '../properties'

const Properties = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Properties' path='home/properties' />
        <Button
          variant='success'
          size='lg'
          block
          className='mb-5'
          onClick={handleShow}
        >
          Add New Property
        </Button>
        {/* modal form */}
        <Modal
          show={show}
          onHide={handleClose}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='warning' onClick={handleClose}>
              Close
            </Button>
            <Button variant='success' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
        <div class='card mb-4'>
          <div class='card-header'>
            <i class='fas fa-table mr-1'></i>
            All Properties
          </div>
          <div class='card-body'>
            <div class='table-responsive'>
              <table
                className='table table-bordered'
                id='dataTable'
                width='100%'
                cellSpacing='0'
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>No. of Units</th>
                    <th>No. of Tenants</th>
                    <th>Owner</th>
                    <th>Vacant Units</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>No. of Units</th>
                    <th>No. of Tenants</th>
                    <th>Owner</th>
                    <th>Vacant Units</th>
                  </tr>
                </tfoot>
                <tbody>
                  {properties.map((property) => (
                    <LinkContainer to='property/name'>
                      <tr key={property.id}>
                        <td>{property.name}</td>
                        <td>{property.no_of_units}</td>
                        <td>{property.no_of_tenats}</td>
                        <td>{property.owner}</td>
                        <td>
                          {property.no_of_units - properties.no_of_tenats}
                        </td>
                      </tr>
                    </LinkContainer>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Properties
