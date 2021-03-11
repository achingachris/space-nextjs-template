import Header from '../components/Header'
import TopCards from '../components/TopCards'
import Table from '../components/Table'

const Tenant = () => {
    return (
        <main>
        <div className='container-fluid'>
          <Header page='Property Name' path='home/property/name' />
          <TopCards />
          <Table table_name='Property Data' />
        </div>
      </main>
    )
}

export default Tenant
