import Header from '../components/Header'
import TopCards from '../components/TopCards'
import Table from '../components/Table'

const Tenant = () => {
    return (
        <main>
        <div className='container-fluid'>
          <Header page='Tenant-UserName' path='home/tenant/user-name' />
          <TopCards />
          <Table table_name='Tenant Data' />
        </div>
      </main>
    )
}

export default Tenant
