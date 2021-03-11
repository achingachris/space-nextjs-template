import { LinkContainer } from 'react-router-bootstrap'
import properties from '../properties'
import tenants from '../tenants'

const Table = ({ table_name }) => {
  return (
    <div class='card mb-4'>
      <div class='card-header'>
        <i class='fas fa-table mr-1'></i>
        {table_name}
      </div>
      {/* table 2 */}
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
                    <td>{property.no_of_units - properties.no_of_tenats}</td>
                  </tr>
                </LinkContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* table 1 */}
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
                    <td>{tenant.house}: {tenant.unit}</td>
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
  )
}

export default Table
