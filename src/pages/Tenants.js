import { LinkContainer } from 'react-router-bootstrap'
import Header from '../components/Header'
import tenants from '../tenants'

const Tenants = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Tenants' path='home/tenants' />
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
