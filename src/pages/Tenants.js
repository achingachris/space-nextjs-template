import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../components/Header'
import tenants from '../tenants'

const Tenants = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <main>
      <div className='container-fluid'>
        <Header page='Tenants' path='home/tenants' />
        <Button
          variant='success'
          size='lg'
          block
          className='mb-5'
          onClick={handleShow}
        >
          Add New Tenant
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
            Tenants
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
                    <th>Phone</th>
                    <th>House/Unit</th>
                    <th>Arrears</th>
                    <th>Total Paid</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>House/Unit</th>
                    <th>Arrears</th>
                    <th>Total Paid</th>
                  </tr>
                </tfoot>
                <tbody>
                  {tenants.map((tenant) => (
                    <LinkContainer to='tenant/name'>
                      <tr key={tenant.id}>
                        <td>{tenant.name}</td>
                        <td>{tenant.phone}</td>
                        <td>
                          {tenant.house}: {tenant.unit}
                        </td>
                        <td>{tenant.accounts.arrears}</td>
                        <td>{tenant.accounts.total_paid}</td>
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

export default Tenants
